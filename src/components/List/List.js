import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from "../Hero/Hero";
import Column from "../Column/Column";

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        imgHero: PropTypes.string,
    }

    static defaultProps = {
        children: <p>I'm master of these topics!!!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imgSrcHero={this.props.imgHero} />
                <div className={styles.description}>
                    {this.props.children}
                    <div className={styles.columns}>
                        <Column columnTitle={<h3>Web development</h3>} />
                        <Column columnTitle={<h3>Psychology</h3>} />
                        <Column columnTitle={<h3>Sandwitches</h3>} />
                    </div>
                </div>
            </section>
        )
    }
}

export default List;
