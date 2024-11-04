import { MockSharePointService } from "../data/MockSharePointService";
import { MainProcess } from "../MainProcess";

describe("MainProcess E2E Test with Mock Data", () => {
    let mainProcess: MainProcess;
    let sharePointService: MockSharePointService;

    beforeAll(() => {
        sharePointService = new MockSharePointService();
        mainProcess = new MainProcess(sharePointService);
    });

    it("should process mock data correctly", async () => {
        const data = await mainProcess.processData("TestList");

        expect(data).toBeDefined();
        expect(data.length).toBe(2);
        expect(data[0].title).toBe("Test Item 1"); // Перевірка значень title
    });
});
