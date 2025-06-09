import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type=='startup' && defined(slug.current)]{
  _id,
  author->{
    _id,name,image,bio
  },
    _createdAt,
  category,
  descreption,
  image,
  pitch,
  slug,
  title,
  views
}`);
