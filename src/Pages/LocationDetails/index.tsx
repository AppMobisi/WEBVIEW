import * as S from './style'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Fab from '@mui/material/Fab';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import Rating from '@mui/material/Rating';

import { PageWrapper } from '../Home/styles'
import { TypographyComponent } from '../FavoritesCentral/style'

const imgUrlMock = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"

const LocationDetails = () => {
    const params = useParams()
    const locationId = params?.id

    const [locationName, setLocationName] = useState<string>('Pastel do Baixinho')
    const [locationAddress, setLocationAddress] = useState<string>('Estrada Ecoturística do Suru, Suru, Santana de Parnaíba')
    const [locationRating, setLocationRating] = useState<number>(5)
    const [locationPhoneNumber, setLocationPhoneNumber] = useState<string>('11 96515-6784')
    const [locationWebsite, setLocationWebsite] = useState<string>('www.pasteldobaixinho.com.br')
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    return(
        <>
            <S.LocationImg backUrl={imgUrlMock}/>
            <PageWrapper>
                <S.Section1Grid>
                    <S.LocationInfoContainer>
                        <TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>{locationName}</TypographyComponent>
                        <TypographyComponent fontPeso={'400'} tamanho={'1rem'}>{locationAddress}</TypographyComponent>
                        <div>
                            <TypographyComponent fontPeso={'600'} tamanho={'1rem'}>Avaliação:</TypographyComponent>
                            <Rating name="read-only" value={locationRating} readOnly sx={{ fontSize: '2rem' }}/>
                        </div>
                    </S.LocationInfoContainer>
                    <S.LocationAccessContainer>
                        <Fab color="primary" aria-label="acess">
                            <AccessibleIcon sx={{ fontSize: '2rem' }}/>
                        </Fab>
                        <Fab color="primary" aria-label="acess">
                            <HearingDisabledIcon sx={{ fontSize: '2rem' }}/>
                        </Fab>
                        <Fab color="primary" aria-label="acess">
                            <VisibilityOffIcon sx={{ fontSize: '2rem' }}/>
                        </Fab>
                    </S.LocationAccessContainer>
                </S.Section1Grid>
                <S.ButtonsContainer>
                    <S.LocationButton variant='outlined' onClick={() => setIsFavorite(!isFavorite)}>
                        <FavoriteIcon />
                        {isFavorite ? 'Remover' : 'Favoritar'}
                    </S.LocationButton>
                    <S.LocationButton variant='contained'>
                        <GradeIcon />Avaliar
                    </S.LocationButton>
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
        </>
    )
}

export {LocationDetails}