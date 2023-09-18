import React from 'react'
import * as S from './styles'

interface ICardProps{
    text?: string
    data?: number
}

const Card = ({text, data}: ICardProps) => {
    return(
        <>
            <S.CardContainer>
                <S.DataTitle>{data}</S.DataTitle>
                <S.TextTitle>{text}</S.TextTitle>
            </S.CardContainer>
        </>
    )
}

export {Card, ICardProps}