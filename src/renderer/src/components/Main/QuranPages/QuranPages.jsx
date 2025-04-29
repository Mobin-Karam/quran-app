import React, { useState } from 'react'
import Photos from '../Photos/Photos.jsx'
import BackButton from '../../Buttons/BackButton/BackButton.jsx'
import NextButton from '../../Buttons/NextButton/NextButton.jsx'

const QuranPages = () => {
  const [index, setIndex] = useState(0)
  const visibleCount = 2

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

  return (
    <div className="overflow-hidden max-w-4xl mx-auto">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${(index * 100) / Photos.length}%)`,
          width: `${(Photos.length * 100) / visibleCount}%`
        }}
      >
        {Photos.map((src, i) => (
          <div key={i} className="w-[calc(100%/604)] flex flex-col items-center justify-center">
            <img src={src} alt={`Image ${i + 1}`} className="w-full h-screen object-cover" />
            <p className="">{i + 1}</p>
          </div>
        ))}
      </div>

      {/* Buttons  */}
      <div className="mt-4 flex justify-center space-x-4">
        <BackButton prev={prev} index={index} />
        <NextButton next={next} index={index} Photos={Photos} visibleCount={visibleCount} />
      </div>
    </div>
  )
}

export default QuranPages
