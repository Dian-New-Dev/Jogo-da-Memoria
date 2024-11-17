import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='scale-[1]'>
            <App />
        </div>
    </StrictMode>,
)
