import { ISharePointItem } from "../types/SharePointTypes";

export class MockSharePointService {
    async getData(listName: string): Promise<ISharePointItem[]> {
        // Повертаємо фіктивні дані замість реального запиту до SharePoint
        return [
            { id: 1, title: "Test Item 1", description: "This is a mock item" },
            { id: 2, title: "Test Item 2", description: "This is another mock item" },
        ];
    }
}
