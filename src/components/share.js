import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';

import './Share.scss';

library.add(fab)

const Share = ({ socialConfig }) => (
  <>
    <p style={{ margin: 0 }}>Share on: </p>
    <div className="post-social">
      <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'facebook-f']}/>
			</span>
      </FacebookShareButton>
      <LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
			</span>
      </LinkedinShareButton>
      <RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'reddit-alien']} />
			</span>
      </RedditShareButton>
      <WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'whatsapp']} />
			</span>
      </WhatsappShareButton>
    </div>
  </>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;