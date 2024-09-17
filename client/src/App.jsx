import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home' 
import Chat from './pages/Chat'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/chat' element={<Chat />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
