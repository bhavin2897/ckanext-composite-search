<script lang="ts">
  import {state}  from './stores';
  import {FieldDetails} from './utils'
  import {ComposedForm} from './components';
  import type {Definitions} from './types';

  export let definitions: Definitions = {};
  FieldDetails.setDefinitions(definitions)

</script>

{#if $state}
  <ComposedForm/>
{/if}
