import PropTypes from 'prop-types';
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const Link = props => {
    const { label, to, href, target, role, children, classList } = props;

    return (
        <LinkRouter
            to={to}
            className={classList}
            role={role}
            style={{ display: 'block', padding: '10px' }}
        >
            {children || label}
        </LinkRouter>
    );
};

const defaultProps = {};

Link.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    role: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    classList: PropTypes.string,
};

export default Link;
