

export type TextDefinition = {type: "text", placeholder?: string}
export type SelectDefinition = {type: "select", placeholder?: string, options: {label: string, value: any}[]}

export type FieldDefinition = TextDefinition | SelectDefinition;

export type Definitions = {[key: string]: FieldDefinition}

export enum Junction {
  AND = 'AND',
  OR = 'OR',
  NOT = 'NOT',
}

export type FieldData = {
  name: string,
  value?: any,
  junction?: Junction
};
