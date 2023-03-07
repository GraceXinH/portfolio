import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import WorkDetail from '../components/WorkDetail';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
            <WorkDetail id={id}/>
            <Footer />
        </div>
    )
}

export default Detail