import React from 'react'
import Button from '../Button/Button'

function BackButton({ prev, index }) {
  return (
    <Button
      onClick={prev}
      className={'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50'}
      disabled={index === 0}
    >
      صفحه قبلی
    </Button>
  )
}

export default BackButton
