import React from 'react'
import Logo from '../../../public/Icon/logo.svg'


function Footer() {
    return (
        <footer className='bg-black '>
            <div className="container mx-auto">
                <div className="flex flex-col items-start py-14 ">
                    <img src={Logo} alt="Daryo logo " className='h-12 mb-5' />
                    <p className='text-grey font-light '>“Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz</p>
                    <div className="flex mt-8 gap-3">
                        <a href="#" className='w-[38px] h-[38px] bg-[#ffffff1f] flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='telegram' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="#" className='w-[38px] h-[38px] bg-[#ffffff1f] flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='youtube' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="#" className='w-[38px] h-[38px] bg-[#ffffff1f] flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="#" className='w-[38px] h-[38px] bg-[#ffffff1f] flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="#" className='w-[38px] h-[38px] bg-[#ffffff1f] flex items-center justify-center rounded-[50%] hover:bg-blueBtn'><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
                    </div>
                </div>
                <div className="flex py-6 px-8 justify-between items-center max-lg:flex-col max-lg:gap-6">
                    <p className='text-greyBold text-[13px] font-light'>© «Simple Networking Solutions» MChJ, 2013–2023</p>
                    <div className="flex gap-5 max-lg:flex-col max-lg:gap-6 max-lg:items-center">
                        <div className="flex gap-3 items-center"> <button className='w-[24px] h-[24px] bg-white rounded-[50%] flex items-center justify-center text-[12px] '>18+</button> <p className='text-greyBold text-[13px] font-light'>Yosh bo‘yicha cheklov</p></div>
                        <div className="flex gap-3 items-center"> <button className='w-[24px] h-[24px] bg-white rounded-[50%] flex items-center justify-center text-[12px] '>📵</button> <p className='text-greyBold text-[13px] font-light' F>Xato topdingizmi? Ctrl+Enter’ni bosing</p></div>
                    </div>
                    <ul className="flex gap-5 flex-wrap items-center justify-center">
                        <li><a href="#" className='text-whiteGrey text-[13px] font-normal'>Foydalanish shartlari</a></li>
                        <li><a href="#" className='text-whiteGrey text-[13px] font-normal'> Maxfiylik siyosati</a></li>
                        <li><a href="#" className='text-whiteGrey text-[13px] font-normal'> Reklama</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer