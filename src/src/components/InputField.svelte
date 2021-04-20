<script lang="ts">
  import {prefix} from '../stores';
  import type {FieldData} from '../types'

  export let placeholder = '';
  export let field: FieldData;
</script>

<input
  name="{$prefix}value"
  type="text"
  bind:value={field.value}
  {placeholder}
  />

<style>
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 0px;
  }
</style>
