import React from 'react';
import './VacancyCard.css';
import Stack from '../Stack/Stack.jsx';
import Badge from '../Badge/Badge.jsx';

const VacancyCard = ({ card }) => {

  const { company, logo, position, new: isNew, featured, postedAt, contract, location, id, role, level, languages, tools } = card;

  const metaData = [].concat(postedAt, contract, location);
  const badges = [].concat(role, level, ...languages, ...tools);

  return (
    <div className={`card ${featured ? 'card_type_featured' : ''}`}>
      <article className="job-position">
        <div className="job-position__wrapper">
          <img className="job-position__img" src={logo} alt={company} />
          <div className="job-position__info">
            <div className="job-position__company">
              <h3 className="job-position__company-title">{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <li>
                      <Badge type="company" colorScheme="primary">
                        NEW!
                      </Badge>
                    </li>
                  )}
                  {featured && (
                    <li>
                      <Badge type="company" colorScheme="dark">
                        FEATURED
                      </Badge>
                    </li>
                  )}
                </Stack>
              )}
            </div>
            <h2 className="job-position__title">{position}</h2>
            <Stack>
              {metaData.map((item) => (
                <li key={item}>
                  <p className="job-position__meta">
                    {item}
                  </p>
                </li>
              ))}
            </Stack>
          </div>
        </div>
        <Stack type="tools">
          {badges.map((item =>
            <li key={item}>
              <Badge type="tools" colorScheme="light">
                {item}
              </Badge>
            </li>
          ))}
        </Stack>
      </article>
    </div>
  );
};

export default VacancyCard;
