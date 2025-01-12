import React from 'react';

export interface CustomAlertRequest {
    message: string;
    type: string;
    onClose: () => void;
}

const CustomAlert = ({ message, type, onClose }:CustomAlertRequest) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>팝업 내용</h2>
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default CustomAlert;