export const tabLabels = ['All', 'Projects', 'Posts'] as const
export type TabLabel = (typeof tabLabels)[number]
