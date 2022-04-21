import { v4 as uuidv4 } from 'uuid';
// https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-uuid

export const screenId = 'asdfsdfasdfsd';
export const playerId = uuidv4();
// random color generator https://stackoverflow.com/a/5092846/18631517
export const defColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
