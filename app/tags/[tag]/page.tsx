import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayout'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <ListLayout posts={filteredPosts} title={title} />
}
