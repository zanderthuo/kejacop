export default (state, action) => {
    switch (action.type) {
        case 'ADD_PROPERTIES':
          return {
            properties: [action.payload, ...state.properties]
          }
        default:
            return state;
    }
}
