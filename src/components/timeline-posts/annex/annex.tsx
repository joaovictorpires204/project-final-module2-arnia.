import S from '../../../assets/styles/timeline-posts/timelinestyle'
import Edit from '../../../assets/icons/edit-list.png'
import See from '../../../assets/icons/see-list.png'
import Check from '../../../assets/icons/checkmark-circle.png'

export const ListAnnex = () => {
  return (
    <>
      <S.List>
        <S.Line>
          <div>Entrevista Psicológica</div>
          <S.LineBtn>
            <S.BtnFinish>Realizado</S.BtnFinish>
            <img src={Edit} alt="" />
            <img src={See} alt="" />
          </S.LineBtn>
        </S.Line>
        <S.Line>
          <div>Aplicação de teste</div>
          <S.LineBtn>
            <S.BtnFinish>Realizado</S.BtnFinish>
            <img src={Edit} alt="" />
            <img src={See} alt="" />
          </S.LineBtn>
        </S.Line>
        <S.Line>
          <div>Observação Comportamental</div>
          <S.LineBtn>
            <S.BtnFinish>Realizado</S.BtnFinish>
            <img src={Edit} alt="" />
            <img src={See} alt="" />
          </S.LineBtn>
        </S.Line>
      </S.List>
        <div>Emitir</div>
      <S.Footer>
        <S.FooterBtns color='#00995d' style={{color: 'white'}}>
            <S.Img src={Check} alt="" />
            Laudo</S.FooterBtns>
        <S.FooterBtns color='#F5F5F5'>Atestado</S.FooterBtns>
        <S.FooterBtns color='#F5F5F5'>Relátorio</S.FooterBtns>
        <S.FooterBtns color='#F5F5F5'>Declaração</S.FooterBtns>
      </S.Footer>
    </>
  )
}
