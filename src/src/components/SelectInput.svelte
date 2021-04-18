<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import {CaretSvg} from '.'
  const dispatch = createEventDispatcher();
  export let options: {label: string, value: any}[];;
  export let name: string;
  export let placeholder: string = '';
  export let value: any = null;
  export let fullWidth = false;
  let open = false;

  const select = (v: any) => () => {
    value = v;
    dispatch('change', {value})
  }
  const toggle = () => open = !open
  const close = () => open = false;
  $: option = options.find(({value: v}) => v === value )
</script>

<div class="pseudo-select" class:full-width={fullWidth} class:open on:click={toggle} on:mouseleave={close} >
  <input type="hidden" {name} value={value}/>
  <div class="selected-value">
    <span class="label" class:placeholder={!option}>
      {option ? option.label : placeholder}
    </span>
    <i class="caret-icon">
      <CaretSvg/>
    </i>
  </div>
  <ul class="options">
    {#each options as {value, label} (value)}
      <li class="option" on:click={select(value)}>{label}</li>
    {/each}
  </ul>
</div>

<style>
  .pseudo-select {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }
  .full-width {
    width: 100%;
  }
  .selected-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selected-value .placeholder {
    color: #9C9B99;
;
  }
  .selected-value .caret-icon {
    margin-inline-start: 8px;
  }
  .full-width .selected-value, .option {
    padding: 9px 14px;
  }
  .options {
    display: none;
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
    z-index: 1;
    position: absolute;
    background: #fff;
    border: 1px solid #eee;
  }
  .pseudo-select.open .options {
    display: block;
    width: auto;
    white-space: nowrap;
  }
</style>
