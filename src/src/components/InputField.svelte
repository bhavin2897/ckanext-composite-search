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

<style>
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 13px 0px 14px;
  }
</style>
