import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//reusable components
import Services from '../common/Services'

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    title="Welcome to our Studio"
                    subtitle="It's nice to meet you"
                    buttonText="show me more"
                    link="/services"
                    showButton={true}
                    image = {image}
                />
                <Services />
            </div>
        );
    }

}

export default Home;