import React from 'react';

import { Slant } from 'hamburger-react'
const MenuToggle = ({ handleClick }) => {


    return (
        <div>
            <Slant onToggle={() => handleClick()} />
        </div>
    );
};

export default MenuToggle;