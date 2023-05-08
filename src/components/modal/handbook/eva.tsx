import { Modal } from '..'
import { TitleModal } from '../title/modal-title'
import S from '../../../assets/styles/modal/modalstyle'
import I from '../../../assets/styles/modal/inputstyle'
import Close from '../../../assets/icons/close-circle-fill.png'
import { Footer } from '../footer/footer'

export const Eva = ({ isActive, closeModal }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <S.ModalHead>
            <TitleModal title="Nova Avaliação Psicológica" />
            <S.CloseBtn src={Close} alt="" onClick={closeModal} />
          </S.ModalHead>
          <I.InputsSectionMajor>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <I.Label>Data*</I.Label>
              <I.InputMinor type="date" />
            </div>
          </I.InputsSectionMajor>
          <I.AlertEva>
            <I.AlertTitle>Atenção!</I.AlertTitle>
            <I.AlertContent>
              Você será <strong>redirecionado para uma nova página </strong>onde irá preencher os dados da avaliação
              psicológica
            </I.AlertContent>
          </I.AlertEva>
          <Footer closeModal={closeModal} direction="/avaliacaopsicologica" title='Prosseguir'/>
        </Modal>
      )}
    </>
  )
}
