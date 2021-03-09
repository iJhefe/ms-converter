import {ConversionUnit} from "./Interfaces";
import {isDay, isHour, isMilliseconds, isMinute, isWeek, isYear} from "./utils";
import {day, hour, minute, week, year} from "./consts";

function handler(value: number, unit: ConversionUnit, argument: number | boolean, type: 'toMs' | 'fromMs') {
  const convert = (converterValue: number): number => {
    if (type === 'toMs') {
      const additional = argument ? Date.now() : 0;

      return value * converterValue + additional;
    } else {
      if (typeof argument === 'number') {
        if (argument < 6 && argument >= 0) {
          const precisionValue = Math.pow(10, argument);

          return Math.round(value / converterValue * precisionValue) / precisionValue;
        }
      }

      throw new Error('Precision should be a number between 0 and 6')
    }
  }

  if (isYear(unit)) {
    return convert(year);
  } else if (isWeek(unit)) {
    return convert(week);
  } else if (isDay(unit)) {
    return convert(day)
  } else if (isHour(unit)) {
    return convert(hour)
  } else if (isMinute(unit)) {
    return convert(minute)
  } else if (isMilliseconds(unit)) {
    return value;
  }

  throw new Error('Invalid unit to convert')
}

export function ms (value: number, unit: ConversionUnit, fromNow = false): number {
 return handler(value, unit, fromNow, 'toMs')
}

export function fromMs(ms: number, to: ConversionUnit, precision = 2) {
 return handler(ms, to, precision, 'fromMs')
}