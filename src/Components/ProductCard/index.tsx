import * as S from './style'

export interface IProductCardProps{
    sectionName?: string
    productImg?: string
    productPrice?: number
    handleClick?: () => void
}

const ProductCard = ({sectionName, productImg, productPrice, handleClick}: IProductCardProps) => {
    return(
        <>
            <S.CardContainer onClick={handleClick}>
                <S.SectionHeader>{sectionName}</S.SectionHeader>
                <S.ProductImage src={productImg}/>
                <S.PriceText>R$ {productPrice}</S.PriceText>
            </S.CardContainer>
        </>
    )
}

export {ProductCard}