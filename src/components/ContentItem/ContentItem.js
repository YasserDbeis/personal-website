import { useEffect, useRef, useState } from 'react';
import useCollapse from 'react-collapsed';
import { FaMicrosoft, FaGoogle, FaHospital, FaStar } from 'react-icons/fa';
import { TbDeviceHeartMonitor } from 'react-icons/tb';

const ContentItem = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const expandStyles = {
    backgroundColor: 'red',
  };
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const {
    contentTitle,
    contentSubtitle,
    contentDesc,
    startDate,
    endDate,
    logoAsset,
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
      }}
    >
      <div
        className="unselectable"
        style={{
          width: '100%',
          cursor: 'pointer',
          fontSize: '32px',
          fontWeight: 'bolder',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
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
          height={40}
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
        }}
      >
        {contentSubtitle}
      </div>
      <div
        style={{
          fontSize: '18px',
          fontStyle: 'italic',
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
      <section {...getCollapseProps()}>
        <div style={{ marginTop: '20px' }}>
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
    </div>
  );
};

export default ContentItem;
