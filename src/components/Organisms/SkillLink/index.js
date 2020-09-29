import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'

const SkillLink = ({skill, className, ...props}) => (
  <Link
    to={skill.fields.slug}
    className={[styles.skill, className].join(' ')}
    {...props}
  >
    <MediaObjectLayout className={styles.layout}>
      <Img
        className={styles.image}
        fluid={skill.thumbnail.childImageSharp.fluid}
        alt={skill.title}
      />
      <div className={styles.textWrap}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faBook} />
          <BoldHeading level={3} visualLevel={4} className={styles.titleText}>
            {skill.title}
          </BoldHeading>
        </div>
        <Txt lineHeightLevel={4} className={styles.description}>
          {skill.description}
        </Txt>
      </div>
    </MediaObjectLayout>
  </Link>
)

export default SkillLink

SkillLink.propTypes = {
  skill: PropTypes.object,
  className: PropTypes.string,
}
