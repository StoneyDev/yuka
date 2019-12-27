import clientFetch from 'unfetch';
import serverFetch from 'isomorphic-unfetch';

export const isServer = typeof window === 'undefined';
export const fetch = isServer ? serverFetch : clientFetch;