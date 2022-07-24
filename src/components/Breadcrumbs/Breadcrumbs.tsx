import React from 'react';
import routes from '../../utils/routes';

import './Breadcrumbs.scss';
import arrow3 from '../../img/icons/arrow3.svg';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <div className="Breadcrumbs">
            <NavLink to="/" className="current-page">
                Главная
            </NavLink>
            <img src={arrow3} alt="arrow" />
            <a href="">Интернет-магазин</a>
            <img src={arrow3} alt="arrow" />
            <a href="">Опоры трубопроводов</a>
        </div>
    );
};

export default Breadcrumbs;
