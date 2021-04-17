<script lang="ts">
  import {FieldDetails} from '../utils'
  import {Field} from '.'
  import {fields} from '../stores';
  export let prefix: string;
  const add = () => {
    const field = new FieldDetails()
    fields.add(field)
  }
  const remove = (idx: number) => {
    fields.remove(idx)
  }
</script>

<div class="composite-form">
  {#each $fields as field, idx (field)}
    <Field {field} {prefix} on:remove={() => remove(idx)}/>
  {/each}
  <button on:click={add}>
    Add field
  </button>

</div>
