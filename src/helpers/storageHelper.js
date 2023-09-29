import { useEffect, useState } from 'react';

/**
 * Use local storage to improve content showing (object identified by storage key)
 *
 * @param storageKey {String} key used for local storage
 * @param fallbackState {Object} initial value for local storage
 * @return {Array} useState objects (value, setValue) to be used in component
 */
export const useLocalStorage = (storageKey, fallbackState) => {
    //localStorage.removeItem(storageKey);
    const localState = localStorage.getItem(storageKey) ?? JSON.stringify(fallbackState);
    const [value, setValue] = useState(JSON.parse(localState));

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

/**
 * Use session storage to improve content showing (object identified by session key)
 *
 * @param storageKey {String} key used for session storage
 * @param fallbackState {Object} initial value for local storage
 * @return {Array} useState objects (value, setValue) to be used in component
 */
export const useSessionStorage = (storageKey, fallbackState) => {
    //sessionStorage.removeItem(storageKey);
    const sessionState = sessionStorage.getItem(storageKey) ?? JSON.stringify(fallbackState);
    const [value, setValue] = useState(JSON.parse(sessionState));

    useEffect(() => {
        sessionStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};