import React from 'react';
import classes from './OptionsDropdown.module.css';
import editIcon from '../../../../../edit.svg';
import deleteIcon from '../../../../../delete.svg';

const OptionsDropdown = props => {
    return (
      <div className={classes.DropdownMenu} hidden={true}>
        <div className={classes.editButton} key={'editButton'}>
          <img src={editIcon} alt="Edit icon" className={classes.editIcon} />
          <span>Edit</span>
        </div>
        <div className={classes.deleteButton} key={'deleteButton'}>
          <img src={deleteIcon} alt="Delete icon" className={classes.deleteIcon} />
          <span>Delete</span>
        </div>
      </div>
    );
  }

export default OptionsDropdown;