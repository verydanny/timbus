<script lang="ts">
  import { onDestroy } from 'svelte'
  import { enhance } from '$app/forms'
  import { page } from '$app/stores'
  import { type ActionFailure } from '@sveltejs/kit'

  let email = ''
  let password = ''
  let myPage: ActionFailure<{
    error: boolean
    type: string
    message: string[]
  }>['data']

  const unSubPage = page.subscribe((run) => {
    myPage = run.form
  })

  $: if ($page.form) console.log($page)

  onDestroy(unSubPage)
</script>

<form
  class="p-10 max-w-sm mx-auto"
  method="post"
  action="?/login"
  use:enhance={({ formElement, formData, action, cancel, submitter }) => {
    // return async ({ result, update }) => {
    //   return result
    // }
  }}
>
  <div class="mb-4">
    <p class="bg-red-300">
      {#if myPage?.error}{$page.form?.type}
        {myPage?.message.map((error) => ` ${error}`)}
      {/if}
    </p>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input
      class="input"
      id="email"
      type="email"
      placeholder="Email"
      minlength="1"
      name="email"
      bind:value={email}
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input
      class="input"
      id="password"
      type="password"
      placeholder="******************"
      name="password"
      bind:value={password}
    />
  </div>
  <div class="flex items-center justify-between">
    <button
      class="bg-twitch-purple hover:bg-twitch-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Sign In
    </button>
  </div>
</form>

<style>
  /* Add any additional CSS styles here */
</style>
