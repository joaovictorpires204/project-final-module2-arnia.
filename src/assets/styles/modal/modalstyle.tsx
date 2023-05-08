import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 10;
`

const ModalCard = styled.div`
  background-color: white;
  width: 500px;
  height: 360px;
  margin: 60px auto;
  padding: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
`

const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
`

const CloseBtn = styled.img`
  cursor: pointer;
`

const Bar = styled.div`
  background-color: #bdbdbd;
  width: 100%;
  height: 1px;
  border-radius: 50px;
  margin: 0px 0px;
`

export default {
  ModalContainer,
  ModalCard,
  ModalHead,
  CloseBtn,
  Bar
}
