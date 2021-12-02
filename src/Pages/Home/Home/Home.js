import React from 'react';
import Navigation from "../../../Pages/Shared/Navigation/Navigation";
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blog/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Footer from '../Footer/Footer';
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
            <Testimonial></Testimonial>
            <Doctors></Doctors>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;