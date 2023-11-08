import styled, {css} from "styled-components";
import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export interface ILocationImgProps{
    backUrl?: string
}

export const LocationImg = styled('div')<ILocationImgProps>(
    ({backUrl}) => css`
        background-image: url(${backUrl});
        width: 100%;
        height: 14rem;
        border-radius: 0 0 15px 15px;
        background-size: cover;
    `
)

export const Section1Grid = styled(Box)`
    display: grid;
    grid-template-columns: 3.5fr 1fr;
`

export const LocationInfoContainer = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
`

export const LocationAccessContainer = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`

export const ButtonsContainer = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LocationButton = styled(Button)(
    () => css`
        &&{
            font-size: 1rem;
            display: flex;
            gap: 1rem;
            width: 100%;
        }
    `
)

export const LocAddressInfo = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 0.5rem;
`

export const AddressInfoContainer = styled(Box)`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
`

export const ReturnIcon = styled(ArrowBackIosNewIcon)(
    () => css`
        &&{
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            color: #fff;
            z-index: 1111111;
            font-size: 2rem;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 5px;
        }
    `
)