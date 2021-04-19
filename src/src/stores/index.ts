import { writable } from "svelte/store";

import type {FieldData} from '../types'
import {FieldDetails} from '../utils'

function createToggle(initial: boolean = false) {
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
  let id = 0;
  return {
    subscribe,
    set: (items: FieldData[]) => set(items.map(item => item.id ? item : {id: ++id, ...item})),
    addDefault: function() {this.add({name: FieldDetails.default, value: null})},
    add: (field: FieldData) => update(fields => [...fields, {id: ++id, ...field}]),
    remove: (idx: number) => update(fields => [...fields.slice(0, idx), ...fields.slice(idx+1)])
  }
}

export const state = createToggle();
export const formData = createFormData()
export const prefix = writable('')
