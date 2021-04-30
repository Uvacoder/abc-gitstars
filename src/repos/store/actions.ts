import api from "../api";
import { Repo } from "../types";

export const LOAD_STARTED = "LOAD_STARTED";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAILURE = "LOAD_FAILURE";
export const FILTER = "FILTER"
export interface Action {
    type: string;
    payload: {
        [key: string]: any
    }
}

export const loadData = (page: number = 1) => {
    return (dispatch: (args: Action) => void) => {
        dispatch(loadStarted())
        api.getData(page).then(repos => {
            const { items, total_count } = repos;
            return dispatch(loadSuccess(items, total_count, page));
        })
            .catch(err => dispatch(loadFailure(`Oops.. something went wrong while fetching data`)))
    }
}

export const filter = (term: string) => ({
    type: FILTER,
    payload: { term }
})

const loadStarted = () => ({
    type: LOAD_STARTED,
    payload: {}
})

const loadSuccess = (repos: Repo[], total_count: number, page: number) => ({
    type: LOAD_SUCCESS,
    payload: { repos, total_count, current_page: page }
})

const loadFailure = (error: string) => ({
    type: LOAD_FAILURE,
    payload: { error }
})