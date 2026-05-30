import { portfolio, services, siteSettings } from '~/data/site'

const normalizeCollection = <T>(payload: unknown, fallback: T[]): T[] => {
  if (!payload || typeof payload !== 'object' || !('data' in payload)) {
    return fallback
  }

  const data = (payload as { data?: unknown }).data

  if (!Array.isArray(data)) {
    return fallback
  }

  return data.map((entry) => {
    if (entry && typeof entry === 'object' && 'attributes' in entry) {
      return { ...(entry as { attributes: T }).attributes }
    }

    return entry as T
  })
}

const normalizeSingle = <T>(payload: unknown, fallback: T): T => {
  if (!payload || typeof payload !== 'object' || !('data' in payload)) {
    return fallback
  }

  const data = (payload as { data?: unknown }).data

  if (!data || typeof data !== 'object') {
    return fallback
  }

  if ('attributes' in data) {
    return { ...(data as { attributes: T }).attributes }
  }

  return data as T
}

const getSortOrder = (item: { sortOrder?: number }) => item.sortOrder ?? 0

const fetchStrapi = async <T>(path: string, fallback: T): Promise<T> => {
  const config = useRuntimeConfig()
  const baseURL = config.strapiUrl

  if (!baseURL) {
    return fallback
  }

  try {
    return await $fetch<T>(path, {
      baseURL,
      headers: config.strapiApiToken ? { Authorization: `Bearer ${config.strapiApiToken}` } : undefined,
      query: { publicationState: 'live' }
    })
  } catch (error) {
    console.warn(`Strapi content fallback used for ${path}`, error)
    return fallback
  }
}

export default defineEventHandler(async () => {
  const [settingsPayload, servicesPayload, portfolioPayload] = await Promise.all([
    fetchStrapi('/api/site-setting', { data: siteSettings }),
    fetchStrapi('/api/services', { data: services }),
    fetchStrapi('/api/portfolio-items', { data: portfolio })
  ])

  return {
    settings: normalizeSingle(settingsPayload, siteSettings),
    services: normalizeCollection(servicesPayload, services).sort((a, b) => getSortOrder(a) - getSortOrder(b)),
    portfolio: normalizeCollection(portfolioPayload, portfolio).sort((a, b) => getSortOrder(a) - getSortOrder(b))
  }
})
