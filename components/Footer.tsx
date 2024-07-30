import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://beian.miit.gov.cn/">辽ICP备2022008175号-2</Link>
        </div>
      </div>
    </footer>
  )
}
