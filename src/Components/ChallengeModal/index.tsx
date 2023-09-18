import React from "react"
import * as S from './styles'
import { UserCard } from "../UserCard"
import { AttackIcon, DefenseIcon } from "../../Pages/Home/styles"

interface IChallengeModalProps{
    open?: boolean
    handleClose?: () => void
}

const ChallengeModal = ({open, handleClose}: IChallengeModalProps) => {
    return(
        <>
            <S.ModalContainer open={open} onClose={handleClose}>
                <S.ContentContainer>
                    <S.CloseModalIcon onClick={handleClose}/>
                    <S.ModalTitle>Desafio</S.ModalTitle>
                    <S.InternContentContainer>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                            <S.IconContainer>
                                <UserCard name={"Felix"}/>
                                <AttackIcon sx={{fontSize: '3rem'}}/>
                            </S.IconContainer>   
                            <S.IconContainer>
                                <DefenseIcon sx={{ fontSize: '3rem' }}/>
                                <UserCard name={"Okamoto"}/>
                            </S.IconContainer> 
                        </div>
                        <S.SubTitle>Você foi desafiado por {"Felix"} para uma partida dia {"25/09/2023"}</S.SubTitle>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <S.ChallengeButton variant="outlined">Reagendar</S.ChallengeButton>
                            <S.ChallengeButton variant="contained">Aceitar</S.ChallengeButton>
                        </div>
                    </S.InternContentContainer>
                </S.ContentContainer>
            </S.ModalContainer>
        </>
    )
}

export {ChallengeModal, IChallengeModalProps}