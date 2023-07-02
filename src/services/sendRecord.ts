export function sendRecord(data: Record<string, FormDataEntryValue>) {
  const baseURL = new URL('http://localhost:3000/')
  fetch(baseURL, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((succes) => console.log(succes))
    .catch((error) => console.log(new Error(error)))
}
