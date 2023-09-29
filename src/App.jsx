import { useEffect, useState } from 'react';
import { useLocalStorage } from './helpers/storageHelper';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchServerData } from '/src/helpers/mondayData';
import { buildWebDetail } from '/src/helpers/viewHelper';
//import { Home } from '/src/components/home';
//import { Product } from '/src/components/product';
//import { Solutions } from '/src/components/solutions';
//import { Pricing } from '/src/components/pricing';
//import { Faq } from '/src/components/faq';
//import { Messenger } from '/src/components/messenger';
//import { Workdoc } from './components/workdoc';

//Ensure async data reading is performed once at a time
let fetchControl = false;

function App() {
  //const [board, setBoard] = useState(undefined);
  const [board, setBoard] = useLocalStorage('2p-web_board', { fetch: false });
  const [detail, setDetail] = useState(undefined);

  useEffect(() => {
    const buildBoardDetail = async() => {
      if (fetchControl === false) {
        fetchControl = true;
        let boardDetail = await fetchServerData();
        setBoard(boardDetail);
        fetchControl = false;
      }
    }
    buildBoardDetail();
    console.log("board: ", board)
  }, []);

  useEffect(() => {
    const buildDetail = buildWebDetail(board);
    setDetail(buildDetail);
  }, [board])
    console.log('detail app.jsx: ', detail);
  
  return (
    <BrowserRouter>
{/*       <Routes>
        <Route path="/" element={<Home header={detail?.header} footer={detail?.footer} home={detail?.home} />} />
        <Route path="/product" element={<Product header={detail?.header} footer={detail?.footer} product={detail?.product} />} />
        <Route path="/solutions" element={<Solutions header={detail?.header} footer={detail?.footer} solutions={detail?.solutions} />} />
        <Route path="/pricing" element={<Pricing header={detail?.header} footer={detail?.footer} pricing={detail?.pricing} />}/>
        <Route path="/faq" element={<Faq header={detail?.header} footer={detail?.footer} faq={detail?.faq} />}   />
        <Route path="/privacy" element={<Workdoc header={detail?.header} footer={detail?.footer} workdoc={'privacy'} />}/>
        <Route path="/contact" element={<Workdoc header={detail?.header} footer={detail?.footer} workdoc={'contact'} />} />
        <Route path="*" element={<Messenger message={'notFound'} />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;