import styled, {css} from 'styled-components'
import theme from '../../Styles/theme'
import {Box, Button} from '@mui/material'
import { TypographyComponent } from '../../Components/Typography'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';

export interface ICardContainerProps{
    gapValue?: string
}

export const PageWrapper = styled(Box)`
    width: 100%;
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
`

export const ContentContainer = styled(Box)`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10rem;
`

export const TitleContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const DesafioContainer = styled(Box)`
    display: flex;
    padding: 0 0;
    flex-direction: column;
    gap: 1.5rem;
`

export const Title = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.bigTitle};
            color: ${theme.colors.font.title};
            font-family: sans-serif;
        }
    `
)

export const SubTitle = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.body2};
            color: ${theme.colors.font.title};
            font-family: sans-serif;
        }
    `
)

export const UserName = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.base};
            color: ${theme.colors.font.title};
            font-family: sans-serif;
        }
    `
)

export const CardContainer = styled(Box)<ICardContainerProps>(
    ({gapValue}) => css`
        &&{
            display: flex;
            justify-content: space-between;
            gap: ${gapValue ? gapValue : '0'};
            align-items: center;
        }
    `
)

export const UserNameCard = styled(Box)`
    background-color: ${theme?.colors?.base?.gray001};
    display: flex;
    justify-content: center;
    border-radius: 10px;
    padding: 0.5rem 2.5rem;
`

export const AttackIcon = styled(PriorityHighOutlinedIcon)`
    color: ${theme?.colors?.base?.red};
`

export const DefenseIcon = styled(ShieldOutlinedIcon)`
    color: #22AB30;
`

export const EnterButton = styled(Button)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.minimum};
            width: 100%;
            padding: 0.6rem;
            width: 100%;
        }
    `
)

export const cardsContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 100%;
    padding: 0 0 0 6rem;
`