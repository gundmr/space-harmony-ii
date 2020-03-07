import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

// IMAGES
import profile from '../assets/images/christy-about.jpeg'


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <img src={ profile } alt="profile" width="25%" class="profileImg"/>
                <p></p>
                <p>Christy Stevenson is a firm believer that outer order creates inner calm. With this philosophy and the KonMari Method™, she believes that helping people organize their homes not only creates a more beautiful living environment but can help create a more harmonious life.</p>
                
                <p>Christy has received a Bachelor of Science from the University of Hawaii, attended the KonMari™ Consultant Certification Course in Los Angels where she became a KonMari™ Consultant Trainee and is a Professional Home Organizer.</p>
                
                <p>Organization has been a life long passion and she hopes that through Space & Harmony she will be able to share her passion with you.</p>
                
                
            </Content>

        </div>
    );
}

export default AboutPage;