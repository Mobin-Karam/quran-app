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
      {!loading && (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          {' '}
          <Logo
            className={
              'hover:bg-cyan-100 h-60 cursor-pointer hover:transition-all hover:duration-200 rounded-2xl p-0.5'
            }
          />
          <h1 className="font-bold text-6xl">القرآن الكريم</h1>
        </div>
      )}
    </div>
  )
}

export default HomePage
