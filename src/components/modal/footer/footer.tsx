import { Link } from 'react-router-dom'
import S from '../../../assets/styles/modal/footerstyle'

export const Footer = ({ closeModal, direction, title }: ModalDirection) => {
  return (
    <>
      <S.FooterCard>
        <S.Bar />
        <S.FooterContent>
          <div>*Campos Obrigatórios</div>
          <div>
            <S.CancelButton onClick={closeModal}>Cancelar</S.CancelButton>
            <S.CreateButton>
              <Link to={direction} onClick={window.location.reload} style={{color: 'white', textDecoration: 'none'}}>{title}</Link>
            </S.CreateButton>
          </div>
        </S.FooterContent>
      </S.FooterCard>
    </>
  )
}
