import Python from '../image_icons/python.png';
import Nodejs from '../image_icons/nodejs.png';
import Reactjs from '../image_icons/reactjs.png';
import Tailwind from '../image_icons/tailwind.png';
import CSS from '../image_icons/css.png';
import HTML from '../image_icons/html.png';
import AWS from '../image_icons/aws.png';
import JavaScript from '../image_icons/javascript.png';
import TypeScript from '../image_icons/typescript.png';
import Django from '../image_icons/django.png';
import Firebase from '../image_icons/firebase.png';
import Java from '../image_icons/java.png';
import D3 from '../image_icons/d3.png';
import Selenium from '../image_icons/selenium.png';
import Scikit from '../image_icons/scikitlearn.png';
import Gensim from '../image_icons/gensim.png';
import Express from '../image_icons/express.png';
import Nextjs from '../image_icons/nextjs.png';
import Opencv from '../image_icons/opencv.png';
import C from '../image_icons/C.png';
import Cpp from '../image_icons/C++.png';
import Rust from '../image_icons/rust.png';
import SQL from '../image_icons/sql.png';
import Git from '../image_icons/git.png';
import Mongodb from '../image_icons/mongodb.png';


const Skills = (data) => {
    return (

        <section id="skills-section" className="flex flex-col justify-between mb-60 ">
            <div className="font-mono flex flex-row items-center mb-24 ">
                <div className="font-bold text-left text-5xl text-purple-600">Skills</div>
                <hr className="ml-4 mt-6 border-t-1 border-purple-600 h-2 w-72" />
            </div>

            <div className="flex flex-col mb-24 mx-24">
                <div className='text-center mb-12 text-xl font-bold'>Programming Languages</div>
                <div className="grid grid-cols-5 gap-10">
                    <div className='flex flex-row items-center gap-2'>
                        <img src={JavaScript} alt="JavaScript Icon" className="w-10 h-10" />
                        <span>JavaScript</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={TypeScript} alt="TypeScript Icon" className="w-10 h-10" />
                        <span>TypeScript</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Python} alt="Python Icon" className="w-10 h-10" />
                        <span>Python</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Java} alt="Java Icon" className="w-10 h-10" />
                        <span>Java</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={C} alt="C Icon" className="w-10 h-10" />
                        <span>C</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Cpp} alt="C++ Icon" className="w-10 h-10" />
                        <span>C++</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Rust} alt="Rust Icon" className="w-10 h-10" />
                        <span>Rust</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={SQL} alt="SQL Icon" className="w-10 h-10" />
                        <span>SQL</span>
                    </div>
                </div>

            </div>
            <div className="flex flex-col my-24 mx-24">
                <div className="flex flex-col mb-12 text-center text-xl font-bold">Frameworks and Technologies</div>
                <div className="grid grid-cols-5 gap-10">
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Django} alt="Django Icon" className="w-10 h-10" />
                        <span>django</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Nodejs} alt="Nodejs Icon" className="w-10 h-10" />
                        <span>Nodejs</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Reactjs} alt="Reactjs Icon" className="w-10 h-10" />
                        <span>Reactjs</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Tailwind} alt="Tailwind Icon" className="w-10 h-10" />
                        <span>Tailwind</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={CSS} alt="CSS Icon" className="w-10 h-10" />
                        <span>CSS</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={HTML} alt="HTML Icon" className="w-10 h-10" />
                        <span>HTML</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={D3} alt="D3 Icon" className="w-10 h-10" />
                        <span>D3</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Express} alt="Express Icon" className="w-10 h-10" />
                        <span>Express</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Nextjs} alt="Nextjs Icon" className="w-10 h-10" />
                        <span>Nextjs</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={AWS} alt="AWS Icon" className="w-10 h-10" />
                        <span>AWS</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Firebase} alt="Firebase Icon" className="w-10 h-10" />
                        <span>Firebase</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Mongodb} alt="Mongodb Icon" className="w-10 h-10" />
                        <span>Mongodb</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Selenium} alt="Selenium Icon" className="w-10 h-10" />
                        <span>Selenium</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Scikit} alt="Scikit Icon" className="w-10 h-10" />
                        <span>Scikit</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Gensim} alt="Gensim Icon" className="w-10 h-10" />
                        <span>Gensim</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Opencv} alt="Opencv Icon" className="w-10 h-10" />
                        <span>Opencv</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={Git} alt="Git Icon" className="w-10 h-10" />
                        <span>Git</span>
                    </div>
                </div>

            </div>
            {/* 
            <div className="flex flex-col my-24">
                <div>Libraries and Technologies</div>
                <div className="flex flex-row justify-between">
                    <img src={AWS} alt="AWS Icon" className="w-10 h-10" />
                    <img src={Firebase} alt="Python Icon" className="w-10 h-10" />
                    <img src={Mongodb} alt="Python Icon" className="w-10 h-10" />
                    <img src={Selenium} alt="Python Icon" className="w-10 h-10" />
                    <img src={Scikit} alt="Python Icon" className="w-10 h-10" />
                    <img src={Gensim} alt="Python Icon" className="w-10 h-10" />
                    <img src={Opencv} alt="Python Icon" className="w-10 h-10" />
                    <img src={Git} alt="Python Icon" className="w-10 h-10" />
                </div>
            </div> */}
        </section>

    );
};

export default Skills;
