type Results = {
  results: GameData[];
};

type GameData = {
  background_image: string;
  id: number;
  name: string;
  rating: number;
  released: string;
  genres: Genre[];
  ratings: Rating[];
  short_screenshots: ShortScreens[];
  stores: store[];
  tags: Tags[];
  platforms: platform[];
  description_raw: string;
  publishers: publishersData[];
  website: string;
  playtime: string;
  ratings_count: number,
  achievements_count:number;
  background_image_additional: string;
};
type Genre = {
  id: number;
  image_background: string;
  name: string;
};
type platform = {
  platform: platformDetail;
};
type platformDetail = {
  image_background: string;
  name: string;
};

type Rating = {
  id: number;
  title: string;
  percent: number;
};
type ShortScreens = {
  id: number;
  image: string;
};
type Stores = {
  id: number;
  store: singleStore;
};
type singleStore = {
  name: string;
  image_background: string;
  domain: string;
};
type Tags = {
  name: string;
  id: number;
  image_background: string;
};
type GameListResponse = {
  results: GameData[];
};
type GameRouteParams = {
  params: Promise<{ gameId: string }>;
};
type publishersData = {
    name: string,
    image_background: string
}
