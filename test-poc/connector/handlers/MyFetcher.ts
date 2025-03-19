import { Fetcher, FetchUtils, FetchOptions } from '@tableau/taco-toolkit/handlers'

export default class MyFetcher extends Fetcher {
  async *fetch({ handlerInput }: FetchOptions) {
    const query = `
      query {
        exchangeByFileUrn(
          externalProjectId: "b.d7617730-85af-494f-9105-9b16425b7e97",
          fileUrn: "urn:adsk.wipprod:fs.file:vf.JBt2XPe0RXu3QqQ3HKcD4w?version=1"
        ) {
          elements(pagination: { limit: 1000 }) {
            results {
              name
              properties {
                results {
                  name
                  value
                }
              }
            }
          }
        }
      }
    `

    try {
      const response = await FetchUtils.fetchJson(handlerInput.data.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${handlerInput.data.authToken}`, // Include token if required
        },
        body: JSON.stringify({ query }),
      })

      if (!response || !response.data) {
        throw new Error('No data received from the API.')
      }
      console.log('FETCH DATA RESPONSE => ', response)

      yield response.data.exchangeByFileUrn.elements.results
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
}
