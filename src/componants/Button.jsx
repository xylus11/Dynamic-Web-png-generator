import React from 'react';
import axios from 'axios';

export default function Button() {  

  
    const handleDownload = async () => {
        
        
        try {
            const response = await axios.get('http://localhost:3001/generate-png'); // Adjust the URL if needed
            console.log(response.data); // Optional: Log the response
        } catch (error) {
            console.error('Error:', error);
            // Handle error as needed
        }   
    };

    return (
        <button className='btn' style={{ width: "150px", height: "40px", backgroundColor: "green", color: "white" }} onClick={handleDownload}>
          <a href="http://localhost:3001/generate-png">Download</a>  
        </button>
    );
}
