<script lang="ts">
  import {prefix} from '../stores';
  import type {FieldData} from '../types'
  import SelectInput from './SelectInput.svelte';
  export let placeholder = '';
  export let options: {label: string, value: any}[];
  export let field: FieldData;
</script>

<SelectInput bind:value={field.value} {options} name="{$prefix}{field.name}" {placeholder}/>
