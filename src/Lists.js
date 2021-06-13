import React from 'react';
import { useGlobalContext } from './context';
import List from './List';

const Lists = ({ list }) => {
  const { deleteAll, cantDelete } = useGlobalContext();
  return (
    <div className='list-ctn'>
      {list.map((listItem) => {
        return <List key={listItem.id} {...listItem} />;
      })}
      <button
        className={`clr-btn ${cantDelete ? 'no-pointer' : ''}`}
        disabled={cantDelete}
        onClick={deleteAll}
      >
        clear items
      </button>
    </div>
  );
};

export default Lists;
