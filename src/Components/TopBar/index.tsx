import * as S from './styles'
import logo from '../../Assets/logoMobile.png'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <S.NavContainer>
                <S.LogoImage src={logo} onClick={() => navigate("/")}/>
            </S.NavContainer>
        </>
    )
}

export {TopBar}