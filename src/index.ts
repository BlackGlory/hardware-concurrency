import { ValueGetter } from 'value-getter'
import { getHardwareConcurrency } from '@src/get-hardware-concurrency'
import { cache } from './cache'

export const maxCores =
  new ValueGetter(() => getHardwareConcurrency())
    .memoize(cache)
    .get()

export const halfCores =
  new ValueGetter(() => Math.ceil(maxCores() / 2))
    .memoize(cache)
    .get()

export const doubleCores =
  new ValueGetter(() => maxCores() * 2)
    .memoize(cache)
    .get()

export const minus1Cores =
  new ValueGetter(() => minusCores(1))
    .memoize(cache)
    .get()

export function minusCores(num: number): number {
  return Math.max(maxCores() - num, 1)
}
