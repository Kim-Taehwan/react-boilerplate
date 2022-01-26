export {}

declare global {
  type HashMap<T = unknown> = Record<string, T>

  type UnknownMap = HashMap

  type NumberMap = HashMap<number>

  type StringMap = HashMap<string>

  type ValueOf<T> = T[keyof T]
}
