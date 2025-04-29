import electronLogo from '../../../assets/quran-app-logo.png'

function Logo({ Text }) {
  return (
    <div className="flex flex-row items-center">
      <img alt="logo" className="hover:bg-cyan-100 h-12 cursor-pointer hover:transition-all hover:duration-200 rounded-2xl p-0.5" src={electronLogo} />
      <h1 className="">{Text}</h1>
    </div>
  )
}

export default Logo
