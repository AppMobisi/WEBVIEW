import React from "react"
import * as S from './styles'
import { MenuNavbar } from "./menu"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GridOnIcon from '@mui/icons-material/GridOn';
import { useNavigate } from 'react-router-dom';

interface IUserMailProps {
  length: number
  value: any
}

interface IMenu {
  icon: React.ReactElement
  label: string
  url: string
}

interface INavbarProps {
  breadcrumbsPath?: string
  userName?: string
  userPhoto?: string
  userMail?: IUserMailProps
  isOpen?: boolean
  handleClickUrl?: (url: string) => void
  logo?: any
  handleToggleMenu?: () => void
  handleLogout?: () => void
}

const NavBar = ({userName, userPhoto, userMail, isOpen, handleToggleMenu, handleClickUrl}:INavbarProps) => {
  const menus = [
    {label: "Dashboard", url: "/inicio", icon: <SpaceDashboardIcon />}, 
    {label: "Ranking", url: "/ranking", icon: <SupervisorAccountIcon />}
  ]
  const navigate = useNavigate();

  const handleNavigate = (url?: string) => {
    navigate(url);
  };

  return(
      <>
        <S.Wrapper>
          <S.ContainerHeader>
            <S.MenuButton onClick={handleToggleMenu}>
              <S.IconMenu />
            </S.MenuButton>
            {/* <img src={""} alt="Logo Instituto" /> */}
          </S.ContainerHeader>
        </S.Wrapper>
        <S.Menu anchor="top" open={isOpen} onClose={handleToggleMenu}>
          <MenuNavbar onClick={(url) => { 
              handleNavigate(url)
              handleClickUrl()
            }} menus={menus} />
        </S.Menu>
        <div style={{width: '100%', height: '5rem'}}></div>
      </>
  )
}

export {NavBar, INavbarProps}