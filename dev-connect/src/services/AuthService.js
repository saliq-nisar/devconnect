import api from '../api/Interceptor';

class AuthService {
  loginUser(credentials) {
    return api.post('/users/login', credentials);
  }

  getUserData() {
    return api.get('/user');
  }
}

export default new AuthService();