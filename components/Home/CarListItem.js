//Adding and styling TaxiX, Taxi Comfort, and TaxiXL icons so the user can select a taxi to take them to their destination

import Image from 'next/image'
import React from 'react'
import { HiUser } from "react-icons/hi";

const distances = require('./SearchSection');


function CarListItem({ car, distance }) {
    return (

        <div>
            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-center gap-5'>
                    <Image src={car.image} width={100} height={100} />
                    <div>
                        <h2 className='font-semibold text-[18px] flex gap-3 items-center'>{car.name}

                            <span className='flex gap-2 font-normal text-[14px] items-center'>
                                <HiUser />{car.seat}
                            </span>

                        </h2>
                        <p>{car.desc}</p>
                    </div>
                    <div>
                        <h2 className='text-[18px] font-semibold'> ${(car.amount * distances.dist).toFixed(2)}</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default CarListItem