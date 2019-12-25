import React from 'react';
import imgFeature1 from 'assets/images/FlowTree-Icon.png';
import imgFeature2 from 'assets/images/Users-Icon.png';
import imgSkill1 from 'assets/images/Person-Icon.png';
import imgSkill2 from 'assets/images/Browser-Icon.png';
import imgSkill3 from 'assets/images/iPad-Icon.png';
import imgSkill4 from 'assets/images/Video-Icon.png';
import imgSkill5 from 'assets/images/Star-Icon.png';
import imgSkill6 from 'assets/images/Camera.png';
import FeatureServices from 'components/services/FeatureServices';
import ServiceSkills from 'components/services/ServiceSkills';

const Services = () => {
  const dataFeature = [
    {
      title: 'Web Development',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. -Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit.',
      img: imgFeature1,
      imgRight: true,
    },
    {
      title: 'Identity Branding',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. -Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit.',
      img: imgFeature2,
      imgRight: false,
    },
  ];
  const dataSkills = [
    {
      heading: 'Branding & Identity',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill1,
    },
    {
      heading: 'Web & Graphic Design ',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill2,
    },
    {
      heading: 'Mobile App Development',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill3,
    },
    {
      heading: 'Animations',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill4,
    },
    {
      heading: 'UI/UX',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill5,
    },
    {
      heading: 'Photography',
      desc:
        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
      img: imgSkill6,
    },
  ];

  const listFeature = dataFeature.map(item => {
    const { title, desc, img, imgRight } = item;
    return (
      <FeatureServices
        key={item.title}
        title={title}
        desc={desc}
        img={img}
        imgRight={imgRight}
      />
    );
  });
  const listSkills = dataSkills.map(({ heading, desc, img }) => {
    return (
      <ServiceSkills key={heading} heading={heading} desc={desc} img={img} />
    );
  });

  return (
    <div className="services">
      <div className="services-feature">{listFeature}</div>
      <div className="services-skills container">{listSkills}</div>
    </div>
  );
};

export default Services;
