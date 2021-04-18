<script lang="ts">
  import {state, solrQuery, formData}  from './stores';
  import {FieldDetails} from './utils'
  import {ComposedForm, InfoSvg, Tooltip} from './components';
  import type {Definitions, FieldData} from './types';

  export let solrHelpUrl: string;
  export let enabled = false;
  export let withSolrQuery = false;
  export let prefix: string;
  export let definitions: Definitions = {};
  export let data: FieldData[] = [];

  const reset = (solr = false) => {
    formData.set([]);
    if (solr) {
      formData.addSolr();
    } else {
      formData.addDefault();
    }

  }
  FieldDetails.setDefinitions(definitions)
  $formData = data
  $state = enabled;
  $solrQuery = withSolrQuery;
  $: if (!$state) {
    reset()
    $solrQuery = false;
  }

</script>

<div class="composite-search">
  <ComposedForm {prefix}/>
  <br/>
  <label>
    <input type="checkbox" bind:checked={$state}/>
    Advanced search
  </label>
  {#if $state}
    <label>
      <input type="checkbox" bind:checked={$solrQuery}
	     on:change={e => reset(e.target['checked'])}/>
      Add query syntax to search
      <Tooltip>
	<svelte:fragment slot="tooltip">
	  <span>
	    This adds SOLR query language, for more information on how to use
	    <a href={solrHelpUrl} target="_blank">click here</a>
	  </span>
	</svelte:fragment>
	<i class="info-icon" slot="content">
	  <InfoSvg/>
	</i>
      </Tooltip>
    </label>
  {/if}

</div>

<style>
  label a {
    color: #eee;
  }
  input[type="checkbox"] {
    vertical-align: bottom;
  }
</style>
