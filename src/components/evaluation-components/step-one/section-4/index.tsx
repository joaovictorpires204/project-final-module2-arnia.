import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionFour = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions questionNumber="20 - " title="Escolaridade" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Superior Incompleto</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Superior Completo</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Médio Incompleto</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Médio Completo</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Fundamental Incompleto</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Fundamental Completo</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Primário</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Alfabetizado</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="22 - " title="Ensino:" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Regular</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Supletivo</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">A distância</label>
            </section>
            <section>
              <Questions title="Nota" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>
      <S.ColumnTwo>
        <S.QuestionDiv>
          <Questions questionNumber="21 - " title="Está estudando?" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Não</label>
            </section>
            <section>
              <Questions title="Parou há quanto tempo?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
