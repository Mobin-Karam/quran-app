import React from 'react'
import Button from '../Button/Button'

const NextButton = ({ next, index, visibleCount, Photos }) => {
  return (
    <Button
      onClick={next}
      disabled={index + visibleCount >= Photos.length}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50"
    >
      صفحه بعدی
    </Button>
  )
}

export default NextButton
