import { createReducer,on } from "@ngrx/store";
import { dates } from "./date.actions";

import { inititalState } from "./date.state";
const datei=new Date();
const _dateset=createReducer(
    inititalState,
    on(dates,(state)=>{
        console.log("date in reducer",state)
        return{
         
            dates:new Date()
        };
    })
);

export function dateReducer(state,action){
    return _dateset(state,action);
}