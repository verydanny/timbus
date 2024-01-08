<script lang="ts">
  import '../app.css'
  import { onMount } from 'svelte'
  import { AppBar, AppShell, autoModeWatcher } from '@skeletonlabs/skeleton'
  import {
    initializeStores,
    Drawer,
    getDrawerStore,
  } from '@skeletonlabs/skeleton'
  import Navigation from '$lib/navigation/navigation.svelte'

  initializeStores()

  const drawerStore = getDrawerStore()

  function drawerOpen(): void {
    drawerStore.open({})
  }
</script>

<svelte:head>
  {@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}
</svelte:head>

<Drawer position="right">
  <Navigation />
</Drawer>

<AppShell slotSidebarRight="bg-surface-500/5 w-0 lg:w-64">
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <div class="flex items-center">
          <button class="lg:hidden btn btn-sm mr-4" on:click="{drawerOpen}">
            <span>
              <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </span>
          </button>
          <strong class="text-xl uppercase">Timbus</strong>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- (sidebarLeft) -->
  <svelte:fragment slot="sidebarRight">
    <Navigation />
  </svelte:fragment>
  <!-- (pageHeader) -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<style>
</style>
