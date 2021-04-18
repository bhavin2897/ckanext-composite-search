<script lang="ts">
  import {Junction} from '../types'
  import { SelectInput } from '.';
  export let value: Junction = Junction.AND;
  export let prefix: string;
  let options = [...Object.values(Junction)].map(v => ({value: v, label: v}))
</script>
<div class="junction-input">
  <SelectInput bind:value {options} fullWidth={true} name="{prefix}junction" />
</div>

<style>
  .junction-input {
    border: 2px solid #E6E6E6;
    border-radius: 2px;
    min-width: 75px;
  }

</style>
