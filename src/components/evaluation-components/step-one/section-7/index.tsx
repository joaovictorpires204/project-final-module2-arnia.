import S from '../../../../assets/styles/evaluation-styles/formstyle'
import { Questions } from '../questions'

export const SectionSeven = () => {
  return (
    <S.ColumnQuestions>
      <S.ColumnOne>
        <S.QuestionDiv>
          <Questions questionNumber="43 - " title=" Já possui experiência como motorista profissional?" />
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
              <Questions title="Tempo/carga:" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="45 - " title="Fale sobre uma situação que te deixou mais irritado no trânsito:" />
          <S.QuestionForm>
            <section>
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="47 - " title=" Teve multas, ponto na CNH?" />
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
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="49 - " title="Usa algum estimulante para dirigir?" />
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
          <Questions questionNumber="51 - " title="Quando você é convidado para um evento em que você fará uso de bebida alcoólica, como se organiza, com relação à condução do veículo?" />
          <S.QuestionForm>
            <section>
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnOne>
      <S.ColumnTwo>
      <S.QuestionDiv>
          <Questions questionNumber="44 - " title="Já passou por alguma situação de perigo no trânsito?" />
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
          <Questions questionNumber="46 - " title="Já sofreu acidente de trânsito?" />
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
          <Questions questionNumber="48 - " title="CNH já foi apreendida ou cassada?" />
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
              <Questions title="Porque/quando?" />
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
        <S.QuestionDiv>
          <Questions questionNumber="50 - " title="Quando está dirigindo e recebe uma ligação ou percebe que chegou uma mensagem no celular, como reage?" />
          <S.QuestionForm>
            <section>
              <S.QuestionInput type="text" name="" id="" placeholder="Resposta" />
            </section>
          </S.QuestionForm>
        </S.QuestionDiv>
      </S.ColumnTwo>
    </S.ColumnQuestions>
  )
}
