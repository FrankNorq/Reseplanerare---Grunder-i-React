import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FetchApi() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Offentligt API
            const data = await response.json();
            setDestinations(data);
            console.log(data);
        };
        fetchDestinations();
    }, []);

    return ( 
        <div>
            <h2>Förslag till resmål</h2>
            <div className="destination-list">
                {destinations.map((dest) => (
                    <div key={dest.id} className="destination-item">
                        <Link to={`/details/${dest.id}`}>
                            <img src={`https://picsum.photos/200/300?random=${dest.id}`} alt={dest.title} /> {/* Använd slumpmässiga bilder */}
                        </Link>
                        <span>{dest.title}</span> {/* Använd title som namn */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchApi;