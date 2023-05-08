import { Title } from '../title'
import S from '../../../assets/styles/handbook-styles/infosstyle'
import Edit from '../../../assets/images/edit.png'

type InfosType = {
  title: string
  text: string
}

export const Infos = ({ title, text }: InfosType) => {
  return (
    <>
      <S.InfoHead>
        <Title title={title} />
        <S.IconStyle src={Edit} alt="" />
      </S.InfoHead>
      <S.InfoText>
        {text}
      </S.InfoText>
    </>
  )
}
