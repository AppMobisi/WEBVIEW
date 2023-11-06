import { useEffect, useState } from 'react'
import * as S from './styles'
import { TopBar } from '../../Components/TopBar'
import { MenuSectionCard } from '../../Components/MenuSectionCard'
import { LocationCard } from '../../Components/LocationCard'
import { ProductCard } from '../../Components/ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom'
import { GetProducts } from "../../Services/functions"

import classificationIcon from '../../Assets/classificationIcon.png'
import storeIcon from '../../Assets/storeIcon.png'

import {sliderImageUrl } from './mock'

interface IProductsListProps {
  cFoto: string
  cTitulo: string
  nPreco: number
  id: string
  iAnuncianteId: number
  cDescricao: string
}

const Home = () => {
    const [userName, setUserName] = useState('')
    const userId = 1
    const navigate = useNavigate()

    const [productsList, setProductsList] = useState<IProductsListProps[]>([])

    const responsive = {
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1.015 ,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const getAndroidEmail = () => {
        let nome = "";
        if (typeof (window as any).Android !== 'undefined') {
          nome = (window as any).Android.returnEmail();
          setUserName(nome)
        }
        alert(nome);
      };

    const GetImage = async () => {
      const image = await GetProducts(Number(userId))
      setProductsList(image?.data)
    }

    useEffect(() => {
        GetImage()
        getAndroidEmail()
    }, [])

    return(
        <>
            <S.PageWrapper>
                <TopBar />
                <S.TitleAndSubtitleContainer>
                    <S.TypographyComponent fontWeight={'600'}>Olá, {userName}</S.TypographyComponent>
                    <S.Subtitle fontWeight={'300'}>Bem-vindo(a) ao Mobisi!</S.Subtitle> 
                </S.TitleAndSubtitleContainer>
                <MenuSectionCard image={classificationIcon} text='Favoritos' urlToNavigate='central-favoritos'/>
                <MenuSectionCard image={storeIcon} text='Loja' urlToNavigate='produtos'/>
                <S.CarouselContainer>
                  <S.Subtitle fontWeight={'600'} fontSize='1.5rem'>Lugares para você:</S.Subtitle>
                  <Carousel
                      responsive={responsive}
                      autoPlay={true}
                      swipeable={true}
                      draggable={true}
                      showDots={false}
                      arrows={false}
                      infinite={true}
                      partialVisible={false}
                      dotListClass="custom-dot-list-style"
                  >
                      {sliderImageUrl.map((imageUrl, index) => {
                      return (
                          <div className="slider" key={index} style={{ padding: '0.5rem 0.8rem'}}>
                            <LocationCard 
                              imgUrl={imageUrl.url} 
                              localName={imageUrl.name} 
                              location={imageUrl.endereco} 
                              ratingValue={imageUrl.rating} 
                              handleClickViewMore={() => navigate(`/estabelecimentos/${imageUrl.pk_id}`)}
                            />
                          </div>
                      );
                      })}
                  </Carousel>
                </S.CarouselContainer>
                {productsList?.length > 0 && 
                  <S.CarouselContainer>
                    <S.Subtitle fontWeight={'600'} fontSize='1.5rem'>Produtos:</S.Subtitle>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        arrows={false}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {productsList.map((product, index) => {
                        return (
                            <div className="slider" key={index} style={{ padding: '0.5rem 0.8rem'}}>
                              <ProductCard sectionName={product?.cTitulo} productImg={product.cFoto} productPrice={product.nPreco} handleClick={() => navigate(`/produtos/${product?.cTitulo}/${product?.nPreco}/${encodeURIComponent(product?.cFoto)}/${product?.iAnuncianteId}/${product?.cDescricao}/${product?.id}`)}/>
                            </div>
                        );
                        })}
                    </Carousel>
                  </S.CarouselContainer>}
            </S.PageWrapper>
        </>
    )
}

export {Home}