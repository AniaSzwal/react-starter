import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';

class Home extends React.Component {
    static propTypes = { // static wlasciwosc/instancja nie ma kazdej kopi dla wlasnej instacji jest to ogolne dla szystkich kopi, instancja-kopia,jedna z kopi
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
    }

    render() {
      const{title,subtitle,lists}=this.props;
      return (
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => ( // map bierze tablice list i w ramach niej wszystie elementy bierze i wtkonuje na niej funkcje
            <ListLink key={listData.id} {...listData} /> // key props wymagany przez samych tworcow reacta w miejscacg gdzie renderujemy cos z tablic/list
          ))}
        </main>
      );
    }
}

export default Home;
