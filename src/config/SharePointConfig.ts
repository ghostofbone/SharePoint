import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    siteUrl: process.env.SHAREPOINT_SITE_URL || "",
};
