export type PostMetadata = {
    likes: number
    shares: number
}
export type PostType = 'project' | 'text'
export type PostData = {
    type: PostType
    date: string
    metadata: PostMetadata
    content: string | JSX.Element
}
