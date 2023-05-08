import styled from 'styled-components'

const Label = styled.label`
  font-size: 12px;
`

const InputsSectionMinor = styled.div`
  display: flex;
  gap: 35px;
  justify-content: space-around;
  align-items: center;
`

const InputsSectionMajor = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin: 10px 0;
`

const InputMinor = styled.input`
  width: 140px;
  height: 40px;
  margin: 5px 0 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`

const InputMajor = styled.input`
  width: 100%;
  height: 40px;
  margin: 5px 0 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  &:not(input) {
    height: 170px;
  }
`

const Select = styled.select`
  width: 140px;
  height: 40px;
  margin: 5px 0 20px;
  border: 1px solid var(--bg-color);
  border-radius: 5px;
`

const AnnexInput = styled.input`
  &:not(input) {
    background-color: var(--primary-color);
    border: none;
  }
`

const AlertEva = styled.div`
  background-color: #c5f2e0;
  width: 450px;
  height: 120px;
  padding: 10px 20px;
  border-radius: 10px;
`
const AlertTitle = styled.h3`
  color: var(--primary-color);
`

const AlertContent = styled.div`
  color: black;
  font-family: 'Monsetara';
  font-weight: 500;
  font-size: 16px;
`

const PaymentSection = styled.section`
  position: relative;
  top: -10px;
`

const Radios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80px;
  margin-top: 10px;
`

const Payment = styled.div`
  display: flex;
  gap: 5px;
`

export default {
  Label,
  InputsSectionMinor,
  InputsSectionMajor,
  InputMinor,
  InputMajor,
  Select,
  AnnexInput,
  AlertEva,
  AlertTitle,
  AlertContent,
  PaymentSection,
  Radios,
  Payment
}
