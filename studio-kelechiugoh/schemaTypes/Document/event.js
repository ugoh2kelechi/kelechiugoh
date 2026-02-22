import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
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
      name: "eventDate",
      type: "datetime",
      title: "Event Date",
    }),
    defineField({
      name: "eventTime",
      type: "string",
      title: "Event Time",
      description: "Display-friendly time range (e.g. 8:00 am - 5:00 pm)",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "eventType",
      type: "string",
      title: "Event Type",
    }),
    defineField({
      name: "detailsUrl",
      type: "string",
      title: "Details URL",
      description: "Internal route (e.g. /event-single)",
    }),
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "registrationLink",
      type: "url",
      title: "Registration Link",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "featuredImage" },
  },
});
