import React, { useContext } from 'react'
import Logo from '../../../public/Icon/logo.svg'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../Hooks/useContext'

function MenuNav() {
  const { menu, setMenu, arr } = useContext(DataContext)
  return (
    <div className='flex flex-col   w-[100vw] h-[100vh] bg-whiteGrey bg-opacity-50 dark:bg-blackMini dark:bg-opacity-50 ' onClick={() => setMenu(false)}>
      <div className="w-[370px] h-[100vh] bg-[#fff] dark:bg-blackMini px-[25px] pt-[38px]">
        <div className="flex justify-center relative">
          <img src={Logo} alt="Daryo logo" className='h-[53px]  ' />
          <button onClick={() => setMenu(false)} className='absolute top-[-38px] left-[304px] z-10 w-10 h-7 bg-black'><box-icon name='x' color='#fff' ></box-icon></button>
        </div>
        <ul className='flex gap-1 items-center mt-10 bg-[#eee] rounded-3xl px-1 max-w-[190px] overflow-hidden'>
          <li className=' px-2 text-center py-[14px] dark:text-blackBold bg-blueBtn rounded-[50%] font-normal'>UZB</li>
          <li className=' px-2 text-center py-[14px] dark:text-blackBold font-normal'>RUS</li>
          <li className=' px-2 text-center py-[14px] dark:text-blackBold font-normal'>ENG</li>
          <li className=' px-2 text-center py-[14px] dark:text-blackBold font-normal'>UZB</li>
        </ul>
        <ul className='pt-5'>
          {arr.map(item => {
            return (<li className='py-[13px] border-b-2 border-whiteGrey'><NavLink to={`/page`} className='h-6 flex items-center font-bold  '>{item} <box-icon name='chevron-down' color='#fff'></box-icon></NavLink></li>)
          })}
        </ul>
        <ul className='pt-10 flex gap-5'>
          <li className='flex gap-4'><span>USD</span> <p>12198.12</p></li>
          <li className='flex gap-4'><span>RUB</span> <p>122.17</p></li>
          <li className='flex gap-4'><span>EUR</span> <p>12817.78</p></li>
        </ul>
        <ul className='pt-10 flex gap-2 items-center'>
          <li className='flex items-center gap-2 w-full'><box-icon name='play-store' type='logo' color='#000' ></box-icon> <p className='text-xs font-normal'>Google play</p></li>
          <li className='flex items-center gap-2 w-full'><box-icon name='apple' type='logo' color='#000' ></box-icon> <p className='text-xs font-normal'>Apple Store</p></li>
          <li className='flex items-center gap-2 w-full'><box-icon name='telegram' type='logo' color='#000' ></box-icon><p className='text-xs font-normal'>Telegram</p></li>
        </ul>
        <div className="flex justify-center mt-8 gap-3">
          <a href="#" className='w-[38px] h-[38px] border-2 flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='telegram' type='logo' color='#000' ></box-icon></a>
          <a href="#" className='w-[38px] h-[38px] border-2 flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='youtube' type='logo' color='#000' ></box-icon></a>
          <a href="#" className='w-[38px] h-[38px] border-2 flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='facebook' type='logo' color='#000' ></box-icon></a>
          <a href="#" className='w-[38px] h-[38px] border-2 flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='instagram' type='logo' color='#000' ></box-icon></a>
          <a href="#" className='w-[38px] h-[38px]  border-2 flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='twitter' type='logo' color='#000' ></box-icon></a>
        </div>
      </div>
    </div>
  )
}

export default MenuNav