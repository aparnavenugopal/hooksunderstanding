import React, { useEffect, useState } from 'react'

const CategoryBasedFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('posts');

  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${category}`);
            if(!response.ok){
                throw new Error('failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
            setIsloading(false);
        }catch(error){
            setError(error.message);
            setIsloading(false);
        }finally{
            setIsloading(false);
        }
    }

    fetchData();

  },[category]);

  return (
    <div>
        <h2>select category:</h2>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="posts">posts</option>
            <option value="comments">comments</option>
            <option value="todos">todos</option>
        </select>
        {
            isLoading? (
                <p>loading....</p>
            ): error? (
                <p>error:{error}</p>
            ):(
                <div>
                    <h2>{category.charAt(0).toUpperCase + category.slice(1)}</h2>
                    <ul>
                        {
                            data.map((item) => {
                                return(
                                    <li key={item.id}>
                                        {JSON.stringify(item)}
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

export default CategoryBasedFetch;