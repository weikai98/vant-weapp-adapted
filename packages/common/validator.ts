export function isObject(x: unknown): x is Record<string, unknown> {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
