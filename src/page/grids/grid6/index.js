import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const StaticGridLayout = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2 }
  ];

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-2">Static Grid Layout</h2>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={800} isResizable={false} isDraggable={false}>
        <div key="a" className="bg-gray-400">Item A</div>
      </GridLayout>
    </div>
  );
};

export default StaticGridLayout;
