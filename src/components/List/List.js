import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    /* static meand that propTypes object is not available as this.propTypes for other instances and is saved as List.propTypes (class property) */
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>
    Sed et lorem faucibus, venenatis purus et, dictum urna.
    Aliquam volutpat felis tristique sem euismod, at mattis ipsum tincidunt. <br/>

    Curabitur lacinia metus ac iaculis dignissim.
    Pellentesque placerat fringilla risus eu porttitor.<br/>

    Vestibulum a sodales mauris, a consequat metus.
    Mauris gravida faucibus magna, et aliquam massa semper nec.<br/>

    Etiam mauris risus, eleifend gravida facilisis non, aliquet in lorem.
  </p>
  }

  render() {
    const { title } = this.props;
    return (
      <section className={styles.component}>
        {/* <h2 className={styles.subtitle}>List.js file output</h2> */}
        <Hero titleText={this.props.title} imageSrc={this.props.imageSrc}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Weepingacorn' />
          <Column title='Scorchnut' />
          <Column title='Bitterleaf' />
        </div>
      </section>
    )
  }
}

export default List;
