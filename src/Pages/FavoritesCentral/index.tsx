import {useState, useEffect} from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'

import { sliderImageUrl } from '../Home/mock'
import { LocationCard } from '../../Components/LocationCard'
import { ProductCard } from '../../Components/ProductCard';

import { GetFavoriteProducts } from '../../Services/functions';

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
    pk_id: number
}

interface IProductsProps{
    cFoto: string
    cTitulo: string
    nPreco: number
    id: string
    iAnuncianteId: number
    cDescricao: string
}

const FavoritesCentral = () => {
    const [userIdValue, setUserIdValue] = useState<any>()
    const [nameToSearch, setNameToSearch] = useState<string>()

    const [originalFavoriteLocations, setOriginalFavoriteLocations] = useState<ILocationsProps[]>()
    const [originalFavoriteProducts, setOriginalFavoriteProducts] = useState<IProductsProps[]>()
    const [favoriteLocations, setFavoriteLocations] = useState<ILocationsProps[]>()
    const [favoriteProducts, setFavoriteProducts] = useState<IProductsProps[]>()
    const [optionSelected, setOptionsSelected] = useState(2)

    const navigate = useNavigate()

    const GetUserFavoriteProducts = async () => {
        const response = await GetFavoriteProducts(Number(userIdValue))
        setFavoriteProducts(response?.data?.data)
        setOriginalFavoriteProducts(response?.data?.data)
    }

    useEffect(() => {
        if(sliderImageUrl?.length){
            setFavoriteLocations(sliderImageUrl)
            setOriginalFavoriteLocations(sliderImageUrl)
        }
    }, [sliderImageUrl])

    useEffect(() => {
        if(nameToSearch?.length && optionSelected == 1){
            let favoriteLocationsList: ILocationsProps[] = []

            favoriteLocations?.map((locat) => {
                if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
                    favoriteLocationsList.push(locat)
                }
            })

            setFavoriteLocations(favoriteLocationsList)
        }

        if(nameToSearch?.length && optionSelected == 2){
            let favoriteProductsList: IProductsProps[] = []

            favoriteProducts?.map((locat) => {
                if(locat.cTitulo.toLowerCase().includes(nameToSearch.toLowerCase())){
                    favoriteProductsList.push(locat)
                }
            })

            setFavoriteProducts(favoriteProductsList)
        }

        if(nameToSearch == ''){
            setFavoriteLocations(originalFavoriteLocations)
            setFavoriteProducts(originalFavoriteProducts)
        }
    }, [nameToSearch, optionSelected])

    useEffect(() => {
        if(sessionStorage.getItem('userId')){
          setUserIdValue(Number(sessionStorage.getItem('userId')))
        }
      }, [sessionStorage.getItem('userId')])

    useEffect(() => {
        if(userIdValue){
            GetUserFavoriteProducts()
        }
    }, [userIdValue])

    return(
        <>
            <PageWrapper>
                <TopBar />
                <S.TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Bem-vindo à sua central de favoritos! Veja os {optionSelected == 1 ? "lugares" : "produtos"} que você deu destaque!</S.TypographyComponent>
                <S.SearchContainer>
                    <S.SearchInput placeholder='Pesquisar em meus favoritos...' onChange={(e) => setNameToSearch(e.target.value)}/>
                    <S.IconSearch />
                </S.SearchContainer>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Produtos"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Produtos" control={<Radio onChange={() => setOptionsSelected(2)}/>} label="Produtos" />
                        <FormControlLabel value="Estabelecimentos" control={<Radio onChange={() => setOptionsSelected(1)}/>} label="Estabelecimentos" />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.TypographyComponent fontPeso={'600'} tamanho={'1.2rem'}>Meus {optionSelected == 1 ? "Lugares" : "Produtos"} Favoritos:</S.TypographyComponent>
                    <S.LocationContainer>
                        {optionSelected == 1 ? 
                            <>
                                {!!favoriteLocations?.length && <>
                                    {favoriteLocations.map((loc, index) => {
                                        return(<LocationCard imgUrl={loc.url} localName={loc.name} location={loc.endereco} ratingValue={loc.rating} key={index}  handleClickViewMore={() => navigate(`/estabelecimentos/${loc.pk_id}`)}/>)
                                    })}
                            </>
                        }
                        </> : 
                        <>
                            {!!favoriteProducts?.length && 
                                <>
                                    {favoriteProducts.map((prod, index) => {
                                        return(
                                            <ProductCard 
                                                key={index} 
                                                productImg={prod.cFoto} 
                                                sectionName={prod.cTitulo} 
                                                productPrice={prod.nPreco}
                                                handleClick={() => navigate(`/produtos/${prod?.cTitulo}/${prod?.nPreco}/${encodeURIComponent(prod?.cFoto)}/${prod?.iAnuncianteId}/${prod?.cDescricao}/${prod?.id}`)}
                                            />
                                        )
                                    })}
                                </>
                            }
                        </>
                        }
                        
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {FavoritesCentral}