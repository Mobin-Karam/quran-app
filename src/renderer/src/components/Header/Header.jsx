import React from 'react'
import Logo from './Logo/Logo'
import Button from '../Buttons/Button/Button'

export default function Header({ LogoText, btn }) {
  return (
    <div className="w-full flex flex-row border-b-2 border border-black">
      <Logo Text={LogoText} />
      <Button onClick={btn}>خانه</Button>
    </div>
  )
}
