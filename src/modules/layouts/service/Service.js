import React from 'react';
import ServicePart from './ServicePart';
import ServiceResult from './ServiceResult';
import ServiceTab from './ServiceTab';
import './ServiceStyle.css';

const Service = () => {
  const partsService = [
    {
      href: '',
      icon: 'fas fa-comments-dollar',
      title: 'Consulting',
      content:
        'In quis magna eget magna rutrum hendrerit. Donec dap ibus aliquet magna in facilisis. ',
    },
    {
      href: '',
      icon: 'fas fa-tasks',
      title: 'Planning',
      content:
        'Curabitur at rhoncus quam. In in tortor quis sem tempor ultricies in.',
    },
    {
      href: '',
      icon: 'fas fa-cogs',
      title: 'Development',
      content:
        'Aliquam tellus leo, egestas eget consectetur sed, lobortis vel nisl. ',
    },
    {
      href: '',
      icon: 'fas fa-coffee',
      title: 'Production',
      content:
        'Curabitur at rhoncus quam. In in tortor quis sem tempor ultricies in.',
    },
    {
      href: '',
      icon: 'fas fa-chart-bar',
      title: 'Analysis',
      content:
        'Curabitur at rhoncus quam. In in tortor quis sem tempor ultricies in.',
    },
    {
      href: '',
      icon: 'fas fa-plane-departure',
      title: 'Release',
      content: 'Curabitur at rhoncus quam. In in tortor quis sem tempor',
    },
  ];
  const renderServicePart = partsService.map(part => {
    return (
      <ServicePart
        key={part.icon}
        href={part.href}
        icon={part.icon}
        title={part.title}
        content={part.content}
      />
    );
  });
  return (
    <div className="service container-fluid">
      <div className="container">
        <div className="row">
          <h1 className="service-head heading w-100">
            SERVICE
            <i className="fas fa-arrow-up" />
          </h1>
          {renderServicePart}
        </div>
        <div className="row">
          <ServiceTab />
          <ServiceResult />
        </div>
      </div>
    </div>
  );
}
export default Service ;
