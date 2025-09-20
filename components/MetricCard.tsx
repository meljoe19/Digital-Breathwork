
import React from 'react';
import { HealthMetric } from '../types';

interface MetricCardProps {
  metric: HealthMetric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const { name, value, unit, source, Icon } = metric;
  const isLive = source === 'Live from Huawei Health';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between transition-transform transform hover:scale-105">
      <div className="flex items-center text-brand-emerald">
        <Icon className="w-6 h-6 mr-3" />
        <h3 className="text-xl font-bold font-inter">{name}</h3>
      </div>
      <div className="my-4 text-center">
        <span className="text-6xl font-syne font-bold text-brand-dark-gray">{value}</span>
        <span className="text-xl text-brand-light-green ml-1">{unit}</span>
      </div>
      <div className="flex items-center text-xs text-brand-light-green">
        {isLive && <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>}
        <span>{source}</span>
      </div>
    </div>
  );
};

export default MetricCard;
