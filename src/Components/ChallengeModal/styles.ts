import styled, {css} from 'styled-components'
import {
    Modal,
    Box,
    Avatar,
    Button
  } from '@mui/material';
import theme from '../../Styles/theme'
import { TypographyComponent } from '../Typography';
import CloseIcon from '@mui/icons-material/Close';

export const ModalContainer = styled(Modal)(
    () => css`
        &&{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `
)

export const ContentContainer = styled(Box)(
    () => css`
        &&{
            width: 40rem;
            background-color: ${theme.colors.base.white};
            padding: 1rem;
            border-radius: 10px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
        }
    `
)

export const ModalTitle = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.title};
            font-family: sans-serif;
            font-weight: 500;
            text-align: center;
            width: 100%;
        }
    `
)

export const SubTitle = styled(TypographyComponent)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.base};
            font-family: sans-serif;
            text-align: center;
        }
    `
)

export const CloseModalIcon = styled(CloseIcon)(
    () => css`
        &&{
            font-size: ${theme.typograph.fontsize.body2};
            position: absolute;
            cursor: pointer;
        }
    `
)

export const InternContentContainer = styled(Box)(
    () => css`
        &&{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2rem 0 0 0;
        }
    `
)

export const UserAvatar = styled(Avatar)(
    () => css`
        &&{
        }
    `
)

export const IconContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`

export const ChallengeButton = styled(Button)(
    () => css`
        &&{
            width: 8rem;
            font-size: ${theme.typograph.fontsize.minimum};
        }
    `
)