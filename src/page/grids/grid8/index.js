import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DraggableHandleGridLayout = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2 }
  ];

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-2">Draggable Handle Grid Layout</h2>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={800} draggableHandle=".drag-handle">
        <div key="a" className="bg-gray-400">
          <div className="drag-handle">Drag Handle</div>
          Item A
        </div>
      </GridLayout>
    </div>
  );
};

export default DraggableHandleGridLayout;
