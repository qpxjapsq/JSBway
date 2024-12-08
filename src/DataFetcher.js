import { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((json) => {
            setData(json);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
}, []);

return (
    <div>
        <h1>API Data</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
            <ul>
                {data.slice(0, 10).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        )}
    </div>
);

}
export default DataFetcher;


