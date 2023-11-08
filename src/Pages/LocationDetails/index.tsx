import * as S from './style'
import { useEffect, useState } from 'react'
// import { DeficiencyTypeModal } from '../../Components/DeficiencyTypeModal';
import { useParams, useNavigate } from 'react-router-dom'

// import Fab from '@mui/material/Fab';
// import AccessibleIcon from '@mui/icons-material/Accessible';
// import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

import { PageWrapper } from '../Home/styles'
import { TypographyComponent } from '../FavoritesCentral/style'

import { GetLocationImage, FavoriteLocation, GetFavoriteLocations, DeleteFavoriteLocation } from '../../Services/functions';

interface ILocationsProps{
    cFoto: string
    cNome: string
    cEndereco: string
    nNota: number
}

const LocationDetails = () => {
    const [userIdValue, setUserIdValue] = useState<any>()
    const {name, vicinity, rating, photos, id} = useParams()

    const navigate = useNavigate()

    const [locationImage, setLocationImage] = useState<string>("")
    const [locationName, setLocationName] = useState<string>("")
    const [locationAddress, setLocationAddress] = useState<string>("")
    const [locationRating, setLocationRating] = useState<number>(0)
    const [locationImageReference, setImageReference] = useState<string>("")
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [permissionShowRating, setPermissionShowRating] = useState(false)
    const [favoriteLocations, setFavoriteLocations] = useState<ILocationsProps[]>([])

    // const [isDeficiencyModalOpen, setIsDeficiencyModalOpen] = useState<boolean>(false)
    // const [deficiencyType, setDeficiencyType] = useState<string>("")
    // const [deficiencyDescription, setDeficiencyDescription] = useState<string>("")

    const GetImage = async () => {
        const response = await GetLocationImage(locationImageReference)
        setLocationImage(response?.data?.data)
    }

    const GetUserFavoriteLocations = async () => {
        const response = await GetFavoriteLocations(Number(userIdValue))
        setFavoriteLocations(response?.data?.data)
    }

    const DeleteLocation = async () => {
        if(id){
            const response = await DeleteFavoriteLocation(id)
            setFavoriteLocations(response?.data?.data)
            navigate('/central-favoritos')
        }
    }

    const FavoriteLocationFunction = async () => {
        const response = await FavoriteLocation(userIdValue, locationName, locationRating, locationImage, locationAddress)
        if(response?.statusCode == 200){
            setIsFavorite(true)
        }
    }

    useEffect(() => {
        if(userIdValue){
            GetUserFavoriteLocations()
        }
    }, [userIdValue])

    useEffect(() => {
        if(sessionStorage.getItem('userId')){
          setUserIdValue(Number(sessionStorage.getItem('userId')))
        }
      }, [sessionStorage.getItem('userId')])

    useEffect(() => {
        if(name?.length){
            setLocationName(name)
        }

        if(vicinity?.length){
            setLocationAddress(vicinity)
        }

        if(rating){
            setLocationRating(Number(rating))
        }

        if(photos?.length){
            setImageReference(photos)
        }

        setTimeout(() => setPermissionShowRating(true), 400)
    }, [name, vicinity, rating, photos])

    useEffect(() => {
        if(locationImageReference?.length > 0){
            GetImage()
        }
    }, [locationImageReference])

    useEffect(() => {
        if(favoriteLocations?.length > 0){
            favoriteLocations?.map((loc) => {
                if(loc?.cNome == locationName){
                    setIsFavorite(true)
                }
            })
        }
    }, [favoriteLocations])

    return(
        <>
            <S.LocationImg backUrl={locationImage}/>
            <PageWrapper>
                <S.ReturnIcon onClick={() => window.history.back()}/>
                <S.Section1Grid>
                    <S.LocationInfoContainer>
                        <TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>{locationName}</TypographyComponent>
                        <TypographyComponent fontPeso={'400'} tamanho={'1rem'}>{locationAddress}</TypographyComponent>
                        <div>
                            {permissionShowRating &&
                                <>
                                    <TypographyComponent 
                                        fontPeso={'600'} 
                                        tamanho={'1rem'}
                                    >
                                        Avaliação:
                                    </TypographyComponent>
                                    <Rating name="read-only" precision={0.1} value={locationRating} readOnly sx={{ fontSize: '2rem' }}
                                    />
                                </>
                            }
                        </div>
                    </S.LocationInfoContainer>
                    {/* <S.LocationAccessContainer>
                        <Fab 
                            color="primary" 
                            aria-label="acess" 
                            onClick={() => {
                                setIsDeficiencyModalOpen(true)
                                setDeficiencyType("Visual")    
                                setDeficiencyDescription("Esse estabelecimento possui acessibilidade para deficientes visuais. Pode ter: cardápio em braile, identificação das vias de circulação e suporte com pessoas treinadas")
                            }}
                        >
                            <VisibilityOffIcon sx={{ fontSize: '2rem' }}/>   
                        </Fab>
                        <Fab 
                            color="primary" 
                            aria-label="acess"
                            onClick={() => {
                                setIsDeficiencyModalOpen(true)
                                setDeficiencyType("Auditiva")    
                                setDeficiencyDescription("Esse estabelecimento possui acessibilidade para deficientes auditivos. Pode ter: atendentes treinados para interpretar libras e menor emissão de ruídos externos.")
                            }}
                        >
                            <HearingDisabledIcon sx={{ fontSize: '2rem' }}/>
                        </Fab>
                        <Fab 
                            color="primary" 
                            aria-label="acess"
                            onClick={() => {
                                setIsDeficiencyModalOpen(true)
                                setDeficiencyType("Física")    
                                setDeficiencyDescription("Esse estabelecimento possui acessibilidade para pessoas com deficiência de mobilidade. Rampas, elevadores, banheiros adaptados e calçadas planas são esperados no local.")
                            }}
                        >
                            <AccessibleIcon sx={{ fontSize: '2rem' }}/>
                        </Fab>
                    </S.LocationAccessContainer> */}
                </S.Section1Grid>
                <S.ButtonsContainer>
                    <S.LocationButton variant='outlined' onClick={() => {
                        if(!isFavorite){
                            FavoriteLocationFunction()
                        }

                        if(isFavorite){
                            DeleteLocation()
                        }
                    }}>
                        <FavoriteIcon />
                        {isFavorite ? 'Remover' : 'Favoritar'}
                    </S.LocationButton>
                    {/* <S.LocationButton variant='contained' onClick={() => navigate(`/classificar/${locationId}`)}>
                        <GradeIcon />Avaliar
                    </S.LocationButton> */}
                </S.ButtonsContainer>
            </PageWrapper>
            {/* <DeficiencyTypeModal 
                isOpen={isDeficiencyModalOpen} 
                handleClose={() => setIsDeficiencyModalOpen(false)} 
                deficiencyType={`Deficiência ${deficiencyType}`} 
                description={deficiencyDescription}
            /> */}
        </>
    )
}

export {LocationDetails}