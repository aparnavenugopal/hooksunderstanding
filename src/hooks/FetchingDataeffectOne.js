import React, { useEffect, useState } from 'react';

const FetchingDataeffectOne = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   const fetchData = async () => {
     try{ 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     if(!response.ok){
        throw new Error('failed to fetch data');
     };
     const jsonData = await response.json();
     setData(jsonData);
     setIsLoading(false);
     }catch(error){
        setError(error.message);
        setIsLoading(false);
     }
     
   }
   fetchData();
  },[]);

  return (
    <div>
        {
            isLoading? (<p>loading...</p>): error?
            (<p>{error}</p>):(
                <div>
                    <h2>data from api</h2>
                    <ul>
                        {
                            data.map((item) => {
                              return(
                                <li key={item.id}>
                                    {item.title}
                                </li>
                              )
                            })
                        }
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default FetchingDataeffectOne;