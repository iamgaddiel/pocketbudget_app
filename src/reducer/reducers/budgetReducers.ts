import { Action } from "../../@types/actions";
import { Budget, BudgetItem } from "../../@types/budget";
import { SET_BUDGET_DEADLINE, SET_BUDGET_TITLE, SET_COMPLETE_STATE, SET_INITIAL_BUDGET,  } from "../actions/AddBudgetAtions";
import { SET_TITLE, SET_AMOUNT, SET_CATEGORY, SET_DESCRIPTION, SET_TYPE } from "../actions/budgetActions";




export function budgetReducer(state: Budget, {payload, type}: Action){
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


export function budgetItemReducer(state: BudgetItem, { type, payload }: Action) {
    const newState = { ...state };
  
    switch (type) {
      case SET_TITLE:
        newState.title = payload;
        console.log("🚀 ~ file: budgetReducers.ts:44 ~ budgetItemReducer ~ payload:", payload)
        break;
  
      case SET_AMOUNT:
        newState.amount = payload;
        break;
  
      case SET_CATEGORY:
        newState.category = payload;
        break;
  
      case SET_DESCRIPTION:
        newState.aditional_decription = payload;
        break;
  
      case SET_TYPE:
        newState.type = payload;
        break;
    }
  
    return newState;
  }
  