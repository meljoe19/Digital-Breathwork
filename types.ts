// Fix: Add React import to resolve 'React' namespace error.
import React from 'react';

export interface HealthMetric {
  name: string;
  value: string;
  unit: string;
  source: 'Live from Huawei Health' | 'Estimated';
  Icon: React.ComponentType<{ className?: string }>;
}

export type BreathworkStepType = 'inhale' | 'hold' | 'exhale' | 'recover';

export interface BreathworkStep {
  type: BreathworkStepType;
  duration: number; // in seconds
}

export interface BreathworkExercise {
  id: string;
  name: string;
  description: string;
  totalDuration?: number; // in minutes
  steps?: BreathworkStep[];
  // For more complex routines like Espresso
  sets?: number;
  reps?: number;
}