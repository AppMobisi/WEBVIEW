import * as S from './styles'

import { TypographyProps } from '@mui/material/Typography'

interface ITypographyProps extends TypographyProps {}

const TypographyComponent = (props: ITypographyProps) => {
  return <S.TypographyStyled {...props} />
}

export { TypographyComponent, ITypographyProps }
