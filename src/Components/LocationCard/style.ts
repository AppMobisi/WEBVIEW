import styled, {css} from "styled-components"
import theme from "../../Styles/theme"
import {Box, Typography, Button} from '@mui/material'

export interface ILocalImageProps{
    backUrl?: string
}


export interface ITypographyComponentProps{
    fontWeigth?: string
    fontSize?: string
}


export const CardContainer = styled(Box)`
    width: 90%;
    height: 16rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const LocalImage = styled(Box)<ILocalImageProps>(
    ({backUrl}) => css`
        &&{
            width: 100%;
            height: 50%;
            border-radius: 10px;
            background-image: url(${backUrl});
            background-size: cover;
        }
    `
)

export const Text = styled(Typography)<ITypographyComponentProps>(
    ({fontWeight}) => css`
        &&{
            font-size: ${theme.typograph.fontsize.minimum};
            font-weight: ${fontWeight};
            font-family: 'Poppins';
            width: 100%;
        }
    `
)

export const ViewMoreButton = styled(Button)(
    () => css`
        &&{
            font-size: 0.6rem;
        }
    `
)