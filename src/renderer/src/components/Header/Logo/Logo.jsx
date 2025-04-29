import electronLogo from '../../../assets/quran-app-logo.png'

function Logo({ Text, className }) {
  return (
    <div className="flex flex-row items-center">
      <img alt="logo" className={className} src={electronLogo} />
      <h1 className="">{Text}</h1>
    </div>
  )
}

export default Logo
