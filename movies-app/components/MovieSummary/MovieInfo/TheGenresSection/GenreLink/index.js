
import Link from 'next/link';
import DotCircleIcon from 'public/assets/svgs/icons/dot-circle.svg';

import withTheme from 'utils/hocs/withTheme';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const GenreLink = ({
  theme,
  genre
}) => (
  <li>
    <Link
      legacyBehavior
      href={{
        pathname: LINKS.GENRE.HREF,
        query: {
          [QUERY_PARAMS.ID]: genre.id,
          [QUERY_PARAMS.NAME]: genre.name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <DotCircleIcon
          fill='currentColor'
          width='1.25em'
          style={{marginRight: '4px'}} />
        {genre.name}
      </a>
    </Link>
    <style jsx>{`
      li {
        list-style-type: none;
      }
      a {
        display: flex;
        align-items: center;
        padding: 0.5rem 0rem;
        color: var(--palette-secondary-main);
        line-height: 1;
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightBold};
        text-transform: uppercase;
        margin-right: 1em;
      }
    
      a:not(:last-child) {
        margin-right: 2rem;
      }
    
      a:hover {
        text-decoration: underline;
      }
    
      a:active {
        transform: translateY(2px);
      }
    `}</style>
  </li>
);

export default withTheme(GenreLink);
