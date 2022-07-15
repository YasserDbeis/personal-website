import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import useCollapse from 'react-collapsed';
import { FaMicrosoft, FaGoogle, FaHospital, FaStar } from 'react-icons/fa';
import { TbDeviceHeartMonitor } from 'react-icons/tb';
import SocialLinks from '../SocialLinks/SocialLinks';

const ContentItem = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const expandStyles = {
    backgroundColor: 'red',
  };

  const {
    contentTitle,
    contentSubtitle,
    contentDesc,
    startDate,
    endDate,
    logoAsset,
    links,
  } = props.content;

  const getIcon = (title) => {
    return (
      {
        Google: <FaGoogle />,
        Microsoft: <FaMicrosoft />,
        'Dana-Farber Cancer Institute': <FaHospital />,
        Life365: <TbDeviceHeartMonitor />,
      }[title] ?? <FaStar />
    );
  };

  return (
    <div
      style={{
        padding: '20px',
        height: '100%',
      }}
      onClick={toggleExpand}
    >
      <div
        className="unselectable"
        style={{
          width: '100%',
          fontSize: '32px',
          fontWeight: 'bolder',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        {...getToggleProps()}
      >
        <span
          style={{
            wordBreak: 'break-word',
            marginRight: '10px',
          }}
        >
          {contentTitle}
        </span>

        <img
          src={require(`../../assets/${logoAsset}`)}
          height="100%"
          width={40}
          style={{
            // flexWrap: 'nowrap',
            // wordBreak: 'break-word',
            alignSelf: 'start',
          }}
        />
      </div>
      <div
        style={{
          marginTop: '10px',
          marginBottom: '5px',
          fontSize: '24px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          whiteSpace: 'pre-line',
        }}
      >
        {contentSubtitle}
      </div>

      <div
        style={{
          fontSize: '18px',
          fontStyle: 'italic',
          marginBottom: '20px',
        }}
      >
        {startDate && endDate ? (
          <div>
            {startDate} - {endDate}
          </div>
        ) : startDate ? (
          <div>{startDate}</div>
        ) : null}
      </div>
      {contentDesc ? (
        <section {...getCollapseProps()}>
          <div>
            {contentDesc.split(/\.\s|\.$/).map((sentence) => {
              const trimmedSentence = sentence.trim();

              if (trimmedSentence.length == 0) {
                return null;
              }

              return (
                <div key={sentence} style={{ display: 'table' }}>
                  <div style={{ display: 'table-cell', paddingRight: '10px' }}>
                    {getIcon(contentTitle)}
                  </div>
                  <div
                    style={{
                      fontSize: '16px',
                      display: 'table-cell',
                    }}
                  >
                    {trimmedSentence}
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
      {links ? <SocialLinks links={links} /> : null}
    </div>
  );
};

export default ContentItem;
