import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Button, Box} from "@mui/material"

export const AddLeader = styled(Button)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.minimum};
        }
    `
)

export const CardsBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    align-items: center;
`