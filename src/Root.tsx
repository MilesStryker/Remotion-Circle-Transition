import {Composition} from 'remotion';
import {CircleTransitionOut, } from './Composition';
//import { SlideToRight } from './Slide';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="CircleTransitionOut"
				component={CircleTransitionOut}
				durationInFrames={100}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
