import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

const List = (props) => {
  //> console.log('List props:', props);

  return (
    <section className={styles.component}>
      <Hero title={props.title} image={props.image} />
      <div className={styles.description}>
        {ReactHtmlParser(props.description)}
      </div>

      <div className={styles.columns}>
        {props.columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>

      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={title => props.addColumn(title)} />
      </div>

    </section>
  );
};

List.propTypes = {
  /* static => {object} propTypes cant be accessed as this.propTypes for other instances & is saved as List.propTypes (class property) */
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  image: PropTypes.string,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: ReactHtmlParser(settings.defaultListDescription),
};

export default List;
