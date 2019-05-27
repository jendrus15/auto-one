export const addMerchant = (id, data) => ({
    type: 'ADD_MERCHANT',
    id,
    data
});

export const editMerchant = (id, data) => ({
    type: 'EDIT_MERCHANT',
    id,
    data
});

export const removeMerchant = id => ({
    type: 'REMOVE_MERCHANT',
    id
});