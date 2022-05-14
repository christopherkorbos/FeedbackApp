
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header'

import Feedbacklist from './components/Feedbacklist'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForms from'./components/FeedbackForms'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/shared/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
   
    
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route 
          exact 
          path='/' 
          element={
          <>
           <FeedbackForms />
            <FeedbackStats />
            <Feedbacklist />
          </>
        }>
          </Route>

            <Route path='/about' element={<AboutPage/>} />
            </Routes>
            <AboutIconLink/>
        </div>
     </Router>
     </FeedbackProvider>
    )   
}


export default App