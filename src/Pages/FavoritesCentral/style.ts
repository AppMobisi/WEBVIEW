import styled, {css} from "styled-components"
import theme from "../../Styles/theme"
import {Typography, Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export interface ITypographyComponentProps{
    fontPeso?: string
    tamanho?: string
}

export const TypographyComponent = styled(Typography)<ITypographyComponentProps>(
    ({fontPeso, tamanho}) => css`
        &&{
            font-size: ${tamanho};
            font-weight: ${fontPeso};
            font-family: 'Poppins';
        }
    `
)

export const SearchInput = styled.input`
    width: 100%;
    border: 1px solid #A9A9AC;
    border-radius: 2rem;
    height: 3rem;
    font-family: 'Poppins';
    padding: 0 0 0 1rem;
    font-size: 0.8rem;
`

export const IconSearch = styled(SearchIcon)(
    () => css`
        &&{
            color: ${theme.colors.base.darkBlue};
            font-size: ${theme.typograph.fontsize.title};
        }
    `
)

export const SearchContainer = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const LocationContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`