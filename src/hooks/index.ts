import { useParams, useLocation } from 'react-router-dom'
import useUrlQueryState from '@ahooksjs/use-url-state'

/**
 * 自定义hooks
 * @returns
 */
export function useRoute() {
  const [query] = useUrlQueryState()
  const params = useParams()
  const location = useLocation()
  return {
    query,
    params,
    location
  }
}
