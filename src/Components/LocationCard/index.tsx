import * as S from './style'
import Rating from '@mui/material/Rating';

export interface ILocationCardProps{
    imgUrl?: string
    localName?: string
    location?: string,
    ratingValue?: number
    handleClickViewMore: () => void
}

const LocationCard = ({localName, location, ratingValue, handleClickViewMore}: ILocationCardProps) => {
    return(
        <>
            <S.CardContainer>
                <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '50%', gap: '0.5rem'}}>
                    <S.Text fontWeight={'600'}>{localName}</S.Text>
                    <S.Text>{location}</S.Text>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Rating name="read-only" value={ratingValue} readOnly />
                        <S.ViewMoreButton variant='contained' onClick={() => handleClickViewMore()}>Ver mais</S.ViewMoreButton>
                    </div>
                </div>
                
            </S.CardContainer>
        </>
    )
}

export {LocationCard}