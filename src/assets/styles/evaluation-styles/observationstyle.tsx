import styled from 'styled-components'

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f80ed;
  width: 180px;
  height: 30px;
  padding: 10px;
  margin: 20px 0px;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`

const Plusimg = styled.img`
  position: relative;
  left: 20px;
  top: 5px;
`

const OptionsContainer = styled.div`
  position: relative;
  background-color: white;
  width: 300px;
  height: auto;
  top: -70px;
  left: 75px;
  padding: 30px 40px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 0 3px 4px lightgray;
  z-index: 3;
`

const OptionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

const Optionsdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
`

const OptionBtn = styled.button`
  background-color: #e0e0e0;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 5px;
  color: #e0e0e0;

  &:focus {
    background-color: var(--primary-color);
  }
`

const AplicBtn = styled.button`
  background-color: var(--primary-color);
  width: 180px;
  height: 30px;
  margin: 10px auto;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`

export default {
  Select,
  Plusimg,
  OptionsContainer,
  OptionsContent,
  Optionsdiv,
  OptionBtn,
  AplicBtn
}
