import React from 'react';
import './NavCategory.scss';

const NavCategory = ({ division, category, photo, altName }) => {
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
