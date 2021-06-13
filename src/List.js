import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useGlobalContext } from './context';

const List = ({ name, id }) => {
  const { handleDel, handleEdit, cantDelete} = useGlobalContext();
  return (
    <div className='list'>
      <p>{name}</p>
      <section className='icon-container'>
        <button className='btn-icon'>
          <FaEdit className='edit' onClick={() => handleEdit(id)} />
        </button>
        <button
          className='btn-icon'
          disabled={cantDelete}
          onClick={() => handleDel(id)}
        >
          <FaTrashAlt className={`del ${cantDelete ? 'not-allowed' : ''}`} />
        </button>
      </section>
    </div>
  );
};

export default List;
