import http from './http';

export const getPointFn = async (body) => {
  return await http.get(`/points/${body.code}`, {
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  });
};

export const createPointFn = async (body) => {
  return await http.post(`/points/save`, JSON.stringify(body), {
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  });
};
