import S from '../../../assets/styles/evaluation-styles/headerstyle'
import Save from '../../../assets/icons/save.png'
import Arrow from '../../../assets/icons/arrow-right.png'
import { Link } from 'react-router-dom'

type HeaderProps = {
  title: string
  direction: string
  isActive: boolean
  setIsModalActive?: () => void
}

export const Header = ({ title, direction, isActive, setIsModalActive}: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderCard>
        <S.HeaderBorder></S.HeaderBorder>
        <S.HeaderContent>
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <S.HeaderBtns>
            <Link to={direction} style={{ textDecoration: 'none' }}>
              <S.SaveBtn>
                <img src={Save} alt="" />
                <S.Write onClick={setIsModalActive}>Salvar</S.Write>
              </S.SaveBtn>
            </Link>
            {isActive && (
              <Link to={direction} style={{ textDecoration: 'none' }}>
                <S.SkipBtn>
                  Pular
                  <img src={Arrow} alt="" />
                </S.SkipBtn>
              </Link>
            )}
          </S.HeaderBtns>
        </S.HeaderContent>
      </S.HeaderCard>
    </S.HeaderContainer>
  )
}
