import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>STEPHEN</span>
            </div>
            <div className="des">
                {/* 30 */}
                My name is Stephen Jayona, a 3rd-year BSIT student at Western Institute of Technology. I’m passionate about technology, enjoy playing video games, and appreciate the art of a good nap! I aim to become successful in coding and pursue a career as a software engineer, building innovative solutions and applications.
            </div>
            
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Filipino</div>
                    <div>09/06</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
