import React, { useState } from 'react';
import Alert from './Alert';
import Lists from './Lists';

const App = () => {
  const [isAlert, setIsAlert] = useState({
    display: true,
    msg: 'fill values',
    tone: 'success',
  });
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleAlert = (
    display = true,
    msg = 'fill values',
    tone = 'success'
  ) => {
    setIsAlert({ display: display, msg: msg, tone: tone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    if (!item) {
      console.log('fill something');
      handleAlert(true, 'you are not welcome', 'danger');
      console.log(alert);
    }
    if (item) {
      console.log('ok');
      handleAlert(true, 'you are welcome', 'success');
      let newItem = { id: new Date().getTime().toString(), name: item };
      setList([...list, newItem]);
      setItem('');
      console.log(list);
      console.log(newItem);
      console.log(list.length);
    }
  };

  const handleDel = (id) => {
    let newItems = list.filter((listItem) => listItem.id !== id)
    setList(newItems)
  }

  return (
    <div className="app-container">
      <h3 style={{ textAlign: 'center' }}>Bucket List</h3>
      {isAlert.display ? <Alert {...isAlert} /> : ''}
      <form>
        <input
          type="text"
          placeholder="e.g alps sky-diving"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {list.length > 0 ? <Lists list={list} handleDel={handleDel} setList={setList} /> : ""}
    </div>
  );
};

export default App;
