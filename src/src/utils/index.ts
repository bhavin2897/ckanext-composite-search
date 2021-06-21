import type { Definitions } from "../types";
export class FieldDetails {
    public static definitions: Definitions = {};
    public static default?: string;

    public static setDefinitions(
        definitions: Definitions,
        order: Array<string>
    ): void {
        this.definitions = {}
        const keys = order.length ? order : Object.keys(definitions);
        this.default = keys[0];
        for (let key of keys) {
            // restore order of fields
            this.definitions[key] = definitions[key]
            if (definitions[key].default) {
                this.default = key;
            }
        }
    }
}
