import { ISharePointService } from "./data/ISharePointService";
import * as XLSX from "xlsx";
import { ISharePointItem } from "./types/SharePointTypes";

export class MainProcess {
    private sharePointService: ISharePointService;

    constructor(sharePointService: ISharePointService) {
        this.sharePointService = sharePointService;
    }

    async processData(listName: string): Promise<{ id: number; title: string; description: string }[]> {
        // Отримуємо дані з SharePoint
        const data = await this.sharePointService.getData(listName);

        // Обробляємо дані, створюючи Excel-файл
        const formattedData = data.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
        }));

        // Створення Excel-файлу
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        // Зберігаємо Excel-файл
        XLSX.writeFile(workbook, "SharePointData.xlsx");

        return formattedData; // Повертаємо відформатовані дані для тестування
    }
}
