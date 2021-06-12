import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const ContextContainer = ({ children }) => {
  const [isAlert, setIsAlert] = useState({
    display: false,
    msg: 'fill values',
    tone: 'success',
  });
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleAlert = (display = false, msg = '', tone = '') => {
    setIsAlert({ display: display, msg: msg, tone: tone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      handleAlert(true, 'entry cannot be blank', 'danger');
    } else if (item && isEdit) {
      setList(
        list.map((listItem) => {
          if (listItem.id === editID) {
            return { ...listItem, name: item };
          }
          return listItem;
        })
      );
      setItem('');
      setEditID(null);
      setIsEdit(false);
      handleAlert(true, 'item edited', 'success');
    } else {
      handleAlert(true, 'item has been added', 'success');
      let newItem = { id: new Date().getTime().toString(), name: item };
      setList([...list, newItem]);
      setItem('');
    }
  };

  const handleDel = (id) => {
    let newItems = list.filter((listItem) => listItem.id !== id);
    setList(newItems);
    handleAlert(true, 'an item has been removed', 'danger');
  };

  const deleteAll = () => {
    setList([]);
    handleAlert(true, 'all items removed', 'danger');
  };

  const handleEdit = (id) => {
    const targetItem = list.find((listItem) => listItem.id === id);
    console.log(targetItem);
    setIsEdit(true);
    setEditID(id);
    setItem(targetItem.name);
  };

  return (
    <AppContext.Provider
      value={{
        handleDel,
        handleEdit,
        handleSubmit,
        handleAlert,
        deleteAll,
        isAlert,
        setIsAlert,
        setList,
        item,
        setItem,
        list,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { ContextContainer, useGlobalContext };
