import { SET_PRODUCT } from './constant';

const productReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_PRODUCT:
            return {
                ...state,
                products: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default productReducer;
