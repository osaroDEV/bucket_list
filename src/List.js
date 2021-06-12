import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useGlobalContext } from './context';

const List = ({ name, id }) => {
  const { handleDel, handleEdit } = useGlobalContext();
  return (
    <div className='list'>
      <p>{name}</p>
      <section className='icon-container'>
        <FaEdit className='edit' onClick={() => handleEdit(id)} />
        <FaTrashAlt className='del' onClick={() => handleDel(id)} />
      </section>
    </div>
  );
};

export default List;
