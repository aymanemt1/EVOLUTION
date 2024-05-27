import axios from 'axios';

// Get the CSRF token from the meta tag
const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
} else {
  console.error('CSRF token not found.');
}

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
