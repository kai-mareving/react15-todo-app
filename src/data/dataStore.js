export const settings = {
  listCreatorText: 'Add new list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p> Sed et suscipit ante.</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  // key: 0,
  id: 'list-1',
  title: 'Ex fringilla <sup>lorem!</sup>',
  description: 'Mauris varius magna sed elementum',
  image: 'https://i.imgur.com/VHFoGGO.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'Silence of the Lambs',
        },
        {
          key: 1,
          title: 'Dune',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'American Beauty',
        },
        {
          key: 1,
          title: 'The Shawshank Redemption',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Guild Wars 2',
        },
        {
          key: 1,
          title: 'Sid Meiers Alpha Centauri',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Ex fringilla <sup>lorem!</sup>',
    description: 'Mauris varius magna sed elementum',
    image: 'https://i.imgur.com/VHFoGGO.jpg',
  },
  {
    id: 'list-2',
    title: 'When in doubt, <sup>devour!</sup>',
    description: 'People who love to eat are always the best people.<br> <sub>- Julia Child</sub>',
    image: 'https://i.imgur.com/1Ss39Hq.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books ',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies ',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games ',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Food favs ',
    icon: 'utensils',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Silence of the Lambs',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Dune',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'American Beauty',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'The Shawshank Redemption',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'Guild Wars 2',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Sid Meiers Alpha Centauri',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Spaghetti Bolognese',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Salami Pizza',
  },
  {
    id: 'card-9',
    columnId: 'column-4',
    title: 'Soy Sesame Sauce',
  },
  {
    id: 'card-10',
    columnId: 'column-4',
    title: 'Mapo Tofu',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
