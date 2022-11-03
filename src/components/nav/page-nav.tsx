import Link from 'next/link'
import { useEffect } from 'react';

import styles from './nav.module.css'

interface PageNavProps {
  page: number;
  query?: string;
}

const PageNav = ({page, query}: PageNavProps) => {
  const pathname = '/gallery'
  const linkQuery = {
    q: query,
  }

  if (!query) {
    delete linkQuery.q
  }

  return (
    <nav className={styles.pagenav}>
      <ul className="list-none">
        {page > 1 && (
          <li>
            {page <= 2
              ? <Link href={{pathname, query: { ...linkQuery }}}>&laquo; Prev</Link>
              : (
                <Link
                  href={{
                    pathname,
                    query: {
                      page: page - 1,
                      ...linkQuery,
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
                ...linkQuery,
              },
            }}
          >Next &raquo;</Link>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav