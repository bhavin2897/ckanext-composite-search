<script lang="ts">
  import {prefix} from '../stores';
  import type {FieldData} from '../types'

  export let placeholder = '';
  export let field: FieldData;

  const keyDispatcher = (e) => {
    switch (e.key) {
      case "Enter":
        return _submitForm(e.target);
      default:
        break;
    }
  }

  const _submitForm = (el) => {
    el.closest('form').submit()
  }
</script>

<input
  name="{$prefix}value"
  type="text"
  bind:value={field.value}
  {placeholder}
  on:keydown="{keyDispatcher}"
  />

<style>
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 0px;
  }
</style>
