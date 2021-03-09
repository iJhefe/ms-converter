import {ConversionUnit} from "./Interfaces";

export function isYear(unit: ConversionUnit): boolean {
  return ['y', 'year', 'years'].includes(unit);
}

export function isWeek(unit: ConversionUnit): boolean {
  return ['w', 'week', 'weeks'].includes(unit);
}

export function isDay(unit: ConversionUnit): boolean {
  return ['d', 'day', 'days'].includes(unit);
}

export function isHour(unit: ConversionUnit): boolean {
  return ['h', 'hour', 'hours'].includes(unit);
}

export function isMinute(unit: ConversionUnit): boolean {
  return ['m', 'minute', 'minutes'].includes(unit);
}

export function isSecond(unit: ConversionUnit): boolean {
  return ['s', 'second', 'seconds'].includes(unit);
}

export function isMilliseconds(unit: ConversionUnit): boolean {
  return ['ms', 'milliseconds'].includes(unit);
}