import { createApp, createRouter, defineEventHandler } from 'h3';
import { GoogleAuth } from 'google-auth-library';
import 'dotenv/config';

export const app = createApp();
const router = createRouter();

router.get(
    "/token",
    defineEventHandler(async () => {
        const privateKey = process.env.GOOGLE_PRIVATE_KEY
            ? (process.env.GOOGLE_PRIVATE_KEY.includes('BEGIN PRIVATE KEY')
                ? process.env.GOOGLE_PRIVATE_KEY
                : atob(process.env.GOOGLE_PRIVATE_KEY))
            : undefined;

        const auth = new GoogleAuth({
            credentials: {
                type: "service_account",
                project_id: process.env.GOOGLE_PROJECT_ID || "romitou",
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: privateKey,
                client_email: process.env.GOOGLE_CLIENT_EMAIL || "insaopaulo@romitou.iam.gserviceaccount.com",
                client_id: process.env.GOOGLE_CLIENT_ID,
            },
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        });
        const token = await auth.getAccessToken();
        return {
            access_token: token,
        };
    })
);

app.use(router);
