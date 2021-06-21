<script lang="ts">
  import {state}  from './stores';
  import {FieldDetails} from './utils'
  import {ComposedForm} from './components';
  import type {Definitions} from './types';

  export let definitions: Definitions = {};
  export let order: Array<string> = [];
  FieldDetails.setDefinitions(definitions, order)

</script>

{#if $state}
  <ComposedForm/>
{/if}
