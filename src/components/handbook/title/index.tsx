import S from '../../../assets/styles/handbook-styles/titles-style'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return <S.TitleStyle>{title}</S.TitleStyle>
}
