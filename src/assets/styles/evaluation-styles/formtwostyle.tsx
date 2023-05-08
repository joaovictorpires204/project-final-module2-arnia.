import styled from 'styled-components'

const ModalContainer = styled.div`
  position: relative;
  top: -347px;
  background-color: white;
  width: 960px;
  height: auto;
  margin: 0 40px;
  padding: 30px 40px;
  z-index: 4;
`

const Container = styled.div`
  margin: 40px 0;
`

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 720px;
  height: 20px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 3px 4px lightgray;
  font-weight: 600;
`

const Btn = styled.img`
  width: 35px;
  height: 30px;
  margin-top: -4px;
  cursor: pointer;
`
const FormContent = styled.div`
  position: relative;
  top: -20px;
  background-color: #f2f2f2;
  width: 650px;
  height: auto;
  padding: 50px;
`

const FirstLine = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`

const Input = styled.input`
  background-color: #e0e0e0;
  width: 135px;
  height: 25px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;

  &:focus {
    outline: 1px solid grey;
  }
`

const Obs = styled.input`
  background-color: #e0e0e0;
  width: 636px;
  height: 25px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`

const Ad = styled.section`
  display: flex;
  gap: 30px;
`

const InputAd = styled.input`
  background-color: #e0e0e0;
  width: 240px;
  height: 25px;
  margin-top: 5px;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;

  &:focus {
    outline: 1px solid grey;
  }
`

export default {
  ModalContainer,
  Container,
  HeaderContainer,
  Header,
  Btn,
  FormContent,
  FirstLine,
  Label,
  Input,
  Obs,
  Ad,
  InputAd
}
