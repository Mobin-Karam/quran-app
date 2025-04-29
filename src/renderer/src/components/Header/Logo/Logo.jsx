import electronLogo from '../../../assets/quran-app-logo.png'

function Logo() {
  return (
    <div className='flex flex-row items-center'>
      <img alt="logo" className="h-12" src={electronLogo} />
      <h1 className="">برنامه قرآن برای حجره</h1>
    </div>
  )
}

export default Logo
