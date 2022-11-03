import Link from 'next/link'

import styles from './nav.module.css'

interface PageNavProps {
  page: number;
}

const PageNav = ({page}: PageNavProps) => {

  return (
    <nav className={styles.pagenav}>
      <ul className="list-none">
        {page > 1 && (
          <li>
            {page === 2
              ? <Link href="/gallery">&laquo; Prev</Link>
              : (
                <Link
                  href={{
                    pathname: '/gallery',
                    query: { page: page - 1 },
                  }}
                >&laquo; Prev</Link>
              )
            }
          </li>
        )}
        <li>
          <Link
            href={{
              pathname: '/gallery',
              query: { page: page + 1 },
            }}
          >Next &raquo;</Link>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav