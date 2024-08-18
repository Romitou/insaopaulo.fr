import { defineEventHandler } from 'h3';
import { cfHeaders } from './news.js';

const tokenProviderUrl = process.env.TOKEN_PROVIDER_URL || 'https://insaopaulo-auth.romitou.fr/token';
const defaultSpreadsheetId = process.env.GOOGLE_SPREADSHEET_ID || '1yfA-V-5xtHG7YVRPIHDFL197owo4g_Lm9cl5NGMZw64';

async function getValues(spreadsheetId, range) {
  let token;
  try {
    const response = await fetch(tokenProviderUrl, { headers: cfHeaders });
    if (!response || !response.ok) {
      return null;
    }
    const data = await response.json();
    token = data.access_token;
  } catch {
    return null;
  }

  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response || !response.ok) {
      return null;
    }
    return await response.json();
  } catch {
    return null;
  }
}

export default defineEventHandler(async () => {
  const spreadsheetId = defaultSpreadsheetId;
  const nameRange = '1:1';
  const scoreRange = '13:13';

  const nameResult = await getValues(spreadsheetId, nameRange);
  const scoreResult = await getValues(spreadsheetId, scoreRange);

  if (!nameResult?.values?.[0] || !scoreResult?.values?.[0]) {
    return [];
  }

  const families = [];
  for (let i = 1; i < nameResult.values[0].length; i++) {
    families.push({
      name: nameResult.values[0][i],
      score: parseInt(scoreResult.values[0][i], 10) || 0,
    });
  }

  return families;
});
