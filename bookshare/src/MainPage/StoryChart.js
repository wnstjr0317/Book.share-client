import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function StoryChart({ match, userData, modalOff }) {
	console.log(userData);

	return (
		<div className="storyChartWrapper">
			<div className="storyChart">
				{userData.map((data) => {
					return (
						<Link to={`/main/${data.id}`} key={data.id}>
							<div className="chartList" onClick={modalOff} key={data.id}>
								{
									<>
										<div className="storyChart_title">{data.title}</div>
										<iframe className="storyChart_body" frameBorder="0" width={500} srcDoc={data.article.split(' ').slice(0, 20).join(' ')}>
											...
										</iframe>
										<div className="storyChart_username">
											<FontAwesomeIcon icon={faUser} size="1x" />
											{data.title}
										</div>
									</>
								}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
