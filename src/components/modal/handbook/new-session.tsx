import { Modal } from '..'
import { TitleModal } from '../title/modal-title'
import { NumberSection } from '../section'
import { Footer } from '../footer/footer'
import S from '../../../assets/styles/modal/modalstyle'
import I from '../../../assets/styles/modal/inputstyle'
import Close from '../../../assets/icons/close-circle-fill.png'

export const NewSession = ({ isActive, closeModal }: ModalProps) => {
  return (
    <>
      {isActive && (
        <Modal>
          <S.ModalHead>
            <TitleModal title="Nova Sessão" />
            <S.CloseBtn src={Close} alt="" onClick={closeModal} />
          </S.ModalHead>

          <NumberSection section={1} title="Dados Gerais" />

          <I.InputsSectionMinor>
            <div>
              <I.Label htmlFor="date">Data*</I.Label>
              <I.InputMinor type="date" name="date" id="date"/>
            </div>
            <div>
              <I.Label htmlFor="">Hora de Início*</I.Label>
              <I.InputMinor type="time" name="" id="" />
            </div>
            <div>
              <I.Label htmlFor="">Hora Fim*</I.Label>
              <I.InputMinor type="time" name="" id="" />
            </div>
          </I.InputsSectionMinor>

          <S.Bar />
          <NumberSection section={2} title="Sessão" />

          <section>
            <div>
              <I.Label htmlFor="title">Titulo*</I.Label>
              <I.InputMajor type="text" name="title" id="title" />
            </div>
            <div>
              <I.Label htmlFor="">Resumo da Sessão*</I.Label>
              <I.InputMajor as="textarea" name="" id="" />
            </div>
          </section>

          <S.Bar />
          <NumberSection section={2} title="Pagamento" />

          <I.InputsSectionMinor>
            <div>
              <I.Label htmlFor="">Valor</I.Label>
              <I.InputMinor type="numer" name="" id="" placeholder="R$ " />
            </div>
            <div>
              <I.Label htmlFor="">Hora de Início*</I.Label>
              <I.Select name="" id="">
                <option value="" selected>
                  PIX
                </option>
                <option value="">Dinheiro</option>
              </I.Select>
            </div>
            <I.PaymentSection>
              <label htmlFor="">Status</label>
              <I.Radios>
                <I.Payment>
                  <I.Label htmlFor="">Pago</I.Label>
                  <input type="radio" name="" id="" />
                </I.Payment>
                <I.Payment>
                  <I.Label htmlFor="">Não Pago</I.Label>
                  <input type="radio" name="" id="" />
                </I.Payment>
              </I.Radios>
            </I.PaymentSection>
          </I.InputsSectionMinor>
          <Footer closeModal={closeModal} direction="/" title="Criar" />
        </Modal>
      )}
    </>
  )
}
