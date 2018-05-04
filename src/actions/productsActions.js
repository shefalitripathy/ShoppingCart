export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function addProduct({id, type, name, quantity,thumbnail, description, price}) {
    return {
        type: ADD_PRODUCT,
        payload: {id, type, name, quantity,thumbnail, description, price}
    }
}
export function updateProduct({id, name}) {
    return {
        type: UPDATE_PRODUCT,
        payload: {id, name}
    }
}