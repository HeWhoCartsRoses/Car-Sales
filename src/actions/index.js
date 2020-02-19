export const rid = (feature) => {
    return {
        type: 'remove_feature',
        payload: feature
    }
}
export const buy = (item) => {
    return {
        type: 'buy_item',
        payload: item
    }
}
