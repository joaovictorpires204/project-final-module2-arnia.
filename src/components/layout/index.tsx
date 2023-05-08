import S from '../../assets/styles/layoutstyle'
import Logo from '../../assets/icons/logo.png'
import Users from '../../assets/icons/people.png'
import ToDo from '../../assets/icons/todo-fill.png'
import Plus from '../../assets/icons/add-circle-fill.png'
import Settings from '../../assets/icons/settings-2.png'
import Menu from '../../assets/icons/menu.png'
import { Link, Outlet } from 'react-router-dom'
import ArrowDown from '../.../../../assets/icons/arrow-down.png'

export const Layout = () => {

  return (
    <S.Container>
      <S.LayoutStyle>
        <S.LogoNavBar>
          <Link to="/">
            <S.LogoStyle src={Logo} alt="" />
          </Link>
        </S.LogoNavBar>
        <S.TopNavBar>
          <S.MenuTopNavBar src={Menu} alt=""/>
          <S.Message>Bem vindo(a),  <strong>João</strong>
          <img src={ArrowDown} alt="" />
          </S.Message>
        </S.TopNavBar>
      </S.LayoutStyle>
      <S.Content>
        <S.SideNavBar>
          <S.SideNavBarIco src={Users} alt="" />
          <S.SideNavBarIco src={ToDo} alt="" />
          <S.SideNavBarIco src={Plus} alt="" />
          <S.SideNavBarIco src={Settings} alt="" />
        </S.SideNavBar>
        <Outlet />
      </S.Content>
    </S.Container>
  )
}
