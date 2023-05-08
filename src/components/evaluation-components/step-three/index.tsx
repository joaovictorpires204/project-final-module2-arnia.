import S from '../../../assets/styles/evaluation-styles/formstyle'
import F from '../../../assets/styles/evaluation-styles/stepthreestyle'
import B from '../../../assets/styles/evaluation-styles/headerstyle'
import { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { Header } from '../header'
import { Link } from 'react-router-dom'
import Save from '../../../assets/icons/save.png'
import { BreadcrumbsThree } from '../breadcrumbs/index-three'
import { ModalSave } from './modal-save'

export const FormThirdStep = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [isModalActive, setIsModalActive] = useState(false)

  const config = {
    readonly: false,
    height: 260
  }

  return (
    <>
      <div>
        <BreadcrumbsThree />
      </div>
      <Header title="Observação Comportamental" direction="" isActive={false} setIsModalActive={() => setIsModalActive(!isModalActive)}/>
      <S.FormContainer>
        <F.FormContent>
          <div>Síntese das observações comportamentais</div>
          <F.Editor>
            <JoditEditor ref={editor} value={content} config={config} />
          </F.Editor>
        </F.FormContent>
        <S.FormFooter>
          <B.SaveBtn onClick={() => setIsModalActive(!isModalActive)}>
            <img src={Save} alt="" />
            Salvar
          </B.SaveBtn>
          {isModalActive && <ModalSave isActive={isModalActive} />}
        </S.FormFooter>
      </S.FormContainer>
    </>
  )
}
