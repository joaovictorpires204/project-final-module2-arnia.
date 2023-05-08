import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 10px 40px;
`

const BreadcrumbOne = styled.div`
  background-color: white;
  width: 330px;
  height: 50px;
  border: 1px solid var(--primary-color);
  border-right: none;
`

const BreadcrumbTwo = styled.div`
  display: flex;
  background-color: white;
  width: 330px;
  height: 50px;
  border: 1px solid var(--primary-color);
  border-right: none;
  border-left: none;
`

const BreadcrumbThree = styled.div`
  display: flex;
  background-color: white;
  width: 330px;
  height: 50px;
  border: 1px solid var(--primary-color);
  border-left: none;
`

const Text = styled.div`
  margin: 18px 40px;
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
`

const TriangleLeft = styled.div`
  position: relative;
  background-color: #f2f2f2;
  width: 20px;
  height: 52px;
  clip-path: polygon(0% 0, 100% 50%, 0% 100%, 0 50%);
`

const TriangleRight = styled.div`
  position: relative;
  background-color: white;
  width: 20px;
  height: 52px;
  clip-path: polygon(0% 0, 100% 50%, 0% 100%, 0 50%);
`
const BarTop = styled.div`
  position: absolute;
  top: 21px;
  left: -2px;
  background-color: var(--primary-color);
  margin: -9px;
  width: 40px;
  height: 1px;
  transform: rotate(52deg);
`

const BarBottom = styled.div`
  position: absolute;
  top: 45px;
  background-color: var(--primary-color);
  margin: -9px;
  width: 41px;
  height: 1px;
  transform: rotate(-52deg);
`

export default {
  Container,
  BreadcrumbOne,
  BreadcrumbTwo,
  BreadcrumbThree,
  Text,
  TriangleLeft,
  TriangleRight,
  BarTop,
  BarBottom
}
