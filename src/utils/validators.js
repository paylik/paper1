export const requiredField = (value) => {
    if (value) return undefined;

    return "Field is required!!!"
}

export const maxLength = (count) => (value) => {
    if (value.length > count) return `Max length is ${ count } symbols`;

    return undefined
}