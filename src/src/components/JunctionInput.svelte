<script lang="ts">
    import { prefix } from "../stores";
    import { Junction } from "../types";
    import SelectInput from "./SelectInput.svelte";
    export let disabled: boolean;
    export let value: Junction = Junction.AND;
    let options = [...Object.values(Junction)].map((v) => ({
        value: v,
        label: v,
    }));
</script>

<div class="junction-input" class:disabled={disabled}>
    <SelectInput
        bind:value
        {options}
        {disabled}
        fullWidth={true}
        name="{$prefix}junction"
    />
</div>

<style>
    .junction-input {
        border: 2px solid #e6e6e6;
        border-radius: 2px;
        min-width: 80px;
    }

    .junction-input.disabled {
        cursor: not-allowed;
    }

    @media (max-width: 992px) {
        .junction-input {
            width: 50%;
            margin: 0;
        }
    }

    @media (max-width: 480px) {
        .junction-input {
            width: 100%;
        }
    }
</style>
