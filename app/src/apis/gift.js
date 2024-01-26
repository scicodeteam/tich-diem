import http from './http';

export const getGiftFn = async (body) => {
  return await http.get(`/gifts/${body.code}`, {
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  });
};

export const createGiftFn = async (body) => {
  return await http.post(`/gifts/save`, JSON.stringify(body), {
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  });
};
