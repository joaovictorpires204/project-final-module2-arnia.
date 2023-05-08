import S from '../../assets/styles/modal/modalstyle'
import { Footer } from './footer/footer'
import { TitleModal } from './title/modal-title'
import Close from '../../assets/icons/close-circle-fill.png'

export const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <S.ModalContainer>
      <S.ModalCard>
        {children}
      </S.ModalCard>
    </S.ModalContainer>
  )
}
