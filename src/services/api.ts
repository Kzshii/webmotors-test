import axios, { AxiosResponse } from 'axios';

const url = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge';

const isOk = (res: AxiosResponse) => res.status >= 200 && res.status < 400;

export const api = {
  get: async (path: string): Promise<any[]> => {
    try {
      const res = await axios.get(`${url}/${path}`);

      if (!isOk(res)) {
        throw new Error(`Error: [${res.status}] ${res.statusText}`);
      }

      return res.data;
    } catch (e) {
      throw new Error(`Failed to get url ${url} - ${e}`);
    }
  }
};
