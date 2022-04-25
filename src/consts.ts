import {v4 as uuidv4} from 'uuid';
// https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-uuid

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
export const screenId = params.get('screenId') || '';
export const playerId = uuidv4();
// random color generator https://stackoverflow.com/a/5092846/18631517
export const defColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

// check for template variables
const rootElement = document.getElementById('root');

export const VERSION: string = rootElement?.getAttribute('data-version') || '';
export const API_URL: string = rootElement?.getAttribute('data-api-url') || '';
export const AWS_REGION: string = rootElement?.getAttribute('data-aws-region') || 'eu-west-1';
export const AWS_ACCESS_KEY_ID: string = rootElement?.getAttribute('data-access-key-id') || '';
export const AWS_SECRET_ACCESS_KEY: string = rootElement?.getAttribute('data-secret-access-key') || '';

export const UP = 'UP';
export const DOWN = 'DOWN';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';