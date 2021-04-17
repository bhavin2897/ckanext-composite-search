<script lang="ts">
  import {Junction} from '../types'
  export let value: Junction = Junction.AND;
</script>

<select bind:value>
  {#each Object.values(Junction) as value}
    <option >{value}</option>
  {/each}
</select>
