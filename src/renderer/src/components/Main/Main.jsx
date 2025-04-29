import HomePage from '../Pages/HomePage/HomePage'
import ListPage from '../Pages/ListPage/ListPage'
import QuranPages from '../Pages/QuranPages/QuranPages'
import { Routes, Route, Link } from 'react-router-dom'

function Main({ value1 }) {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SurahList" element={<ListPage />} />
        <Route path="/QuranPages" element={ <QuranPages />} />
      </Routes>
    </div>
  )
}

export default Main
