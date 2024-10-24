import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Capable of structuring web content with semantic markup to create organized and accessible websites.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Adept at styling websites with responsive design, focusing on layout and visual appeal, and using frameworks like Bootstrap for quicker design implementation.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Competent in adding basic interactivity and dynamic features to websites, such as event handling and simple client-side logic.',
    icon: faJs},
]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
    
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

