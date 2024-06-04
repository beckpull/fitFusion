// src/context/WorkoutContext.js
import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [currentWorkoutId, setCurrentWorkoutId] = useState(null);

    return (
        <WorkoutContext.Provider value={{ currentWorkoutId, setCurrentWorkoutId }}>
            {children}
        </WorkoutContext.Provider>
    );
};
