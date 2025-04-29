import QuranPages from './QuranPages/QuranPages'
import SurahList from './SurahList/SurahList'

function Main({ value1 }) {
  return (
    <div className="w-screen flex flex-row items-center justify-center">
      {value1 === 0 ? <SurahList /> : <QuranPages value1={value1} />}
    </div>
  )
}

export default Main
