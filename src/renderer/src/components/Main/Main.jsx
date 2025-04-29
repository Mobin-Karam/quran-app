import HomePage from '../Pages/HomePage/HomePage'
import QuranPages from '../Pages/QuranPages/QuranPages'
import SurahList from './SurahList/SurahList'
import { Routes, Route, Link } from 'react-router-dom'

function Main({ value1 }) {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SurahList" element={<SurahList />} />
        <Route path="/QuranPages" element={ <QuranPages />} />
      </Routes>
    </div>
  )
}

export default Main
