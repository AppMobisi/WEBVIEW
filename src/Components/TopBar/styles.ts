import styled, {css} from "styled-components"
import { Box, Avatar } from "@mui/material"

export const NavContainer = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserAvatar = styled(Avatar)(
    () => css`
        &&{
            width: 3.5rem;
            height: 3.5rem;
        }
    `
)

export const LogoImage = styled.img`
    width: 3rem;
`