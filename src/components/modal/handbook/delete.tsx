import { Modal } from '..'
import S from '../../../assets/styles/modal/deletestyle'
import Animation from '../../../assets/icons/Red_Triangle_warning_sign_vector_art_illustration-removebg-preview.png'

export const DeleteModal = ({ isActive, closeModal }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <div><S.AlertImg src={Animation} alt="" /></div>
          <S.DeleteContent>Tem certeza que deseja excluir este serviço?</S.DeleteContent>
          <div>
            <S.LeftBtn onClick={closeModal}>Voltar</S.LeftBtn>
            <S.RightBtn onClick={closeModal}>Apagar</S.RightBtn>
          </div>
        </Modal>
      )}
    </>
  )
}
