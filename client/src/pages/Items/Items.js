import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.itemsPage}>
      <ItemsGrid items={items} />
    </div>
  );
};

export default withStyles(styles)(Items);
