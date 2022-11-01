import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../index';
import { useState, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom';


const Home = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "series"), (snapshot) => {
            const documents = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
            setSeries(documents);
        });

        //Quand la composante est supprimer, on arrete découter
        return unsub;
    }, []);

    
    return (
        <div className="containerSeries">
            <div className=""><Outlet /></div>

            {series.splice(1, 10).map((serie) => (
                <div className="card containerCards" key={serie.id} >
                    <Link to={`/series/${serie.id}`}>
                        <img className='card-img-top imgSeries' src={serie.poster_path} alt="Img_Series" />
                        <div className='card-body'>
                            <h5 className='card-title titreSeries'>{serie.name}</h5>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Home;