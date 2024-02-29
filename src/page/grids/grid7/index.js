import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const NestedGridLayout = () => {
  const parentLayout = [
    { i: 'a', x: 0, y: 0, w: 6, h: 4 },
    { i: 'b', x: 6, y: 0, w: 6, h: 4 }
  ];

  const childLayout = [
    { i: 'c', x: 0, y: 0, w: 3, h: 2 },
    { i: 'd', x: 3, y: 0, w: 3, h: 2 },
    { i: 'e', x: 0, y: 2, w: 6, h: 2 }
  ];

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-2">Nested Grid Layout</h2>
      <GridLayout className="layout" layout={parentLayout} cols={12} rowHeight={30} width={1200}>
        <div key="a" className="bg-gray-400">Parent Item A</div>
        <div key="b" className="bg-gray-400">Parent Item B</div>
      </GridLayout>

      <h3 className="text-lg font-semibold mt-6 mb-2">Child Grid Layout</h3>
      <GridLayout className="layout" layout={childLayout} cols={6} rowHeight={30} width={1200}>
        <div key="c" className="bg-gray-400">Child Item C</div>
        <div key="d" className="bg-gray-400">Child Item D</div>
        <div key="e" className="bg-gray-400">Child Item E</div>
      </GridLayout>
    </div>
  );
};

export default NestedGridLayout;
