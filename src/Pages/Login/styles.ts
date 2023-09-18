import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import { Box, Button } from '@mui/material'
import { TypographyComponent } from '../../Components/Typography'
import TextField from '@mui/material/TextField';

export const PageWrapper = styled(Box)`
    width: 100%;
    height: 100vh;
    background-color: ${theme?.colors?.base?.gray001};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled(Box)`
    width: 40%;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled(Box)`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`

export const Title = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.title};
            font-family: sans-serif;
        }
    `
)

export const EmailInput = styled(TextField)(
    () => css`
        &&{
            width: 100%;
        }
    `
)

export const EnterButton = styled(Button)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.minimum};
            width: 100%;
            padding: 0.6rem;
        }
    `
)