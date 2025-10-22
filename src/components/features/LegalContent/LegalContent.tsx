import React from 'react';
import './LegalContent.scss';
import GoBack from '@/components/common/GoBack/GoBack';

type LegalContentProps = {
  title: string;
  sectionsData: Array<{
    id: string;
    title?: string;
    subtitle?: string;
    content: string | string[] | (string | string[])[];
  }>;
};

export const LegalContent: React.FC<LegalContentProps> = ({ title, sectionsData }) => {
  const renderContent = (content: string | string[] | (string | string[])[]) => {
    if (typeof content === 'string') {
      return <p className="legal-content__text" dangerouslySetInnerHTML={{ __html: content }} />;
    }

    if (Array.isArray(content)) {
      return (
        <div className="legal-content__content-wrapper">
          {content.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <p
                  key={index}
                  className="legal-content__text"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              );
            } else if (Array.isArray(item)) {
              return (
                <ul key={index} className="legal-content__list">
                  {item.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="legal-content__list-item"
                      dangerouslySetInnerHTML={{ __html: subItem }}
                    />
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="legal-wrapper">
      <GoBack className="legal-content">
        <i className="back-arrow ri-arrow-left-line"></i>Go Back
      </GoBack>
      <div className="legal-content-header">
        <h1 className="legal-content-title">{title}</h1>
      </div>
      <div className="legal-content-content">
        {sectionsData &&
          sectionsData.map(
            (section: {
              id: string;
              title?: string;
              subtitle?: string;
              content: string | string[] | (string | string[])[];
            }) => (
              <div key={section.id} className="legal-content__section">
                {section.title && <h2 className="legal-content__section-title">{section.title}</h2>}
                {section.subtitle && (
                  <h2 className="legal-content__section-subtitle">{section.subtitle}</h2>
                )}
                {renderContent(section.content)}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default LegalContent;
