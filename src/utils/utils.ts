export const generateUniqId = () => {
  return Math.floor(20 + Math.random() * 999999999 + 1) + new Date().getMilliseconds();
};

export const mockData = {
  id: '1',
  title: 'Breakfast At Tiffanys',
  authors: 'Truman Capote',
  year: 2012,
  img: 'http://books.google.com/books/content?id=-vLvAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
};
