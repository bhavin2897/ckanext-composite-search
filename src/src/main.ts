import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    enabled: true,
    prefix: "ext_composite_",
    definitions: {
      any: { type: "text", placeholder: "Add a value" },
      title: { type: "text" },
      description: { type: "text" },
      keyword: { type: "text" },
      topic: { type: "text" },
      purpose: { type: "text" },
      data_type: {
        type: "select",
        options: [
          { label: "First", value: "f" },
          { label: "Second", value: "s" },
          { label: "Third", value: "t" },
        ],
      },
      attachment: { type: "text" },
    },
    data: [
      { name: "any", value: "random", junction: "AND" },
      { name: "title", value: "like", junction: "OR" },
      { name: "title", value: "dislike", junction: "NOT" },
      { name: "data_type", value: "s" },
      { name: "any" },
    ],
  },
});

export default app;
