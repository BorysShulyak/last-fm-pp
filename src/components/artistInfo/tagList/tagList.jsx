import * as React from "react";
import {Tag} from "./tag/tag";
import styles from './tagList.module.css'

export const TagList = ({tags = [], classes}) => {
    return (
        <ul className={classes}>
            {tags.map((tag, index) => (
                <li>
                    <Tag
                        url={tag.url}
                        classes={styles.Tag}
                        key={index}
                    >
                        #{tag.name}
                    </Tag>
                </li>)
            )}
        </ul>
    )
}