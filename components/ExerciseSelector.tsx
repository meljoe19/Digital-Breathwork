
import React from 'react';
import { BreathworkExercise } from '../types';
import { BREATHWORK_EXERCISES } from '../constants';

interface ExerciseSelectorProps {
  onSelectExercise: (exercise: BreathworkExercise) => void;
}

const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({ onSelectExercise }) => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-syne text-brand-emerald mb-2">Your Daily Breathwork Prescription</h2>
      <p className="text-brand-light-green mb-6 font-inter">Choose a practice to win your day.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BREATHWORK_EXERCISES.map((exercise) => (
          <button
            key={exercise.id}
            onClick={() => onSelectExercise(exercise)}
            className="bg-white p-6 rounded-xl shadow-lg text-left hover:shadow-2xl hover:bg-brand-emerald hover:text-white transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold font-syne text-brand-emerald group-hover:text-white">{exercise.name}</h3>
            <p className="text-sm font-inter text-brand-light-green mt-2 group-hover:text-gray-200">{exercise.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ExerciseSelector;
