import styled from '@emotion/styled'

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`

const LayoutStyle = styled.div`
  display: flex;
`

const LogoNavBar = styled.div`
  background-color: white;
  width: 60px;
  height: 60px;
  box-shadow: 1px 1px 10px 1px lightgray;
  z-index: 3;
`

const LogoStyle = styled.img`
  margin: 5px 15px;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
`

const SideNavBar = styled.div`
  background-color: #00995d;
  width: 60px;
  height: auto;
  display: flex;
  flex-direction: column;
`

const SideNavBarIco = styled.img`
  width: 20px;
  margin: 15px auto;
  color: white;
  cursor: pointer;
`

const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 60px;
  box-shadow: 1px 1px 10px 1px lightgray;
  z-index: 1;
`

const Message = styled.div`
display: flex;
align-items: center;
gap: 6px;
color: var(--primary-color);
`

const MenuTopNavBar = styled.img`
  width: 25px;
  margin: 18px 20px;
  cursor: pointer;
`

export default {
  Container,
  LayoutStyle,
  LogoNavBar,
  LogoStyle,
  TopNavBar,
  MenuTopNavBar,
  Message,
  Content,
  SideNavBar,
  SideNavBarIco
}
