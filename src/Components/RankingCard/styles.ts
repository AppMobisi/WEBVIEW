import styled, {css} from 'styled-components'
import { Box, Typography, Avatar } from '@mui/material'

export const CardContainer = styled(Box)`
    width: 100%;
    border-radius: 15px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`

export const Username = styled(Typography)(
    () => css`
        &&{
            font-size: 1.8rem;
        }
    `
)

export const UserImage = styled(Avatar)(
    () => css`
        &&{
            width: 3.5rem;
            height: 3.5rem;
        }
    `
)