import { createContext, useReducer } from 'react';

import productReducer from '../reducers/product';
import { getListProduct } from '../axios/product';
import { SET_PRODUCT } from '../reducers/constant';
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productList, dispatch] = useReducer(productReducer, {
        products: [],
        isLoading: true,
    });

    const getProductList = async () => {
        try {
            const data = await getListProduct();
            if (data.success) {
                dispatch({ type: SET_PRODUCT, payload: data.product });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // getProductList();

    const productData = { productList };
    return (
        <ProductContext.Provider value={productData}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
