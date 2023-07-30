export interface IExplorerData {
    img: string;
    location: string;
    distance: string;
}

export interface ILiveData {
    img: string;
    title: string;
}

export interface ILargeCard extends ILiveData {
    description: string;
    buttonText: string;
}

export interface ISearchData extends ILiveData {
    location: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: string;
    lat: string;
}