import http from './http';

export const getTokenFn = async (body) => {
  return await http.post('/login', JSON.stringify(body));
};

export const registerFn = async (body) => {
  return await http.post('/register', JSON.stringify(body));
};

export const getUserFn = async (token) => {
  return await http.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserFn = async (body) => {
  return await http.put(`/users/update?ma_khach_hang=${body.code}`, JSON.stringify(body), {
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  });
};
