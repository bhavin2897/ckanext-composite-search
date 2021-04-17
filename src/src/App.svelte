<script lang="ts">
  import {state, fields}  from './stores';
  import {FieldDetails} from './utils'
  import {BaseForm, ComposedForm} from './components';
  import type {Definitions, FieldData} from './types';

  export let enabled = false;
  export let prefix: string;
  export let definitions: Definitions = {};
  export let data: FieldData[] = [];

  FieldDetails.setDefinitions(definitions)
  $fields = FieldDetails.fromData(data);
  $state = enabled;
</script>

<div class="composite-search">
  {#if $state}
    <ComposedForm {prefix}/>
  {:else}
    <BaseForm/>
  {/if}

<br/>
<label>
  <input type="checkbox" bind:checked={$state}/>
  Advanced search
</label>
</div>
