import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './components/Loading/Loading'

// import { Form } from './components/Form/Form'

function App() {
  return (
    <>
      <Header />
      <Loading />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
