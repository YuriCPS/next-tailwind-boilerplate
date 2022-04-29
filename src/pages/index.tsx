import Head from 'next/head';
import Block from 'components/Block';
import Button from 'components/Button';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to
          {' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing
          {' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Block
            href="https://nextjs.org/docs"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />

          <Block
            href="https://nextjs.org/learn"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Block
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Block
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
        <Button
          href="https://nextjs.org/docs"
          text="Documentation"
          color="blue"
          size="medium"
        />
      </main>

      <Footer />
    </div>
  );
}
