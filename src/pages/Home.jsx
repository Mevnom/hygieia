import React from 'react';
import Header from '../header';
import HealthFactsSlideshow from '../Healthfacts';
import Body from '../body-uno';
import Contact from '../Contact';




 function Home() {
  return (

<div>
<span>
<Header/>
</span>
<span>
    <HealthFactsSlideshow/>
</span>
<span>
    <Body/>
</span>
<span>
    <Contact/>
</span>



</div>

  );
}


export default Home;