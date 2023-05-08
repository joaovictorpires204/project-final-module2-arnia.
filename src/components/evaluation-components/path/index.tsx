import S from '../../../assets/styles/evaluation-styles/index'
import ArrowLeft from '../../../assets/icons/arrow-ios-left.png'
import { Link } from 'react-router-dom'

export const Path = () => {
  return (
    <S.PathContent>
      <Link to="/">
        <img src={ArrowLeft} alt="" />
      </Link>
      <div>Voltar | </div>
      <div>Avaliação Psicológica | </div>
      <div>
        <strong>Data:</strong> 10/09/2022
      </div>
    </S.PathContent>
  )
}
