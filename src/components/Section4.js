import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Section4() {
    const listData = [
      'Agent ID',
      'Certificate',
      'IRCTC ID',
      'Franchise Agreement',
      'Mini ATM',
      'ID Card',
      'Templates',
      'T-Shirt',
    ];
  
    return (
      <ul className="text-white" >
        <h1 className='lg:text-3xl lg:font-bold'>YOU WILL GET</h1>
        {listData.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faStar} className="mr-2 text-white" /> {item}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Section4;
  