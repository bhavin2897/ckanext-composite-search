interface SharedDefinition {
  placeholder?: string;
  default?: boolean;
  hidden?: boolean;
  label: string;
}

export interface TextDefinition extends SharedDefinition {
  type: "text";
}
export interface SelectDefinition extends SharedDefinition {
  type: "select";
  options: { label: string; value: any }[];
}

export type FieldDefinition = TextDefinition | SelectDefinition;

export type Definitions = { [key: string]: FieldDefinition };

export enum Junction {
  AND = "AND",
  OR = "OR",
  NOT = "NOT",
}

export interface FieldData {
  name: string;
  value?: any;
  junction?: Junction;
  id?: number;
}
