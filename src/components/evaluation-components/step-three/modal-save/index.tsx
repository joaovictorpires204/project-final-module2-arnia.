import { Modal } from '../../../modal'
import Check from '../../../../assets/images/checkmark-transparent.gif'
import S from '../../../../assets/styles/evaluation-styles/stepthreestyle'
import { Link } from 'react-router-dom'

export const ModalSave = ({ isActive }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <S.CheckImg src={Check} alt="" />
          <S.CheckTitle>Avaliação Psicológica salva com sucesso!</S.CheckTitle>
          <S.CheckText>Você irá visualizar esta avaliação no prontuário do paciente</S.CheckText>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <S.CheckBtn>Ok</S.CheckBtn>
          </Link>
        </Modal>
      )}
    </>
  )
}
