import * as S from './styles'

interface IMenu {
  icon: React.ReactElement
  label: string
  url: string
}
interface IMenuNavbarProps {
  menus?: IMenu[]
  onClick?: (url: string) => void
}

const MenuNavbar = ({ menus, onClick }: IMenuNavbarProps) => {
  return (
    <>
      <S.ListContent>
        {menus.map((menu, index) => (
          <S.ItemList key={index} onClick={() => onClick(menu.url)}>
            <S.ItemIcon>{menu.icon}</S.ItemIcon>
            <S.Text>{menu.label}</S.Text>
          </S.ItemList>
        ))}
        {/* <S.ItemList
          onClick={() => {
            handleAdmission()
          }}
        >
          <S.ItemIcon>
            <Tooltip
              title={isTooltip ? 'Admissão' : null}
              arrow
              placement="left"
            >
              <PersonAddAlt1 />
            </Tooltip>
          </S.ItemIcon>
          <ListItemText>Admissão</ListItemText>
        </S.ItemList> */}
        {/* <S.ItemList // COMENTADO PARA NAO EXPOR O LINK EM PRODUCAO (ENQUANTO ESTA EM DESENVOLVIMENTO)
          onClick={() => {
            handleknowledgeArea()
          }}
        >
          <S.ItemIcon>
            <Tooltip
              title={isTooltip ? 'Áreas de Conhecimento' : null}
              arrow
              placement="left"
            >
              <School />
            </Tooltip>
          </S.ItemIcon>
          <ListItemText>Áreas de Conhecimento</ListItemText>
        </S.ItemList> */}
        {/* <S.ItemList
          onClick={() => {
            handleEnvironments()
          }}
        >
          <S.ItemIcon>
            <Tooltip
              title={isTooltip ? 'Ambientes' : null}
              arrow
              placement="left"
            >
              <Tv />
            </Tooltip>
          </S.ItemIcon>
          <ListItemText>Ambientes</ListItemText>
        </S.ItemList> */}
        {/* <S.ItemList
          onClick={() => {
            handleCalendar()
          }}
        >
          <S.ItemIcon>
            <Tooltip
              title={isTooltip ? 'Calendário' : null}
              arrow
              placement="left"
            >
              <CalendarTodayOutlined />
            </Tooltip>
          </S.ItemIcon>
          <ListItemText>Calendário</ListItemText>
        </S.ItemList> */}
        {/* <S.ItemList
          onClick={() => {
            handleSystemSetup()
          }}
        >
          <S.ItemIcon>
            <Tooltip
              title={isTooltip ? 'Configuração do Sistema' : null}
              arrow
              placement="left"
            >
              <Settings />
            </Tooltip>
          </S.ItemIcon>
          <ListItemText>Configuração do Sistema</ListItemText>
        </S.ItemList> */}
      </S.ListContent>
    </>
  )
}

export { IMenuNavbarProps, MenuNavbar }
