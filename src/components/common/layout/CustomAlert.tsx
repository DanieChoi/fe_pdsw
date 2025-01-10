import React from 'react';

export interface CustomAlertRequest {
    message: string;
    type: string;
    onClose: () => void;
}

const CustomAlert = ({ message, type, onClose }:CustomAlertRequest) => {
  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">X</button>
    </div>
  );
};

export default CustomAlert;