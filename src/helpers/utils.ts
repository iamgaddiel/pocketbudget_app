import { format } from "date-fns";
import { getApiCollectionItem, listApiCollection } from "./apiHelpers";
import { v4 as uuid4 } from 'uuid'
import { Transaction } from "../@types/transactions";
import { TRANSACTIONS } from "./keys";
import { getSaveData, saveData } from "./storageSDKs";





 /**
   * Gets transactions from DB if avaiable, if trasnactions return null creates an array of trsnactions: Transaction[]
   * @returns transactions[] | []
   */
export async function getOrCreateTransactions(): Promise<Transaction[]> {
  const storedTransactions = (await getSaveData(TRANSACTIONS)) as Transaction[];
  if (storedTransactions === null) {
    saveData(TRANSACTIONS, []);
    return [];
  }
  return storedTransactions;
}


/**
 * Returns UUID string
 * @returns 
 */
export function getUUIDString(): string{
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
 * @description returns formated date in this format <Month> <Day of the Month> E.g Aug 02 
 * @returns 
 */
export function formatDate(date: string) {
  const formatedDated = format(new Date(date), 'LLL dd') // Month 01
  return formatedDated
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

