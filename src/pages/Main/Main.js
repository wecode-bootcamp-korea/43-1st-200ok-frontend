import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          <img src="/images/KakaoTalk_20230303_112042004.jpg" alt="zz" />
        </div>
        <div className="best" />
        <div className="new" />
      </div>
    </div>
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
