import React from 'react'
import { ListElement } from './ListElement'
import SurahListData from '../../../Data/SurahListData'

const SurahList = () => {
  return (
    <div className="w-full h-screen flex flex-col flex-wrap gap-6 p-4">
      {SurahListData.map((surah, index) => (
        <Link to={index}>
          <ListElement key={index}>{surah.name_arabic}</ListElement>
        </Link>
      ))}
    </div>
  )
}

export default SurahList
