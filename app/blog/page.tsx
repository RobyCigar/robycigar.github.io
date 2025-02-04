import Head from "next/head";
import { getSortedPostsData } from "@/utils/getSortedPostsData";
import Link from "next/link";

interface PostMeta {
  id: string;
  date: string;
  title: string;
  desc: string;
}

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
      <main className="dark:bg-gray-900 ">
        <section className="px-6 max-w-3xl mx-auto min-h-screen">
          <h2 className="py-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-left">
            Kumpulan Cerita dan Tips Mengenai Lilin
          </h2>
          <p className="dark:text-gray-200">
            Kumpulan blog yang membahas tentang berbagai aspek lilin, mulai dari
            sejarah dan berbagai jenis lilin, hingga cara membuat lilin sendiri
            dan bagaimana memilih lilin yang tepat untuk berbagai keperluan.
            Anda juga akan menemukan cerita inspiratif tentang bagaimana lilin
            dapat menjadi simbol harapan dan kehangatan dalam kehidupan
            sehari-hari. Mari kita eksplorasi keajaiban lilin bersama-sama dan
            pelajari cara menggunakannya untuk menerangi kehidupan kita.
          </p>
          <ul>
            {allPostsData.map(({ id, date, title, desc }: any) => (
              <li key={id} className="py-12">
                <Link href={`/blog/${id}`}>
                  <h1 className="dark:text-gray-50 cursor-pointer text-3xl font-bold tracking-tight sm:text-4xl  hover:underline">
                    {title}
                  </h1>
                </Link>
                <p className="dark:text-gray-400">{desc}</p>
                <p className="text-xs dark:text-gray-100">
                  Diupload pada {date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
  );
}
