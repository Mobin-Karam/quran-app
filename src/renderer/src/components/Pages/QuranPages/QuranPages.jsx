import React, { useEffect, useState } from 'react'
import Photos from '../../Main/Photos/Photos.jsx'
import BackButton from '../../Buttons/BackButton/BackButton.jsx'
import NextButton from '../../Buttons/NextButton/NextButton.jsx'
import LoadingSpinner from '../../LoadingComponents/LoadingSpinner.jsx'

const QuranPages = () => {
  const [index, setIndex] = useState(0)
  const visibleCount = 1

  const next = () => {
    if (index + visibleCount < Photos.length) {
      setIndex(index + visibleCount)
    }
  }

  const prev = () => {
    if (index - visibleCount >= 0) {
      setIndex(index - visibleCount)
    }
  }

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

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${(index * 100) / Photos.length}%)`,
          width: `${loading ? 100 : (Photos.length * 100) / visibleCount}%`
        }}
      >
        {loading && <LoadingSpinner />}
        {!loading &&
          Photos.map((src, i) => (
            <div
              key={i}
              className="w-[calc(100%/302)] flex flex-row items-center justify-center overflow-hidden"
            >
              <BackButton prev={prev} index={index} />
              <div className="flex flex-col items-center justify-center pb-10">
                <img src={src} alt={`Image ${i + 1}`} className="w-full max-h-screen pt-10" />
                <p className="">{i + 1}</p>
              </div>
              <NextButton next={next} index={index} Photos={Photos} visibleCount={visibleCount} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default QuranPages
