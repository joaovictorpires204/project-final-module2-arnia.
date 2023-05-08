import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: 20px 40px;
  z-index: 1;
`

const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 1040px;
  height: 65px;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 1px lightgrey;
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`

const HeaderBorder = styled.div`
  background-color: var(--primary-color);
  width: 4px;
  height: 56px;
  border-top-left-radius: 90px;
  border-bottom-left-radius: 90px;
`

const HeaderTitle = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 20px;
  color: var(--primary-color);
`

const HeaderBtns = styled.div`
  display: flex;
  gap: 30px;
`

const SaveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--primary-color);
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  text-decoration-line: none !important;
  box-shadow: 0px 0px 4px 2px lightgrey;
`

const SkipBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  width: 150px;
  height: 40px;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  font-size: 18px;
  color: var(--primary-color);
  cursor: pointer;
`

const Write = styled.div`
  text-decoration: none !important;
`

export default {
  HeaderContainer,
  HeaderCard,
  HeaderContent,
  HeaderBorder,
  HeaderTitle,
  HeaderBtns,
  SaveBtn,
  SkipBtn,
  Write
}
