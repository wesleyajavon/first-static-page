import '../index.css'


export default function Header() {
    return (
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <a href="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
            <img src='src/assets/react.svg' className="logo" alt='React Logo'/>
            <span className="fs-4">Wesley Ajavon</span>
          </a>
          <ul className="nav nav-pills">
              <li className='nav-item'>
                <a href="#" className="nav-link active" aria-current="page">Home</a>
              </li>
              <li className='nav-item'>
                <a href="#" className="nav-link" aria-current="page">Pricing</a>
              </li>
              <li className='nav-item'>
                <a href="#" className="nav-link" aria-current="page">About</a>
              </li>
              <li className='nav-item'>
                <a href="#" className="nav-link" aria-current="page">Contact</a>
              </li>
          </ul>
        </header>      
    )
  }