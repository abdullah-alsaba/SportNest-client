import React from 'react';
import {  Button, Card } from "@heroui/react";
import Image from 'next/image';
import { LocationEditIcon } from 'lucide-react';


const FacilitiesCard = ({ facilities }) => {
  const { image, location, facility_type, name, price_per_hour } = facilities;
  

    return (
      <Card>
        <div className="absolute ">{facility_type}</div>
        <div>
          <Image
            alt={name}
            width={400}
            height={300}
            src={image}
            className="relative object-cover"
          />
        </div>
        <div>
          <div>
            <h1>{name}</h1>
            <div className="flex items-center  gpa-6">
              <LocationEditIcon /> {location}
            </div>
          </div>
          <div className="border-b-2 border-gray pb-2"></div>
          <div className='flex justify-between'>
            <div>
              Hourly Rate
              <br />${price_per_hour}
            </div>
            <Button className="text-white bg-green-500 rounded-xl">
              Book Now 
            </Button>
          </div>
        </div>
      </Card>
    );
};

export default FacilitiesCard;