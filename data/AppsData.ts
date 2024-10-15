interface Apps {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const appsData: Apps[] = [
  {
    title: 'SubConverter Web',
    description: `在线订阅转换服务`,
    href: 'https://sub.suki.icu',
  },
  {
    title: 'Github Proxy',
    description: `Github 加速服务`,
    href: 'https://gh.suki.icu',
  },
  {
    title: 'Docker Proxy',
    description: `Docker 加速服务`,
    href: 'https://dk.suki.icu',
  },
  {
    title: 'Live Stream',
    description: `没什么用的直播`,
    href: 'https://live.suki.icu',
  },
]

export default appsData
