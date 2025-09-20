import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { BreathworkExercise, BreathworkStep, BreathworkStepType } from '../types';

interface BreathworkTimerProps {
  exercise: BreathworkExercise;
  onComplete: () => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const BreathworkTimer: React.FC<BreathworkTimerProps> = ({ exercise, onComplete }) => {
  const [phase, setPhase] = useState<BreathworkStepType>('inhale');
  const [stepTimeLeft, setStepTimeLeft] = useState(0);
  const [totalTimeLeft, setTotalTimeLeft] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentRep, setCurrentRep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const steps = useMemo(() => {
    if (exercise.id === 'espresso_breaths' && exercise.reps && exercise.steps) {
      const generatedSteps: BreathworkStep[] = [];
      for (let i = 0; i < exercise.reps; i++) {
        generatedSteps.push(exercise.steps[0]);
      }
      generatedSteps.push({ type: 'recover', duration: 10 });
      return generatedSteps;
    }
    return exercise.steps || [];
  }, [exercise]);
  
  const isUnguided = !steps || steps.length === 0;

  useEffect(() => {
    const totalDuration = exercise.totalDuration ? exercise.totalDuration * 60 : steps.reduce((sum, step) => sum + step.duration, 0) * (exercise.sets || 1);
    setTotalTimeLeft(totalDuration);

    if (steps.length > 0) {
      setStepTimeLeft(steps[0].duration);
      setPhase(steps[0].type);
    } else if(exercise.totalDuration) {
      setPhase('inhale'); // for unguided sessions
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise, steps]);
  
  // Effect for guided sessions
  useEffect(() => {
    if (isUnguided || isPaused || totalTimeLeft <= 0) return;

    const timer = setInterval(() => {
      setTotalTimeLeft(prev => prev - 1);

      if (steps.length > 0) {
          setStepTimeLeft(prev => {
              if (prev <= 0.1) {
                  const nextStepIndex = (currentStepIndex + 1) % steps.length;
                   if (nextStepIndex === 0) { // Cycle completed
                       if (exercise.id === 'espresso_breaths' && currentSet < (exercise.sets || 1)) {
                           setCurrentSet(prevSet => prevSet + 1);
                           setCurrentRep(1);
                       } else if(!exercise.totalDuration) {
                           onComplete();
                           return 0;
                       }
                   }
                  
                  if (exercise.id === 'espresso_breaths' && steps[currentStepIndex].type === 'exhale') {
                    setCurrentRep(prevRep => prevRep + 1);
                  }
                  
                  setCurrentStepIndex(nextStepIndex);
                  setPhase(steps[nextStepIndex].type);
                  return steps[nextStepIndex].duration;
              }
              return prev - 0.1;
          });
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentStepIndex, isPaused, onComplete, steps, totalTimeLeft, exercise, currentSet, currentRep, isUnguided]);
  
  // Effect for unguided session pulsing
  useEffect(() => {
    if (!isUnguided || isPaused || totalTimeLeft <= 0) return;

    const pulseInterval = 4000; // 4s inhale, 4s exhale
    const timer = setInterval(() => {
        setTotalTimeLeft(prev => prev - (pulseInterval/1000));
        setPhase(prev => (prev === 'inhale' ? 'exhale' : 'inhale'));
    }, pulseInterval);

    return () => clearInterval(timer);
  }, [isUnguided, isPaused, totalTimeLeft]);

  
  const currentStep = steps[currentStepIndex];
  const animationDuration = isUnguided ? 4 : (currentStep ? currentStep.duration : 1);
  const isExpanding = phase === 'inhale';

  const getInstruction = () => {
    if (isUnguided) {
        return phase.charAt(0).toUpperCase() + phase.slice(1);
    }
    if (exercise.id === 'espresso_breaths') {
      return `Set ${currentSet}/${exercise.sets || 1} - Rep ${currentRep}/${exercise.reps || 20}`;
    }
    return phase.charAt(0).toUpperCase() + phase.slice(1);
  };
  
  if (totalTimeLeft <= 0 && (exercise.totalDuration || steps.length > 0)) {
     setTimeout(onComplete, 100);
  }

  const rippleRings = [
    { delay: 150, opacity: 'opacity-10' },
    { delay: 100, opacity: 'opacity-20' },
    { delay: 50, opacity: 'opacity-40' },
    { delay: 0, opacity: 'opacity-100' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-4xl font-syne text-brand-emerald mb-2">{exercise.name}</h2>
      <p className="text-brand-light-green mb-8">{exercise.description}</p>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8">
        <div className="absolute w-full h-full bg-brand-light-green rounded-full opacity-10"></div>
        
        {/* Ripple animation circles */}
        {rippleRings.map((ring, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-brand-emerald rounded-full transition-transform ease-in-out ${ring.opacity}`}
            style={{
              transform: isExpanding ? 'scale(1)' : 'scale(0.6)',
              transitionDuration: `${animationDuration}s`,
              transitionDelay: `${ring.delay}ms`,
            }}
          />
        ))}
        
        <div className="relative text-white z-10">
          <p className="text-5xl font-syne font-bold">{isUnguided ? '' : Math.ceil(stepTimeLeft)}</p>
          <p className="text-2xl font-inter capitalize">{getInstruction()}</p>
        </div>
      </div>

      <p className="text-lg text-brand-emerald mb-6">Total Time Remaining: {formatTime(Math.ceil(totalTimeLeft))}</p>

      <div className="flex space-x-4">
        <button 
          onClick={() => setIsPaused(!isPaused)} 
          className="px-6 py-2 bg-brand-emerald text-white rounded-full shadow-lg hover:bg-brand-light-green transition"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          onClick={onComplete} 
          className="px-6 py-2 bg-white text-brand-emerald border border-brand-emerald rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          End Session
        </button>
      </div>
    </div>
  );
};

export default BreathworkTimer;
