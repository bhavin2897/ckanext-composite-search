<script lang="ts">
  import {Field} from '.'
  import {formData, state, solrQuery} from '../stores';
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
    <Field bind:field {prefix} on:remove={() => remove(idx)}/>
  {/each}
  {#if $state && !$solrQuery}
    <button class="add-field" on:click={add}>
      <strong>+</strong>
      Add search field
    </button>
  {/if}
</div>

<style>
  .add-field {
    padding: 19px 25px;
    width: 100%;
    border-radius: 5px;
    background: #DCDCDC;
    border: none;
    text-align: start;
    cursor: pointer;
  }
</style>
