type GameData = {
    background_image: string,
    id:number,
    name: string,
    rating: number,
    released: string,
    genres: Genre[],
    parent_platform: parentPlatforms[],
    ratings: Rating[],
    short_screenshots: ShortScreens[],
    stores: store[],
    tags: Tags[],
}
type Genre = {
    id: number,
    image_background: string,
    name: string,
}
type parentPlatforms = {
    platform: insideParentPlatforms[];
}
type insideParentPlatforms = {
    id: number,
    name:string
}
type Rating = {
    id: number,
    title: string,
    percent: number
}
type ShortScreens = {
    id:number, 
    image: string,
}
type Stores = {
    id: number,
    store: singleStore
}
type singleStore = {
    name: string,
    image_background: string,
    domain: string
}
type Tags = {
    name: string,
    id: number,
    image_background: string
}