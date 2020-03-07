import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function FAQPage(props) {

    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                    <p><strong>How long does the process take?</strong> </p>
                    <p>
                    Each project will vary based on the amount of items and the person going through the process. The minimum suggestion is 3 hours per session.</p>
                    
                    <p><strong>What is the KonMari Method™?</strong> </p>
                    <p>
                        The KonMari Method is about choosing joy. By going through the items in your house and taking the time to truly evaluate the life you want. By choosing to keep only the items that bring you joy and about finding joy in the items the service a purpose .
                    </p>
                    
                    <p><strong>Does the entire family need to be part of the decluttering process?</strong> </p>
                    <p>
                        This is an individual journey  since only the individual truly know what brings them joy. The family can be there for an explanation of the process to understand better what will be going on.
                    </p>
                    
                    <p><strong>Will I need to spend extra money on supplies?</strong> </p>
                    <p>
                        This is dependent on the individual and what they have already. If the individual is looking for a update/ more streamline look they might consider buying storage that has a more cohesive look  or more efficient storage solutions.
                    </p>
                    
                
            </Content>

        </div>
    );
}

export default FAQPage;