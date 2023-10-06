import { NavLink } from 'react-router-dom'
import './main.css'
import { useContext } from 'react'
import { DataContext } from '../../Hooks/useContext'
import Switcher from '../../Hooks/Switcher'

function Navbar() {

    const { menu, setMenu, arr } = useContext(DataContext)

    return (
        <div className="flex justify-between items-center px-[15px] max-lgx:hidden">
            <ul className="navbar__wrapper flex gap-4 flex-wrap text-white ">
                {arr.map(item => {
                    return (<li className='py-[13px]'><NavLink to={`/page`} className='h-6 flex  items-center'>{item} <box-icon name='chevron-down' color='#fff'></box-icon></NavLink></li>)
                })}
            </ul>
            <ul className="flex items-center gap-4  text-white">
                <li className='h-9'><Switcher /></li>
                <li className='h-6'><box-icon name='search' color='#ffffff' ></box-icon></li>
                <li className='h-6 flex  items-center' >O'ZB <box-icon name='chevron-down' color='#fff'></box-icon></li>
                <li className='h-6' onClick={() => setMenu(menu == true ? false : true)}><box-icon name='menu' color='#ffffff'></box-icon></li>
            </ul>
        </div >
    )
}

export default Navbar