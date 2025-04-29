import React from 'react';
function List({ items}) {
  return (
    <div className="list">
      {items.map((item, index) => (
        <div key={index} >
          {item.title}
        </div>
      ))}
    </div>
  );
}
export default React.memo(List);