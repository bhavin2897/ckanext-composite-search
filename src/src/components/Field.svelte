<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import  {FieldDetails} from '../utils'
  import type {FieldData} from '../types'

  import CloseCrossSvg from "./CloseCrossSvg.svelte";
  import NegationSwitch from './NegationSwitch.svelte';
  import JunctionInput from './JunctionInput.svelte';
  import TypeInput from './TypeInput.svelte';
  import InputField from './InputField.svelte';
  import SelectField from './SelectField.svelte';
  import DotsSvg from './DotsSvg.svelte';
  import CrossArrowSvg from './CrossArrowSvg.svelte';

  const dispatch = createEventDispatcher()
  export let field: FieldData;
  export let isLast: boolean = false;

  $: definition = FieldDetails.definitions[field.type]
  const remove = () => dispatch('remove')
  const reset = () => field.value = null;
</script>

<div class="composite-field">
  <i class="drag-handle left-drag-handle">
    <DotsSvg/>
  </i>
  <div class="input">
    {#if definition.type === 'text'}
      <InputField bind:field placeholder={definition.placeholder}/>
    {:else if definition.type === 'select'}
      <SelectField options={definition.options} bind:field placeholder={definition.placeholder}/>
    {:else if definition.type === 'autocomplete-select'}
      <SelectField options={definition.options} bind:field placeholder={definition.placeholder} autocomplete={true}/>
    {:else}
      <strong>Unsupported field type</strong>
    {/if}
  </div>

  <i class="drag-handle center-drag-handle">
    <CrossArrowSvg/>
  </i>
  <NegationSwitch bind:value={field.negation}/>
  <TypeInput on:change={reset} bind:value={field.type}/>
  <JunctionInput disabled={isLast} bind:value={field.junction}/>
  <button class="remove-field" on:click={remove}> <CloseCrossSvg /></button>
</div>

<style>
  .drag-handle {
    margin-inline-end: 8px;
  }
  .center-drag-handle {
    margin-inline-start: 8px;
  }
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
    width: 100%;
  }
  .remove-field {
    background: none;
    border: none;
    padding: 0px;
    margin: 6px 0px;
    margin-inline-start: 24px;
    cursor: pointer;
  }
</style>
