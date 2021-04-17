<script lang="ts">
  import type {FieldData} from '../types'

  export let prefix = '';
  export let options: {label: string, value: string}[];
  export let field: FieldData;
</script>

<select id="" name="{prefix}{field.name}" bind:value={field.value}>
  {#each options as {value, label} (value)}
    <option {value}>{label}</option>
  {/each}
</select>
