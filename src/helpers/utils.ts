import { format } from "date-fns";
import { v4 as uuid4 } from 'uuid'
import { getSaveData, saveData } from "./storageSDKs";




export async function getOrCreateAppDBCollectionList<T>(collectionName: string): Promise<T[]> {
  const collection = await getSaveData(collectionName) as T[];
  if (collection === null) {
    saveData(collectionName, []);
    return [];
  }
  return collection;
}


export async function updateAppDBCollection<T>(collectionName: string, item: Partial<T>): Promise<T> {
  const data = await getSaveData(collectionName) as T
  const newData = { ...data, ...item }
  saveData(collectionName, newData)
  return newData
}


export async function updateAppDBCollectionList<T>(collectionName: string, item: Partial<T>): Promise<T[]> {
  const data = await getSaveData(collectionName) as T[]
  const newData = { ...data, ...item }
  saveData(collectionName, newData)
  return newData
}














export function getTimestamp() {
  return new Date().getTime()
}

/**
 * Returns UUID string
 * @returns 
 */
export function getUUIDString(): string {
  return uuid4()
}


/**
 * 
 * @param length 
 * @returns 
 */
export function getRandomString(length: number) {
  return (Math.random() + 1).toString(36).substring(length);
}

/**
 * 
 * @param date 
 * @description returns formatted date in this format <Month> <Day of the Month> E.g Aug 02 
 * @returns 
 */
export function formatDate(date: string | number): string {
  const formattedDated = format(new Date(date), 'LLL dd') // Month 01
  return formattedDated as string
}

/**
 * 
 * @param datetimeString: string
 * @param getTime: string
 * @param getDate: string
 * @description returns time string by default except getDate parameter is set to true
 * @returns 
 */
export function getTimeOrDateFromDateTimeString(datetimeString: string, getDate?: boolean): string {
  const splitedDateTime = datetimeString.split('T')
  const date = splitedDateTime[0]
  const time = splitedDateTime[1]

  if (getDate) return date;
  return time
}

