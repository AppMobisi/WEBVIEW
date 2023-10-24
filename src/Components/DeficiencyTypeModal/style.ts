import styled, {css} from "styled-components"
import { Box, Modal } from "@mui/material"
import { TypographyComponent } from "../MenuSectionCard/styles"

export const Container = styled(Modal)(
    () => css`
        &&{
            width: 90%;
            border-radius: 15px;
            height: 15rem;
            background-color: #fff;
            margin: auto;
        }
    `
)

export const InfoContainer = styled(Box)`
    width: 100%;
    border-radius: 15px;
    background-color: #fff;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Title = styled(TypographyComponent)(
    () => css`
        &&{
            color: #4392F1;
            font-size: 1.6rem;
            width: 100%;
            text-align: center;
        }
    `
)

export const SubTitle = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: 1rem;
            width: 100%;
            text-align: center;
        }
    `
)