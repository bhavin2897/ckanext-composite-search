import { writable, derived } from "svelte/store";

import type {FieldData} from '../types'
import {FieldDetails} from '../utils'

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
function createFormData(initial: FieldData[] = []) {
  const {subscribe, set, update} = writable(initial);
  return {
    subscribe,
    set,
    addDefault: function() {this.add({name: FieldDetails.default})},
    add: (field: FieldData) => update(fields => [...fields, field]),
    remove: (idx: number) => update(fields => [...fields.slice(0, idx), ...fields.slice(idx+1)])
  }
}

export const state = createState();
export const formData = createFormData()
