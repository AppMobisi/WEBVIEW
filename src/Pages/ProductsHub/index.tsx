import {useState, useEffect} from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'

import { LocationCard } from '../../Components/LocationCard'
import { locations } from './mock'

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
    pk_id: number
}

const ProductsHub = () => {
    const [nameToSearch, setNameToSearch] = useState<string>()
    const [optionsListed, setOptionsListed] = useState<ILocationsProps[]>([])

    const [othersLocations, setOthersLocations] = useState<ILocationsProps[]>([])
    const [originalOthersLocations, setOriginalOthersLocations] = useState<ILocationsProps[]>([])

    const navigate = useNavigate()

    useEffect(() => {
      if(locations?.length > 0){
        setOthersLocations(locations)
        setOriginalOthersLocations(locations)
      }
    }, [locations])

    useEffect(() => {
      if(othersLocations?.length > 0){
        setOptionsListed(othersLocations)
      }
    }, [othersLocations])

    useEffect(() => {
        if(nameToSearch?.length){
            let othersLocationsList: ILocationsProps[] = []

            othersLocations?.map((locat) => {
              if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
                  othersLocationsList.push(locat)
              }
            })

            setOthersLocations(othersLocationsList)
        }

        if(nameToSearch == ''){
            setOthersLocations(originalOthersLocations)
        }
    }, [nameToSearch])

    return(
        <>
            <PageWrapper>
                <TopBar />
                <S.TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Bem-Vindo ao Hub de anúncios! Explore as possibilidades!</S.TypographyComponent>
                <S.SearchContainer>
                    <S.SearchInput placeholder='Pesquisar...' onChange={(e) => setNameToSearch(e.target.value)}/>
                    <S.IconSearch />
                </S.SearchContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.Subtitle fontWeight={'600'} fontSize='1.5rem'>Estabelecimentos:</S.Subtitle>
                    <S.LocationContainer>
                      {optionsListed.map((imageUrl) => {
                        return (
                              <LocationCard 
                                imgUrl={imageUrl.url} 
                                localName={imageUrl.name} 
                                location={imageUrl.endereco} 
                                ratingValue={imageUrl.rating} 
                                key={imageUrl.pk_id}
                                handleClickViewMore={() => navigate(`/estabelecimentos/${imageUrl.pk_id}`)}
                              />
                        );
                        })}
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {ProductsHub}