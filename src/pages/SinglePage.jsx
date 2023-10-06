import React, { useContext } from 'react'
import Right from '../components/eSide/Right'
import { DataContext } from '../Hooks/useContext'
import { Link } from 'react-router-dom'

function SinglePage() {
    const { data6 } = useContext(DataContext)
    console.log(data6)
    return (
        <div className='container '>
            <div className="mt-8 flex w-full max-lg:flex-col gap-5">
                <div className='pr-[18px] w-[70%] h-[100vh] flex-auto grid grid-cols-1  '>
                    <ul className="grid grid-cols-2  gap-10">
                        {data6.map((item) => {
                            return (
                                <li key={item.id}><Link to={`/${item.id}`} className='flex flex-col gap-5 '>
                                    <img src={item.img} alt="img" className='' />
                                    <div className="flex flex-col gap-2">
                                        <p className='text-black hover:text-blueBtn dark:text-white'>{item.title}</p>
                                        <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                                    </div>
                                </Link></li>
                            )
                        })}
 
                    </ul>
                </div>
                <aside className="pl-[26px] w-[30%] flex-auto mb-5 sticky max-lg:w-full max-lg:p-0">
                    <Right />
                </aside>
            </div>
        </div>
    )
}

export default SinglePage