import S from '../../../assets/styles/modal/sectionstyle'

type SectionProps = {
  section: number
  title: string
}

export const NumberSection = ({ section, title }: SectionProps) => {
  return (
    <>
      <S.ModalSection>
        <S.NumberCircle>{section}</S.NumberCircle>
        <div>{title}</div>
      </S.ModalSection>
    </>
  )
}
