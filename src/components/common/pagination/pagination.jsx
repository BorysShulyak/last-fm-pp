import * as React from 'react'
import {useState} from 'react'
import classNames from 'classnames'
import styles from './pagination.module.css'

export const Pagination = ({
    totalPagesCount,
    currentPage = 1,
    handlePageChange,
    pagesPortionSize = 10,
    classes
}) => {
    const totalPagesPortionsCount = Math.ceil(totalPagesCount / pagesPortionSize);
    const [pagesPortionNumber, setPagesPortionNumber] = useState(1);

    const leftPagesPortionNumber = (pagesPortionNumber - 1) * pagesPortionSize + 1;
    const rightPagesPortionNumber = pagesPortionNumber * pagesPortionSize;
    const pages = [];
    for (let i = leftPagesPortionNumber; i <= rightPagesPortionNumber; i++) {
        pages.push(i);
    }

    const handlePrevPagesPortion = () => {
        setPagesPortionNumber(pagesPortionNumber - 1)
    }
    const handleNextPagesPortion = () => {
        setPagesPortionNumber(pagesPortionNumber + 1)
    }

    return (
        <div className={classNames(styles.Pagination, classes)}>
            { pagesPortionNumber > 1 &&
                <button
                    className={styles.Button}
                    onClick={handlePrevPagesPortion}
                >
                    <span>PREV</span>
                </button> }

            {pages
                .map(pageNumber => (
                    <button
                        className={
                            classNames(styles.Button, currentPage === pageNumber && styles.ActivePage)
                        }
                        onClick={() => handlePageChange(pageNumber)}
                        key={pageNumber}
                    >
                        {pageNumber}
                    </button>
                    )
                )}
            {totalPagesPortionsCount > pagesPortionNumber &&
                <button
                    className={styles.Button}
                    onClick={handleNextPagesPortion}
                >
                    <span>NEXT</span>
                </button> }

        </div>
    )
}