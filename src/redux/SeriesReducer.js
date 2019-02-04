import {
    NODE_INFO_INIT, NODE_INFO_SUCCESS, NODE_INFO_FAILURE,
} from './types';

export default function (state = {}, action) {
    switch (action.type) {
        case NODE_INFO_INIT:
            return {
                ...state,
                currentSeriesId: action.currentSeriesId,
                loading: true,
                error: false,
            };
        case NODE_INFO_SUCCESS:
            return {
                loading: false,
                loadComponent: true,
                imageURL: action.data.seriesHeroArt,
                seriesTitle: action.data.title,
                episodeList: action.data.episodeList
            };
        case NODE_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}
