import React from 'react';

function Footer() {
	const socials = [
		{
			icon: 'fa fa-mobile',
			text: '(416) 555-0000'
		},
		{
			icon: 'fa fa-envelope',
			text: 'hello@escape.com'
		},
		{
			icon: 'fa fa-twitter',
			text: '@escape'
		},
		{
			icon: 'fa fa-facebook',
			text: 'facebook.com/escape'
		},
		{
			icon: 'fa fa-google-plus',
			text: 'plus.com/escape'
		},
		{
			icon: 'fa fa-pinterest-p',
			text: 'pinterest.com/escape'
		}
	];
	return (
		<footer className="text-white">
			<section className="contact-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="contact-tile my-20">
								<h2>
									<span>Say</span>
									<strong>Hello</strong>
								</h2>
								<p>
									Don’t be shy, drop us an email and say hello! We are a really nice bunch of people
									:)
								</p>
							</div>
							<div className="contact-social row">
								{socials.map((social) => {
									return (
										<div className="social col-md-6 my-20">
											<i className={social.icon} />
											<span>{social.text}</span>
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-md-6">
							<form className="form-group">
								<input className="form-control data-input" name="name" placeholder="Your Name*" />
								<input className="form-control data-input" name="email" placeholder="Your Email*" />
								<textarea rows="7" className="form-control data-input" placeholder="Your Message*" />
							</form>
						</div>
					</div>
				</div>
			</section>
			<section className="copyright text-center">
				<div>© 2014 Escape by FreebiesXpress • Made In Toronto</div>
			</section>
		</footer>
	);
}

export default Footer;
