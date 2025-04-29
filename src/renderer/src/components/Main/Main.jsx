import QuranPages from './QuranPages/QuranPages'
import SurahList from './SurahList/SurahList'

function Main({ value1 }) {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center overflow-hidden">
      {value1 === 0 ? <SurahList /> : <QuranPages value1={value1} />}
    </div>
  )
}

export default Main
