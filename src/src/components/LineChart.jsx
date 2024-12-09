import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data, options }) => {
  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;
