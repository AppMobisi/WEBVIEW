import {useState, useEffect} from 'react'
import * as S from './style'
import { useNavigate, useParams } from 'react-router-dom'

import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'

import { LocationCard } from '../../Components/LocationCard'

import { GetUserNearLocations } from '../../Services/functions'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

interface IPhotosProps{
  photo_reference: string
}

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
    pk_id: number
    vicinity: string
    photos: IPhotosProps[]
}

const Locations = () => {
    const {coordX, coordY} = useParams()
    const [nameToSearch, setNameToSearch] = useState<string>()
    const [optionsListed, setOptionsListed] = useState<ILocationsProps[]>([])

    const [latitude, setLatitutde] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)

    const [othersLocations, setOthersLocations] = useState<ILocationsProps[]>([])
    const [originalOthersLocations, setOriginalOthersLocations] = useState<ILocationsProps[]>([])

    const navigate = useNavigate()

    const GetUserLocations = async () => {
      const response = await GetUserNearLocations(latitude, longitude, 5000)
      setOthersLocations(response?.data?.data)
      setOriginalOthersLocations(response?.data?.data)
    }

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

    useEffect(() => {
      if(coordX){
        setLongitude(Number(coordX))
      }

      if(coordY){
        setLatitutde(Number(coordY))
      }
    }, [coordX, coordY])

    useEffect(() => {
      if(longitude && latitude){
        GetUserLocations()
      }
    }, [latitude, longitude])

    // useEffect(() => {
    //   if ("geolocation" in navigator) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       const { latitude, longitude } = position.coords;
    //       setLatitutde(latitude)
    //       setLongitude(longitude)
    //       console.log("Latitude:", latitude);
    //       console.log("Longitude:", longitude);
    //     }, (error) => {
    //       console.error("Erro ao obter a localização:", error);
    //     });
    //   } else {
    //     console.error("Geolocalização não é suportada neste navegador.");
    //   }
    // }, []);

    return(
        <>
            <PageWrapper>
                <TopBar />
                <S.TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Dê uma olhada nos lugares acessíveis que preparamos!</S.TypographyComponent>
                <S.SearchContainer>
                    <S.SearchInput placeholder='Pesquisar...' onChange={(e) => setNameToSearch(e.target.value)}/>
                    <S.IconSearch />
                </S.SearchContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.LocationContainer>
                      {optionsListed?.length > 0 ? optionsListed.map((imageUrl) => {
                        return (
                              <LocationCard 
                                imgUrl={imageUrl.url} 
                                localName={imageUrl.name} 
                                location={imageUrl.vicinity} 
                                ratingValue={imageUrl.rating} 
                                key={imageUrl.name}
                                handleClickViewMore={() => navigate(`/estabelecimentos/${imageUrl.name}/${imageUrl.vicinity}/${imageUrl.rating}/${imageUrl?.photos[0]?.photo_reference}`)}
                              />
                        );
                        }): <HourglassTopIcon sx={{ fontSize: '6rem', margin: '6rem 0 0 0', color: '#001489' }}/>}
                      {}
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {Locations}