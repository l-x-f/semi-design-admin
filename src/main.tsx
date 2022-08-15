import { createRoot } from 'react-dom/client'
import type { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import RenderRouter from '@/router'
import './styles/index.scss'

const App: FC = () => (
  <RecoilRoot>
    <Router>
      <RenderRouter />
    </Router>
  </RecoilRoot>
)

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
root.render(<App />)
