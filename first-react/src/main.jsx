import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import App from './components/App';




function Page() {
  return (
    <Fragment>
      <App />
    </Fragment>
    
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)

