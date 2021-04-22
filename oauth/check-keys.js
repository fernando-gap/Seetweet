module.exports = function() {
	const tokens = {
		'CONSUMER_KEY': process.env.CONSUMER_KEY,
		'CONSUMER_SECRET': process.env.CONSUMER_SECRET,
		'ACCESS_KEY': process.env.ACCESS_KEY,
		'ACCESS_TOKEN_SECRET': process.env.ACCESS_TOKEN_SECRET
	};

	let invalidTokens = [];

	for (let each in tokens) {
		if (typeof tokens[each] === 'undefined') {
			invalidTokens.push(each);
		}
	}

	if (invalidTokens != 0) {
		throw new Error(`Invalid token(s): ${invalidTokens}`);
	}
	return;
}
