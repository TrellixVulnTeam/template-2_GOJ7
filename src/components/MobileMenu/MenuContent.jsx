import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Data from "../../api/Data.json"

const MenuContent = () => (
    <div className="mobile-menu-bottom">
        <ul>
            <li className="bottom-item">
                <AiOutlineMail className="icon" />
                {Data.dbPrincipal.emails[0].email}
            </li>
            <li className="bottom-item">
                <AiOutlinePhone className="icon" />
                {Data.dbPrincipal.phones[0].phone}
            </li>
        </ul>
        <div className="bottom-btn">
            <Link to="/contact" className="d-btn theme-btn d-block text-white">
                Contact Us
            </Link>
        </div>
    </div>
);

export default MenuContent;
