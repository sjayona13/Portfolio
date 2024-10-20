import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'TO-DO APP',
    des: 'A to-do app helps users organize and track tasks, set deadlines, and prioritize items, improving productivity and task management.',
    language: 'REACT, & MONGODB',
    images: '/p1.png'
  },
  {
    name: 'TICTACTOE',
    des: 'Tic-tac-toe is a classic two-player game where players take turns marking Xs and Os on a 3x3 grid, aiming to get three in a row horizontally, vertically, or diagonally.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML, CSS, & REACT',
    images: '/p2.png'
  },
]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
      
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
