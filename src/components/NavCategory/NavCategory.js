import React from 'react';
import './NavCategory.scss';

const NavCategory = ({ division, category, photo }) => {
  return division ? (
    <div className="navCateGory">
      <div className="navCateGoryInner">
        <ul>{division && division.map(item => <li key={item}>{item}</li>)}</ul>
        <ul>{category && category.map(item => <li key={item}>{item}</li>)}</ul>
        <ul className="categoryPhoto">
          {photo &&
            photo.map(item => (
              <li key={item}>
                <img src={`${item}`} alt="ss" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
};

export default NavCategory;
