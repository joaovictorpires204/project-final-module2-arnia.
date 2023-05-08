import styled from 'styled-components'

const AlertImg = styled.img`
  width: 300px;
  height: 250px;
  margin: 0 100px;
`

const DeleteContent = styled.div`
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const LeftBtn = styled.button`
  background-color: #2F80ED;
  width: 180px;
  height: 40px;
  margin: 20px 50px;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`

const RightBtn = styled.button`
  background-color: #eb5757;
  width: 180px;
  height: 40px;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`

export default {
  DeleteContent,
  AlertImg,
  RightBtn,
  LeftBtn
}
