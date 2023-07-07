import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './components/Loaders/Loading'
import { Person } from './components/Person'

// import { Form } from './components/Form/Form'

function App() {
  return (
    <>
      <Person />
      <Header />
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
