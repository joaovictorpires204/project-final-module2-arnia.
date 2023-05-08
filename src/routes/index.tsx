import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout'
import { Timeline } from '../pages/timeline'
import { Evaluation } from '../pages/evaluation'
import { FormFirstStep } from '../components/evaluation-components/step-one'
import { FormSecondStep } from '../components/evaluation-components/step-second'
import { FormThirdStep } from '../components/evaluation-components/step-three'

export const Router = () => {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Timeline />} />
          <Route path="/avaliacaopsicologica" element={<Evaluation />}>
            <Route path="/avaliacaopsicologica" element={<FormFirstStep />} />
            <Route path='/avaliacaopsicologica/teste' element={<FormSecondStep/>}/>
            <Route path='/avaliacaopsicologica/observacao' element={<FormThirdStep />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
