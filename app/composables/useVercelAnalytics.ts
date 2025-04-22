// composables/useVercelAnalytics.ts
import { parse } from 'csv-parse/sync'

export const useVercelAnalytics = () => {
  const countries = ref([])
  const referrers = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchCSV = async (filename) => {
    try {
      // Access files directly from the public directory
      const response = await fetch(`/assets/data/analytics/${filename}`)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}: ${response.status} ${response.statusText}`)
      }
      
      const text = await response.text()
      return parse(text, {
        columns: true,
        skip_empty_lines: true,
        trim: true
      })
    } catch (err) {
      console.error(`Error fetching ${filename}:`, err)
      throw err
    }
  }

  const fetchData = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      // Fetch both CSV files in parallel
      [countries.value, referrers.value] = await Promise.all([
        fetchCSV('Top Countries - Apr 15, 8pm - Apr 22.csv'),
        fetchCSV('Top Referrers - Apr 15, 8pm - Apr 22.csv')
      ])
    } catch (err) {
      console.error('Error loading analytics data:', err)
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    countries,
    referrers,
    isLoading,
    error,
    fetchData
  }
}