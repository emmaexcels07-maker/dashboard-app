// API service for dashboard data
const API_BASE_URL = '/data';

// Cache for API responses
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const isCacheValid = (timestamp) => {
  return Date.now() - timestamp < CACHE_DURATION;
};

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

export const fetchDashboardData = async () => {
  const cacheKey = 'dashboard-data';

  // Check cache first
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/mockData.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Validate data structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format received from API');
    }

    // Cache the successful response
    setCachedData(cacheKey, data);

    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw new Error(`Failed to fetch dashboard data: ${error.message}`);
  }
};

// Utility function to clear cache (useful for testing or manual refresh)
export const clearApiCache = () => {
  cache.clear();
};
