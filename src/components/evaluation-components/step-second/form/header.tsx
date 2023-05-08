import S from '../../../../assets/styles/evaluation-styles/formtwostyle'
import Delete from '../../../../assets/icons/delete.png'

type HeaderProps = {
    title: string
}

export const HeaderSection = ({title}:HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.Header>
        {title}
        <S.Btn src={Delete} alt="" />
      </S.Header>
    </S.HeaderContainer>
  )
}
