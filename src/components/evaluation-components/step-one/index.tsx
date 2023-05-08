import { DividerSection } from '../divider-section'
import S from '../../../assets/styles/evaluation-styles/formstyle'
import B from '../../../assets/styles/evaluation-styles/headerstyle'
import { SectionOne } from './section-1'
import { SectionTwo } from './section-2'
import { SectionThree } from './section-3'
import { SectionFour } from './section-4'
import { SectionFive } from './section-5'
import { SectionSix } from './section-6'
import { SectionSeven } from './section-7'
import Save from '../../../assets/icons/save.png'
import Arrow from '../../../assets/icons/arrow-right.png'
import { Header } from '../header'
import { Link } from 'react-router-dom'
import { BreadcrumbsOne } from '../breadcrumbs/index-one'
import { Path } from '../path'

export const FormFirstStep = () => {
  return (
    <>
    <Path />
    <div>
      <BreadcrumbsOne />
    </div>
      <Header title="Avaliação Psicológica" direction="/avaliacaopsicologica/teste" isActive={true}/>
      <S.FormContainer>
        <S.Sintex>
          Síntese da entrevista
          <div>
            <S.TextArea name="" id="" cols={90} rows={6} placeholder='Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar...'></S.TextArea>
          </div>
        </S.Sintex>
        <DividerSection title="Condições para realização da avaliação" />
        <SectionOne />
        <DividerSection title="Histórico familiar" />
        <SectionTwo />
        <DividerSection title="Vida Profissional" />
        <SectionThree />
        <DividerSection title="Vida Escolar" />
        <SectionFour />
        <DividerSection title="Saúde" />
        <SectionFive />
        <DividerSection title="Hábitos e conduta social" />
        <SectionSix />
        <DividerSection title="Complementos para atividade remunerada como condutor" />
        <SectionSeven />
        <S.FormFooter>
          <Link to="/avaliacaopsicologica/teste" style={{ textDecoration: 'none' }}>
            <B.SaveBtn>
              <img src={Save} alt="" />
              Salvar
            </B.SaveBtn>
          </Link>
          <Link to="/avaliacaopsicologica/teste" style={{ textDecoration: 'none' }}>
            <B.SkipBtn>
              Pular
              <img src={Arrow} alt="" />
            </B.SkipBtn>
          </Link>
        </S.FormFooter>
      </S.FormContainer>
    </>
  )
}
