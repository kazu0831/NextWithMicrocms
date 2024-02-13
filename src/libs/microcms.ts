import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: { name: string };
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
  customFetch: (input, init)=>{
    if(typeof input === 'string'){
      const newInput = new URL(input)
      const time = new Date()
      newInput.searchParams.set('cacheclearparam', `${time.getMinutes()}`)
      return fetch(newInput.href, init)
    }
    return fetch(input, init)
  }
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: 6,
      offset: queries?.offset || 0
    },
  });

  return {
    contents: listData.contents,
    totalCount: listData.totalCount,
  };
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};
