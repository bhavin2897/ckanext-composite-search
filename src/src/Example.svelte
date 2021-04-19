<script lang="ts">
  import App from './App.svelte';
  import type {FieldData, Definitions} from './types';
  import {state, prefix as prefixStore, formData}  from './stores';
  export let enabled = false;
  export let prefix: string;
  export let data: FieldData[] = [];
  export let definitions: Definitions = {};

  $formData = data
  $prefixStore = prefix;
  $state = enabled;
</script>

<App {definitions} />

<label>
  <input type="checkbox" bind:checked={$state}/>
  Advanced search
</label>

<style>
  input[type="checkbox"] {
    vertical-align: bottom;
  }
</style>
