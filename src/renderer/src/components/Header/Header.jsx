import React from 'react'
import Logo from './Logo/Logo'
import Button from '../Buttons/Button/Button'

export default function Header({ LogoText, btn }) {
  return (
    <div className="w-auto h-screen flex flex-col border-b-2 border border-black">
      <Logo Text={LogoText} />
      <Button
        className={'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50'}
        onClick={btn}
      >
        خانه
      </Button>
    </div>
  )
}
