<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import  {FieldDetails} from '../utils'
  import type {FieldData} from '../types'
  import {state, solrQuery} from '../stores';

  import {JunctionInput, TypeInput, InputField, SelectField} from '.'

  const dispatch = createEventDispatcher()
  export let prefix: string;
  export let field: FieldData;

  $: definition = FieldDetails.definitions[field.name]
  const remove = () => dispatch('remove')
  const reset = () => field.value = null;
</script>

<div class="composite-field">
  <div class="input">
    {#if definition.type === 'text'}
      <InputField {prefix} bind:field placeholder={definition.placeholder}/>
    {:else if definition.type === 'select'}
      <SelectField {prefix} options={definition.options} bind:field placeholder={definition.placeholder}/>
    {:else}
      <strong>Unsupported field type</strong>
    {/if}
  </div>
  {#if $state && !$solrQuery}
    <TypeInput on:change={reset} bind:value={field.name}/>
    <JunctionInput bind:value={field.junction} {prefix}/>
    <button class="remove-field" on:click={remove}>&times;</button>
  {/if}
</div>

<style>
  .composite-field {
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    align-items: center;
    line-height: 1rem;
    padding: 11px 24px;
    margin-bottom: 10px;
  }
  .input {
    flex: 1;
  }
  .remove-field {
    background: none;
    border: none;
    padding: 0px;
    min-width: 1rem;
    margin-inline-start: 24px;
    cursor: pointer;
  }
</style>
