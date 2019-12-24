import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TeamItem from 'components/team/TeamItem';
import Title from 'components/common/Title';

const Team = () => {
  const dataTeam = [
    {
      name: 'Kimberly Thompson',
      pos: 'Marketer',
      fb: 'https://fb.com',
      tw: 'https://twitter.com/',
      pinterest: 'https://www.pinterest.com/',
    },
    {
      name: 'Rico Massimo',
      pos: 'Coder',
      fb: 'https://fb.com',
      tw: 'https://twitter.com/',
      google: 'https://www.google.com.vn/',
    },
    {
      name: 'Uku Mason',
      pos: 'Graphic Designer',
      fb: 'https://fb.com',
      pinterest: 'https://www.pinterest.com/',
    },
    {
      name: 'Lorem Lorem',
      pos: 'Coder',
      fb: 'https://fb.com',
      tw: 'https://twitter.com/',
      pinterest: 'https://www.pinterest.com/',
    },
    {
      name: 'Famous',
      pos: 'Graphic Designer',
      fb: 'https://fb.com',
      tw: 'https://twitter.com/',
      google: 'https://www.google.com.vn/',
    },
    {
      name: 'Someone Famous',
      pos: 'marketer',
      fb: 'https://fb.com',
      pinterest: 'https://www.pinterest.com/',
    },
  ];
  const titleTeam = {
    title: 'Awesome Team',
    desc: 'These wonderful people make work enjoyable.',
  };

  const [translateX, setTranslateX] = useState(0);

  const setStyleSliderTeam = num => {
    if (num < 0) {
      if (translateX === -33.3334 * 3) {
        setTranslateX(0);
      } else {
        setTranslateX(translateX + num * 33.3334);
      }
    } else if (translateX === 0) {
      setTranslateX(-33.3334 * 3);
    } else {
      setTranslateX(translateX + num * 33.3334);
    }
  };

  const styleSliderTeam = { transform: `${`translate(${translateX}%)`}` };

  const listTeam = dataTeam.map(({ name, pos, fb, google, pinterest, tw }) => {
    return (
      <TeamItem
        key={name}
        name={name}
        pos={pos}
        fb={fb}
        google={google}
        pinterest={pinterest}
        tw={tw}
      />
    );
  });

  return (
    <div className="team">
      <div className="container">
        <Title title={titleTeam.title} desc={titleTeam.desc} />
        <div className="team__slider">
          <div className="team__content" style={styleSliderTeam}>
            {listTeam}
          </div>
          <button
            type="button"
            className="prev"
            onClick={setStyleSliderTeam.bind(this, 1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            type="button"
            className="next"
            onClick={setStyleSliderTeam.bind(this, -1)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p className="team__desc">
          Proin iaculis purus consequat sem cure digni ssim donec porttitora
          entum suscipit aenean rhoncus posuere odio in tincidunt proin iaculis.
        </p>
      </div>
    </div>
  );
};

export default Team;
