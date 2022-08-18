import youteam from '../assets/items/youteam.png'
import charity from '../assets/items/charity.png'
import cantelmo from '../assets/items/cantelmo.png'
import iclimat from '../assets/items/iclimat.png'
import supergoods from '../assets/items/supergoods.png'
import pdf from '../assets/items/pdf.png'
import weather from '../assets/items/weather.png'
import cur from '../assets/items/cur.png'


export const items = [
  {
    category: 'web',
    data: [
      {
        id: 1,
        title: 'You team',
        link: 'https://loner1feed.github.io/youteam/',
        img: youteam,
      },
      {
        id: 2,
        title: 'Charity',
        link: 'https://loner1feed.github.io/charity/',
        img: charity,
      },
      {
        id: 4,
        title: 'Cantelmo',
        link: 'https://l1feed2.github.io/cantelmo/index.html',
        img: cantelmo,
      },
      {
        id: 5,
        title: 'I-Climat',
        link: 'https://loner1feed.github.io/iclimat/',
        img: iclimat,
      },
      {
        id: 6,
        title: 'Supergoods',
        link: 'https://loner1feed.github.io/supergoods/',
        img: supergoods,
      },
    ]
  },

  {
    category: 'react',
    data: [
      {
        id: 1,
        title: 'WYSIWYG PDF generation app',
        link: 'https://github.com/Loner1feed/pdf-generation-app',
        img: pdf,
      },

      {
        id: 2,
        title: 'Simple weather app',
        link: 'https://loner1feed.github.io/weather-app/',
        img: weather,
      },

      {
        id: 3,
        title: 'Simple currency converter',
        link: 'https://loner1feed.github.io/cur-app/',
        img: cur,
      }
    ]
  }

]