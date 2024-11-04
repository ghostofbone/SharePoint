import ExcelJS from "exceljs";
import { ISharePointItem } from "../types/SharePointTypes";

export class ExcelBuilder {
    async createExcel(data: ISharePointItem[]): Promise<void> {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("SharePoint Data");

        worksheet.columns = Object.keys(data[0]).map((key) => ({
            header: key,
            key: key,
            width: 20,
        }));

        data.forEach((item) => worksheet.addRow(item));

        await workbook.xlsx.writeFile("output.xlsx");
    }
}
