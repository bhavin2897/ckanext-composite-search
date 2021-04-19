<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import  {FieldDetails} from '../utils'
  import type {FieldData} from '../types'

  import JunctionInput from './JunctionInput.svelte';
  import TypeInput from './TypeInput.svelte';
  import InputField from './InputField.svelte';
  import SelectField from './SelectField.svelte';

  const dispatch = createEventDispatcher()
  export let field: FieldData;

  $: definition = FieldDetails.definitions[field.name]
  const remove = () => dispatch('remove')
  const reset = () => field.value = null;
</script>

<div class="composite-field">
  <div class="input">
    {#if definition.type === 'text'}
      <InputField bind:field placeholder={definition.placeholder}/>
    {:else if definition.type === 'select'}
      <SelectField options={definition.options} bind:field placeholder={definition.placeholder}/>
    {:else}
      <strong>Unsupported field type</strong>
    {/if}
  </div>
  <TypeInput on:change={reset} bind:value={field.name}/>
  <JunctionInput bind:value={field.junction}/>
  <button class="remove-field" on:click={remove}>&times;</button>
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
    background: #fff;
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
