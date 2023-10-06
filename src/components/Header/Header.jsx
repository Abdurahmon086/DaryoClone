import { Link } from 'react-router-dom'
import Logo from '../../../public/Icon/logo.svg'
import menun from '../../../public/Icon/menu.svg'
import moon from '../../../public/Icon/moon.svg'
import Reklama from '../../../public/img/optimize.webp'
import Navbar from '../Navbar/Navbar'
import { useContext } from 'react'
import { DataContext } from '../../Hooks/useContext'
import Switcher from '../../Hooks/Switcher'

function Header() {
    const { menu, setMenu } = useContext(DataContext)
    return (
        <header className='container '>
            <div className="head  gap-4 py-7 w-full flex justify-between items-center  " >
                <button className='hidden  max-lgx:block' onClick={() => setMenu(menu == false ? true : false)}><img src={menun} alt="menu icon" /></button>
                <Link to='/' className=' flex-auto'>
                    <img src={Logo} alt="daryo logo" className=' flex-1 w-full mx-auto max-lgx:h-16 ' />
                </Link>
                <img src={Reklama} alt="Rekalama" className='flex-auto w-[60%] block max-lgx:hidden ' />
                <div className=" hidden max-lgx:flex gap-5 justify-end items-center">
                    <button className='w-6 h-8'><Switcher/></button>
                    <button className='w-6 h-6'><box-icon name='search' color='#000'></box-icon></button>
                </div>
            </div>
            <nav className='bg-black'>
                <Navbar />
            </nav>
        </header>
    )
}

export default Header