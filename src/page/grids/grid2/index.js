import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const AdvancedDashboard = () => {
  const [layout, setLayout] = useState([
    { i: 'widget1', x: 0, y: 0, w: 6, h: 4 },
    { i: 'widget2', x: 6, y: 0, w: 6, h: 4 },
    { i: 'widget3', x: 0, y: 4, w: 6, h: 4 },
    { i: 'widget4', x: 6, y: 4, w: 6, h: 4 },
  ]);

  // Simulated large data for widgets
  const widgetData = [
    { id: 'widget1', title: 'Widget 1', content: 'Widget 1 content goes here...' },
    { id: 'widget2', title: 'Widget 2', content: 'Widget 2 content goes here...' },
    { id: 'widget3', title: 'Widget 3', content: 'Widget 3 content goes here...' },
    { id: 'widget4', title: 'Widget 4', content: 'Widget 4 content goes here...' },
  ];

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Advanced Dashboard</h2>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={150} width={1200} onLayoutChange={handleLayoutChange}>
        {widgetData.map(widget => (
          <div key={widget.id} className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{widget.title}</h3>
            <p>{widget.content}</p>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default AdvancedDashboard;
