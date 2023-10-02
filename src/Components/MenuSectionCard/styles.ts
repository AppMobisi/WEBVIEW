import styled, {css} from "styled-components";
import theme from "../../Styles/theme";
import {Box, Typography, Button} from '@mui/material'

export interface ITypographyComponentProps{
    fontPeso?: string
    fontSize?: string
}


export const Container = styled(Box)`
    width: 100%;
    height: 5rem;
    border: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
`

export const IconImage = styled.img`
    height: 100%;
`

export const TypographyComponent = styled(Typography)<ITypographyComponentProps>(
    ({fontPeso}) => css`
        &&{
            font-size: ${theme.typograph.fontsize.body1};
            font-weight: ${fontPeso};
            font-family: 'Poppins';
            width: 50%;
        }
    `
)

export const CardButton = styled(Button)(
    () => css`
        &&{
            height: 3.5rem;
            border-radius: 18px;
            background: ${theme.colors.base.buttonBlue};
        }
    `
)