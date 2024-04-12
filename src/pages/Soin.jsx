import React, { useState } from 'react';

function Soin() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([items, item]);
  }

  return (
    <div className='flex'>
    
      <button onClick={() => handleAddItem('new item')}> Add item</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Soin