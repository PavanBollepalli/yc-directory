import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "username",
      type: "string",
      title: "Username",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "image",
      type: "url",
      title: "Profile Image",
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "username",
      media: "image",
    },
  },
});
