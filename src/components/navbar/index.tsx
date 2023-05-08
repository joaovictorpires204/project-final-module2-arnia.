import S from '../../assets/styles/handbook-styles/timelinebarstyle'
import Search from '../../assets/images/search-line.png'

export const TimelineBar = () => {
  return (
    <S.TimelineNav>
      <S.TimelineNavBtns>
        <S.NavBtn color='lightgrey'>Dados Cadastrais</S.NavBtn>
        <S.NavBtn color='#00995d'>Protuário</S.NavBtn>
      </S.TimelineNavBtns>
      <S.SearchBar>
        <S.SearchInput type="search" name="" id="" placeholder="O que você está procurando? " />
        <S.SearchLand src={Search} alt="" />
      </S.SearchBar>
    </S.TimelineNav>
  )
}
