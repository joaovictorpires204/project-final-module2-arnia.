import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionThree = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions questionNumber="15 - " title="Atualmente" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Aposentado</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Desempregado</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Nunca Trabalhou</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Está Trabalhando</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="17 - " title="Está satisfeito com o que faz? " />
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
              <Questions title="Por que?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="19 - " title="Está afastado pelo INSS?" />
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
              <Questions title="Por qual motivo?" />
              <S.QuestionInput type="text" name="" id="" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>

      <S.ColumnTwo>
        <S.QuestionDiv>
          <Questions questionNumber="16 - " title="Função desempenhada? Há quanto tempo?" />
          <S.QuestionForm>
            <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="18 - " title="Trabalha em que turno?" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Diurno</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Noturno</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Rodízio de turnos de horário:</label>
            </section>
            <section>
              <Questions title="Nota" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
