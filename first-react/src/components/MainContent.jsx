import '../index.css'

export default function MainContent() {
    return (
      <main>
        <div className='d-flex flex-column' >
          <div id="titre" className='d-flex flex-column'>
            <h1>Fun facts about me using React...</h1>
          </div>
            <ul className="list-group list-group-flush">
              <li id="test" className="list-group-item">Born and raised in Columbia 🇧🇪</li>
              <li className="list-group-item">Played College and Pro Soccer ⚽️ </li>
              <li className="list-group-item">Graduated from University of Luxembourg with a Bachelor in Computer Sciences 💻</li>
              <li className="list-group-item">Currently Studying in a Master of Science in Business Analytics 📈</li>
              <li className="list-group-item">Interested by frontend and backend web development 🫶</li>
              <li className="list-group-item">Looking for an opportunity to deepen my knowledge in Web Application Development...🛠</li>
            </ul>
          
      </div>
      </main>
      
    )
  }