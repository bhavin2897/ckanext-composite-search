<script lang="ts">
  import {FieldDetails} from '../utils';
  import {Field} from '.'
  import {formData, state} from '../stores';
  export let prefix: string;
  const add = () => {
    formData.addDefault()
  }
  const remove = (idx: number) => {
    formData.remove(idx)
  }
</script>

<div class="composite-form" class:advanced={$state}>
  {#each $formData as field, idx (field)}
    <Field {field} {prefix} on:remove={() => remove(idx)}/>
  {/each}
  {#if $state}
    <button on:click={add}>
      Add field
    </button>
  {/if}
</div>
