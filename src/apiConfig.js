let apiUrl
const apiUrls = {
  production: 'https://api.nasa.gov/neo/rest/v1',
  development: 'https://api.nasa.gov/neo/rest/v1'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
