import S from '../../../assets/styles/evaluation-styles/formstyle'
import O from '../../../assets/styles/evaluation-styles/observationstyle'
import { Header } from '../header'
import Plus from '../../../assets/icons/plus.png'
import ArroDown from '../../../assets/icons/arrow-down-s-fill.png'
import { BreadcrumbsTwo } from '../breadcrumbs/index-two'
import { Options } from './form/options'
import { useState } from 'react'

export const FormSecondStep = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div>
        <BreadcrumbsTwo />
      </div>
      <Header title="Aplicação do Teste" direction="/avaliacaopsicologica/observacao" isActive={true} />
      <S.FormContainer>
        <div>Por favor, adicione um teste</div>
        <O.Select onClick={() => setIsActive(!isActive)}>
          <img src={Plus} alt="" />
          Adicionar
          <img src={ArroDown} alt="" />
        </O.Select>
      </S.FormContainer>
      {isActive && <Options isActive={isActive} closeModal={()=> setIsActive(false)}/>
      }
    </>
  )
}
