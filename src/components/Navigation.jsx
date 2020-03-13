import React from "react";

const Navigation = () => {
  return (
      <nav className='navigation'>
          <ul className='navigation-list'>
              <li className='navigation-item'>
                  <a>Profile</a>
              </li>
              <li className='navigation-item'>
                  <a href='#'>Messages</a>
              </li>
              <li className='navigation-item'>
                  <a href='#'>News</a>
              </li>
              <li className='navigation-item'>
                  <a href='#'>Music</a>
              </li>
              <li className='navigation-item'>
                  <a href='#'>Settings</a>
              </li>
          </ul>
      </nav>
  )
};

export default Navigation;