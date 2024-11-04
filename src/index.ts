import { SharePointService } from "./data/SharePointService";
import { ExcelBuilder } from "./utils/ExcelBuilder";

async function main() {
    const sharePointService = new SharePointService();
    const excelBuilder = new ExcelBuilder();

    try {
        const data = await sharePointService.getData("YourListName");
        await excelBuilder.createExcel(data);
        console.log("Excel file created successfully!");
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
