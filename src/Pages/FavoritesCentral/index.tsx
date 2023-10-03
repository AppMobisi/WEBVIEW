import {useState, useEffect} from 'react'
import * as S from './style'
import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'

import {sliderImageUrl} from '../Home/mock'
import { LocationCard } from '../../Components/LocationCard'

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
}

const FavoritesCentral = () => {
    const [favoriteLocations, setFavoriteLocations] = useState<ILocationsProps[]>()

    useEffect(() => {
        if(sliderImageUrl?.length){
            setFavoriteLocations(sliderImageUrl)
        }
    }, [sliderImageUrl])

    return(
        <>
            <PageWrapper>
                <TopBar />
                <S.TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Bem-vindo à sua central de favoritos! Veja os lugares e anúncios que você deu destaque!</S.TypographyComponent>
                <S.SearchContainer>
                    <S.SearchInput placeholder='Pesquisar em meus favoritos...'/>
                    <S.IconSearch />
                </S.SearchContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.TypographyComponent fontPeso={'600'} tamanho={'1.2rem'}>Meus Lugares Favoritos:</S.TypographyComponent>
                    <S.LocationContainer>
                        {favoriteLocations?.length && <>
                            {favoriteLocations.map((loc) => {
                                return(<LocationCard imgUrl={loc.url} localName={loc.name} location={loc.endereco} ratingValue={loc.rating}/>)
                            })}
                        </>}
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {FavoritesCentral}