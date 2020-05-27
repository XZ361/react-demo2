import React from 'react';
import styles from './Error.module.css'
import './Button.scss'


export default function(){
    return (
        <div className="btn-group">
            <div className="btn">Button</div>
            <div className={styles.error}>Button</div>
        </div>
    )
}