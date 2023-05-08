import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionTwo = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions questionNumber="08 - " title="Estado civil:" />
          <S.QuestionForm>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Divorciado</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Viúvo</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Solteiro</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Casado</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> União Estável</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="10 - " title="Com quem você mora?" />
          <S.QuestionForm action="">
            <section>
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="12 - " title="Possui irmãos?" />
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
              <Questions title="Quantos?" />
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions
            questionNumber="14 - "
            title="Na família existe alguém que necessitede cuidados médicos o psicológicos?"
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
              <Questions title="Nota" />
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>

      <S.ColumnTwo>
        <S.QuestionDiv>
          <Questions questionNumber="09 - " title="Possui filhos?" />
          <S.QuestionForm action="">
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Não</label>
            </section>
            <section>
              <Questions title="Quantos e qual a idade?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>

        <S.QuestionDiv>
          <Questions questionNumber="11 - " title="Está enfrentando problemas familiares?" />
          <S.QuestionForm action="">
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Não</label>
            </section>
            <Questions title="Quais" />
            <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber='13 - ' title='Como é o seu relacionamento com su família?'/>
          <S.QuestionForm>
            <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
