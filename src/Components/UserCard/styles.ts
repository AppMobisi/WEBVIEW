import styled, {css} from 'styled-components'
import {
    Box,
    Avatar
  } from '@mui/material';
import theme from '../../Styles/theme'
import { TypographyComponent } from '../Typography';

export const CardContainer = styled(Box)`
    &&{
        background-color: ${theme.colors.base.gray001};
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        min-width: 12rem;
        border-radius: 5px;
    }
`

export const UserAvatar = styled(Avatar)(
    () => css`
        &&{
        }
    `
)

export const UserName = styled(TypographyComponent)(
    () => css`
        &&{
            font-family: sans-serif;
            font-size: ${theme.typograph.fontsize.body1};
        }
    `
)