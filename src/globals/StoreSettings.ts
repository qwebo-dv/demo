import type { GlobalConfig } from 'payload'

export const StoreSettings: GlobalConfig = {
  slug: 'store-settings',
  label: 'Настройки магазина',
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'storeName',
      type: 'text',
      required: true,
      defaultValue: 'СантехМаркет',
      label: 'Название магазина',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Телефон',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'deliveryInfo',
      type: 'richText',
      label: 'Информация о доставке',
    },
    {
      name: 'paymentInfo',
      type: 'richText',
      label: 'Информация об оплате',
    },
  ],
}
