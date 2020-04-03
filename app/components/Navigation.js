import React from 'react';

import { Link } from '../components';

import Links from '../routes/Links';

const Navigation = () => {
    const items = Links.map((item, index) => {
        return (
            <Link
                label={item.label}
                to={item.to}
                color="black"
                hover="primary"
                weight="normal"
                display="block"
                transform="uppercase"
                size="sm"
                leading="6"
                key={index}
            />
        );
    });

    return items;
};

export default Navigation;
