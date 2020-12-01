import {
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES_COUNT
} from "./pagination.action";


const initialState = {
    currentPage: 1,
    totalPagesCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            }
        default:
            return state
    }
}