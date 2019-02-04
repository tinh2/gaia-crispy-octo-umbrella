import {
    NODE_INFO_INIT, NODE_INFO_SUCCESS, NODE_INFO_FAILURE
} from './types';

export const fetchNodeInfo = (seriesId) => (dispatch) => {
    dispatch({
        type: NODE_INFO_INIT,
        currentSeriesId: seriesId
    });

    fetch("http://localhost:9001/series-videos?seriesId=" + seriesId)
    .then(response => response.json())
    .then((data) => {
        dispatch({
            type: NODE_INFO_SUCCESS,
            data: data
        });
    }).catch((err) => {
        dispatch({
            type: NODE_INFO_FAILURE
        });
    });
};