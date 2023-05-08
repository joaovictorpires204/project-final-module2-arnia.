import S from '../../../assets/styles/handbook-styles/servicesstyle'
import Edit from '../../../assets/icons/edit.png'
import Delete from '../../../assets/icons/delete.png'
import { ServicesOptions } from './servicesoptions'
import { useState } from 'react'
import { DeleteModal } from '../../modal/handbook/delete'

export const ServicesHandBook = () => {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <S.Container>
      <S.SearchbarContaier>
        <S.Searchbar>
          <S.Service>
            Serviço:
            <S.Select name="" id="">
              <option value="" selected>
                Novo Acompanhamento
              </option>
              <option value="">Porte de Arma</option>
              <option value="">Adicioanr novo serviço</option>
            </S.Select>
          </S.Service>
          <div>Data Inicial: 18/10/2022</div>
          <S.NavIcons>
            <S.Icon src={Edit} alt="" />
            <S.Icon src={Delete} alt="" onClick={() => setIsModalActive(!isModalActive)}/>
            {isModalActive && <DeleteModal isActive={isModalActive} closeModal={() => setIsModalActive(false)}/>}
          </S.NavIcons>
        </S.Searchbar>
        <S.Bar></S.Bar>
        <ServicesOptions />
      </S.SearchbarContaier>
    </S.Container>
  )
}
