import styled from 'styled-components'

const Container = styled.div`
  margin: 30px 20px;
`
const SearchbarContaier = styled.div`
  background-color: white;
  width: 790px;
  height: 110px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px lightgray;
`

const Searchbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Service = styled.div`
  margin: 0 -25px;
`

const Select = styled.select`
  width: 400px;
  height: 40px;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`

const NavIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-right: -20px;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const Bar = styled.div`
  background-color: lightgrey;
  width: 810px;
  height: 1px;
  border-radius: 50px;
  margin: 20px -10px;
`

const ContainerBarIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 -50px;
`

const BarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const IconImg = styled.img`
  width: 25px;
  height: 25px;
`

export default {
  Container,
  SearchbarContaier,
  Searchbar,
  Service,
  Select,
  NavIcons,
  Icon,
  Bar,
  ContainerBarIcons,
  BarIcons,
  IconImg
}
