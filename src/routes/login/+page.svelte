<script>
  let email = ''
  let password = ''

  const handleSubmit = () => {
    // Handle the login logic here
    console.log({ email, password })
  }
</script>

<form class="p-10 max-w-sm mx-auto" on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Email"
      bind:value={email}
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="******************"
      bind:value={password}
    />
  </div>
  <div class="flex items-center justify-between">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Sign In
    </button>
  </div>
</form>

<style>
  /* Add any additional CSS styles here */
</style>
