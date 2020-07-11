import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import { Redirect } from 'react-router-dom';

const Player = props => {

	const [loading, setLoading] = useState(true);
	const { id } = props.match.params;
	const hasPlaying = Object.keys(props.playing).length > 0;

	useEffect(() => {
		props.getVideoSource(id);
		setLoading(false);
	}, []);

	return loading ? <h1>Cargando video</h1> : hasPlaying ? (
		<div className='Player'>
			<video controls autoPlay>
				<source src={props.playing.source} type='video/mp4' />
			</video>
			<div className='Player-back'>
				<button
					type='button'
					onClick={() => props.history.goBack()}
				>
					Back
				</button>
			</div>
		</div>
	) : <Redirect to='/404/' />;
};

const mapStateToProps = state => {
	return {
		playing: state.playing,
	}
}

const mapDispathToProps = {
	getVideoSource,
}

export default connect(mapStateToProps, mapDispathToProps)(Player);