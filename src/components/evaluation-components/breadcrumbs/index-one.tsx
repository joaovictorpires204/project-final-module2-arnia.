import S from '../../../assets/styles/evaluation-styles/steponestyle'

export const BreadcrumbsOne = () => {
  return (
    <S.Container>
      <S.StepsContent>
        <S.BreadcrumbOne>
          <S.Text color="#017849">Entrevista Psicológica</S.Text>
        </S.BreadcrumbOne>
        <S.TriangleRight color="white">
          <S.BarTop color="#017849"></S.BarTop>
          <S.BarBottom color="#017849"></S.BarBottom>
        </S.TriangleRight>
      </S.StepsContent>
      <S.StepsContent>
        <S.BreadcrumbTwo>
          <S.TriangleLeft color="#f2f2f2">
            <S.BarTop color="#d2dad5"></S.BarTop>
            <S.BarBottom color="#d2dad5"></S.BarBottom>
          </S.TriangleLeft>
          <S.Text color="#969f99">Aplicação de Teste</S.Text>
        </S.BreadcrumbTwo>
        <S.TriangleRight color="#d2dad5">
          <S.BarTop color="#d2dad5"></S.BarTop>
          <S.BarBottom color="#d2dad5"></S.BarBottom>
        </S.TriangleRight>
      </S.StepsContent>
      <S.StepsContent>
        <S.BreadcrumbThree>
          <S.TriangleLeft color="#f2f2f2">
            <S.BarTop color="#d2dad5"></S.BarTop>
            <S.BarBottom color="#d2dad5"></S.BarBottom>
          </S.TriangleLeft>
          <S.Text color="#969f99">Observação Comportamental</S.Text>
        </S.BreadcrumbThree>
      </S.StepsContent>
    </S.Container>
  )
}
