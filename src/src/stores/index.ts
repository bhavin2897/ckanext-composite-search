import { writable, get, derived } from "svelte/store";

import type {FieldDetails} from '../utils'

function createState(initial: boolean = false) {
  const { subscribe, set, update } = writable(initial);
  return {
    subscribe,
    set,
    enable: () => set(true),
    disable: () => set(false),
    toggle: () => update((state) => !state),
  };
}
function createFields(initial: FieldDetails[] = []) {
  const {subscribe, set, update} = writable(initial);
  return {
    subscribe,
    set,
    add: (field: FieldDetails) => update(fields => [...fields, field]),
    get: function() {return get(fields)},
    remove: (idx: number) => update(fields => [...fields.slice(0, idx), ...fields.slice(idx+1)])
  }
}

export const state = createState();
export const fields = createFields()
