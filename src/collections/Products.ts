import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sku', 'price', 'stock', 'isPublished'],
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
      label: 'Название товара',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'sku',
      type: 'text',
      required: true,
      unique: true,
      label: 'Артикул',
    },
    {
      name: 'brand',
      type: 'text',
      label: 'Бренд',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      label: 'Категории',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
          label: 'Цена',
        },
        {
          name: 'oldPrice',
          type: 'number',
          min: 0,
          label: 'Старая цена',
        },
        {
          name: 'stock',
          type: 'number',
          required: true,
          min: 0,
          defaultValue: 0,
          label: 'Остаток на складе',
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Краткое описание',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Полное описание',
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      required: true,
      label: 'Галерея',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'isMain',
          type: 'checkbox',
          defaultValue: false,
          label: 'Главное изображение',
        },
      ],
    },
    {
      name: 'attributes',
      type: 'array',
      label: 'Характеристики',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Параметр',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Значение',
        },
      ],
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
      label: 'Опубликован',
      index: true,
    },
  ],
}
