import { defineStore } from "pinia";
import qiong from '@/assets/qio.ng.gif';
import qundao from '@/assets/qundao.png';

export interface Domain {
  domain: string;
  image: string | undefined;
}

export const useAssetsStore = defineStore({
  id: "assets",
  state: () => ({
    domains: [
      {
        domain: 'nb2.com',
      },
      {
        domain: 'nai.ba',
        image: 'https://lifelonglearn.ing/static/cactus/images/logo.png'
      },
      {
        domain: 'gg0.com',
      },
      {
        domain: 'Gk4.com',
      },
      {
        domain: 'Jf4.com',
      },
      {
        domain: 'jg0.com',
      },
      {
        domain: 'Jh4.com',
      },
      {
        domain: 'Jn4.com',
      },
      {
        domain: 'Lajilao.com',
      },
      {
        domain: 'oh1.com',
      },
      {
        domain: 'Pi4.com',
      },
      {
        domain: 'Qio.ng',
        image: qiong
      },
      {
        domain: 'magua.net'
      },
      {
        domain: 'TheBigPicture.cn'
      },
      {
        domain: 'Qundao.com',
        image: qundao
      },
      {
        domain: '5.nu',
      },
      {
        domain: 'pppppppppp.com',
      },
      {
        domain: 'LifelongLearn.ing',
        image: 'https://lifelonglearn.ing/static/cactus/images/logo.png'
      },
    ] as Domain[],
  }),
});
