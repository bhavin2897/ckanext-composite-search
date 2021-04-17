import type { SvelteComponentDev } from "svelte/internal";

import { InputField, SelectField } from "../components";
import type { Definitions, FieldDefinition, FieldData } from "../types";
export class FieldDetails {
  private static definitions: Definitions = {};

  public definition: FieldDefinition;
  public component: typeof SvelteComponentDev;
  public options: FieldData;

  constructor(options?: FieldData) {
    if (!options) {
      options = { name: "any" };
    }
    let definition = FieldDetails.definitions[options.name];
    if (!definition) {
      console.error(`Missing definition for field ${options.name}`);
      definition = { type: "text" };
    }
    this.component = this.resolveType(definition.type);
    this.definition = definition;
    this.options = options;
  }

  private resolveType(type: string): typeof SvelteComponentDev {
    switch (type) {
      case "select":
        return SelectField;
      case "text":
      default:
        return InputField;
    }
  }
  public static setDefinitions(definitions: Definitions): void {
    this.definitions = definitions;
  }
  public static fromData(data: FieldData[]): FieldDetails[] {
    return data.map((record) => new this(record));
  }
}
