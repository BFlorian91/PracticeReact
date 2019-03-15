import React from 'react';

export default function Card(props) {
	return (
				<div className="col s4 m4">
					<div className="card">
						<div className="card-image">
							<img className="" alt="" style={{height: 250}} src={props.img} />
							<span className="card-title">{props.name}</span>
						</div>
						<div className="card-content" style={{height: 200}}>
							<p style={{}}>{props.description}</p>
						</div>
						<div className="card-action">
							<a href={props.url}><i className="material-icons">link</i></a>
						</div>
					</div>
			</div>
	)
}
