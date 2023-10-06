import React, { useContext } from 'react'
import back from '../../../public/img/back.jpg'
import './main.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Hooks/useContext'

function Right() {
    const { data } = useContext(DataContext)
    return (
        <div className="scroll dark:text-white">
            <div className="border-b-[1px] pb-3   border-grey mb-[8px]">
                <a href='#' className=' w-full block text-left bg-blueBtn p-[2px] pl-1 text-base font-bold'>So‘nggi yangiliklarga o‘tish</a>
            </div>
            <ul className="scroll-wrapper grid grid-cols-1 gap-y-7 h-[470px] overflow-y-auto scroll-smooth p-4 mb-5">
                {data.map((item, i) => {
                    return (
                        <li key={item.id} className='flex gap-5' >
                            <Link to={`/${item.id}`} className="flex flex-col gap-2">
                                <p className='text-black dark:text-white'>{item.title}</p>
                                <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                            </Link>
                            <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                        </li>)
                })}
                {data.map((item, i) => {
                    return (
                        <Link to={`/${item.id}`} key={item.id}><a href="#" className='flex gap-5'>
                            <div className="flex flex-col gap-2">
                                <p className='text-black dark:text-white'>{item.title}</p>
                                <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                            </div>
                            <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                        </a></Link>)
                })}
            </ul>
            <div className="tavsiya mb-10">
                <div className="border-b-[1px] pb-3border-grey mb-[8px]">
                    <h4 className=' pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>Tavsiya etamiz</h4>
                </div>
                <ul className=" grid grid-cols-1 gap-y-7 mt-5">
                    {data.map((item, i) => {
                        return (
                            <li key={item.id}><aLink to={`/${item.id}`} className='flex gap-5'>
                                <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                                <div className="flex flex-col gap-2">
                                    <p className='text-black hover:text-blueBtn dark:text-white'>{item.title}</p>
                                    <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                                </div>
                            </aLink></li>)
                    })}
                </ul>
            </div>
            <div className="molya mb-5">
                <div className="border-b-[1px] pb-3border-grey mb-[26px]">
                    <h4 className=' pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>MOLIYA</h4>
                </div>
                <div className="relative">
                    <img src={back} alt="img" className='h-[214px] w-full' />
                    <button className='absolute px-2 bottom-0 left-0 bg-blueBtn text-[10px]'>DUNYO</button>
                </div>
                <Link to={`/${1}`} className='block text-[17px] my-3 hover:text-blueBtn ' >Kimyo bo‘yicha Nobel mukofoti uch nafar olimga berildi, ulardan biri — asli rossiyalik</Link>
                <span className='text-[10px] text-grey font-sans '>15:00 / 04.10.2023</span>
                <ul className=" grid grid-cols-1 gap-y-7 mt-7">
                    {data.map((item, i) => {
                        return (
                            <li key={item.id}><Link to={`/${item.id}`} className='flex gap-5'>
                                <div className="flex flex-col gap-2">
                                    <p className='text-black hover:text-blueBtn dark:text-white'>{item.title}</p>
                                    <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                                </div>
                                <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                            </Link></li>)
                    })}
                </ul>
            </div>
            <div className="uqilganlar ">
                <div className="border-b-[1px] pb-3border-grey my-[26px]">
                    <h4 className=' pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>Ko‘p o‘qilganlar</h4>
                </div>
                <ol className='mt-5 grid grid-cols-1 gap-9'>
                    {data.map((item, i) => {
                        return (
                            <li key={item.id} className='flex gap-4'>
                                <div className="flex justify-center items-center min-w-[30px] max-h-[30px] bg-blueBtn text-whiteBold text-2xl rounded-[50%]">{i + 1}</div>
                                <Link to={`/${item.id}`}>
                                    <div className="flex flex-col gap-2">
                                        <p className='text-black text-[15px] hover:text-blueBtn dark:text-white'>{item.title}</p>
                                        <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div >
    )
}

export default Right