import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/profilePictureMe.jpg" alt="profile-pic" />
                    <h3>Dylan Moreira</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/">
                        <i className='fas fa-home'></i>
                        <span>Acceuil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competences">
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/portfolio" >
                        <i className='fas fa-images'></i>
                        <span>Projects</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/contact" >
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/dylan-moreira-7624b01b6/" target="_blank" rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/DilouProd" target="_blank" rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Dylan Moreira - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;