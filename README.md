# hardware-concurrency

Utilities for the number of logical cores.

## Install

```sh
npm install --save hardware-concurrency
# or
yarn add hardware-concurrency
```

## API

### maxCores

```ts
function maxCores(): number
```

Take the number of cores.

Equivalent to `navigator.hardwareConcurrency` or `os.cpus().length`.

### halfCores

```ts
function halfCores(): number
```

Take half the number of cores and round up.

### doubleCores

```ts
function doubleCores(): number
```

Take double the number of cores.

### minus1Cores

```ts
function minus1Cores(): number
```

Equivalent to `Math.max(maxCores() - 1, 1)`.

### minusCores

```ts
function minusCores(num: number): number
```

Equivalent to `Math.max(maxCores() - num, 1)`.
