import { Modal } from '..'
import { TitleModal } from '../title/modal-title'
import S from '../../../assets/styles/modal/modalstyle'
import I from '../../../assets/styles/modal/inputstyle'
import Close from '../../../assets/icons/close-circle-fill.png'
import { Footer } from '../footer/footer'

export const Fact = ({ isActive, closeModal }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <S.ModalHead>
            <TitleModal title="Fato Relevante" />
            <S.CloseBtn src={Close} onClick={closeModal} />
          </S.ModalHead>
          <I.InputsSectionMajor>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <I.Label htmlFor="">Data*</I.Label>
              <I.InputMinor type="date" name="" id="" />
            </div>
            <div>
              <I.Label>Título*</I.Label>
              <I.InputMajor type='text' name='' id='' placeholder='' style={{width:"300px"}}/>
            </div>
          </I.InputsSectionMajor>

          <section>
            <I.Label>Descrição</I.Label>
            <I.InputMajor as="textarea" name="" id="" />
          </section>

          <Footer closeModal={closeModal} direction='/'title='Criar' />
        </Modal>
      )}
    </>
  )
}
