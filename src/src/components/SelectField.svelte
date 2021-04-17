<script lang="ts">
  import type {FieldDetails} from '../utils'
  export let prefix = '';
  export let field: FieldDetails;
</script>

<select id="" name="{prefix}{field.options.name}" bind:value={field.options.value}>
  {#each field.definition.options as {value, label} (value)}
    <option {value}>{label}</option>
  {/each}
</select>
