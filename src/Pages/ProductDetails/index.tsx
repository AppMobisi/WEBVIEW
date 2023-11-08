import * as S from './styles'
import { useEffect, useState } from "react";
import { PageWrapper } from "../Home/styles";
import { useParams } from "react-router-dom";
import { GetUserById, FavoriteProduct, GetFavoriteProducts, DeleteFavoriteProduct} from '../../Services/functions';
import { TypographyComponent } from '../FavoritesCentral/style'
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IProductsProps {
    id: string
}

const ProductDetails = () => {
    const [userIdValue, setUserIdValue] = useState<any>()
    const [urlPhoto, setUrlPhoto] = useState<string>("")
    const {productName, productPrice, productPhoto, anuncianteId, productDesc, productId} = useParams()

    const [anuncianteName, setAnuncianteName] = useState<string>("")
    const [anuncianteTelefone, setAnuncianteTelefone] = useState<string>("")
    const [anuncianteCep, setAnuncianteCep] = useState<string>("")

    const [idProduto, setIdProduto] = useState<string>("")
    const [permissionFavoriteProduct, setPermissionFavoriteProduct] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [favoriteProductsList, setFavoriteProductsList] = useState<IProductsProps[]>([])

    const GetAnuncianteInfo = async () => {
        const anunciante = await GetUserById(Number(anuncianteId))
        setAnuncianteName(anunciante?.data?.name)
        setAnuncianteCep(anunciante?.data?.cep)
        setAnuncianteTelefone(anunciante?.data?.phone)
    }

    const FormatarCEP = (cep: string) => {
        if (/^\d{8}$/.test(cep)) {
            return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
        } else {
            return cep;
        }
    }

    const FavoriteProductFunction = async () => {
        const response = await FavoriteProduct(Number(userIdValue), idProduto)

        if(response?.statusCode == 200){
            setIsFavorite(true)
        }
    }

    const DeleteFavoriteProductFunction = async () => {
        const response = await DeleteFavoriteProduct(Number(userIdValue), idProduto)
        
        if(response?.status == 200){
            setIsFavorite(false)
        }
    }

    const GetFavoriteProductsFunction = async () => {
        const response = await GetFavoriteProducts(Number(userIdValue));
    
        if (response !== null) {
            setFavoriteProductsList(response?.data?.data);
        }
    }
    
    useEffect(() => {
        if(productPhoto){
            const modifiedURL = decodeURIComponent(productPhoto).replace(/\/uploads\//, '/uploads%2F');
            setUrlPhoto(modifiedURL)
        }

        if(productId){
            setIdProduto(productId)
        }
    }, [productPhoto, productId])

    useEffect(() => {
        if(anuncianteId){
            GetAnuncianteInfo()
        }
    }, [anuncianteId])

    useEffect(() => {
        if(userIdValue){
            GetFavoriteProductsFunction()
        }
    }, [userIdValue])

    useEffect(() => {
        if(userIdValue && idProduto && permissionFavoriteProduct && !isFavorite){
            FavoriteProductFunction()
            setPermissionFavoriteProduct(false)
        }

        if(userIdValue && idProduto && permissionFavoriteProduct && isFavorite){
            DeleteFavoriteProductFunction()
            setPermissionFavoriteProduct(false)
        }
    }, [userIdValue, idProduto, permissionFavoriteProduct, isFavorite])

    useEffect(() => {
        if(favoriteProductsList?.length > 0 && idProduto){
            const produtoEncontrado = favoriteProductsList.find(item => item?.id === idProduto);

            if (produtoEncontrado) {
                setIsFavorite(true)
            }
        }
    }, [favoriteProductsList, idProduto])

    useEffect(() => {
        if(sessionStorage.getItem('userId')){
          setUserIdValue(Number(sessionStorage.getItem('userId')))
        }
      }, [sessionStorage.getItem('userId')])

    return(
        <>
            <S.LocationImg backUrl={urlPhoto} src={urlPhoto}/>
            <PageWrapper>
                <S.ReturnIcon onClick={() =>  window.history.back()}/>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                    <TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>{productName}</TypographyComponent>
                    <TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Preço: {productPrice}</TypographyComponent>
                    <TypographyComponent fontPeso={'300'} tamanho={'1.5rem'}><span style={{ fontWeight: 'bold' }}>Descrição:</span> <span style={{fontSize: '1.2rem'}}>{productDesc}</span></TypographyComponent>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                    <TypographyComponent fontPeso={'400'} tamanho={'1rem'}>Anunciado por: {anuncianteName}</TypographyComponent>
                    <TypographyComponent fontPeso={'400'} tamanho={'1rem'}>Telefone: {anuncianteTelefone}</TypographyComponent>
                    {anuncianteCep != "" && <TypographyComponent fontPeso={'400'} tamanho={'1rem'}>CEP: {FormatarCEP(String(anuncianteCep))}</TypographyComponent>} 
                </div>
                <S.LocationButton variant='contained' onClick={() => {
                    setPermissionFavoriteProduct(true)
                }}>
                        <FavoriteIcon />
                        {isFavorite ? 'Remover' : 'Favoritar'}
                </S.LocationButton>
            </PageWrapper>
        </>
    )
}

export {ProductDetails}