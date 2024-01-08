// import { api } from '$lib/api.js'
import { fail } from '@sveltejs/kit'

export const actions = {
  login: async (event) => {
    const formData = await event.request.formData()
    const username = formData.get('email')
    const password = formData.get('password')

    if (!username || !password) {
      return fail(400, {
        error: true,
        type: 'missing',
        message: [
          !password ? 'password' : false,
          !username ? 'username' : false,
        ].filter(Boolean),
      })
    }
  },
}
