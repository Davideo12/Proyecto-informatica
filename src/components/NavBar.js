import React, { useState } from 'react';

import NavContent from './NavContent';

function NavBar({setPage}) {
    const azul = "#03001C"

    const [navColor, setNavColor] = useState(azul);
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav style={{backgroundColor: navColor}}>
            <div className='nav-container'>
                <h3>Historia de la computación</h3>
                <button style={{backgroundColor: navColor}} className="dropdown-btn" onClick={handleDropdown}>
                    Menú
                </button>
            </div>
            <div>
                {dropdown ? (
                    <NavContent setDropdown={setDropdown} setNavColor={setNavColor} setPage={setPage} />
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;