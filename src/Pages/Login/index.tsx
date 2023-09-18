import React from "react"
import * as S from './styles'
import chess from '../../Assets/chess.png'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    return(
        <S.PageWrapper>
            <S.FormContainer>
                <S.TextContainer>
                <img style={{width: '100px'}} src={chess}/>
                <S.Title>Torneio de Xadrez J&F</S.Title>
                <S.EmailInput  
                     label="E-mail:" 
                     variant="outlined"
                />
                <S.EnterButton variant="contained" onClick={() => navigate("/inicio")}>ENTRAR</S.EnterButton>
                </S.TextContainer>
            </S.FormContainer>
        </S.PageWrapper>
    )
}

export {LoginPage}