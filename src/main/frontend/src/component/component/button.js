import React, { useState } from 'react';
import './button.css';

function EditButton({ item, onEdit }) {
  const [showModal, setShowModal] = useState(false);
  const [editValue, setEditValue] = useState(item.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...item, value: editValue });
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>수정</button>
      {showModal && (
        <div className='edit'>
          <form onSubmit={handleSubmit}>
            <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            <button type="submit">수정</button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditButton;