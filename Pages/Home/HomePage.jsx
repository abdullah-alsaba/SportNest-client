import Hero from '@/components/home/Hero';
import ReadyToPlay from '@/components/home/ReadyToPlay';
import StaticCard from '@/components/home/StaticCard';
import Testimonials from '@/components/home/Testimonials';

import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero/>
           <StaticCard/>
        <Testimonials />
        <ReadyToPlay />
      </div>
    );
};

export default HomePage;