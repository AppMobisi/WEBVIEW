import React from 'react'
import * as S from './styles'

interface IUserCardProps{
    name?: string
    photo?: string
}

const UserCard = ({name, photo}: IUserCardProps) => {
    return(
        <>
            <S.CardContainer>
                <S.UserName>{name}</S.UserName>
                <S.UserAvatar src={photo}/>
            </S.CardContainer>
        </>
    )
}

export {UserCard, IUserCardProps}