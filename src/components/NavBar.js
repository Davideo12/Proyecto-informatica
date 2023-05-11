import React, { useState } from 'react';

import NavContent from './NavContent';

function NavBar({bgColor, setPage}) {
    const azul = "#03001C"

    const [navColor, setNavColor] = useState(azul);
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleDropdown = () => {
        setDropdownActive(!dropdownActive);
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
                {dropdownActive ? (
                    <NavContent setDropdownActive={setDropdownActive} setNavColor={setNavColor} setPage={setPage} />
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;