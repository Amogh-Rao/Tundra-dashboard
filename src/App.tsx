import React from 'react';
import Assignments from './components/Assignments';


function App() {
  return (
    <div className="App bg-blue-600 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Welcome to Tundra Dashboard</h1>
        <p className="mt-2 text-lg">View your assignments, grades, and more!</p>
      </header>
      <div className="bg-red-500 text-white p-4">
      Hello, Tailwind CSS!
      </div>

      {/* Main Content Section */}
      <main className="p-6">
        <section className="max-w-4xl mx-auto">
          {/* Render the Assignments component */}
           <Assignments /> 
        </section>
      </main>
    </div>
    
  );
}

export default App;
