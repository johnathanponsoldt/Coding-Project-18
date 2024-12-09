import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data, options }) => {
  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;
