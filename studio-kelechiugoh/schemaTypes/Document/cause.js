import { HeartIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "cause",
  title: "Cause",
  type: "document",
  icon: HeartIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
    }),
    defineField({
      name: "donationLink",
      type: "string",
      title: "Donation Link",
    }),
    defineField({
      name: "raised",
      type: "number",
      title: "Amount Raised",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "goal",
      type: "number",
      title: "Goal Amount",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "progress",
      type: "number",
      title: "Progress (%)",
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "impactStats",
      type: "array",
      title: "Impact Stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "value", type: "string", title: "Value" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "donationGoal",
      type: "number",
      title: "Donation Goal",
      deprecated: {
        reason: 'Use "goal" instead for parity with the site UI.',
      },
      readOnly: true,
      hidden: ({ value }) => value === undefined,
      initialValue: undefined,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
