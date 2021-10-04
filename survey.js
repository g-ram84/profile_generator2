const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What is your name? Nicknames are also acceptable! ", (answer) => {
	rl.question("What is an activity you like doing? ", (ans2) => {
		rl.question("What do you listen to while doing that? ", (ans3) => {
			rl.question("Which meal is your favourite? ", (ans4) => {
				rl.question(
					"What's your favourite thing to eat for that meal? ",
					(ans5) => {
						rl.question("Which sport is your absolute favourite? ", (ans6) => {
							rl.question(
								"What is your superpower? In a few words, tell us what you are amazing at! ",
								(ans7) => {
									console.log(
										`${answer} loves listeing to ${ans3} while ${ans2}, devouring ${ans5} for ${ans4}, prefers ${ans6} over any other sport, and is amazing at ${ans7}`
									);
									rl.close();
								}
							);
						});
					}
				);
			});
		});
	});
});
