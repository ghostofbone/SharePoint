import { ISharePointItem } from "../types/SharePointTypes";

export interface ISharePointService {
    getData(listName: string): Promise<ISharePointItem[]>;
}
