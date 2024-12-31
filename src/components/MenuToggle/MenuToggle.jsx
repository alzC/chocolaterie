import React, { useState } from 'react';

import { Slant as Hamburger, Slant } from 'hamburger-react'
const MenuToggle = ({ handleClick }) => {


    return (
        <div>
            <Slant onToggle={() => handleClick()} />
        </div>
    );
};

export default MenuToggle;