import { 
    ADD_HANDY_MAN,
    HANDY_MAN_FORM_VALUES,
} from '../utils/Constants'

export const addHandyman = (handyman) => dispatch => {
    dispatch({
        type: ADD_HANDY_MAN,
        payload: handyman
    })
}

export const handymanFormValues = () => ({
    type: HANDY_MAN_FORM_VALUES,
   });