import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={styles.component}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to='/'>
            <Icon name={settings.header.icon}/>
          </Link>
          <nav>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
