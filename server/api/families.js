import {defineEventHandler} from 'h3';
import {cfHeaders} from "~/server/api/news.js";


async function getValues(spreadsheetId, range) {
    let token;
    try {
        const response = await fetch('https://insaopaulo-auth.romitou.fr/token', { headers: cfHeaders });
        if (!response || !response.ok) {
            return null;
        }
        const data = await response.json();
        token = data.access_token;
    } catch (err) {
        throw err;
    }
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response || !response.ok) {
            return null;
        }
        return await response.json();
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
    for (let i = 1; i < nameResult.values[0].length; i++) {
        families.push({
            name: nameResult.values[0][i],
            score: scoreResult.values[0][i],
        });
    }

    return families;
});
