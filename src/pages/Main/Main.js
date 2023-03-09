import { useState } from 'react';
import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
import './Main.scss';

const Main = () => {
  // const [mainCount, setMainCount] = useState(0);

  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          <img
            style={{}}
            src="/images/KakaoTalk_20230303_112042004.jpg"
            alt="zz"
          />
          <img src="/images/KakaoTalk_20230309_080951888.jpg" alt="zz" />
        </div>
        <div className="best">
          <BestProduct />
        </div>
        <div className="new">
          <NewProduct />
        </div>
      </div>
    </div>
  );
};

export default Main;
// function slider() {
//   count++;
//   if (count == containers.length) {
//     count = 0;
//   } else if (count < 0) {
//     count = containers.length - 1;
//   }
//   render();
// }
