import {defineEventHandler} from 'h3';
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

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
const service = google.sheets({version: 'v4', auth});

async function getValues(spreadsheetId, range) {
    try {
        return await service.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
    } catch (err) {
        throw err;
    }
}

export default defineEventHandler(async (event) => {
    const spreadsheetId = '1yfA-V-5xtHG7YVRPIHDFL197owo4g_Lm9cl5NGMZw64';
    const nameRange = '1:1';
    const scoreRange = '13:13';

    const nameResult = await getValues(spreadsheetId, nameRange);
    const scoreResult = await getValues(spreadsheetId, scoreRange);

    const families = [];
    for (let i = 1; i < nameResult.data.values[0].length; i++) {
        families.push({
            name: nameResult.data.values[0][i],
            score: scoreResult.data.values[0][i],
        });
    }

    return families;
});
