import { useState } from 'react'
import S from '../../../../assets/styles/evaluation-styles/observationstyle'
import { ModalForm } from './modal-form'

export const Options = ({ isActive, closeModal }: OptionsProps) => {
  const [isFormActive, setIsFormActive] = useState(false)
  return (
    <>
      <>
        {isActive && (
          <S.OptionsContainer>
            <S.OptionsContent>
              <S.Optionsdiv>
                <S.OptionBtn>&#10003;</S.OptionBtn>
                <div>Atenção Concentrada/Seletiva</div>
              </S.Optionsdiv>
              <S.Optionsdiv>
                <S.OptionBtn>&#10003;</S.OptionBtn>
                <div>Memória</div>
              </S.Optionsdiv>
              <S.Optionsdiv>
                <S.OptionBtn>&#10003;</S.OptionBtn>
                <div>Inteligência</div>
              </S.Optionsdiv>
              <S.Optionsdiv>
                <S.OptionBtn>&#10003;</S.OptionBtn>
                <div>Personalidade</div>
              </S.Optionsdiv>
              <div onClick={() => setIsFormActive(!isFormActive)}>
                <S.AplicBtn>Aplicar</S.AplicBtn>
              </div>
            </S.OptionsContent>
          </S.OptionsContainer>
        )}
      </>
      {isFormActive && <ModalForm />}
    </>
  )
}
