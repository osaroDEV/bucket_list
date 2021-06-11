import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const List = ({ name, id, handleDel }) => {
  return (
    <div className='list'>
      <p>{name}</p>
      <section className='icon-container'>
        <FaEdit className='edit' />
        <FaTrashAlt className='del' onClick={() => handleDel(id)} />
      </section>
    </div>
  );
};

export default List;
