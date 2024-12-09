import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data, options }) => {
  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;
