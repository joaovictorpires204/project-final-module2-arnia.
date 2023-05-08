import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionOne = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions questionNumber="01 - " title="Está descansado hoje?" />
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
              <Questions title='Por que?'/>
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="03 - " title="Está alimetado?" />
          <S.QuestionForm action="">
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Não</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="05 - " title="Fez uso de alguma medicação ontem/hoje?" />
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
              <Questions title='Qual(is)?'/>
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/> 
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions
            questionNumber="07 - " title=" Considra-se em boas condições para realização da avaliação psicológica?"
          />
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
              <Questions title='Por que?'/>
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>

      <S.ColumnTwo>
        <S.QuestionDiv>
          <Questions questionNumber="02 - " title="Dormiu bem esta noite?" />
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
              <Questions title='Quantas horas?'/>
              <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="04 - " title="Fez uso de bebida alcoólica nas últimas horas?" />
          <S.QuestionForm action="">
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Não</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="06 - " title="Faz uso de lentes corretivas/óculos?" />
          <S.QuestionForm action="">
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Sim</label>
            </section>
            <section>
              <input type="radio" name="" id="" />
              <label htmlFor=""> Não</label>
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
