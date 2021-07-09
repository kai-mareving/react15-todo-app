export const settings = {
  listCreatorText: 'Add new list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  key: 0,
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things that inspire me:',
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
