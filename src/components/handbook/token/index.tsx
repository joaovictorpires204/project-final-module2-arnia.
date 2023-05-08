import { Title } from '../title'
import S from '../../../assets/styles/handbook-styles/tokenstyle'
import User from '../../../assets/images/user-line.png'
import Calendar from '../../../assets/images/calendar-line.png'
import BriefCase from '../../../assets/images/briefcase-4-line.png'
import Book from '../../../assets/images/book-mark-line.png'

export const Token = () => {
  return (
    <S.TokenCard>
      <div>
        <Title title="Identificação do Paciente" />
        <S.TokenContent>
          <S.TokenSection>
            <S.TokenHeader>
              <S.TokenIcon src={User} alt="" />
              <S.InfoText>Paciente</S.InfoText>
            </S.TokenHeader>
            <S.TokenDescrip>Ana Ester Resende</S.TokenDescrip>
          </S.TokenSection>

          <S.TokenSection>
            <S.TokenHeader>
              <S.TokenIcon src={Calendar} alt="" />
              <S.InfoText>Nascimento</S.InfoText>
            </S.TokenHeader>
            <S.TokenDescrip>10/09/200</S.TokenDescrip>
          </S.TokenSection>

          <S.TokenSection>
            <S.TokenHeader>
              <S.TokenIcon src={BriefCase} alt="" />
              <S.InfoText>Profissão</S.InfoText>
            </S.TokenHeader>
            <S.TokenDescrip>Designer</S.TokenDescrip>
          </S.TokenSection>

          <S.TokenSection>
            <S.TokenHeader>
              <S.TokenIcon src={Book} alt="" />
              <S.InfoText>Escolaridade</S.InfoText>
            </S.TokenHeader>
            <S.TokenDescrip>Superior Incompleto</S.TokenDescrip>
          </S.TokenSection>
        </S.TokenContent>
      </div>
    </S.TokenCard>
  )
}

export default Token
