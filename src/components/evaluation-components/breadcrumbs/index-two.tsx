import S from '../../../assets/styles/evaluation-styles/setptwostyle'
import Check from '../../../assets/icons/checkmark-circle.png'

export const BreadcrumbsTwo = () => {
  return (
    <S.Container>
      <S.BreadcrumbOne>
        <S.Check src={Check} alt="" />
        <S.Text color='white'>Entrevista Psicológica</S.Text>
      </S.BreadcrumbOne>
      <S.TriangleRight color='#017849'>
        <S.BarTop color='#017849'></S.BarTop>
        <S.BarBottom color='#017849'></S.BarBottom>
      </S.TriangleRight>

      <S.BreadcrumbTwo>
        <S.TriangleLeft color="#f2f2f2">
          <S.BarTop color='#017849'></S.BarTop>
          <S.BarBottom color='#017849'></S.BarBottom>
        </S.TriangleLeft>
        <S.Text color='#017849'>Aplicação de Teste</S.Text>
      </S.BreadcrumbTwo>
      <S.TriangleRight color='white'>
        <S.BarTop color='#017849'></S.BarTop>
        <S.BarBottom color='#017849'></S.BarBottom>
      </S.TriangleRight>

      <S.BreadcrumbThree>
        <S.TriangleLeft color="#f2f2f2">
          <S.BarTop color="#d2dad5"></S.BarTop>
          <S.BarBottom color="#d2dad5"></S.BarBottom>
        </S.TriangleLeft>
        <S.Text  color="#969f99">Observação Comportamental</S.Text>
      </S.BreadcrumbThree>
    </S.Container>
  )
}
