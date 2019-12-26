import React from 'react';
import FlowTreeIcon from '../assets/images/FlowTreeIcon.png';
import UsersIcon from '../assets/images/UsersIcon.png';
import PersonIcon from '../assets/images/PersonIcon.png';
import iPadIcon from '../assets/images/iPadIcon.png';
import BrowserIcon from '../assets/images/BrowserIcon.png';
import VideoIcon from '../assets/images/VideoIcon.png';
import StarIcon from '../assets/images/StarIcon.png';
import CameraIcon from '../assets/images/Camera.png';
import ContainerBG from '../assets/images/Container.png';
import Envato from '../assets/images/Envato.png';
import WordPress from '../assets/images/WordPress.png';
import Tuts from '../assets/images/Tuts.png';
import Microlancercopy from '../assets/images/Microlancercopy.png';

function Main() {
	const skills = [
		{
			icon: PersonIcon,
			title: 'Branding & Identity'
		},
		{
			icon: iPadIcon,
			title: 'Web & Graphic Design'
		},
		{
			icon: BrowserIcon,
			title: 'Web & Graphic Design'
		},
		{
			icon: VideoIcon,
			title: 'Animations'
		},
		{
			icon: StarIcon,
			title: 'UI/UX'
		},
		{
			icon: CameraIcon,
			title: 'Photography'
		}
	];
	const partners = [ Envato, WordPress, Tuts, Microlancercopy ];
	const facebook = 'fa fa-facebook';
	const twitter = 'fa fa-twitter';
	const pinterest = 'fa fa-pinterest-p';
	const teams = [
		{
			name: 'Kimberly Thompson',
			type: 'Marketer',
			socials: [ twitter, facebook, pinterest ]
		},
		{
			name: 'Kimberly Thompson',
			type: 'Coder',
			socials: [ twitter, facebook, pinterest ]
		},
		{
			name: 'Kimberly Thompson',
			type: 'Graphic designer',
			socials: [ facebook, pinterest ]
		}
	];
	return (
		<main>
			<section className="service">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="service-text">
								<h2 className="text-title">
									<span>Web</span>
									<strong>Development</strong>
								</h2>
								<div className="text-descriptioin">
									<p>
										Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum
										suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat
										sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio
										in tincidunt.
									</p>
									<p>
										Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit
										aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure
										digni ssim.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service_img">
								<img src={FlowTreeIcon} alt="Flow Tree Icon" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service service-background">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="service_img">
								<img src={UsersIcon} alt="Users Icon" />
							</div>
						</div>
						<div className="col-md-8">
							<div className="service-text">
								<h2 className="text-title">
									<span>Identity</span>
									<strong>Branding</strong>
								</h2>
								<div className="text-descriptioin">
									<p>
										Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum
										suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat
										sem cure digni ssim. Donec porttitora entum suscipit.
									</p>
									<p>
										Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit
										aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service">
				<div className="container">
					<div className="row">
						{skills.map((skill) => {
							return (
								<div className="d-flex col-md-6">
									<div className="d-inline">
										<div className="skill-img">
											<img src={skill.icon} alt="Person Icon" />
										</div>
									</div>
									<div className="skill-content d-inline">
										<h5>{skill.title}</h5>
										<p>
											Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum
											suscipit aenean rhoncus posuere odio in tincidunt.
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="service service-background">
				<div className="container">
					<div className="client-title text-center">
						<h4>
							<span>Awesome</span>
							<strong>Client</strong>
						</h4>
						<p>See what niced things our clients said about us</p>
					</div>
					<div className="client-box d-flex">
						<div className="d-inline">
							<img src={ContainerBG} alt="Avatar box" />
						</div>
						<div className="d-inline">
							<div className="chat">
								<p className="chat-content">
									“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
									aenean rhoncus. ”
								</p>
								<p className="chat-user">- Jamie Richardson, Founder of Cocoa Media</p>
							</div>
						</div>
					</div>
					<div className="client-box d-flex">
						<div className="d-inline">
							<div className="chat">
								<p className="chat-content">
									“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
									aenean rhoncus. ”
								</p>
								<p className="chat-user">- Client-Lisa Simpson, Founder of Rainel</p>
							</div>
						</div>
						<div className="d-inline">
							<img src={ContainerBG} alt="Avatar box" />
						</div>
					</div>
				</div>
			</section>
			<section className="service">
				<div className="container">
					<div className="row">
						{partners.map((partner) => {
							return (
								<div className="col-md-3">
									<div className="partner-logo">
										<img src={partner} alt="Partner logo" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="service team-section">
				<div className="container text-center">
					<div className="team-section-title">
						<h2>
							<span>Amazing</span>
							<strong>Team</strong>
						</h2>
						<p className="team-subtitle">These wonderful people make work enjoyable</p>
					</div>
					<div className="teams">
						<div className="row">
							{teams.map((team) => {
								return (
									<div className="col-md-4">
										<div className="partner-img" />
										<p className="team-name">
											<strong>{team.name}</strong>
										</p>
										<p className="team-type">{team.type}</p>
										<div className="social">
											{team.socials.map((social) => {
												return (
													<div className="social-icon d-inline">
														<i className={social} />
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="team-section-description py-10">
						<p>
							Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit <br />
							aenean rhoncus posuere odio in tincidunt proin iaculis
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
