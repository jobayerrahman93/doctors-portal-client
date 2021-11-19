import React from 'react';
import Navigation from "../../../Pages/Shared/Navigation/Navigation";
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;