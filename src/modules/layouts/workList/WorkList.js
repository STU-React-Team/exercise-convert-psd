import React from 'react';
import Work from './Work'
import './WorkListStyle.css';

export default function WorkList() {
    const listWork = [
        {
            icon: "fas fa-road",
            title: "New way of Vision",
            content: "Curabiture at rhoncus quam. In in tortor quis sem tempor ultricies in"
        },
        {
            icon: "fas fa-leaf", 
            title: "Fresh ideas", 
            content: "Curabiture at rhoncus quam. In in tortor quis sem"
        },
        {
            icon: "fas fa-home", 
            title: "Strong foundations", 
            content: "Curabiture at rhoncus quam. In in tortor quis sem tempor ul"
        },
        {
            icon: "fas fa-users", 
            title: "Great Support", 
            content: "Curabiture at rhoncus quam. In in tortor quis sem tempor ul" 
        }
    ]
    const renderWorkList = listWork.map(work => (
        <Work 
        key={work.icon}
        icon={work.icon} 
        title={work.title} 
        content={work.content} />
    ))

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    { renderWorkList }
                </div>
            </div>
        </div>
    )
}
