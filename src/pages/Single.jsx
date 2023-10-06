import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Right from '../components/eSide/Right'
import { DataContext } from '../Hooks/useContext'



function Single() {
    const { id } = useParams()
    const {data} = useContext(DataContext)

    const singleData = data.find(item => item.id == id)

    return (
        <div className="container dark:text-white">
            <div className='mt-8 flex w-full max-lg:flex-col gap-5'>
                <div className='pr-[18px] w-[70%] flex-auto  h-auto max-lg:w-full max-lg:p-0'>
                    <section className="border-b-[1px] border-grey">
                        <button className='bg-blueBtn px-2 text-[12px] mb-2'>DUNYO</button>
                        <h2 className='my-4 text-[35px] max-lg:text-2xl'>{singleData.title}</h2>
                        <span className='text-[11px] text-[#606060] font-sans'>{singleData.time}</span>
                        <div className="wrapper px-7 mt-5 max-md:px-0">
                            <p className='mb-6 text-base text-[#1c1c1c] font-normal max-lg:text-sm dark:text-white'>Futzal bo‘yicha O‘zbekiston milliy terma jamoasi oktabr oyida Osiyo Kubogi saralash bosqichida doirasida o‘yinlar o‘tkazadi.</p>
                            <img src={singleData.img} alt={singleData.title} className='mb-6 max-h-[400px] w-full' />
                            <p className='mb-6 text-base text-[#1c1c1c] font-normal max-lg:text-sm dark:text-white'>Futzal terma jamoasi 7, 9 va 11-oktabr kunlari Kambodja, Malayziya va Iroq terma jamoalariga qarshi bahs olib boradi.</p>
                            <p className='mb-6 text-base text-[#1c1c1c] font-normal max-lg:text-sm dark:text-white'>Barcha uchrashuvlar Farg‘ona shahridagi “Samo” sport majmuasida o'tkaziladi.</p>

                            <div className="social my-6 pt-2 flex justify-end gap-1 max-md:justify-stretch">
                                <a href="#" className='h-8 px-6 py-1 max-md:flex-auto max-md:text-center max-md:px-0 bg-[#1a6dd4] '><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#" className='h-8 px-6 py-1 max-md:flex-auto max-md:text-center max-md:px-0 bg-[#55acef]'><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#" className='h-8 px-6 py-1 max-md:flex-auto max-md:text-center max-md:px-0 bg-[#02669a]'><box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#" className='h-8 px-6 py-1 max-md:flex-auto max-md:text-center max-md:px-0 bg-[#0088cc]'><box-icon name='telegram' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#" className='h-8 px-6 py-1 max-md:flex-auto max-md:text-center max-md:px-0 bg-[#000]'><box-icon name='envelope' color='#ffffff'  ></box-icon></a>
                            </div>
                        </div>
                    </section>
                </div>
                <aside className="pl-[26px] w-[30%] flex-auto mb-5 sticky max-lg:w-full max-lg:p-0">
                    <Right data={data} />
                </aside>
            </div >
        </div >
    )
}

export default Single