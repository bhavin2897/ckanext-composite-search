<script lang="ts">
  import { onMount } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import Field from './Field.svelte';
  import { formData } from '../stores';
  //import {push} from 'svelte-routing';
  import { writable } from 'svelte/store';

  const flipDurationMs = 300;
  const dropTargetStyle = {};

  // will be "molecule" or "dataset" (from <body data-type="...">)
  let entityType: string | null = null;

  onMount(() => {
    // Read the data-type from the <body> tag
    entityType = document.body.getAttribute("data-type");
    console.log(
      "%c[Test] DATASET data-type:",
      "font-weight:bold;",
      entityType
    );
  });

  function resetFilters(): void {
    formData.set([]); // Clear the current state
    formData.addDefault(); // Add a default state back if necessary
  }

  const add = () => {
    formData.addDefault();
  };

  const remove = (idx: number) => {
    formData.remove(idx);
    if (!$formData.length) {
      formData.addDefault();
    }
  };

  function handleDndConsider(e: CustomEvent) {
    $formData = e.detail.items;
  }

  function handleDndFinalize(e: CustomEvent) {
    $formData = e.detail.items;
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const hasInchiKey = $formData.some((field) => field.type === "inchi_key");

    console.log("Entity type:", entityType);
    console.log("Has inchi_key:", hasInchiKey);

    // We now branch based on data-type,
    // but always submit the form normally (same page).
    if (entityType === "molecule") {
      if (hasInchiKey) {
        console.log(
          "Molecule advanced search with inchi_key. Submitting in same page."
        );
      } else {
        console.log(
          "Molecule advanced search without inchi_key. Submitting in same page."
        );
      }
      // Use the existing form action defined by CKAN
      formElement.submit();
    } else if (entityType === "dataset") {
      console.log("Dataset advanced search. Submitting in same page.");
      formElement.submit();
    } else {
      console.log(
        "Unknown or missing data-type on <body>. Submitting with default behaviour."
      );
      formElement.submit();
    }
  }

  $: $formData.forEach((field, idx) => {
    console.log("Type for index", idx, ":", field.type);
  });
</script>

<form on:submit|preventDefault={handleFormSubmit}>
  <div class="composite-form">
    <div
      use:dndzone={{ items: $formData, flipDurationMs, dropTargetStyle }}
      on:consider="{handleDndConsider}"
      on:finalize="{handleDndFinalize}"
    >
      {#each $formData as field, idx (field)}
        <div animate:flip={{ duration: 300 }}>
          <Field
            bind:field
            on:remove={() => remove(idx)}
            isLast={idx == $formData.length - 1}
          />
        </div>
      {/each}
    </div>

    <button class="add-field" on:click={add} type="button">
      <strong>+</strong>
      Add Search Field
    </button>

    <button
      id="reset-button"
      on:click|preventDefault={resetFilters}
      type="button"
      style="background:none;border:none;color:grey;cursor:pointer;text-decoration:underline;"
    >
      Reset
    </button>

    <button class="another" aria-label="Search">
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

  .another {
    padding: 19px 25px;
    border-radius: 5px;
    width: 30%;
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
