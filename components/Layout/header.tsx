import Profile from "./profile"

function Header() {
  return (
    <header className='h-11.25 w-full shrink-0 bg-menubar pe-5 flex items-center justify-between'>
        <div></div>
        <div className='flex items-center gap-4'>
            <Profile />
        </div>
    </header>
  )
}

export default Header