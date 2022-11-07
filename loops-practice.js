// Practicing different types of Loops.


const scores = [11, 75, 82, 92, 24, 65];

let i = 0;

while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

for (let index = 0; index < scores.length; index++) {
 console.log(scores[index]);
}

for (i in scores) {
    console.log(scores[i]);
}

for (score of scores) {
    console.log(score)
}

scores.forEach((score) => {
    console.log(score)
}
)