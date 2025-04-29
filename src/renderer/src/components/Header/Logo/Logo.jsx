import electronLogo from '../../../assets/quran-app-logo.png'

function Logo({Text}) {
  return (
    <div className='flex flex-row items-center'>
      <img alt="logo" className="h-12" src={electronLogo} />
      <h1 className="">{Text}</h1>
    </div>
  )
}

export default Logo
