import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import api from "../api";
import { Repo } from "../types";
import { Action, FILTER, LOAD_FAILURE, LOAD_STARTED, LOAD_SUCCESS } from './actions';

export interface State {
    repos: Repo[];
    error: string;
    status: "initial" | "loading" | "done" | "error";
    current_page: number;
    total_count: number;
    original: Repo[];

}

const initialState: State = {
    repos: [],
    original: [],
    error: "",
    status: "initial",
    total_count: 0,
    current_page: 0
}
const reposReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case LOAD_STARTED:
            return {
                ...state,
                status: "loading"
            }
        case LOAD_SUCCESS:
            return { ...state, status: "done", original: action.payload.repos, repos: action.payload.repos, error: "", total_count: action.payload.total_count, current_page: action.payload.current_page }
        case LOAD_FAILURE:
            return { ...state, status: "error", error: action.payload.error }
        case FILTER:
            if (action.payload.term === "") return { ...state, repos: state.original }
            return { ...state, repos: state.original.filter(x => x.name?.includes(action.payload.term) || x.description?.includes(action.payload.term)) }
        default:
            return state;
    }
}

export default createStore(reposReducer, applyMiddleware(thunk.withExtraArgument(api)));