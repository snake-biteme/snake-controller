import React from 'react';
import styles from '../Controllers.module.css';
import VerticalControllers from '../VerticalControllers/VerticalControllers';

interface IProps {
    handleClick: (direction: string) => void,
}

const customSize = {
    minHeight: '35vh',
    minWidth: '35vh',
};

function HorizontalControllers({handleClick}: IProps) {
    return (
        <div className={styles.horizontal}>
            <VerticalControllers handleClick={handleClick} customSize={customSize}/>
            <VerticalControllers handleClick={handleClick} customSize={customSize}/>
        </div>
    );
}

export default HorizontalControllers;