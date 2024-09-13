import React from 'react';
import classNames from 'classnames';
import './ButtonStyles.css';

const ButtonList = () => {
  return (
    <div>
      <button className={classNames('common-button', 'primary')}>Button 1</button>
      <button className={classNames('common-button', 'secondary')}>Button 2</button>
      <button className={classNames('common-button', 'tertiary')}>Button 3</button>
    </div>
  );
};

export default ButtonList;
