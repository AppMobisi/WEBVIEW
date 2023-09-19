import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Box, Button} from '@mui/material'

export interface ICardContainerProps{
    gapValue?: string
}

export const PageWrapper = styled(Box)`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
`