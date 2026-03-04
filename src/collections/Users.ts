import type { CollectionConfig } from 'payload'

import { isAdminOrSelf } from '../access/isAdminOrSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'fullName', 'role'],
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'ФИО',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'customer',
      options: [
        {
          label: 'Администратор',
          value: 'admin',
        },
        {
          label: 'Клиент',
          value: 'customer',
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Телефон',
    },
  ],
}
