<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
=======
>>>>>>> 1278ea023b04f15a782f6e5f92295e9e4e59a468
=======
>>>>>>> e4f51e1e53ddc7b9f0daa1df52a6849b90ca7b60
=======
>>>>>>> 84f73a44464faa63157c933fa3ab453d1942f3ac
import './Main.scss';

const Main = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
<<<<<<< HEAD
          <img src="/images/KakaoTalk_20230303_112042004.jpg" alt="노을 사진" />
          <img src="/images/KakaoTalk_20230309_080951888.jpg" alt="나무 사진" />
        </div>
        <BestProduct />
        <NewProduct />
=======
          <img src="/images/KakaoTalk_20230303_112042004.jpg" alt="zz" />
        </div>
        <div className="best" />
        <div className="new" />
>>>>>>> 84f73a44464faa63157c933fa3ab453d1942f3ac
      </div>
    </div>
=======
=======
>>>>>>> e4f51e1e53ddc7b9f0daa1df52a6849b90ca7b60
    <>
      <div>안녕하세요</div>
      <div className="ggg">asdsd</div>
    </>
<<<<<<< HEAD
>>>>>>> 1278ea023b04f15a782f6e5f92295e9e4e59a468
=======
>>>>>>> e4f51e1e53ddc7b9f0daa1df52a6849b90ca7b60
  );
};

export default Main;

// const [isButtonWork, setIsButtonWork] = useState({emptyCheck : false});
// const {emptyCheck} = isButtonWork;

// const isAllChecked = Object.values(isButtonWork).every{value=>(value === true)};

// const handleCheckBox = e => {
//   setIsButtonWork(prev => ({...prev, [e.target.value] : !prev[e.target.value]}));
// };
// const handleAllCheck = () => {
//   const checkBoxKeys = Object.keys(isButtonWork);
//   checkBoxKeys.forEach(list => {
//     return setIsButtonWork(prev=>({...prev, [list] : !isAllChecked}))
//   });
// };

// <input checked={isAllChecked} onChange={handleAllCheck}/>
// <input checked={emptyCheck} onChange={handleCheckBox}/>
// //아마 {emptyCheck}가 아니라 {info.id}? 이런거로 하면 될듯
