import {useState, useEffect} from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'
import { ProductCard } from '../../Components/ProductCard'
import { GetProducts } from "../../Services/functions"
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

interface IProductsListProps {
  cFoto: string
  cTitulo: string
  nPreco: number
  id: string
  iAnuncianteId: number
  cDescricao: string
}

const ProductsHub = () => {
    const [userIdValue, setUserIdValue] = useState<any>()
    const [nameToSearch, setNameToSearch] = useState<string>()
    const [productsList, setProductsList] = useState<IProductsListProps[]>([])
    const [originalProductsList, setOriginalProductsList] = useState<IProductsListProps[]>([])

    const navigate = useNavigate()

    const GetImage = async () => {
      const image = await GetProducts(Number(userIdValue))
      setProductsList(image?.data)
      setOriginalProductsList(image?.data)
    }

    useEffect(() => {
      if(sessionStorage.getItem('userId')){
        setUserIdValue(Number(sessionStorage.getItem('userId')))
      }
    }, [sessionStorage.getItem('userId')])

    useEffect(() => {
      if(userIdValue){
        GetImage()
      }
    }, [userIdValue])

    useEffect(() => {
        if(nameToSearch?.length){
            let othersLocationsList: IProductsListProps[] = []

            productsList?.map((locat) => {
              if(locat.cTitulo.toLowerCase().includes(nameToSearch.toLowerCase())){
                  othersLocationsList.push(locat)
              }
            })

            setProductsList(othersLocationsList)
        }

        if(nameToSearch == ''){
            setProductsList(originalProductsList)
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
                    <S.Subtitle fontWeight={'600'} fontSize='1.5rem'>Produtos:</S.Subtitle>
                    <S.LocationContainer>
                      {productsList?.length > 0 ? productsList.map((product) => {
                        return (
                          <ProductCard 
                            sectionName={product?.cTitulo} 
                            productImg={product.cFoto} 
                            productPrice={product.nPreco} 
                            handleClick={() => navigate(`/produtos/${product?.cTitulo}/${product?.nPreco}/${encodeURIComponent(product?.cFoto)}/${product?.iAnuncianteId}/${product?.cDescricao}/${product?.id}`)}/>
                        );
                        }) : <HourglassTopIcon sx={{ fontSize: '6rem', margin: '6rem 0 0 0', color: '#001489' }}/>}
                      {}
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {ProductsHub}