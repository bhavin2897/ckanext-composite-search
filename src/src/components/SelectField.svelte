<script lang="ts">
  import type {FieldData} from '../types'
  import { SelectInput } from '.';
  export let placeholder = '';
  export let prefix = '';
  export let options: {label: string, value: any}[];
  export let field: FieldData;
</script>

<SelectInput bind:value={field.value} {options} name="{prefix}{field.name}" {placeholder}/>
