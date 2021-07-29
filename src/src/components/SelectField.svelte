<script lang="ts">
  import {prefix} from '../stores';
  import type {FieldData} from '../types'
  import SelectInput from './SelectInput.svelte';
  import SelectAutoInput from './SelectAutoInput.svelte';
  export let placeholder = '';
  export let options: {label: string, value: any}[];
  export let field: FieldData;
  export let autocomplete: boolean = false;
</script>

{#if autocomplete}
  <SelectAutoInput bind:value={field.value} {options} name="{$prefix}value" {placeholder}/>
{:else}
  <SelectInput bind:value={field.value} {options} name="{$prefix}value" {placeholder}/>
{/if}
