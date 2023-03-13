import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavCategory.scss';

const NavCategory = ({ division, category, photo, altName, title, id }) => {
  // useEffect(() => {
  //   fetch(`http://10.58.52.75:3010/products?gender=${gender}&status=${status}`)
  //     .then(res => res.json())
  //     .then(data => setBestPhoto(data.data));
  // }, [gender]);

  return (
    division && (
      <div className="navCateGory">
        <div className="navCateGoryInner">
          <ul className="navCateGoryList">
            {division && division.map(item => <li key={item}>{item}</li>)}
          </ul>
          <ul className="navCateGoryList">
            {category && category.map(item => <li key={item}>{item}</li>)}
          </ul>
          <ul className="navCategoryPhoto">
            {photo &&
              photo.map(item => (
                <li className="photoList" key={item}>
                  <img className="photoImg" src={`${item}`} alt={altName} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default NavCategory;
