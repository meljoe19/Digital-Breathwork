
import React from 'react';
import { useState, useEffect } from 'react';
import { HealthMetric } from '../types';
import { HeartIcon, LungsIcon, BrainIcon } from './IconComponents';
import MetricCard from './MetricCard';

const useHealthData = () => {
  const [healthData, setHealthData] = useState<HealthMetric[]>([
    { name: 'Heart Rate', value: '72', unit: 'bpm', source: 'Live from Huawei Health', Icon: HeartIcon },
    { name: 'Stress Level', value: '25', unit: '/100', source: 'Live from Huawei Health', Icon: BrainIcon },
    { name: 'SpO2', value: '98', unit: '%', source: 'Estimated', Icon: LungsIcon },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthData(prevData =>
        prevData.map(metric => {
          if (metric.name === 'Heart Rate') {
            const newValue = Math.floor(Math.random() * (78 - 65 + 1) + 65);
            return { ...metric, value: newValue.toString() };
          }
          if (metric.name === 'Stress Level') {
            const newValue = Math.floor(Math.random() * (35 - 15 + 1) + 15);
            return { ...metric, value: newValue.toString() };
          }
          return metric;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return healthData;
};


const HealthDashboard: React.FC = () => {
  const healthData = useHealthData();
  
  return (
    <section className="text-center">
      <h2 className="text-3xl font-syne text-brand-emerald mb-2">Health Dashboard</h2>
      <p className="text-brand-light-green mb-6 font-inter">Real-time insights into your well-being.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthData.map((metric) => (
          <MetricCard key={metric.name} metric={metric} />
        ))}
      </div>
    </section>
  );
};

export default HealthDashboard;
