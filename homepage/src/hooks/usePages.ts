import { useCallback, useState } from 'react'

export function usePages(
    initialPage: number,
): [page: number, changePage: (newPage: number) => void] {
    const [page, setPage] = useState(initialPage)

    const changePage = useCallback((newPage: number) => {
        setPage(newPage)
    }, [])

    return [page, changePage]
}
