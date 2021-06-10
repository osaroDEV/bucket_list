import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const List = ({ list }) => {
  const { name } = list;
  return (
    <div className='list'>
      <p>{name}</p>
      <section className='icon-container'>
        <FaEdit />
      <FaTrashAlt />
      </section>
      
    </div>
  );
};

export default List;
