import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DynamicGridLayout = () => {
  const [layout, setLayout] = useState([{ i: 'a', x: 0, y: 0, w: 4, h: 2 }]);

  const addNewLayoutItem = () => {
    const newLayoutItem = { i: String.fromCharCode(layout.length + 97), x: 0, y: 0, w: 4, h: 2 };
    setLayout(prevLayout => [...prevLayout, newLayoutItem]);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-2">Dynamic Grid Layout</h2>
      <button onClick={addNewLayoutItem} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Add Item</button>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={800}>
        {layout.map(item => (
          <div key={item.i} className="bg-gray-400">{`Item ${item.i.toUpperCase()}`}</div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DynamicGridLayout;
