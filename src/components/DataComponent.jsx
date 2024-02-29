// YourComponent.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataSuccess } from '../components/features/dataSlice';

const DataComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        console.log("dd", data)

        // Dispatch the action to store data in Redux
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Your component logic/rendering here

  return <div>Your Component</div>;
};

export default DataComponent;
