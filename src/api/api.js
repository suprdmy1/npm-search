import {
    packagesListFetching,
    packagesListReceived,
    packagesListFetchError
} from '../actions';

import {
    SUGGESTIONS_URL,
    BAD_PATH_URL,
    BAD_URL,
    WRONG_PATH,
    NO_RESULTS,
    BAD_REQUEST,
    MSG_PCKG_NOT_FOUND,
    MSG_SERVER_ERROR,
    MSG_VALIDATION_ERR
} from '../constants/appConstants';

async function fetchSuggestions (query) {
    var url = `${ SUGGESTIONS_URL }?q=${query}`;
    var simulation = localStorage.getItem('Simulation');
    if (simulation) {
        switch (simulation) {
            case WRONG_PATH:
                url = BAD_PATH_URL;
                break;
            case NO_RESULTS:
                return [];
            case BAD_REQUEST:
                url = BAD_URL;
                break;
            default:
                console.log(`Unknown simulation mode ${simulation}`);
        }
    }
    const request = await fetch(url);
    if (request.ok && request.status === 200) {
        return await request.json();
    }
    throw new Error(`${MSG_SERVER_ERROR}${request.status}`);
}

export const requestSuggestions = (query, dispatch) => {
    if (query.length > 2) {
        dispatch(packagesListFetching(true));
        fetchSuggestions(query).then((data) => {
          if (data.length) {
              dispatch(packagesListReceived(data));
          } else {
              dispatch(packagesListFetchError(MSG_PCKG_NOT_FOUND));
          }
        }).catch((err) => dispatch(packagesListFetchError(err.message)));
    } else {
      dispatch(packagesListFetchError(MSG_VALIDATION_ERR))
    }
};