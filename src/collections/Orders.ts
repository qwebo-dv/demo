import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customer', 'status', 'total'],
  },
  access: {
    read: ({ req }) => {
      if (!req.user) return false
      if (req.user.role === 'admin') return true

      return {
        customer: {
          equals: req.user.id,
        },
      }
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      label: 'Номер заказа',
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Покупатель',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Позиции заказа',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
          label: 'Товар',
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          label: 'Количество',
        },
        {
          name: 'priceSnapshot',
          type: 'number',
          required: true,
          min: 0,
          label: 'Цена на момент заказа',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'Новый', value: 'new' },
        { label: 'Оплачен', value: 'paid' },
        { label: 'Собирается', value: 'processing' },
        { label: 'Отправлен', value: 'shipped' },
        { label: 'Доставлен', value: 'delivered' },
        { label: 'Отменён', value: 'cancelled' }
      ],
      label: 'Статус',
    },
    {
      name: 'deliveryAddress',
      type: 'group',
      label: 'Адрес доставки',
      fields: [
        { name: 'city', type: 'text', required: true, label: 'Город' },
        { name: 'street', type: 'text', required: true, label: 'Улица' },
        { name: 'building', type: 'text', required: true, label: 'Дом' },
        { name: 'flat', type: 'text', label: 'Квартира/офис' },
        { name: 'comment', type: 'textarea', label: 'Комментарий' }
      ],
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
      label: 'Итоговая сумма',
    },
  ],
}
