import {useState, useEffect} from 'react'
import * as S from './style'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'

import { sliderImageUrl, products } from '../Home/mock'
import { LocationCard } from '../../Components/LocationCard'
import { ProductCard } from '../../Components/ProductCard';

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
}

interface IProductsProps{
    name: string
    section: string
    img_url: string
    price: number
}

const FavoritesCentral = () => {
    const [nameToSearch, setNameToSearch] = useState<string>()

    const [originalFavoriteLocations, setOriginalFavoriteLocations] = useState<ILocationsProps[]>()
    const [originalFavoriteProducts, setOriginalFavoriteProducts] = useState<IProductsProps[]>()
    const [favoriteLocations, setFavoriteLocations] = useState<ILocationsProps[]>()
    const [favoriteProducts, setFavoriteProducts] = useState<IProductsProps[]>()
    const [optionSelected, setOptionsSelected] = useState(1)

    useEffect(() => {
        if(sliderImageUrl?.length){
            setFavoriteLocations(sliderImageUrl)
            setOriginalFavoriteLocations(sliderImageUrl)
        }
    }, [sliderImageUrl])

    useEffect(() => {
        if(products?.length){
            setFavoriteProducts(products)
            setOriginalFavoriteProducts(products)
        }
    }, [products])

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
                if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
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
                        defaultValue="Estabelecimentos"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Estabelecimentos" control={<Radio onChange={() => setOptionsSelected(1)}/>} label="Estabelecimentos" />
                        <FormControlLabel value="Produtos" control={<Radio onChange={() => setOptionsSelected(2)}/>} label="Produtos" />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.TypographyComponent fontPeso={'600'} tamanho={'1.2rem'}>Meus {optionSelected == 1 ? "Lugares" : "Produtos"} Favoritos:</S.TypographyComponent>
                    <S.LocationContainer>
                        {optionSelected == 1 ? 
                            <>
                                {!!favoriteLocations?.length && <>
                                    {favoriteLocations.map((loc, index) => {
                                        return(<LocationCard imgUrl={loc.url} localName={loc.name} location={loc.endereco} ratingValue={loc.rating} key={index}/>)
                                    })}
                            </>
                        }
                        </> : 
                        <>
                            {!!favoriteProducts?.length && 
                                <>
                                    {favoriteProducts.map((prod, index) => {
                                        return(
                                            <ProductCard key={index} productImg={prod.img_url} sectionName={prod.section} productPrice={prod.price}/>
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