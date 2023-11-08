import * as S from './style'
import { useEffect, useState } from 'react'
import { DeficiencyTypeModal } from '../../Components/DeficiencyTypeModal';
import { useParams } from 'react-router-dom'

import Fab from '@mui/material/Fab';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import Rating from '@mui/material/Rating';

import { PageWrapper } from '../Home/styles'
import { TypographyComponent } from '../FavoritesCentral/style'

import { GetLocationImage } from '../../Services/functions';

const imgUrlMock = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"

const LocationDetails = () => {
    const {name, vicinity, rating, photos} = useParams()

    const [locationName, setLocationName] = useState<string>()
    const [locationAddress, setLocationAddress] = useState<string>()
    const [locationRating, setLocationRating] = useState<number>()
    const [locationImageReference, setImageReference] = useState<string>("")
    const [locationPhoneNumber, setLocationPhoneNumber] = useState<string>()
    const [locationWebsite, setLocationWebsite] = useState<string>()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [permissionShowRating, setPermissionShowRating] = useState(false)

    const [isDeficiencyModalOpen, setIsDeficiencyModalOpen] = useState<boolean>(false)
    const [deficiencyType, setDeficiencyType] = useState<string>("")
    const [deficiencyDescription, setDeficiencyDescription] = useState<string>("")

    const GetImage = async () => {
        const response = await GetLocationImage(locationImageReference)
        console.log(response)
    }

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

    return(
        <>
            <S.LocationImg backUrl={imgUrlMock}/>
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
                    <S.LocationAccessContainer>
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
                    </S.LocationAccessContainer>
                </S.Section1Grid>
                <S.ButtonsContainer>
                    <S.LocationButton variant='outlined' onClick={() => setIsFavorite(!isFavorite)}>
                        <FavoriteIcon />
                        {isFavorite ? 'Remover' : 'Favoritar'}
                    </S.LocationButton>
                    {/* <S.LocationButton variant='contained' onClick={() => navigate(`/classificar/${locationId}`)}>
                        <GradeIcon />Avaliar
                    </S.LocationButton> */}
                </S.ButtonsContainer>
                <S.LocAddressInfo>
                    <TypographyComponent fontPeso={'500'} tamanho={'1rem'}>Informações do Local:
                    </TypographyComponent>
                    <S.AddressInfoContainer>
                        <LocalPhoneIcon color='primary'/>
                        <TypographyComponent fontPeso={'500'} tamanho={'1rem'}>{locationPhoneNumber}</TypographyComponent>
                    </S.AddressInfoContainer>
                    <S.AddressInfoContainer>
                        <LanguageIcon color='primary'/>
                        <TypographyComponent fontPeso={'500'} tamanho={'1rem'}>{locationWebsite}</TypographyComponent>
                    </S.AddressInfoContainer>
                </S.LocAddressInfo>
            </PageWrapper>
            <DeficiencyTypeModal 
                isOpen={isDeficiencyModalOpen} 
                handleClose={() => setIsDeficiencyModalOpen(false)} 
                deficiencyType={`Deficiência ${deficiencyType}`} 
                description={deficiencyDescription}
            />
        </>
    )
}

export {LocationDetails}