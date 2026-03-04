import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'isVisible'],
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Slug',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Родительская категория',
    },
    {
      name: 'isVisible',
      type: 'checkbox',
      defaultValue: true,
      label: 'Показывать в каталоге',
    },
  ],
}
