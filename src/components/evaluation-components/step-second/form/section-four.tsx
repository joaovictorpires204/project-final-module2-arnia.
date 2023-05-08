import S from '../../../../assets/styles/evaluation-styles/formtwostyle'
import { HeaderSection } from './header'

export const FormSectionFour = () => {
  return (
    <S.Container>
      <HeaderSection title="Personalidade" />
      <S.FormContent>
        <S.FirstLine>
          <section>
            <S.Label htmlFor="">Nome</S.Label>
            <S.Input type="text" name="" id="" />
          </section>
          <section>
            <S.Label htmlFor="">Controle geral</S.Label>
            <S.Input type="text" name="" id="" />
          </section>
          <section>
            <S.Label htmlFor="">Atividade</S.Label>
            <S.Input type="text" name="" id="" />
          </section>
          <section>
            <S.Label htmlFor="">Agressividade</S.Label>
            <S.Input type="text" name="" id="" />
          </section>
        </S.FirstLine>
        <S.Ad>
          <section>
            <section>
              <S.Label htmlFor="">Maturidade e emotividade</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
            <section>
              <S.Label htmlFor="">Organização de personalidade</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
            <section>
              <S.Label htmlFor="">Energia vital produtidade</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
          </section>
          <section>
            <section>
              <S.Label htmlFor="">Relacionamento Interpessoal</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
            <section>
              <S.Label htmlFor="">Impulsividade</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
            <section>
              <S.Label htmlFor="">Alteração Psiquicas</S.Label>
              <S.InputAd type="text" name="" id="" />
            </section>
          </section>
        </S.Ad>
      </S.FormContent>
    </S.Container>
  )
}
