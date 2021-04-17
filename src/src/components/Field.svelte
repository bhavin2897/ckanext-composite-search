<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import type {FieldDetails} from '../utils'
  import {JunctionInput} from '.'

  const dispatch = createEventDispatcher()
  export let prefix: string;
  export let field: FieldDetails;

  const remove = () => dispatch('remove')
</script>

<div class="composite-field">
  <svelte:component this={field.component} {field} {prefix} />
  <JunctionInput bind:value={field.options.junction} />
  <button on:click={remove}>&times;</button>
</div>
