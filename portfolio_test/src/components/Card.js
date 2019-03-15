import React from 'react';

export default function Card(props) {
	return (
				<div class="col s4 m4">
					<div class="card">
						<div class="card-image">
							<img className="" alt="" style={{height: 250}} src={props.img} />
							<span class="card-title">{props.name}</span>
						</div>
						<div class="card-content" style={{height: 200}}>
							<p style={{}}>{props.description}</p>
						</div>
						<div class="card-action">
							<a href={props.url}><i className="material-icons">link</i></a>
						</div>
					</div>
			</div>
	)
}
