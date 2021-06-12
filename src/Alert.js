import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const Alert = ({ msg, tone }) => {
  const { setIsAlert, isAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert({ ...isAlert, display: false });
    }, 1500);

    return () => clearTimeout(timeout);
  }, [setIsAlert, isAlert]);

  return (
    <div className={`alert ${tone}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
