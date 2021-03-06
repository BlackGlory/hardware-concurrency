import { doubleCores, halfCores, maxCores, minus1Cores, minusCores } from '@src/index'
import { clearCache } from '@src/cache'

let cores: number
jest.mock('@src/get-hardware-concurrency', () => ({
  getHardwareConcurrency: () => cores
}))

afterEach(clearCache)

test('maxCores(): number', () => {
  setCores(2)

  const result = maxCores()

  expect(result).toBe(2)
})

test('doubleCores(): number', () => {
  setCores(2)

  const result = doubleCores()

  expect(result).toBe(4)
})

describe('halfCores(): number', () => {
  test('cores = 1', () => {
    setCores(1)

    const result = halfCores()

    expect(result).toBe(1)
  })

  test('cores > 1', () => {
    setCores(3)

    const result = halfCores()

    expect(result).toBe(2)
  })
})

describe('minus1Cores(): number', () => {
  test('cores = 1', () => {
    setCores(1)

    const result = minus1Cores()

    expect(result).toBe(1)
  })

  test('cores > 1', () => {
    setCores(4)

    const result = minus1Cores()

    expect(result).toBe(3)
  })
})

describe('minusCores(num: number): number', () => {
  test('maxCores - num < 1', () => {
    setCores(2)

    const result = minusCores(2)

    expect(result).toBe(1)
  })

  test('maxCores - num >= 1', () => {
    setCores(4)

    const result = minusCores(2)

    expect(result).toBe(2)
  })
})

function setCores(num: number) {
  cores = num
}
