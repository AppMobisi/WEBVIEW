import * as S from './style'

export interface IProductCardProps{
    sectionName?: string
    productImg?: string
    productPrice?: number
}

const ProductCard = ({sectionName, productImg, productPrice}: IProductCardProps) => {
    return(
        <>
            <S.CardContainer>
                <S.SectionHeader>{sectionName}</S.SectionHeader>
                <S.ProductImage src={productImg}/>
                <S.PriceText>R$ {productPrice}</S.PriceText>
            </S.CardContainer>
        </>
    )
}

export {ProductCard}