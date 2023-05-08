import { Modal } from '..'
import { TitleModal } from '../title/modal-title'
import { Footer } from '../footer/footer'
import S from '../../../assets/styles/modal/modalstyle'
import I from '../../../assets/styles/modal/inputstyle'
import Close from '../../../assets/icons/close-circle-fill.png'

export const Annex = ({ isActive, closeModal }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <S.ModalHead>
            <TitleModal title="Novo Anexo" />
            <S.CloseBtn src={Close} alt="" onClick={closeModal} />
          </S.ModalHead>
          <I.InputsSectionMajor>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <I.Label>Data*</I.Label>
              <I.InputMinor type="data" name="" id="" />
            </div>
            <div>
              <I.Label>Título*</I.Label>
              <I.InputMajor type="text" name="" id="" style={{ width: '300px' }} />
            </div>
          </I.InputsSectionMajor>

          <section>
            <I.Label>Descrição</I.Label>
            <I.InputMajor as="textarea" name='' id=''/>
          </section>

          <section>
            <I.Label>Anexo</I.Label>
            <I.AnnexInput type='file' accept='application/pdf'/>
          </section>
          <Footer closeModal={closeModal} direction="/" title='Criar'/>
        </Modal>
      )}
    </>
  )
}
