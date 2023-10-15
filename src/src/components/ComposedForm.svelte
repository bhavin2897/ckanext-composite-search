<script lang="ts">
  import {dndzone} from 'svelte-dnd-action';
  import {flip} from 'svelte/animate';
  import Field from './Field.svelte'
  import {formData} from '../stores';
  //import {push} from 'svelte-routing';
  import { onMount } from 'svelte';

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
    $formData = e.detail.items
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formElement = event.target;
    const hasInchiKey = $formData.some(field => field.type === 'inchi_key');

    // console.log($formData);
    // console.log(formElement.elements);

    // console.log('$formData:', $formData);

    // Log form elements and their values
      // Array.from(formElement.elements).forEach(el => {
        // console.log(el.name, ':', el.value);
       // });

    if (hasInchiKey) {
        // Perform an AJAX submission
        const formDataToSend = new FormData(formElement);
        for (let pair of formDataToSend.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
         }
        try {
            let response = await fetch('/molecule_view', {
                method: 'POST',
                body: formDataToSend
            });
            if(response.ok) {
                console.log('About to redirect...');
                window.location.href = '/molecule_view';
                console.log('Redirection should have occurred');
            } else {
                console.error('Form submission failed:', response.statusText);
            }
        } catch(err) {
            console.error('Error in form submission:', err);
        }
        formElement.submit();
    } else {
        formElement.action = '/dataset/';
        formElement.submit(); // perform a regular form submission
    }
}
  $: $formData.forEach((field, idx) => {
    console.log('Type for index', idx, ':', field.type);
    });

</script>

<form on:submit={handleFormSubmit}>
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

    <button class="another" type="submit" aria-label="Search" >
      <i class="fa fa-search"></i> Search
    </button>

</div>
</form>


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