import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './layout/Loader';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Single from './pages/Single';
import 'boxicons'
import { DataContext } from './Hooks/useContext';
import MenuNav from './assets/menu/MenuNav';
import SinglePage from './pages/SinglePage';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const data = [
    {
      id: 1,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 2,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 3,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 4,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    }
  ]
  const data6 = [
    {
      id: 1,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 2,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 3,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 4,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 5,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    },
    {
      id: 6,
      title: "Futzal. O‘zbekiston terma jamoasi Osiyo Kubogi saralashi doirasida 3 ta mamlakatga qarshi o‘yin o‘tkazadi",
      time: "17:00 / 04.10.2023",
      img: "../../public/img/back.jpg"
    }
  ]

  const arr = ["Mahalliy", "Markaziy Osiyo", "DUNYO", "PUL", "MADANIYAT", "LAYFSTAYL", "SPORT", "KOLUMNISTLAR", "MULTIMEDIA"]



  return (
    <DataContext.Provider value={{ data, data6, menu, setMenu, arr }} >
      <div className=''>
        {showLoader ? (
          <Loader />
        ) : (
          <Suspense>
            <div style={menu == true ? { display: 'block' } : { display: 'none' }} className="menu fixed top-0 left-0 z-50 dark:text-white" >
              <MenuNav set={setMenu} />
            </div>
            <div className='dark:bg-blackMini'>
              <Header  />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Single />} />
                <Route path='/page' element={<SinglePage />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </Suspense>
        )}
      </div>
    </DataContext.Provider >
  );
}

export default App;
