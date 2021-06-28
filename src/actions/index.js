import { PACKAGES_LIST_FETCHING, PACKAGES_LIST_RECEIVED, PACKAGES_LIST_FETCH_ERROR } from '../constants/appConstants';

export function packagesListFetching (payload) {
    return {
        type: PACKAGES_LIST_FETCHING,
        payload
    };
}

export function packagesListReceived (payload) {
    return {
        type: PACKAGES_LIST_RECEIVED,
        payload
    };
}

export function packagesListFetchError (payload) {
    return {
        type: PACKAGES_LIST_FETCH_ERROR,
        payload
    };
}