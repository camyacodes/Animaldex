import { liteClient as algoliasearch } from 'algoliasearch/lite'
import 'instantsearch.css/themes/satellite.css'
import {
  Hits,
  InstantSearch,
  SearchBox,
  Configure,
  useInstantSearch,
} from 'react-instantsearch'

import { Hit } from './Hit'

const searchClient = algoliasearch(
  'LI9OW6TMP4',
  '7b4e41c32a69dffb85e4fdf8f4f4e6a3'
)

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='animals'>
      <Configure hitsPerPage={5} />
      <div className='ais-InstantSearch'>
        <SearchBox />
        <EmptyQueryBoundary fallback={null}>
          <Hits hitComponent={Hit} />
        </EmptyQueryBoundary>
      </div>
    </InstantSearch>
  )
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch()

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    )
  }

  return children
}
