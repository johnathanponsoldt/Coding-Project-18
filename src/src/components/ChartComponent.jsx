import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Cleanup the previous chart instance
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      chartInstanceRef.current?.destroy(); // Cleanup on component unmount
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
