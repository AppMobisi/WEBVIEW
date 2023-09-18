import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { NavBar } from '../../Components/NavBar'
import { ChallengeModal } from '../../Components/ChallengeModal'
import { useNavigate } from 'react-router-dom'
import { RankingCard } from '../../Components/RankingCard'

const users = [
    {name: "Gustavo Okamoto Ventura"},
    {name: "Kauê Mendonça"},
    {name: "Rafaella Guimarães Venturinni"},
    {name: "Manuella Bernardinelli"},
]

import { dashboardData } from './mock'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>("Gabriel Felix Pinho")
    const [userPosition, setUserPosition] = useState<number>(4)

    const navigate = useNavigate()

    return(
        <>
            <S.PageWrapper>
                <S.ContentContainer>
                    <S.TitleContainer>
                        <S.Title>Olá, {userName}!</S.Title>
                        <S.SubTitle>Sua posição na semana: {userPosition}º</S.SubTitle>
                    </S.TitleContainer>
                    <S.DesafioContainer>
                        <S.SubTitle>Jogo da semana:</S.SubTitle>
                        <S.CardContainer gapValue='3rem'>
                            <S.CardContainer gapValue='1.5rem'>
                                <S.UserNameCard>
                                    <S.UserName>{userName}</S.UserName>
                                </S.UserNameCard>
                                <S.AttackIcon sx={{fontSize: '3rem'}}/>
                            </S.CardContainer>
                            <h2>X</h2>
                            <S.CardContainer gapValue='1.5rem'>
                                <S.DefenseIcon sx={{fontSize: '3rem'}}/>
                                <S.UserNameCard>
                                    <S.UserName>{userName}</S.UserName>
                                </S.UserNameCard>
                            </S.CardContainer>
                        </S.CardContainer>
                        <S.EnterButton variant='contained' onClick={() => setIsModalOpen(!isModalOpen)}>DESAFIAR</S.EnterButton>
                    </S.DesafioContainer>
                </S.ContentContainer>
                <S.ContentContainer>
                    <S.cardsContainer>
                    {users.map((card, index) => {
                return(
                    <RankingCard name={card?.name} key={index}/>
                )
            })}
                    </S.cardsContainer>
                
                </S.ContentContainer>
                <ChallengeModal open={isModalOpen} handleClose={() => setIsModalOpen(false)}/>
            </S.PageWrapper>
        </>
    )
}

export {Home}