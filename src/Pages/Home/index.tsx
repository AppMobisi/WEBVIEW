import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { TopBar } from '../../Components/TopBar'
import { MenuSectionCard } from '../../Components/MenuSectionCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classificationIcon from '../../Assets/classificationIcon.png'
import storeIcon from '../../Assets/storeIcon.png'

const Home = () => {
    const [userName, setUserName] = useState("Henrique")

    const responsive = {
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1.01,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        //First image url
        {
          url:
            "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        },
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
        },
        //Second image url
        {
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
        },
        //Third image url
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
        },
      
        //Fourth image url
      
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
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
                          <div className="slider" key={index}>
                          <img src={imageUrl.url} alt="movie" style={{ width: '300px', height: '300px' }}/>
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
                      {sliderImageUrl.map((imageUrl, index) => {
                      return (
                          <div className="slider" key={index}>
                          <img src={imageUrl.url} alt="movie" style={{ width: '300px', height: '300px' }}/>
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