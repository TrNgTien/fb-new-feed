export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
