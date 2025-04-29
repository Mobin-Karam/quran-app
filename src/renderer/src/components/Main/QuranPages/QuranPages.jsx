import React, { useState } from 'react'
import Photos from '../Photos/Photos.jsx'
import BackButton from '../../Buttons/BackButton/BackButton.jsx'
import NextButton from '../../Buttons/NextButton/NextButton.jsx'

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

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out overflow-hidden"
        style={{
          transform: `translateX(${(index * 100) / Photos.length}%)`,
          width: `${(Photos.length * 100) / visibleCount}%`
        }}
      >
        {Photos.map((src, i) => (
          <div
            key={i}
            className="w-[calc(100%/302)] flex flex-row items-center justify-center overflow-hidden"
          >
            <BackButton prev={prev} index={index} />
            <div className="">
              <img src={src} alt={`Image ${i + 1}`} className="w-full max-h-screen" />
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
