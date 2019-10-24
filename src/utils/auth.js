import { lsConstants } from '../utils/config';

const { tokenKey } = lsConstants;

export const saveToken = (token) => localStorage.setItem(tokenKey, token);

export const deleteToken = () => localStorage.removeItem(tokenKey);

export const tokenExists = () => !!localStorage.getItem(tokenKey);

export const getToken = () => localStorage.getItem(tokenKey);
