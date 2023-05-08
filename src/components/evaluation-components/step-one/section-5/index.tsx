import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionFive = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions
            questionNumber="23 - "
            title="Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?"
          />
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
              <Questions title="Qual?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="25 - " title="Possui deficência?" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Visual</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Fala</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Auditiva</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Física</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Não</label>
            </section>
            <section>
              <Questions title="Qual?" />
              <S.QuestionInput type="text" name="" id="" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="27 - " title="Já sofreu algum acidente, tombo, fratura, pancada na cabeça?" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Não</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>

      <S.ColumnTwo>
        <S.QuestionDiv>
          <Questions questionNumber="24 - " title="Faz uso de medicamento?" />
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
              <Questions title="Qual(is)?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="26 - " title=" Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas?" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor="">Não</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="28 - " title="Pratica alguma atividade física?" />
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
              <Questions title='Quais?'/>
              <S.QuestionInput type="text" name="" id=""  placeholder="Resposta"/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
