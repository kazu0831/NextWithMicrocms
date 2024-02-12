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
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: 6,
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
