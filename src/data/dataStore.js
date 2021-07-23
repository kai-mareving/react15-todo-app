export const settings = {
  header: {
    icon: 'cat',
  },
  info: {
    title: 'Info',
    image: 'https://i.imgur.com/9aKW8lS.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  faq: {
    title: 'FAQ',
    image: 'https://i.imgur.com/W2GAk7e.jpg',
    text: 'Donec tristique mattis nisl. Etiam luctus suscipit dolor, a commodo metus accumsan at. Suspendisse ex nunc, vestibulum ac sapien id, feugiat ultrices metus. Nunc tincidunt nec orci a imperdiet. Duis finibus mollis neque at tempus. Phasellus dictum magna dui, sit amet mattis arcu convallis eget. Proin diam nisl, semper sed suscipit a, euismod sed orci.',
  },
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
  defaultListImage: 'https://i.imgur.com/VHFoGGO.jpg',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
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
  {
    id: 'list-3',
    title: 'Dui lacus, tempus.',
    description: 'In quis semper mi. Sed non dui quis ante commodo commodo nec eget lorem.',
    image: 'https://i.imgur.com/9QnHu0O.jpg',
  },
  {
    id: 'list-4',
    title: 'At lectus convallis!',
    description: 'Amet justo donec enim diam vulputate ut pharetra sit barisle nisi.',
    image: 'https://i.imgur.com/7nrGAsn.jpg',
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
