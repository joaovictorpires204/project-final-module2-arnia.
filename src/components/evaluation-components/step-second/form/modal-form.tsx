import S from '../../../../assets/styles/evaluation-styles/formtwostyle'
import O from '../../../../assets/styles/evaluation-styles/observationstyle'
import F from '../../../../assets/styles/evaluation-styles/formstyle'
import H from '../../../../assets/styles/evaluation-styles/headerstyle'
import { FormSectionFour } from './section-four'
import { FormSectionOne } from './section-one'
import { FormSectionThree } from './section-three'
import { FormSectionTwo } from './section-two'
import Plus from '../../../../assets/icons/plus.png'
import ArroDown from '../../../../assets/icons/arrow-down-s-fill.png'
import { Link } from 'react-router-dom'
import Save from '../../../../assets/icons/save.png'
import Arrow from '../../../../assets/icons/arrow-right.png'

export const ModalForm = () => {
  return (
    <>
      <S.ModalContainer>
        <FormSectionOne />
        <FormSectionTwo />
        <FormSectionThree />
        <FormSectionFour />
        <O.Select>
          <img src={Plus} alt="" />
          Adicionar
          <img src={ArroDown} alt="" />
        </O.Select>
        <F.FormFooter>
          <Link to="/avaliacaopsicologica/observacao" style={{ textDecoration: 'none' }}>
            <H.SaveBtn>
              <img src={Save} alt="" />
              Salvar
            </H.SaveBtn>
          </Link>
          <Link to="/avaliacaopsicologica/observacao" style={{ textDecoration: 'none' }}>
            <H.SkipBtn>
              Pular
              <img src={Arrow} alt="" />
            </H.SkipBtn>
          </Link>
        </F.FormFooter>
      </S.ModalContainer>
    </>
  )
}
