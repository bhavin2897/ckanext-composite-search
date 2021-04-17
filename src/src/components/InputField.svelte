<script lang="ts">
  import type {FieldData} from '../types'

  export let prefix = '';
  export let placeholder = '';
  export let field: FieldData;
</script>

<input
  name="{prefix}{field.name}"
  type="text"
  bind:value={field.value}
  {placeholder}
  />
