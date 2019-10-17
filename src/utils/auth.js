import { lsConstants } from '../utils/config';

const { tokenKey } = lsConstants;

export const saveToken = (token) => localStorage.set(tokenKey, token);

export const deleteToken = () => localStorage.removeItem(tokenKey);

export const isTokenSet = () => !!localStorage.getItem(tokenKey);

export const getToken = () => localStorage.getItem(tokenKey);
