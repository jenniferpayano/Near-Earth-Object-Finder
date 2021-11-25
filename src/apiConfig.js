let apiUrl
const apiUrls = {
  production: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=1997-12-01&end_date=1997-12-06&api_key=DEMO_KEY',
  development: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=1997-12-01&end_date=1997-12-06&api_key=DEMO_KEY'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
