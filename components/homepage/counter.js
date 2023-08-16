'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ target, title, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<div className='w-full md:w-1/4 px-2 md:px-4 text-center flex flex-col items-center' ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				separator=','
				useEasing={true}>
				{({ countUpRef }) => (
					<span className='text-2xl md:text-4xl font-bold text-[#FCFCFC] leading-none' ref={countUpRef} />
				)}
			</CountUp>
			<p
				className={`font-bold text-lg transition-all ${
					inView === true ? 'opacity-100 ' : 'opacity-0 '
				}`}>
				{title}
			</p>
		</div>
	);
};

export default Counter;