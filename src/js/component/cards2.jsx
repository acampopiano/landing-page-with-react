import React from "react";
import PropTypes from "prop-types";

export const Cards2 = props => {
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="row mt-3 mb-3">
			{props.data
				? props.data.map((item, i) => (
						<div
							key={`${i}`}
							className="col-lg-3 col-md-12 mx-auto">
							<div className="card card-block" style={styles}>
								<div className="card-header">
									<img
										src={item.imageURL}
										className="card-img-top img-fluid"
										alt="Imagen"></img>
								</div>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										{item.description}
									</p>
								</div>
								<div className="card-footer">
									<a
										href={item.buttonURL}
										className="btn btn-primary">
										{item.buttonLabel}
									</a>
								</div>
							</div>
						</div>
				  ))
				: "Loading..."}
		</div>
	);
};

Cards2.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	imageURL: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
