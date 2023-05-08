import S from '../../../../assets/styles/evaluation-styles/formstyle'

type QuestionsProps = {
  questionNumber?: string
  title: string
}

export const Questions = ({ questionNumber, title }: QuestionsProps) => {
  return (
    <S.QuestionsContent>
      <S.Number>{questionNumber} </S.Number>
      <S.QuestionTitle> {title}</S.QuestionTitle>
    </S.QuestionsContent>
  )
}
