import React, { useEffect, useState } from 'react'
import SurahList from './SurahList/SurahList'
import LoadingSpinner from '../../LoadingComponents/LoadingSpinner'

const ListPage = () => {
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
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      {loading && <LoadingSpinner />}
      {!loading && <SurahList />}
    </div>
  )
}

export default ListPage
