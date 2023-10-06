import React, { useContext } from 'react'
import back from '../../public/img/back.jpg'
import Right from '../components/eSide/Right'
import { DataContext } from '../Hooks/useContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { data, data6, menu } = useContext(DataContext)

  return (
    <section className=' container dark:text-white'>
      <div className="mt-8 flex w-full max-lg:flex-col gap-5 ">
        <div className="left  pr-[18px]  w-[70%] flex-auto  max-lg:w-full max-lg:p-0">
          <div className="hero flex mb-5 gap-5 flex-col">
            <Link to={`/${1}`} className="w-full relative transition-colors " >
              <img src={back} alt="hero img" className='w-full h-[405px] max-lg:h-[357px]  ' />
              <div className="absolute bottom-14 left-7">
                <button className='bg-blueBtn px-2 text-[10px] mb-4'>MAHALLIY</button>
                <h3 className='text-white text-[28px] max-w-[568px] font-bold max-md:text-lg hover:text-whiteGrey '>O‘zbekistonda 5-oktyabr kuni havo harorati 34 darajagacha ko‘tariladi</h3>
              </div>
            </Link>
            <ul className="flex justify-between gap-5 overflow-x-hidden  max-lg:flex-wrap ">
              {data6?.map((item, i) => {
                return (
                  <li key={item.id} className='max-w-[138px] max-lg:max-w-[46%]'><Link to={`/${item.id}`}> <img src={item.img} alt={item.title} height={82} /><h4 className='mt-3 text-sm  h-[60px] overflow-hidden hover:text-blueBtn '>{item.title}</h4></Link> </li>
                )
              })
              }</ul>
          </div>
          <div className="secondPart flex flex-col mb-[40px]">
            <div className="border-b-[1px] border-grey mb-[26px]">
              <h4 className='pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>Dunyo</h4>
            </div>
            <div className="flex justify-between gap-5 max-lg:flex-col">
              {/* left */}
              <div className="left flex-auto w-[50% ]max-lg:w-full">
                <div className="relative">
                  <Link to={`/1`} > <img src={back} alt="img" className='h-[214px] w-full  ' /> </Link>
                  <button className='absolute px-2 bottom-0 left-0 bg-blueBtn text-[10px]'>DUNYO</button>
                </div>
                <Link to={`/1`} className='block text-[17px] my-3 hover:text-blueBtn' >Kimyo bo‘yicha Nobel mukofoti uch nafar olimga berildi, ulardan biri — asli rossiyalik</Link>
                <span className='text-[10px] text-grey font-sans '>15:00 / 04.10.2023</span>
                <p className=' text-[#505050] font-normal mt-3 dark:text-white'>Mukofot olimlarga “kvant nuqtalarini yaratish va sintez qilish usulini ishlab chiqqani uchun&r...</p>
              </div>
              {/* right */}
              <ul className="right flex-auto w-[50%] flex flex-col gap-7 max-lg:w-full max-lg:gap-5">
                {data.map((item, i) => {
                  return (
                    <li key={item.id}><Link to={`/${item.id}`} className='flex gap-5'>
                      <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                      <div className="flex flex-col gap-2">
                        <p className='text-black dark:text-white hover:text-blueBtn'>{item.title}</p>
                        <span className='text-[10px]  text-grey font-sans'>{item.time}</span>
                      </div>
                    </Link></li>
                  )
                })}
              </ul>
            </div>
            <button className='bg-blueBtn text-white mt-3 p-1'>MAHALLIY – ENG SO‘NGGI XABARLARI</button>
          </div>
          <div className="thordPart flex flex-col mb-[40px]">
            <div className="border-b-[1px] border-grey mb-[26px]">
              <h4 className='pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>Mahalliy</h4>
            </div>
            <div className="flex justify-between flex-row-reverse gap-5 max-lg:flex-col-reverse ">
              {/* left */}
              <div className="left flex-auto w-[50%] max-lg:w-full">
                <div className="relative">
                  <Link to={`/${1}`}> <img src={back} alt="img" className='h-[214px] w-full' /></Link>
                  <button className='absolute px-2 bottom-0 left-0 bg-blueBtn text-[10px]'>DUNYO</button>
                </div>
                <Link to={`/${1}`} className='block text-[17px] my-3 hover:text-blueBtn' >Kimyo bo‘yicha Nobel mukofoti uch nafar olimga berildi, ulardan biri — asli rossiyalik</Link>
                <span className='text-[10px] text-grey font-sans '>15:00 / 04.10.2023</span>
                <p className=' text-[#505050] font-normal mt-3 dark:text-white'>Mukofot olimlarga “kvant nuqtalarini yaratish va sintez qilish usulini ishlab chiqqani uchun&r...</p>
              </div>
              {/* right */}
              <ul className="right flex-auto w-[50%] flex flex-col gap-7 max-lg:w-full">
                {data.map((item, i) => {
                  return (
                    <li key={item.id}><Link to={`/${item.id}`} className='flex gap-5'>
                      <img src={item.img} alt="img" className='max-h-[69px] max-w-[92px]' />
                      <div className="flex flex-col gap-2">
                        <p className='text-black hover:text-blueBtn dark:text-white'>{item.title}</p>
                        <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                      </div>
                    </Link></li>
                  )
                })}
              </ul>
            </div>
            <button className='bg-blueBtn text-white mt-3 p-1'>MAHALLIY – ENG SO‘NGGI XABARLARI</button>
          </div>
          <div className="forthPart flex flex-col mb-[40px]">
            <div className="border-b-[1px] border-grey mb-[26px]">
              <h4 className='pb-[13px] text-[16px] font-bold border-b-4 border-blueBtn inline-block'>Lifestyle</h4>
            </div>
            <div className="grid gap-7">
              {/* top */}
              <div className="top grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                <Link to={`/${1}`} className="w-full relative" >
                  <img src={back} alt="hero img" className='w-full  object-cover' />
                  <div className="absolute bottom-14 max-lg:bottom-5 left-7">
                    <button className='bg-blueBtn px-2 text-[10px] mb-4'>SALOMATLIK</button>
                    <h3 className='text-white text-[17px] max-w-[80%] font-bold max-lg:text-sm max-lg:max-w-[95%] hover:text-whiteGrey'>Nima uchun tomoq achishadi? Ushbu yoqimsiz alomatdan qanday qutulish mumkin? </h3>
                  </div>
                </Link>
                <Link to={`/${1}`} className="w-full relative" >
                  <img src={back} alt="hero img" className='w-full  object-cover' />
                  <div className="absolute bottom-14 max-lg:bottom-5 left-7">
                    <button className='bg-blueBtn px-2 text-[10px] mb-4'> LAYFSTAYL</button>
                    <h3 className='text-white text-[17px] max-w-[80%] font-bold max-lg:text-sm max-lg:max-w-[95%] hover:text-whiteGrey'>Immunitet nima sababdan pasayadi va uni qanday qilib ko‘tarish mumkin? </h3>
                  </div>
                </Link>
              </div>
              {/* bottom */}
              <ul className="bottom grid grid-cols-2 gap-x-10 gap-y-5 max-lg:grid-cols-1">
                {data6.map((item, i) => {
                  return (
                    <li key={item.id}><Link to={`/${item.id}`} className='flex gap-5'>
                      <img src={item.img} alt={item.title} className='max-h-[69px] max-w-[92px]' />
                      <div className="flex flex-col gap-2">
                        <p className='text-black hover:text-blueBtn dark:text-white'>{item.title}</p>
                        <span className='text-[10px] text-grey font-sans'>{item.time}</span>
                      </div>
                    </Link></li>
                  )
                })}
              </ul>
            </div>
            <button className='bg-blueBtn text-white mt-3 p-1'>MAHALLIY – ENG SO‘NGGI XABARLARI</button>
          </div>
        </div>
        <aside className="pl-[26px] w-[30%] flex-auto mb-5 sticky max-lg:w-full max-lg:p-0">
          <Right data={data} />
        </aside>
      </div>
    </section>
  )
}

export default Home