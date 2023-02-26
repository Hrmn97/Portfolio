export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectTitle',
      title: 'ProjectTitle',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'ProjectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'isCurrentlyWorking',
      title: 'IsCurrentlyWorking',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'techDetails',
      title: 'TechDetails',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
  ],
}