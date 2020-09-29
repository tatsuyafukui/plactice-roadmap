import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {ColoredLink} from '../../Atoms/Link'
import Ogp from '../../Organisms/Ogp'
import List, {ListItem} from '../../Atoms/List'
import {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_SM} from '../../../constants'

const OgpList = ({ogpList, ...props}) => {
  const isMobile = useMediaQuery({query: MEDIA_QUERY_SM})

  return (
    <List tag='ol' {...props}>
      {ogpList &&
        ogpList.map(item => (
          <ListItem key={item.id} className={styles.listItem}>
            <BoldHeading level={3} visualLevel={5} className={styles.title}>
              {item.fields ? item.fields.ogp.ogTitle : item.title}
            </BoldHeading>
            <div className={styles.ogpWrap}>
              <Txt lineHeightLevel={5} className={styles.description}>
                {item.description}
              </Txt>
              {/* ogpがないサイトはリンクのみ */}
              {item.fields ? (
                <Ogp
                  isMobile={isMobile}
                  title={item.fields.ogp.ogTitle}
                  description={item.fields.ogp.ogDescription}
                  url={item.url}
                  isbn={item.isbn}
                  ogImage={item.fields.ogp.ogImage}
                  twitterCard={item.fields.ogp.twitterCard}
                />
              ) : (
                <ColoredLink
                  to={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.url}
                </ColoredLink>
              )}
            </div>
          </ListItem>
        ))}
    </List>
  )
}

export default OgpList

OgpList.propTypes = {
  ogpList: PropTypes.array,
}
