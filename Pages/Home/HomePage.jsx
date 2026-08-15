import Hero from '@/components/home/Hero';
import ReadyToPlay from '@/components/home/ReadyToPlay';
import SportsCard from '@/components/home/SportsCard';
import StaticCard from '@/components/home/StaticCard';
import Testimonials from '@/components/home/Testimonials';

import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <SportsCard/>
           <StaticCard/>
        <Testimonials />
        <ReadyToPlay />
      </div>
    );
};

export default HomePage;