import { spfi, SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { ClientSecretCredential } from "@azure/identity";
import { ISharePointItem } from "../types/SharePointTypes";
import { config } from "../config/SharePointConfig";

export class SharePointService {
  private sp: SPFI;

  constructor() {
    const credential = new ClientSecretCredential(
        process.env.TENANT_ID,
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET
    );

    this.sp = spfi().using({
      fetchClientFactory: () => credential,
      baseUrl: config.siteUrl,
    });
  }

  async getData(listName: string): Promise<ISharePointItem[]> {
    const items = await this.sp.web.lists.getByTitle(listName).items.top(5000)();
    return items;
  }
}
