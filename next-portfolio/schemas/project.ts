import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of Project',
      type: 'string',
    }),
    defineField({
      name: 'Image',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    }),
  ],
})
