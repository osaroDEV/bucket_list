import React from 'react';
import List from './List'

const Lists = ({list, handleDel, setList}) => {
  return (
    <div className='list-ctn'>
      {list.map((listItem) => {
        return <List key={listItem.id} {...listItem} handleDel={handleDel} />
      })}
      <button className='clr-btn' onClick={() => setList([])}>clear items</button>
    </div>
  );
};

export default Lists;
