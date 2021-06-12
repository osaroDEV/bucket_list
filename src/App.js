import React from 'react';
import Alert from './Alert';
import { useGlobalContext } from './context';
import Lists from './Lists';

const App = () => {
  const { isAlert, item, setItem, handleSubmit, list, isEdit } =
    useGlobalContext();
  return (
    <div className='app-container'>
      {isAlert.display ? <Alert {...isAlert} /> : ''}
      <h1 style={{ textAlign: 'center' }}>Bucket List</h1>
      <form>
        <input
          type='text'
          placeholder='e.g alps sky-diving'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button className='sub-btn' type='submit' onClick={handleSubmit}>
          {isEdit ? 'edit' : 'submit'}
        </button>
      </form>
      {list.length > 0 ? <Lists list={list} /> : ''}
    </div>
  );
};

export default App;
