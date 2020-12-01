import * as React from 'react'
import classNames from 'classnames'
import styles from './input.module.css'

export const Input = ({
    value,
    handleChange,
    placeholder,
    classes
}) => {
    return (
        <input
            className={classNames(styles.Input, classes)}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}