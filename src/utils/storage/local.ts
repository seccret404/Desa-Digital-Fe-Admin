export const writeLocal = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getLocal = (key: string) => {
    return localStorage.getItem(key);
}

export const delLocal = (key: string) => {
    localStorage.removeItem(key);
}
