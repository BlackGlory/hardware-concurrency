import { cpus } from 'os'

export function getHardwareConcurrency(): number {
  return cpus().length
}
