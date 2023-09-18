import styled, { css } from 'styled-components'
import Typography from '@mui/material/Typography'
import theme from '../../Styles/theme'

export const TypographyStyled = styled(Typography)(
  () => css`
    && {
      font-size: ${theme.typograph.fontsize.base};
      font-family: ${theme.typograph.fontFamily.base};
    }
  `
)
