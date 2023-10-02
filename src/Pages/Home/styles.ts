import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Box, Typography} from '@mui/material'

export interface ITypographyComponentProps{
    fontPeso?: string
    fontSize?: string
}

export const PageWrapper = styled(Box)`
    width: 100%;
    padding: 2rem 2rem 4rem 2rem;
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
    ({fontPeso}) => css`
        &&{
            font-size: ${theme.typograph.fontsize.title};
            font-weight: ${fontPeso};
            font-family: 'Poppins';
        }
    `
)

export const Subtitle = styled(Typography)<ITypographyComponentProps>(
    ({fontPeso, fontSize}) => css`
        &&{
            font-size: ${fontSize || theme.typograph.fontsize.medium};
            font-weight: ${fontPeso};
            font-family: 'Poppins';
        }
    `
)

export const CarouselContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`