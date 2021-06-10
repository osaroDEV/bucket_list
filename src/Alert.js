import React from 'react'

const Alert = ({display,msg,tone}) => {
  return (
    <div className={`alert ${tone}`}>
      <p>{msg}</p>
    </div>
  )
}

export default Alert
