import { PACKAGES_LIST_FETCHING, PACKAGES_LIST_RECEIVED, PACKAGES_LIST_FETCH_ERROR } from '../constants/appConstants';

const initialState = {
    packageListFetchError: "",
    packageListLoading: false,
    packagesList: []
};

function packagesListFetching(state, payload) {
    return {
        ...state,
        packagesList: [],
        packageListFetchError: "",
        packageListLoading: payload
    };
}

function packagesListReceived(state, payload) {
    return {
        ...state,
        packageListFetchError: "",
        packageListLoading: false,
        packagesList: payload
    };
}

function packagesListFetchError(state, payload) {
    return {
        ...state,
        packagesList: [],
        packageListLoading: false,
        packageListFetchError: payload
    };
}

function searchReducer (state = initialState, { type, payload }) {
    switch (type) {
        case PACKAGES_LIST_FETCHING:
            return packagesListFetching(state, payload);
        case PACKAGES_LIST_RECEIVED:
            return packagesListReceived(state, payload);
        case PACKAGES_LIST_FETCH_ERROR:
            return packagesListFetchError(state, payload);
        default:
            return state;
    }
}

export default searchReducer;