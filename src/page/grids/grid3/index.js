import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const MyGridComponent = () => {
  // Define the layout of the grid
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];

  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={100} width={1200}>
      <div key="a" style={{ backgroundColor: 'lightblue' }}>Grid item A</div>
      <div key="b" style={{ backgroundColor: 'lightgreen' }}>Grid item B</div>
      <div key="c" style={{ backgroundColor: 'lightcoral' }}>Grid item C</div>
    </GridLayout>
  );
};

export default MyGridComponent;
