import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      {/* Outer centered canvas layout matching the reference webapp */}
      <div className="min-h-screen bg-[#EDEFF5] flex justify-center antialiased">
        <div className="w-full max-w-[480px] min-h-screen bg-[#F8F9FD] sm:shadow-2xl sm:border-x sm:border-[#E2E6EF] flex flex-col relative overflow-x-hidden">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
