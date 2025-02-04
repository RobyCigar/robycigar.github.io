import { getAllPostIds, getPostData } from "@/utils/getSortedPostsData";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default async function Post({ params }: any) {
  console.log({params})
  const postData: any = await getPostData(params.slug);

  const SEO = {
    title: postData.title,
    description: postData.desc,
    openGraph: {
      type: "website",
      url: "https://www.rabihutomo.com/og-image.png",
      title: postData.title,
      description: postData.desc,
    },
  };
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <NextSeo
          title={SEO.title}
          description={SEO.description}
          openGraph={SEO.openGraph}
        />
      </Head>
      <main className="dark:bg-gray-800 ">
        <article className="max-w-3xl px-4 mx-auto pb-32">
          <h1 className="dark:text-gray-50 py-4 cursor-pointer text-3xl font-bold tracking-tight sm:text-6xl">
            {postData.title}
          </h1>
          <p className="dark:text-gray-200 pt-2 pb-10">
            Diupload pada: {postData.date}
            <br />
            Penulis: Rabih Utomo
            <br />
            Tags: {postData.tags}
          </p>
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>
    </>
  );
}

//
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}