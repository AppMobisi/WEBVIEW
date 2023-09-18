import styled, { css } from 'styled-components'
import { Link } from '@mui/material'
import AppBarComponent from '@mui/material/AppBar'
import BoxComponent from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import DrawerComponent from '@mui/material/Drawer'
import ListComponent from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import ListItemIcon from '@mui/material/ListItemIcon'
import { TypographyComponent } from '../Typography'
import theme from '../../Styles/theme'

export interface ITabButtonprops {
  active?: boolean
}

export const Wrapper = styled(AppBarComponent)(
  () => css`
    && {
      align-items: center;
      background-color: ${theme.colors.base.white};
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-gap: 0.625rem;
      height: 5rem;
      padding: 0 ${theme.layout.padding.medium};
      @media (max-width: ${theme.screen.medium}) {
        height: 5rem;
      }
      @media print {
        display: none;
      }
    }
  `
)

export const MenuButton = styled(IconButton)(
  () => css`
    && {
      color: ${theme.colors.base.blue002};
      height: 4.5rem;
      width: 4.5rem;

      @media (max-width: ${theme.screen.medium}) {
        display: inline-flex;
        height: 3rem;
        width: 3rem;
      }
    }
  `
)

export const IconMenu = styled(MenuIcon)(
  () => css`
    && {
      height: 3rem;
      width: 3rem;

      @media (max-width: ${theme.screen.medium}) {
        height: 2.3rem;
        width: 2.3rem;
      }
    }
  `
)

export const LinksContent = styled(BoxComponent)(
  () => css`
    && {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
    }
  `
)

export const PerfilContent = styled(BoxComponent)(
  () => css`
    && {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: end;
    }
  `
)

export const UserInfo = styled(BoxComponent)(
  () => css`
    && {
      display: flex;
      align-items: end;
      flex-direction: column;
      max-width: 9.9rem;
      min-width: 9rem;

      @media (max-width: ${theme.screen.medium}) {
        display: none;
      }
    }
  `
)

export const ItemIcon = styled(ListItemIcon)(
  () => css`
    && {
      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  `
)

export const Menu = styled(DrawerComponent)(
  () => css`
    && {
      flex-shrink: 1;
      z-index: 99;
      width: 100%;
      height: 3rem;

      & .MuiDrawer-paper {
        width: 100%;
        top: 5rem;
        display: flex;
        flex-direction: row;
        background-color: ${theme.colors.base.blue002};
        justify-content: space-between;
        height: 4.5rem;
      }
      @media (max-width: ${theme.screen.medium}) {
        display: flex;

        & .MuiDrawer-paper {
          height: calc(100vh - 5rem);
          top: 5rem;
        }
      }
    }
  `
)

export const Logo = styled(Link)(
  () => css`
    && {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: ${theme.colors.base.white};
      border-bottom: 0.1rem solid ${theme.colors.base.lightGray};
      padding: ${theme.layout.padding.medium};
      text-decoration: none;
      img {
        width: 2.8rem;
        display: inline-block;
        margin-right: ${theme.layout.margin.medium};
      }
      .MuiListItemText-root {
        margin: 0;
        span {
          font-family: ${theme.typograph.fontFamily.secondary};
          font-style: normal;
          font-weight: 700;
          font-size: ${theme.typograph.fontsize.body1};
          line-height: ${theme.layout.lineHeight.big};
          letter-spacing: 0.015rem;
          text-transform: uppercase;
          color: ${theme.colors.base.blue002};
        }
      }
    }
  `
)

export const MenuIcons = styled.div(
  () => css`
    && {
      background-color: ${theme.colors.base.white};
      height: calc(100vh - 8.2rem);
      width: 6rem;
      flex-shrink: 1;
      position: fixed;
      left: 0;
      top: 8.2rem;
      z-index: 9;
      color: rgba(0, 0, 0, 0.87);
      box-shadow: 0 0.8rem 1rem -0.5rem rgba(0, 0, 0, 0.2),
        0 1.6rem 2.4rem 0.2rem rgba(0, 0, 0, 0.14),
        0 0.6rem 3rem 0.5rem rgba(0, 0, 0, 0.12);
      overflow-y: auto;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      -webkit-overflow-scrolling: touch;
      ${Logo} {
        img {
          margin-right: 0;
        }
      }
      .MuiListItem-root {
        width: auto;
      }
      .MuiListItemIcon-root {
        margin-right: 0 !important;
      }
      .MuiListItemText-root {
        display: none;
      }
      @media (max-width: ${theme.screen.medium}) {
        display: flex;
        top: 5rem;
        height: calc(100vh - 5rem);

        & .MuiDrawer-paper {
          height: calc(100vh - 5rem);
          top: 5rem;
        }
      }
      @media (max-width: ${theme.screen.small}) {
        display: none !important;
      }
    }
  `
)

export const ListContent = styled(ListComponent)(
  () => css`
    && {
      display: flex;
      align-self: center;
      white-space: pre;
      align-items: flex-start;
      flex-direction: row;
      width: 100%;
      padding: 0;
    }
  `
)

export const ItemList = styled.div(
  () => css`
    && {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.layout.gap.small};
      width: 100%;
      height: 4.5rem;

      .MuiListItemIcon-root {
        min-width: auto;
        margin-right: 1rem;
      }
      .MuiSvgIcon-root {
        width: 1.6em;
        height: 1.6em;
        color: ${theme.colors.base.white};
        font-size: ${theme.typograph.fontsize.body1};
      }
      .MuiTypography-root {
        font-size: ${theme.typograph.fontsize.body1};
        color: ${theme.colors.base.white};
      }
      &:hover {
        background-color: ${theme.colors.base.grayOpacite};
      }
    }
  `
)

export const Text = styled(TypographyComponent)(
  () => css`
    && {
      display: flex;
      align-items: center;
      gap: ${theme.layout.gap.medium};
    }
  `
)

export const ContainerHeader = styled.div(
  () => css`
    && {
      display: flex;
      align-items: center;
      gap: ${theme.layout.gap.medium};
    }
  `
)
