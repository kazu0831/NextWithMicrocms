import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import { formatDate } from "@/libs/dayjs";

export async function generateParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function DetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="text-white mx-auto bg-white bg-opacity-30 prose min-h-screen my-4 p-8">
      <div className="flex flex-col justify-center items-center py-3 border-b-2">
        <h1 className="text-white text-center text-4xl font-bold">
          {post.title}
        </h1>
        <h4 className="flex flex-col items-center justify-center md:flex-row text-center text-white">
          <div className="md:mr-8">
            <small>投稿: </small>
            {formatDate(post.publishedAt, "YYYY年MM月DD日HH:mm")}
          </div>
          <div>
            <small>カテゴリ: </small>
            {post.category.name}
          </div>
        </h4>
      </div>
      <div className="pt-4">{parse(post.content)}</div>
    </div>
  );
}
