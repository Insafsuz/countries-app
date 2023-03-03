import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Detail from './pages/Detail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Detail />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
