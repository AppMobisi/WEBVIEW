import * as S from './styles'
import logo from '../../Assets/logoMobile.png'


const TopBar = () => {
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