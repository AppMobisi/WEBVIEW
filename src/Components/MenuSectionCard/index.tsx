// import React from 'react'
import * as S from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

export interface IMenuSecionCardProps{
    image?: any
    text?: string
    urlToNavigate?: string
}

const MenuSectionCard = ({text, image, urlToNavigate}: IMenuSecionCardProps) => {
    const navigate = useNavigate()
    
    return(
        <>
            <S.Container onClick={() => navigate(urlToNavigate || '')}>
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