import Example from "./Example.svelte";

const app = new Example({
    target: document.body,
    props: {
        enabled: true,
        prefix: "ext_composite_",
        order: [
            "any",
            "title",
            "description",
            "keyword",
            "topic",
            "purpose",
            "data_type",
            "attachment",
        ],
        definitions: {
            any: {
                type: "text",
                label: "Any attribute",
                placeholder: "Add a value",
                default: true,
            },
            title: { type: "text", label: "Title" },
            description: { type: "text", label: "Description" },
            keyword: { type: "text", label: "Keyword" },
            topic: { type: "text", label: "Topic" },
            purpose: { type: "text", label: "Purpose" },
            data_type: {
                type: "select",
                label: "Data Type",
                placeholder: "Choose Data Type",
                options: [
                    { label: "First", value: "f" },
                    { label: "Second", value: "s" },
                    { label: "Third", value: "t" },
                    { label: "First", value: "ff" },
                    { label: "Second", value: "ss" },
                    { label: "Third", value: "tt" },
                    { label: "First", value: "fff" },
                    { label: "Second", value: "sss" },
                    { label: "Third sdf sd fsdf sdf sdf sdfsdf sdf ", value: "ttt" },

                ],
            },
            attachment: { type: "text", label: "File Attachment or smth" },
        },
        data: [
            { type: "title", value: "dislike", junction: "OR", negation: true },
            { type: "data_type", value: "s" },
        ],
    },
});

export default app;
