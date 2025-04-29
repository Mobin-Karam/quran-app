import React from 'react'
import Logo from './Logo/Logo'
import Button from '../Buttons/Button/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ LogoText }) {
  return (
    <div className="w-40 h-screen flex flex-col items-center justify-start shadow-cyan-800 shadow-2xl p-2 gap-4">
      <Logo Text={LogoText} />
      <Link to="/">
        <Button
          className={
            'px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-500 transition-all duration-200 disabled:opacity-50 cursor-pointer'
          }
        >
          خانه
        </Button>
      </Link>
      <Link to="/SurahList">
        <Button
          className={
            'px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-500 transition-all duration-200 disabled:opacity-50 cursor-pointer'
          }
        >
          لیست سوره‌ها
        </Button>
      </Link>
      <Link to="/QuranPages">
        <Button
          className={
            'px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-500 transition-all duration-200 disabled:opacity-50 cursor-pointer'
          }
        >
          القرآن الكريم
        </Button>
      </Link>
    </div>
  )
}
