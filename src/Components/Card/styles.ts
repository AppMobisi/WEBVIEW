import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Box} from '@mui/material'
import { TypographyComponent } from '../Typography'

export const CardContainer = styled(Box)`
    height: 20rem;
    width: 20rem;
    background-color: #1976d2;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;
    border-radius: 5px;

    @media screen and (max-width: 1540px) {
        height: 18rem;
        width: 18rem;
    }

    @media screen and (max-width: 1440px) {
        height: 17rem;
        width: 17rem;
    }
`

export const DataTitle = styled(TypographyComponent)(
    () => css`
        &&{
            color: ${theme.colors.font.main};
            font-size: 3.5rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    `
)

export const TextTitle = styled(TypographyComponent)(
    () => css`
        &&{
            color: ${theme.colors.font.main};
            font-size: ${theme.typograph.fontsize.title};
            font-family: sans-serif;
            font-weight: 600;
        }
    `
)