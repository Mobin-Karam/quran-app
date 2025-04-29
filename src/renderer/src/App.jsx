import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import LoadingSpinner from './components/LoadingComponents/LoadingSpinner'

function App() {
  // ===============Loading Spinner ===============
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate async data loading
    const fetchData = async () => {
      setLoading(true)
      const result = await new Promise((res) => setTimeout(() => res('Data loaded'), 2000))
      setData(result)
      setLoading(false)
    }

    fetchData()
  }, [])
  // ===============Loading Spinner ===============

  return (
    <div className="relative w-full h-auto flex flex-row">
      <Header />
      {loading && <LoadingSpinner />}
      {!loading && <Main />}
      {/* <Footer /> */}
    </div>
  )
}

export default App
