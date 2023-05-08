import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionSix = () => {
  return (
    <>
      <S.ColumnQuestions>
        <S.ColumnOne>
          <S.QuestionDiv>
            <Questions questionNumber="29 - " title="Faz uso de cigarros?" />
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
                <Questions title="Quantos por dia?" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="31 - " title="Faz ingestão de café?" />
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
                <Questions title="Frequência:" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="33 - " title="Já usou ou usa algum timpo de droga?" />
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
                <Questions title="Qual/frequência:" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="35 - " title="Quais são suas atividades de lazer, hobbies?" />
            <S.QuestionForm>
              <section>
                <Questions title="" />
                <S.QuestionInput type="text" name="" id=""  placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber='37 - ' title='Houve alguma mudança na sua rotina nas últimas semanas?'/>
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
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta' />
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="39 - " title="Já teve passagem pela delegacia?" />
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
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta' />
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="41 - " title="Fale sobre você: 1 ponto positivo e 1 ponto negativo:" />
            <S.QuestionForm>
              <section>
                <S.QuestionInput type="text" name="" id=""  placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
        </S.ColumnOne>

        <S.ColumnTwo>
        <S.QuestionDiv>
            <Questions questionNumber="30 - " title="É ex-fumante?" />
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
                <Questions title="Há quanto tempo" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="32 - " title="Faz uso de bebida alcoólica?" />
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
                <Questions title="Quantidade/frequência:" />
                <S.QuestionInput type="text" name="" id=""  placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="34 - " title="Faz/fez tratamento para deixar de usar?" />
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
                <Questions title="Por quê?" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="36 - " title="Pratica alguma religião?" />
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
                <Questions title="Qual/frequência:" />
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta' />
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="38 - " title=" Possui antecendente penal/criminal?" />
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
            <Questions questionNumber="40 - " title="Qual a sua meta de vida?" />
            <S.QuestionForm>
              <section>
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta' />
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
          <S.QuestionDiv>
            <Questions questionNumber="42 - " title="Sugestão para redução de acidentes no trânsito:" />
            <S.QuestionForm>
              <section>
                <S.QuestionInput type="text" name="" id="" placeholder='Resposta'/>
              </section>
            </S.QuestionForm>
          </S.QuestionDiv>
        </S.ColumnTwo>
      </S.ColumnQuestions>
    </>
  )
}
