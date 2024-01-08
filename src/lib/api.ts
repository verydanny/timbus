import { type App } from 'timbus-backend'
import { edenFetch } from '@elysiajs/eden'

export const api = edenFetch<App>('http://localhost:3000')
