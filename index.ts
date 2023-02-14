const sleepSync = (ms: number) => {
	const end = new Date().getTime() + ms;
	while (new Date().getTime() < end) {
		/* do nothing */
	}
};

interface SlothConfig {
    speed?: number;
    maxWordsAtOnce?: number;
}

const log = (str: string, {speed = 1000, maxWordsAtOnce = 1}: SlothConfig = {}) => {
	let tokens = str.split(' ');
	let idx = 0;
    maxWordsAtOnce = Math.min(maxWordsAtOnce, tokens.length);
	while (idx < tokens.length) {
		sleepSync(speed);
		let randomIndex = idx + Math.ceil(Math.random() * maxWordsAtOnce);
		for (let i = idx; i < Math.min(randomIndex, tokens.length); i++) {
			process.stdout.write(tokens[idx] + ' ');
			idx++;
		}
	}
	process.stdout.write('\n');
};

const logAsync = async (str: string, {speed = 1000, maxWordsAtOnce = 1}: SlothConfig = {}) => {
    let tokens = str.split(' ');
    let idx = 0;
    maxWordsAtOnce = Math.min(maxWordsAtOnce, tokens.length);
    while (idx < tokens.length) {
        await new Promise(resolve => setTimeout(resolve, speed));
        let randomIndex = idx + Math.ceil(Math.random() * maxWordsAtOnce);
        for (let i = idx; i < Math.min(randomIndex, tokens.length); i++) {
            process.stdout.write(tokens[idx] + ' ');
            idx++;
        }
    }
    process.stdout.write('\n');
};

log('Hello World', {speed: 100, maxWordsAtOnce: 2});

export { log, logAsync };
