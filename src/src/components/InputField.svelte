<script lang="ts">
  import type { FieldDetails } from '../utils';
  export let prefix = '';
  export let field: FieldDetails;
</script>
<input
  name="{prefix}{field.options.name}"
  type="text"
  bind:value={field.options.value}
  placeholder={field.definition.placeholder}
  />
