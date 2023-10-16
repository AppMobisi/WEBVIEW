import styled, {css} from "styled-components"
import theme from "../../Styles/theme"
import {Box, Typography} from '@mui/material'

export interface ILocalImageProps{
    backUrl?: string
}

export interface ITypographyComponentProps{
    fontWeigth?: string
    fontSize?: string
}

export const CardContainer = styled(Box)`
    width: 100%;
    height: 18rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const SectionHeader = styled(Typography)(
    () => css`
        &&{
            width: 100%;
            padding: 0.5rem;
            background-color: ${theme.colors.base.darkBlue};
            border-radius: 10px 10px 0 0;
            color: ${theme.colors.base.white};
            font-family: Poppins;
            text-align: center;
        }
    `
)

export const ProductImage = styled.img`
    height: 70%;
`

export const PriceText = styled(Typography)(
    () => css`
        &&{
            width: 100%;
            padding: 0.5rem;
            background-color: ${theme.colors.base.white};
            border-radius: 0 0 10px 10px;
            color: ${theme.colors.base.darkBlue};
            font-family: Poppins;
            text-align: center;
        }
    `
)