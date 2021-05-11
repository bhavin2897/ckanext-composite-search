<script lang="ts">
  import {prefix} from '../stores';
  import {Junction} from '../types'
  import SelectInput from './SelectInput.svelte';
  export let disabled: boolean;
  export let value: Junction = Junction.AND;
  let options = [...Object.values(Junction)].map(v => ({value: v, label: v}))
</script>
<div class="junction-input">
  <SelectInput bind:value {options} {disabled} fullWidth={true} name="{$prefix}junction" />
</div>

<style>
  .junction-input {
    border: 2px solid #E6E6E6;
    border-radius: 2px;
    min-width: 80px;
  }

</style>
