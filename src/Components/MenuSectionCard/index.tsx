// import React from 'react'
import * as S from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface IMenuSecionCardProps{
    image?: any
    text?: string
}

const MenuSectionCard = ({text, image}: IMenuSecionCardProps) => {
    return(
        <>
            <S.Container>
                <S.IconImage src={image}/>
                <S.TypographyComponent>{text}</S.TypographyComponent>
                <S.CardButton variant='contained'>
                    <ArrowForwardIosIcon />
                </S.CardButton>
            </S.Container>
        </>
    )
}

export {MenuSectionCard}