import React from "react"
import * as S from './styles'
import logo from '../../Assets/logoMobile.png'

interface ITopBarProps{
    userPhotoUrl?: string
}

const TopBar = ({userPhotoUrl}: ITopBarProps) => {
    return (
        <>
            <S.NavContainer>
                <S.LogoImage src={logo}/>
                {/* <S.UserAvatar src={userPhotoUrl}/> */}
            </S.NavContainer>
        </>
    )
}

export {TopBar}