import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        float: 'right',
        marginBottom: '20px',
      }}
    >
      {Object.entries(props.links).map((link) => {
        const [network, url] = link;

        if (network === 'link') {
          return (
            <a key={url} target="_blank" rel="noopener noreferrer" href={url}>
              <img
                src={require(`../../assets/link_icon.png`)}
                width={25}
                height={25}
                style={{
                  cursor: 'pointer',
                  marginleft: '5px',
                }}
              />
            </a>
          );
        }

        return (
          <SocialIcon
            key={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 25, width: 25, marginLeft: '5px' }}
            network={network}
            url={url}
            fgColor="white"
          />
        );
      })}
    </div>
  );
};

export default SocialLinks;
