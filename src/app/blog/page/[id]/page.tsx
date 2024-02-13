import Pagination from "@/components/pagination";
import { formatDate } from "@/libs/dayjs";
import { getList } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";


const Page = async ({ params }: { params: { id: number } }) => {
    const { contents, totalCount } = await getList({ offset: (params.id - 1) * 6 });

    if (!contents || contents.length === 0) {
        return (
            <div className="containe h-screen flex items-center justify-center mx-auto p-8">
                <h1 className="text-4xl">コンテンツが存在しません</h1>
            </div>
        );
    }

    return (
        <div className="containe min-h-screen mx-auto p-8 mb-10  relative">
            <ul className="flex flex-wrap md:w-3/4 md:mx-auto items-center justify-center">
                {contents.map((post) => {
                    return (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="text-white md:mr-8 flex flex-col h-96 justify-between bg-white w-full mb-6 lg:w-[300px] lg:h-[300px] bg-opacity-50 p-4 rounded-md shadow-md"
                        >
                            <div className="text-xl font-bold hover:underline">
                                <h2>{post.title}</h2>
                            </div>

                            <div className="flex items-center justify-center h-4/5">
                                {post.eyecatch ? (
                                    <Image
                                        src={post.eyecatch.url}
                                        alt="eyecatch"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <Image
                                        src="/next.svg"
                                        alt="no image"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>

                            <div>
                                <p>
                                    <small>投稿: </small>
                                    {formatDate(post.publishedAt, "YYYY年MM月DD日HH:mm")}
                                </p>
                                <p>
                                    <small>カテゴリ: </small>
                                    {post.category.name}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </ul>

            <Pagination totalCount={totalCount} />
        </div>
    )
}

export default Page