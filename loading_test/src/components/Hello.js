import React from 'react';

export default function Hello(props) {
	if (props.isLoading) {
		return (
			<div className="center">
				<div className="preloader-wrapper active">
					<div className="spinner-layer spinner-cyan darken-2-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
							</div><div className="gap-patch">
							<div className="circle"></div>
							</div><div className="circle-clipper right ">
							<div className="circle "></div>
						</div>
					</div>
				</div>
			</div>

		)
	} else {
		return (
			<div className="container">
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card">
							<div className="card-image">
								<img src="https://www.inseec-bs.com/wp-content/uploads/2016/11/san-francisco-news-summer-code-camp.jpg" />
							</div>
							<div className="card-content">
								<p>I am a very simple card. I am good at containing small bits of information.
									I am convenient because I require little markup to use effectively.</p>
							</div>
							<div className="card-action">
								<a href="#">This is a fake link</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
