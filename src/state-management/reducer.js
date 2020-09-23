import {INCREASE_COUNT , DECREASE_COUNT} from './action';

const intialState = {
    count: 0
};

const reducer = (state = intialState , action) => {
    switch (action.type) {
        case(INCREASE_COUNT) :
        return ({
            ...state,
            count: state.count + 1
        });
        case(DECREASE_COUNT) :
            return ({
                ...state,
                count: state.count - 1
            });
        default: return state;
    }
}

export default reducer;