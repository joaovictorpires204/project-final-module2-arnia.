import styled from 'styled-components'

const FormContainer = styled.div`
  background-color: white;
  width: 980px;
  height: auto;
  margin-top: -30px;
  margin-left: 40px;
  margin-bottom: 30px;
  padding: 30px;
`

const Sintex = styled.div`
  height: 200px;
  font-weight: 600;
  font-size: 17px;
`
const TextArea = styled.textarea`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
`

const ColumnQuestions = styled.div`
  display: flex;
  gap: 80px;
  margin-left: 0px;
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  margin-left: -20px;
`

const QuestionsContent = styled.div`
  display: flex;
  gap: 10px;
`

const Number = styled.div`
  font-weight: 600;
  font-size: 14px;
`

const QuestionTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  width: 350px;
`

const QuestionDiv = styled.div`
margin-top: 10px;
`

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  font-size: 16px;
`

const QuestionInput = styled.input`
  border: 1px solid grey;
  width: 100%;
  height: 40px;
  margin: 5px 10px;
  border-radius: 15px;
`

const FormFooter = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`

export default {
  FormContainer,
  Sintex,
  TextArea,
  ColumnQuestions,
  ColumnOne,
  ColumnTwo,
  QuestionsContent,
  Number,
  QuestionTitle,
  QuestionDiv,
  QuestionForm,
  QuestionInput,
  FormFooter
}
