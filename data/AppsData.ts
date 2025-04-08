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
    href: 'https://gh.syf.sh',
  },
  {
    title: 'Docker Proxy',
    description: `Docker 加速服务`,
    href: 'https://docker.syf.sh',
  },
]

export default appsData
