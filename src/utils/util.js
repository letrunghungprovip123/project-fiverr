    const a = {
        1 : "123",
        2 : "345"
    }

export function setLocalStorage(key,value) {
    const stringJson = JSON.stringify(value)
    localStorage.setItem(key,stringJson)
}
export function getLocalStorage(key) {
    const dataLocal = localStorage.getItem(key)
    return dataLocal ? JSON.parse(dataLocal) : null;
}