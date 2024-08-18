import { defineEventHandler, setResponseHeader } from 'h3';

const cfAccessClientId = process.env.CF_ACCESS_CLIENT_ID || '';
const cfAccessClientSecret = process.env.CF_ACCESS_CLIENT_SECRET || '';

export const cfHeaders = {
  ...(cfAccessClientId ? { 'CF-Access-Client-Id': cfAccessClientId } : {}),
  ...(cfAccessClientSecret ? { 'CF-Access-Client-Secret': cfAccessClientSecret } : {})
};

let cache = null;
let cacheDate = 0;

export default defineEventHandler(async (event) => {
  if (((Date.now() - cacheDate) < 600000) && cache != null) {
    setResponseHeader(event, 'X-Cache', 'HIT');
    return cache;
  }

  let response;
  try {
    response = await fetch('https://blog.insaristocrate.fr/api/discussions', { headers: cfHeaders });
  } catch {
    return [];
  }

  if (!response || !response.ok) {
    return [];
  }

  const data = await response.json();
  if (!data || !data.data || data.data.length === 0) {
    return [];
  }

  const news = [];
  for (const post of data.data) {
    let postResponse;
    let content;
    try {
      postResponse = await fetch(`https://blog.insaristocrate.fr/api/discussions/${post.attributes.slug}?bySlug=true`, { headers: cfHeaders });
      if (!postResponse || !postResponse.ok) {
        continue;
      }
      const postData = await postResponse.json();
      if (!postData || !postData.data) {
        continue;
      }
      content = postData.included?.find(included => included.type === 'posts' && included.id === postData.data.relationships?.posts?.data?.[0]?.id);
    } catch {
      continue;
    }

    if (content) {
      content = content.attributes?.contentHtml || '';
    }

    news.push({
      title: post.attributes?.title || '',
      slug: post.attributes?.slug || '',
      createdAt: post.attributes?.createdAt || '',
      content: content || '',
      readingTime: readingTime(content || '')
    });
  }

  cache = news;
  cacheDate = Date.now();
  setResponseHeader(event, 'X-Cache', 'MISS');

  return news;
});

function readingTime(text) {
  const wpm = 180;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / wpm) || 1;
}
