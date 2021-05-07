import React from  'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.scss.css';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Icon name={settings.header.icon} />
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                <NavLink exact to='FAQ' activeClassName='active'>FAQ</NavLink>
              </nav>
            </div>git
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;