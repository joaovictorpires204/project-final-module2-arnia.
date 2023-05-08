import styled from 'styled-components'

const TimelineNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 1130px;
  height: 60px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
`
const TimelineNavBtns = styled.div`
  
`

const NavBtn = styled.button`
  width: 200px;
  background-color: white;
  height: 40px;
  margin-top: 10px;
  border: 1px solid ${props => props.color};
  border-left-style: none;
  border-top-style: none;
  border-bottom-style: solid;
  border-right-style: solid;
  font-size: 17px;
  color: ${props => props.color};
  cursor: pointer;

  &:hover {
    border-left-style: none;
    border-top-style: none;
    border-bottom: 1px solid #00995d;
    border-right-style: solid;
    color: #00995d;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`

const SearchLand = styled.img`
  position: relative;
  right: 40px;
`

export default {
  TimelineNav,
  TimelineNavBtns,
  NavBtn,
  SearchBar,
  SearchInput,
  SearchLand
}
