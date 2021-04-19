<script lang="ts">
  import {dndzone} from 'svelte-dnd-action';
  import {flip} from 'svelte/animate';
  import Field from './Field.svelte'
  import {formData} from '../stores';
  const flipDurationMs = 300;
  const dropTargetStyle = {}
  const add = () => {
    formData.addDefault()
  }
  const remove = (idx: number) => {
    formData.remove(idx)
  }
  function handleDndConsider(e) {
    $formData = e.detail.items;
  }
  function handleDndFinalize(e) {
    $formData = e.detail.items;
  }
</script>

<div class="composite-form">
  <div use:dndzone={{items: $formData, flipDurationMs, dropTargetStyle}} on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each $formData as field, idx (field)}
      <div animate:flip={{duration: 300}}>
	<Field  bind:field on:remove={() => remove(idx)} />
      </div>
    {/each}
  </div>
  <button class="add-field" on:click={add}>
    <strong>+</strong>
    Add search field
  </button>
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
