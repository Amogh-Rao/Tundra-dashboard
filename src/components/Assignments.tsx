import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const Assignments = () => {
  const [assignments, setAssignments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const { data, error } = await supabase
        .from('assignments')
        .select();
  
      if (error) {
        console.error('Error fetching data:', error); 
      } else {
        console.log('Fetched assignments:', data);
        setAssignments(data);
      }
    };
  
    fetchAssignments();
  }, []);
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Your Assignments</h1>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="p-4 bg-white shadow-md rounded-md border border-gray-200"
          >
            <p className="text-xl font-semibold">{assignment.assignment_name}</p>
            <p className="text-gray-600">Due: {assignment.due_date}</p>
            <p className="text-gray-600">Grade: {assignment.grade}</p>
            <p
              className={`text-sm ${
                assignment.completed ? 'text-green-600' : 'text-red-600'
              }`}
            >
              Completed: {assignment.completed ? 'Yes' : 'No'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Assignments;
