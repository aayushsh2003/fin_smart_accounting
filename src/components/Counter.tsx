import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  suffix?: string;
  title: string;
  icon: React.ReactNode;
}

export function Counter({ end, suffix = '', title, icon }: CounterProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="text-blue-900 mb-4 flex justify-center">{icon}</div>
      <div className="text-4xl font-bold text-blue-900 mb-2 flex justify-center items-baseline">
        {inView ? (
          <>
            <CountUp end={end} duration={2.5} />
            {suffix}
          </>
        ) : (
          '0'
        )}
      </div>
      <div className="text-gray-600 text-center">{title}</div>
    </div>
  );
}