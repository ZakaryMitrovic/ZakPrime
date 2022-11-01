import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db } from '../index';
import { doc, onSnapshot } from 'firebase/firestore';

const SerieDetail = ({ params }) => {

    const [seriesDet, setSeriesDet] = useState([]);
    const maSerie = useParams();

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "series", maSerie.idseries), (snapshot) => {
            const monDocuments = {
                ...snapshot.data(),
                id: snapshot.id
            };
            setSeriesDet(monDocuments);
        });
    }, [maSerie.idseries]);


    console.log(maSerie);

    let etoiles = Math.round(seriesDet.vote_average / 2);

    return (
        <article className="containerDetail">
            <img className="imgDetail" src={seriesDet.poster_path} alt={seriesDet.name} />
            <div className="containerDesc">
                <h1 className="titreDetail">{seriesDet.name}</h1>
                <img className="imgBackdrop" src={seriesDet.backdrop_path} alt={seriesDet.name} />
                <div className="etoiles">
                    {etoiles === 2 ? <> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star "></i></> : null}
                    {etoiles === 3 ? <> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star "></i></> : null}
                    {etoiles === 4 ? <> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star "></i> <i className="fa-solid fa-star etoiles"></i></> : null}
                </div>
                <p className="descDetail">{seriesDet.overview}</p>
                <p className="descDetail"><strong>Nom original:</strong> {seriesDet.original_name}</p>
                <p className="descDetail"><strong>Langue original:</strong> {seriesDet.original_language}</p>
                <p className="descDetail"> <strong>Nombres de vues:</strong> {seriesDet.popularity}</p>
            </div>
            <hr className="my-4" />
        </article>
    );
};
export default SerieDetail;