import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Box, Button, Typography} from '@mui/material'

interface ITypographyComponentProps{
    fontWeigth?: string
}

export const PageWrapper = styled(Box)`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const TitleAndSubtitleContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const TypographyComponent = styled(Typography)<ITypographyComponentProps>(
    ({fontWeight}) => css`
        &&{
            font-size: ${theme.typograph.fontsize.title};
            font-weight: ${fontWeight};
            font-family: 'Poppins';
        }
    `
)

export const Subtitle = styled(Typography)<ITypographyComponentProps>(
    ({fontWeight}) => css`
        &&{
            font-size: ${theme.typograph.fontsize.medium};
            font-weight: ${fontWeight};
            font-family: 'Poppins';
        }
    `
)