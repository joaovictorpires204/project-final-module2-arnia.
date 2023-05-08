import S from '../../../../assets/styles/evaluation-styles/formtwostyle'
import { HeaderSection } from './header'

export const FormSectionOne = () => {
  return (
    <>
        <S.Container>
          <HeaderSection title="Atenção Concentrada/Seletiva" />
          <S.FormContent>
            <S.FirstLine>
              <section>
                <S.Label htmlFor="">Nome</S.Label>
                <S.Input type="text" name="" id="" />
              </section>
              <section>
                <S.Label htmlFor="">Número de pontos</S.Label>
                <S.Input type="text" name="" id="" />
              </section>
              <section>
                <S.Label htmlFor="">Percentil</S.Label>
                <S.Input type="text" name="" id="" />
              </section>
              <section>
                <S.Label htmlFor="">Resultado</S.Label>
                <S.Input type="text" name="" id="" />
              </section>
            </S.FirstLine>
            <section>
              <S.Label htmlFor="">Obs:</S.Label>
              <S.Obs type="text" name="" id="" placeholder="Descrição da observação" />
            </section>
          </S.FormContent>
        </S.Container>
    </>
  )
}
