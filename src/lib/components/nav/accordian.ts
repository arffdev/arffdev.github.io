// I was too lazy to figure this out myself
//https://svelte.dev/repl/7729845536404efcaf1f6c65328df3f2?version=3.38.2

export function accordion(node: any, show: boolean) {
	const initialHeight = node.offsetHeight;
	node.style.height = show ? 'auto' : 0;
	node.style.overflow = 'hidden';
	return {
		update(show: boolean) {
			const animation = node.animate(
				[
					{
						height: initialHeight + 'px',
						overflow: 'hidden'
					},
					{
						height: 0,
						overflow: 'hidden'
					}
				],
				{ duration: 250, fill: 'both' }
			);
			animation.pause();
			if (!show) {
				animation.play();
			} else {
				animation.reverse();
			}
		}
	};
}
