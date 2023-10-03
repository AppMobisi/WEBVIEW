import * as S from './styles'
import { TopBar } from '../../Components/TopBar'
import { MenuSectionCard } from '../../Components/MenuSectionCard'
import { LocationCard } from '../../Components/LocationCard'
import { ProductCard } from '../../Components/ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classificationIcon from '../../Assets/classificationIcon.png'
import storeIcon from '../../Assets/storeIcon.png'

import { products } from './mock'

const Home = () => {
    const userName = "Henrique"

    const responsive = {
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1.015 ,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        {
          url:
            "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
          name: "Chico's",
          endereco: "Curva da Morte, Itaquera, São Paulo",
          rating: 3.5
        },
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
            name: "Delícias do Thiago",
            endereco: "Tatuapé, São Paulo",
            rating: 2
        },
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
            name: "Pastel do Baixinho",
            endereco: "Estrada do Suru, Suru, Santana de Parnaíba",
            rating: 5
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
            name: "Bar do Chico",
            endereco: "Santana de Parnaíba",
            rating: 1.5
        }
      ];

    return(
        <>
            <S.PageWrapper>
                <TopBar />
                <S.TitleAndSubtitleContainer>
                    <S.TypographyComponent fontWeight={'600'}>Olá, {userName}</S.TypographyComponent>
                    <S.Subtitle fontWeight={'300'}>Bem-vindo(a) ao Mobisi!</S.Subtitle> 
                </S.TitleAndSubtitleContainer>
                <MenuSectionCard image={classificationIcon} text='Avaliações'/>
                <MenuSectionCard image={storeIcon} text='Loja'/>
                {/* <MenuSectionCard text='Avaliações'/>
                <MenuSectionCard text='Loja'/> */}
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
                            />
                          </div>
                      );
                      })}
                  </Carousel>
                </S.CarouselContainer>
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
                      {products.map((product, index) => {
                      return (
                          <div className="slider" key={index} style={{ padding: '0.5rem 0.8rem'}}>
                            <ProductCard sectionName={product.section} productImg={product.img_url} productPrice={product.price}/>
                          </div>
                      );
                      })}
                  </Carousel>
                </S.CarouselContainer>
            </S.PageWrapper>
        </>
    )
}

export {Home}