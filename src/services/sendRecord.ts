import cryptoJS from 'crypto-js'

export function sendRecord(data: Record<string, FormDataEntryValue>) {
  const baseURL = new URL('http://localhost:3000/')
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: cryptoJS.AES.encrypt(
        JSON.stringify(data),
        'clavesecreta'
      ).toString(),
    }),
  })
    .then((response) => response.json())
    .then((succes) => console.log(succes))
    .catch((error) => console.log(new Error(error)))
}
