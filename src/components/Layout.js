import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../index';
import { Carousel } from "react-bootstrap";
const Layout = () => {
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
        <main>
            <nav className="navbar navbar-expand-lg navbar-light navigationSeries">
                <Link to="/series"><img className="Logo" src={"/ZakPrime.png"} alt="ZakPrime" /></Link>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto navBarSeries">
                        <li className="nav-item active">
                            <Link className="navSeriesLink" to="/series">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navSeriesLink" to="/series">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navSeriesLink" to="/series">Channels</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="navSeriesLink dropdown-toggle">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navSeriesLink" to="/series">My Stuff</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Carousel>
                {series.splice(1, 10).map(serie => (
                    <Carousel.Item key={serie.id}>
                        <img
                            className="imgCarousel d-block"
                            src={serie.poster_path}
                            alt={serie.name}
                        />
                        <Carousel.Caption>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            
            <div className="containerAffichageSeries">
                <Outlet/>
            </div>
        </main>
    );
};
export default Layout;