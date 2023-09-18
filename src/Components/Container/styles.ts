import styled, { css } from 'styled-components'
import ContainerComponent from '@mui/material/Container'
import theme from '../../Styles/theme'

export const Container = styled(ContainerComponent)(
  () => css`
    && {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${theme.layout.gap.big};
      padding: 0;

      @media (max-width: ${theme.screen.small}) {
        padding-left: ${theme.layout.padding.big};
      }
    }
  `
)
