import { Action } from "../../@types/actions";
import { Budget } from "../../@types/budget";
import { SET_BUDGET_DEADLINE, SET_BUDGET_TITLE, SET_COMPLETE_STATE, SET_INITIAL_BUDGET,  } from "../actions/AddBudgetAtions";




export function addBudgetReducer(state: Budget, {payload, type}: Action){
    const newSate = {...state}

    switch(type){
        case SET_BUDGET_TITLE:
            newSate.title = payload
            break

        case SET_BUDGET_DEADLINE:
            newSate.deadline = payload
            break

        case SET_INITIAL_BUDGET:
            newSate.initialBudget = payload
            break

        case SET_COMPLETE_STATE:
            newSate.is_complete = payload
            break

        // default:
        //     return newSate
    }

    return newSate
} 