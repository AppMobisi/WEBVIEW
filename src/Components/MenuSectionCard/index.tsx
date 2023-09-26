import React from 'react'
import * as S from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IMenuSecionCardProps{
    image?: React.ReactNode
    text?: string
}

const MenuSectionCard = ({image, text}: IMenuSecionCardProps) => {
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

export {MenuSectionCard, IMenuSecionCardProps}