import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      icon: PropTypes.node,
      cards: PropTypes.array,
        addCard: PropTypes.func
    }

    render() {
      const{cards, addCard}=this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}
            <span className={styles.icon}><Icon name={this.props.icon} /></span>
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      );
    }
}

export default Column;