import React, { lazy, Suspense } from 'react';
import TopBarProgress from "react-topbar-progress-indicator";

// React TopBarProgress configuration
TopBarProgress.config({
  barColors: {
    "0": "#ed1909",
    "1.0": "#88e312"
  },
  shadowBlur: 10
});

const LazyLoadingHOC = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  const LazyWrapper = (props) => (
    <Suspense fallback={<TopBarProgress />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LazyWrapper;
};

export default LazyLoadingHOC;
