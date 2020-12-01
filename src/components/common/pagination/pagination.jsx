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
    const pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    const totalPagesPortionsCount = Math.ceil(totalPagesCount / pagesPortionSize);
    const [pagesPortionNumber, setPagesPortionNumber] = useState(1);

    const leftPagesPortionNumber = (pagesPortionNumber - 1) * pagesPortionSize + 1;
    const rightPagesPortionNumber = pagesPortionNumber * pagesPortionSize;

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
                .filter(pageNumber => pageNumber >= leftPagesPortionNumber && pageNumber <= rightPagesPortionNumber)
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