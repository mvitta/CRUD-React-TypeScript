export function isEmpty(data: Record<string, FormDataEntryValue>): boolean {
  return Object.values(data).some((value) => value === '')
}
