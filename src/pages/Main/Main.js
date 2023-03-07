import BestProduct from '../../components/BestProduct/BestProduct';
import NewProduct from '../../components/NewProduct/NewProduct';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="wrap">
        <div className="mainImg">
          <img src="/images/KakaoTalk_20230303_112042004.jpg" alt="zz" />
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
