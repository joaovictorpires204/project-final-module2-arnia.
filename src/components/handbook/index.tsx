import { ReactNode } from 'react'
import S from '../../assets/styles/handbook-styles/handkookstyle'

type HandbookProps = {
  children? : ReactNode
}

export const Handbook = ({children}: HandbookProps) => {
  return (
    <S.Container>
      <S.Handbookstyle>{children}</S.Handbookstyle>
    </S.Container>
  )
}
