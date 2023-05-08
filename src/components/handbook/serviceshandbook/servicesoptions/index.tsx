import S from '../../../../assets/styles/handbook-styles/servicesstyle'
import Head from '../../../../assets/images/head.png'
import Important from '../../../../assets/images/important.png'
import Anexo from '../../../../assets/images/anexo.png'
import Notes from '../../../../assets/images/notes.png'
import { useState } from 'react'
import { NewSession } from '../../../modal/handbook/new-session'
import { Eva } from '../../../modal/handbook/eva'
import { Fact } from '../../../modal/handbook/fact'
import { Annex } from '../../../modal/handbook/annex'

export const ServicesOptions = () => {
  const [modalActiveNew, setModalActiveNew] = useState(false)
  const [modalActiveFact, setmodalActiveFact] = useState(false)
  const [modalActiveAnnex, setModalActiveAnnex] = useState(false)
  const [modalActiveEva, setModalActiveEva] = useState(false)

  return (
    <S.ContainerBarIcons>
      <S.BarIcons onClick={() => setModalActiveNew(!modalActiveNew)}>
        <S.IconImg src={Head} alt="" />
        <p>Sessão</p>
      </S.BarIcons>
      {modalActiveNew && <NewSession isActive={modalActiveNew} closeModal={() => setModalActiveNew(false)} />}

      <S.BarIcons onClick={() => setmodalActiveFact(!modalActiveFact)}>
        <S.IconImg src={Important} alt="" />
        <p>Fato relevante</p>
      </S.BarIcons>
      {modalActiveFact && <Fact isActive={modalActiveFact} closeModal={() => setmodalActiveFact(false)}></Fact>}

      <S.BarIcons onClick={() => setModalActiveAnnex(!modalActiveAnnex)}>
        <S.IconImg src={Anexo} alt="" />
        <p>Anexo</p>
      </S.BarIcons>
      {modalActiveAnnex && <Annex isActive={modalActiveAnnex} closeModal={() => setModalActiveAnnex(false)}></Annex>}

      <S.BarIcons onClick={() => setModalActiveEva(!modalActiveEva)}>
        <S.IconImg src={Notes} alt="" />
        <p>Avaliação Psicológica</p>
      </S.BarIcons>
      {modalActiveEva && <Eva isActive={modalActiveEva} closeModal={() => setModalActiveEva(false)}></Eva>}
    </S.ContainerBarIcons>
    
  )
}
