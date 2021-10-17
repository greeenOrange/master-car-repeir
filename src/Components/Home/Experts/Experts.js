import React from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'
const experts = [
    {
        img: "https://i.ibb.co/d0J9vrq/man-6.jpg",
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: "https://i.ibb.co/N1Lkg3X/man-1.jpg",
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: "https://i.ibb.co/t8g6rtr/man-3.jpg",
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: "https://i.ibb.co/R7KbfPd/man-4.jpg",
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: "https://i.ibb.co/PNQZbY5/man-5.jpg",
        name: 'wiliam Mathew',
        expertize: '-Wash Expert-'
    },
]

const Experts = () => {
    return (
        <div id='experts' className='expart-container'>
            <h2 className='text-primary my-4'>Our Experts</h2>
               <div className="experts">
            <div className='row'>
               {
                    experts.map(expert =><Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
               </div>
            </div>
        </div>
    );
};

export default Experts;