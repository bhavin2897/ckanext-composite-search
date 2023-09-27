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
    if (!$formData.length) {
      formData.addDefault()
    }
  }
  function handleDndConsider(e: CustomEvent) {
    $formData = e.detail.items;
  }
  function handleDndFinalize(e: CustomEvent) {
    $formData = e.detail.items;
  }

</script>

<div class="composite-form">
  <div use:dndzone={{items: $formData, flipDurationMs, dropTargetStyle}} on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each $formData as field, idx (field)}
      <div animate:flip={{duration: 300}}>
	  <Field  bind:field on:remove={() => remove(idx)} isLast={idx == $formData.length - 1} />
      </div>
    {/each}
  </div>

    <button class="add-field" on:click={add} type="button">
    <strong>+</strong>
    Add Search Field 
    </button>


    <button class="another" type="submit" value="search" aria-label="Submit">
    <i class="fa fa-search"></i>  Search
      </button>

  </div>



<style>

  .add-field {
    padding: 19px 25px;
    width: 30%;
    border-radius: 5px;
    background: #DCDCDC;
    border: none;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  .another{
   padding:19px 25px; border-radius:5px; width:30%;
   background-color: #206B82;
   border: none;
   position: relative;
   float: right;
   right: 0;
   color: #FFFFFF;
   clear: both;
   cursor: pointer;
   overflow: hidden;
  }
</style>
