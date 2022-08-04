<script lang="ts">
    import { prefix } from "../stores";
    import { FieldDetails } from "../utils";
    import SelectInput from "./SelectInput.svelte";

    export let value: any;
    let options = [...Object.entries(FieldDetails.definitions)]
        .filter(([, { hidden }]) => !hidden)
        .map(([value, { label }]) => ({ value, label }));
</script>

<div class="type-input">
    <SelectInput
        on:change
        bind:value
        {options}
        name="{$prefix}type"
        fullWidth={true}
    />
</div>

<style>
    .type-input {
        min-width: 130px;
        margin: 0 12px;
        border: 2px solid #e6e6e6;
        border-radius: 2px;
    }

    @media (max-width: 992px) {
        .type-input {
            width: 50%;
            margin: 0;
        }
    }

    @media (max-width: 480px) {
        .type-input {
            width: 100%;
        }
    }
</style>
