import S from '../../assets/styles/evaluation-styles/index'
import { Outlet } from 'react-router-dom'

export const Evaluation = () => {
  return (
    <S.EvaluationStyle>
      <Outlet/>
    </S.EvaluationStyle>
  )
}
