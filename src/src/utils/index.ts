
import type { Definitions, FieldData } from "../types";
export class FieldDetails {
  public static definitions: Definitions = {};
  public static default?: string;
  public static solr?: string;

  public static setDefinitions(definitions: Definitions): void {
    this.definitions = definitions;
    const keys = Object.keys(this.definitions);
    this.default = keys[0];

    for (let key of keys) {
      if (this.definitions[key].default) {
	this.default = key;
	break
      }
    }

    this.solr = this.definitions.solr ? 'solr' : this.default;
  }
}
