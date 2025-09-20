
import React from 'react';
import { useState } from 'react';
import { BreathworkExercise } from './types';
import HealthDashboard from './components/HealthDashboard';
import ExerciseSelector from './components/ExerciseSelector';
import BreathworkTimer from './components/BreathworkTimer';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<BreathworkExercise | null>(null);
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);

  const handleSelectExercise = (exercise: BreathworkExercise) => {
    setSelectedExercise(exercise);
    setIsSessionActive(true);
  };

  const handleSessionComplete = () => {
    setIsSessionActive(false);
    setSelectedExercise(null);
  };

  return (
    <div className="min-h-screen bg-brand-off-white text-brand-dark-gray font-inter flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        {isSessionActive && selectedExercise ? (
          <BreathworkTimer exercise={selectedExercise} onComplete={handleSessionComplete} />
        ) : (
          <div className="w-full max-w-5xl mx-auto space-y-12">
            <HealthDashboard />
            <ExerciseSelector onSelectExercise={handleSelectExercise} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
