import { createApp, createRouter, defineEventHandler } from 'h3';
import {GoogleAuth} from 'google-auth-library';
import 'dotenv/config';

export const app = createApp();

const router = createRouter();

router.get(
    "/token",
    defineEventHandler(async (event) => {
        const auth = new GoogleAuth({
            credentials: {
                type: "service_account",
                project_id: "romitou",
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: atob(process.env.GOOGLE_PRIVATE_KEY),
                client_email: "insaopaulo@romitou.iam.gserviceaccount.com",
                client_id: "109946342061036145579",
            },
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        });
        const token = await auth.getAccessToken();
        return {
            access_token: token,
        }
    })
);

app.use(router);
