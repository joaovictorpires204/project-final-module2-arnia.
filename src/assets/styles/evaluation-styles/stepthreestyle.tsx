import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 10px 40px;
`

const StepsContent = styled.div`
  display: flex;
`

const BreadcrumbOne = styled.div`
  display: flex;
  align-items: center;
  background-color: #017849;
  width: 332px;
  height: 50px;
  border: 1px solid #017849;
  border-right: none;
`

const BreadcrumbTwo = styled.div`
  display: flex;
  align-items: center;
  background-color: #017849;
  width: 332px;
  height: 50px;
  border: 1px solid #017849;
  border-right: none;
  border-left: none;
`

const BreadcrumbThree = styled.div`
  display: flex;
  background-color: white;
  width: 332px;
  height: 50px;
  border: 1px solid #017849;
  border-left: none;
`

const Check = styled.img`
  position: relative;
  left: 30px;
`

const Text = styled.div`
  margin: 18px 40px;
  font-size: 14px;
  color: ${color => color.color};
  font-weight: 600;
`

const TriangleLeft = styled.div`
  position: relative;
  background-color: ${color => color.color};
  width: 20px;
  height: 52px;
  clip-path: polygon(0% 0, 100% 50%, 0% 100%, 0 50%);
`

const TriangleRight = styled.div`
  position: relative;
  background-color: ${color => color.color};
  width: 20px;
  height: 52px;
  clip-path: polygon(0% 0, 100% 50%, 0% 100%, 0 50%);
`
const BarTop = styled.div`
  position: absolute;
  top: 21px;
  left: -2px;
  background-color: ${color => color.color};
  margin: -9px;
  width: 40px;
  height: 1px;
  transform: rotate(52deg);
`

const BarBottom = styled.div`
  position: absolute;
  top: 45px;
  background-color: ${color => color.color};
  margin: -9px;
  width: 41px;
  height: 1px;
  transform: rotate(-52deg);
`

const FormContent = styled.div`
  width: 650px;
  height: 330px;
  padding: 30px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px lightgray;
`

const Editor = styled.div`
  margin: 30px 0;
`

const CheckImg = styled.img`
  width: 200px;
  height: 180px;
  margin: 0 140px;
`

const CheckTitle = styled.div`
  width: 300px;
  margin: 5px 100px;
  color: var(--primary-color);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`

const CheckText = styled.div`
  width: 300px;
  margin: 5px 100px;
  font-size: 18px;
  text-align: center;
`

const CheckBtn = styled.button`
  background-color: var(--primary-color);
  width: 200px;
  height: 40px;
  margin: 12px 150px;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`

export default {
  Container,
  StepsContent,
  BreadcrumbOne,
  BreadcrumbTwo,
  BreadcrumbThree,
  Check,
  Text,
  TriangleLeft,
  TriangleRight,
  BarTop,
  BarBottom,
  FormContent,
  Editor,
  CheckImg,
  CheckTitle,
  CheckText,
  CheckBtn
}
