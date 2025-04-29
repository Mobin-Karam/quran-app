import React, { useEffect, useState } from 'react'
import Logo from '../../Header/Logo/Logo'
import LoadingSpinner from '../../LoadingComponents/LoadingSpinner'

const HomePage = () => {
  // ============ Loading Spinner ===================
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
  // ============ Loading Spinner ===================

  return (
    <div>
      {loading && <LoadingSpinner />}
      {!loading && <Logo />}
    </div>
  )
}

export default HomePage
