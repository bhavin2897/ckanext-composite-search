<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import  {FieldDetails} from '../utils'
  import type {FieldData} from '../types'
  import {state} from '../stores';

  import {JunctionInput, InputField, SelectField} from '.'

  const dispatch = createEventDispatcher()
  export let prefix: string;
  export let field: FieldData;

  const definition = FieldDetails.definitions[field.name]
  const remove = () => dispatch('remove')
</script>

<div class="composite-field">
  {#if definition.type === 'text'}
    <InputField {prefix} {field} placeholder={definition.placeholder}/>
  {:else if definition.type === 'select'}
    <SelectField {prefix} options={definition.options} {field}/>
  {:else}
    <strong>Unsupported field type</strong>
  {/if}
  {#if $state}
    <JunctionInput bind:value={field.junction} />
    <button on:click={remove}>&times;</button>
  {/if}
</div>
