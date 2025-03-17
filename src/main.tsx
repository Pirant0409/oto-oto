import {HeroUIProvider} from '@heroui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from './components/Home.tsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <HeroUIProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </HeroUIProvider>
  </BrowserRouter>,
)
