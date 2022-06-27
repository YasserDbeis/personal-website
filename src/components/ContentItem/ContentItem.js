import { useEffect, useRef, useState } from 'react';
import useCollapse from 'react-collapsed';
import { FaMicrosoft, FaGoogle, FaHospital, FaStar } from 'react-icons/fa';

const ContentItem = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const expandStyles = {
    backgroundColor: 'red',
  };
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const { contentTitle, contentPos, contentDesc, startDate, endDate } =
    props.content;

  console.log(contentDesc);

  const getIcon = (title) => {
    return (
      {
        Google: <FaGoogle />,
        Microsoft: <FaMicrosoft />,
        'Dana-Farber Cancer Institute': <FaHospital />,
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
        }}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <img
          src={require('../../assets/google_logo.png')}
          height={40}
          width={40}
        />
        {contentTitle}
      </div>
      <section {...getCollapseProps()}>
        <div style={{ marginTop: '20px' }}>
          <div
            style={{
              marginBottom: '5px',
              fontSize: '24px',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            {contentPos}
          </div>
          <div
            style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontStyle: 'italic',
            }}
          >
            {startDate} - {endDate}
          </div>
          {contentDesc.split('.').map((sentence) => {
            const trimmedSentence = sentence.trim();

            if (trimmedSentence.length == 0) {
              return null;
            }

            return (
              <div>
                {getIcon(contentTitle)}
                <span style={{ marginLeft: '10px', fontSize: '16px' }}>
                  {trimmedSentence}
                </span>
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
