import React from "react"
import * as S from './styles'

interface IRankingCardProps{
    name?: string
    image?: string
}

const RankingCard = ({name, image}: IRankingCardProps) => {
    return(
        <>
            <S.CardContainer>
                <S.Username>{name}</S.Username>
                <S.UserImage/>
            </S.CardContainer>
        </>
    )
}

export {RankingCard}