import styled from 'styled-components'

const Bar = styled.div`
  background-color: #bdbdbd;
  width: 100%;
  height: 1px;
  border-radius: 50px;
  margin: 0px 0px;
`

const FooterCard = styled.div`
  position: fixed;
  background-color: white;
  width: 560px;
  height: 80px;
  bottom: 120px;
  left: 395px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
`

const CancelButton = styled.button`
  background-color: transparent;
  margin-right: 20px;
  border: none;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
`

const CreateButton = styled.button`
  background-color: var(--primary-color);
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  color: var(--white-color);
  cursor: pointer;
`

export default {
  Bar,
  FooterCard,
  FooterContent,
  CancelButton,
  CreateButton
}
