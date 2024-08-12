import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';  // استيراد السمة
import 'primereact/resources/primereact.min.css';          // استيراد الأنماط الأساسية
import 'primeicons/primeicons.css';                        // استيراد أيقونات PrimeReact

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
