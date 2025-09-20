import { BreathworkExercise } from './types';

export const BREATHWORK_EXERCISES: BreathworkExercise[] = [
  {
    id: 'morning_activation',
    name: 'Morning Activation',
    description: 'Double inhale, hold, and a pursed lip exhale to energize your morning.',
    steps: [
      { type: 'inhale', duration: 0.5 },
      { type: 'hold', duration: 0.2 },
      { type: 'inhale', duration: 0.5 },
      { type: 'hold', duration: 10 },
      { type: 'exhale', duration: 8 },
    ],
  },
  {
    id: 'evening_wind_down',
    name: 'Evening Wind-Down',
    description: 'A calming 4-7-8 technique to prepare for a restful sleep.',
    totalDuration: 4,
    steps: [
      { type: 'inhale', duration: 4 },
      { type: 'hold', duration: 7 },
      { type: 'exhale', duration: 8 },
    ],
  },
  {
    id: 'stress_relief',
    name: 'Stress Relief Breathing',
    description: "A calming 4-2-6-2 breathing technique. The longer exhale helps activate your body's relaxation response and reduce stress.",
    totalDuration: 5,
    steps: [
      { type: 'inhale', duration: 4 },
      { type: 'hold', duration: 2 },
      { type: 'exhale', duration: 6 },
      { type: 'hold', duration: 2 },
    ],
  },
  {
    id: 'espresso_breaths',
    name: 'Siesta - Espresso',
    description: 'A rapid, forceful breathing exercise for a quick energy boost.',
    sets: 3,
    reps: 20,
    steps: [
      { type: 'exhale', duration: 0.2 },
    ],
  },
  {
    id: 'diaphragmatic_breathing',
    name: 'Diaphragmatic Breathing',
    description: 'Deep breathing focused on engaging the diaphragm, as if breathing towards the pelvic floor.',
    totalDuration: 5,
    steps: [
      { type: 'inhale', duration: 4 },
      { type: 'exhale', duration: 6 },
    ],
  },
  {
    id: 'lsd_breathing',
    name: 'LSD Breathing (In Transit)',
    description: 'Low, Slow, and Deep breathing to maintain calm and focus while in transit.',
    totalDuration: 5,
    steps: [
      { type: 'inhale', duration: 6 },
      { type: 'exhale', duration: 6 },
    ],
  },
  {
    id: 'conscious_breathing',
    name: 'Conscious Breathing',
    description: 'An unguided session to focus on your natural breath and stay present.',
    totalDuration: 5
  },
];