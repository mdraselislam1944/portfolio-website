import React from 'react';
import rasel from '../../../public/rasel.jpg'
const Home = () => {
    return (
        <div className='mx-10'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2 text-center my-auto'>
                   <h1 className='text-2xl font-semibold'>Hello,My name is Md Rasel Islam</h1>
                   <h3 className='text-lg my-3'>I am a software developer</h3>
                   <p>As a background student of Computer science Engineering I analyze and experience various language such as C, C++, Java, Python, Javascript, HTML, CSS, React,NodeJs, MongoDB,Express, MySQL, Data structure, Algorithm, Android, Django and other application. I create few projects in MERN stack and also create Django project. I also create a web project in my final year research project. I explore software engineering in project requirement specification, requirement analyze, usecase diagram, sequence diagram, class diagram, activity diagram.I have capability a full stack website in MERN.</p>
                </div>
                <div className='mx'>
                    <img className='rounded-full w-96 h-96' src={rasel} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;