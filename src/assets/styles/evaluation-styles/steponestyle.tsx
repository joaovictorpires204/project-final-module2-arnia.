import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 10px 40px;
`

const StepsContent = styled.div`
  display: flex;
`

const BreadcrumbOne = styled.div`
  background-color: white;
  width: 332px;
  height: 50px;
  border: 1px solid #017849;
  border-right: none;
`

const BreadcrumbTwo = styled.div`
  display: flex;
  background-color: #d2dad5;
  width: 332px;
  height: 50px;
  border: 1px solid #d2dad5;
  border-right: none;
  border-left: none;
`

const BreadcrumbThree = styled.div`
  display: flex;
  background-color: #d2dad5;
  width: 332px;
  height: 50px;
  border: 1px solid #d2dad5;
  border-left: none;
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

export default {
  Container,
  StepsContent,
  BreadcrumbOne,
  BreadcrumbTwo,
  BreadcrumbThree,
  Text,
  TriangleLeft,
  TriangleRight,
  BarTop,
  BarBottom
}
