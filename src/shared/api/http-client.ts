import ky from 'ky'

export const httpClient = ky.create({
  hooks: {
    beforeRequest: [
      ({ request }) => {
        request.headers.set('Accept', 'application/json')
      },
    ],
  },
  timeout: 10_000,
})
