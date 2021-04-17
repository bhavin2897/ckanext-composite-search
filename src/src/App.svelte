<script lang="ts">
  import {state, formData}  from './stores';
  import {FieldDetails} from './utils'
  import {ComposedForm} from './components';
  import type {Definitions, FieldData} from './types';

  export let enabled = false;
  export let prefix: string;
  export let definitions: Definitions = {};
  export let data: FieldData[] = [];


  FieldDetails.setDefinitions(definitions)
  $formData = data
  $state = enabled;

  $: if (!$state) {
    formData.set([]);
    formData.addDefault();
  }
</script>

<div class="composite-search">
  <ComposedForm {prefix}/>
  <br/>
  <label>
    <input type="checkbox" bind:checked={$state}/>
    Advanced search
  </label>
</div>
