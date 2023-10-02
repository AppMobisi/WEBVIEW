import * as S from './style'
import Rating from '@mui/material/Rating';

export interface ILocationCardProps{
    imgUrl?: string
    localName?: string
    location?: string,
    ratingValue?: number
}

const LocationCard = ({imgUrl, localName, location, ratingValue}: ILocationCardProps) => {
    return(
        <>
            <S.CardContainer>
                <S.LocalImage backUrl={imgUrl}></S.LocalImage>
                <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '50%'}}>
                    <S.Text fontWeight={'600'}>{localName}</S.Text>
                    <S.Text>{location}</S.Text>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Rating name="read-only" value={ratingValue} readOnly />
                        <S.ViewMoreButton variant='contained'>Ver mais</S.ViewMoreButton>
                    </div>
                </div>
                
            </S.CardContainer>
        </>
    )
}

export {LocationCard}