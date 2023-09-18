import React from 'react'
import * as S from './styles'
import { PageWrapper } from '../Home/styles'
import { RankingCard } from '../../Components/RankingCard'

const users = [
    {name: "Gustavo Okamoto Ventura"},
    {name: "Kauê Mendonça"},
    {name: "Rafaella Guimarães Venturinni"},
    {name: "Manuella Bernardinelli"},
]

const Lideres = () => {
    return(
        <>
          <PageWrapper>
            <S.CardsBox>    
            {users.map((card, index) => {
                return(
                    <RankingCard name={card?.name} key={index}/>
                )
            })}
            </S.CardsBox>
            
          </PageWrapper>
        </>
    )
}

export {Lideres}