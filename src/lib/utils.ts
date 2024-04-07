import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format query object into query string
 * @param query query object, containing key-value pairs
 * @returns formatted query string in the form of `?key1=value1&key2=value2`
 */
export function formatURLSearchParams(query: Record<string, string>) {
  const queryString = new URLSearchParams(query).toString();
  return `?${queryString}`;
}

/**
 * Format date object into locale date string
 * @param date Date object
 * @returns formatted date string in the form of `MM/DD/YYYY`
 */
export function formatDateString(date: Date) {
  return date.toLocaleDateString();
}
