import S from '../../../assets/styles/handbook-styles/titles-style'
import Close from '../../../assets/icons/close-circle-fill.png'

export type TitleModal = {
  title: string
}

export const TitleModal = ({ title }: TitleModal) => {
  return (
    <div>
      <S.ModalTitle>{title}</S.ModalTitle>
    </div>
  )
}
