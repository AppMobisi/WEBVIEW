import * as S from './styles'

import { ReactNode } from 'react'

interface IContainerProps {
  children?: ReactNode
  className?: string
}

const Container = ({ children, className }: IContainerProps) => (
  <S.Container className={className}>{children}</S.Container>
)

export { Container, IContainerProps }
