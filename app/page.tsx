import Link from '@/components/Link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center px-4">
        <div className="flex w-full -translate-y-20 transform flex-col items-start justify-between md:flex-row">
          <div className="text-left md:w-2/3">
            <h2 className="text-4xl font-extrabold leading-normal tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-normal md:text-6xl md:leading-normal">
              Hi! 👋
            </h2>
            <h1 className="text-4xl font-extrabold leading-normal tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-normal md:text-6xl md:leading-normal">
              I'm Moenya
            </h1>
            <p className="mt-4 text-xl leading-normal text-gray-600 dark:text-gray-400">
              A 💻 Developer and 🎮 Gamer
            </p>
            <div className="mt-8 flex space-x-4">
              <Link href="/blog" className="rounded bg-green-500 px-4 py-2 text-white">
                My Blog
              </Link>
              <Link href="/about" className="rounded bg-gray-700 px-4 py-2 text-white">
                About Me
              </Link>
            </div>
          </div>
          <div className="mt-12 hidden md:mt-0 md:flex md:w-1/3 md:items-center md:justify-end">
            <Image
              src="/static/images/avatar.jpg"
              alt="Profile"
              width={240}
              height={240}
              className="h-60 w-60 rounded-full object-cover md:h-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}
