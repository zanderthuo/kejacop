import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    properties : [
        {id: 1, propertyName: 'Pema Flats', propertyLocation: 'Ruiru', noOfUnits: 15, landlord: 'James Mwati'},
        {id: 2, propertyName: 'Pema Flats', propertyLocation: 'Ruiru', noOfUnits: 15, landlord: 'James Mwati'},
        {id: 3, propertyName: 'Pema Flats', propertyLocation: 'Ruiru', noOfUnits: 15, landlord: 'James Mwati'},
        {id: 4, propertyName: 'Pema Flats', propertyLocation: 'Ruiru', noOfUnits: 15, landlord: 'James Mwati'}
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 
    // Actions
    const addProperty = (properties) => {
        dispatch ({
            type: 'ADD_PROPERTY',
            payload: properties
        })
    }
    return (
        <GlobalContext.Provider value={{
            properties: state.properties,
            addProperty
        }} >
            {children}
        </GlobalContext.Provider>
    )
}