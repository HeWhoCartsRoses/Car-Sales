export const rid = (feature) => {
    return {
        type: 'REMOVIE',
        payload: feature
    }
}
export const buy = (item) => {
    return {
        type: 'BUY',
        payload: item
    }
}
