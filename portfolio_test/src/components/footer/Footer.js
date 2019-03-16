import React from 'react';

export default function Footer() {
	return (
		<footer className="page-footer blue lighten-2">
			<div className="container blue lighten-2">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="white-text">Portfolio</h5>
						<p className="grey-text text-lighten-4">.</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<ul>
							<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					© 2019 Copyright
					<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
				</div>
			</div>
		</footer>
	)
}
