import Link from 'next/link'

import styles from './nav.module.css'

interface PageNavProps {
  page: number;
  query?: string;
}

const PageNav = ({page, query}: PageNavProps) => {
  const pathname = '/gallery'
  return (
    <nav className={styles.pagenav}>
      <ul className="list-none">
        {page > 1 && (
          <li>
            {page === 2
              ? <Link href={{pathname, query: { q: query }}}>&laquo; Prev</Link>
              : (
                <Link
                  href={{
                    pathname,
                    query: {
                      page: page - 1,
                      q: query,
                    },
                  }}
                >&laquo; Prev</Link>
              )
            }
          </li>
        )}
        <li>
          <Link
            href={{
              pathname,
              query: {
                page: page + 1,
                q: query,
              },
            }}
          >Next &raquo;</Link>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav