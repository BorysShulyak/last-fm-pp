export const SET_CURRENT_PAGE = 'PAGINATION/SET_CURRENT_PAGE'
export const SET_TOTAL_PAGES_COUNT = 'PAGINATION/SET_TOTAL_PAGES_COUNT'

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, payload: totalPagesCount})