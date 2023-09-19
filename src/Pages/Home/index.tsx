import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { TopBar } from '../../Components/TopBar'

const Home = () => {
    return(
        <>
            <S.PageWrapper>
                <TopBar />
            </S.PageWrapper>
        </>
    )
}

export {Home}