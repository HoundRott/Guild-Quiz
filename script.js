const guildDetails ={
    Healer: {
        title: "Healer Guild",
        description: "Idk gorl you got me there"
    },
    Bravery: {
        title: "Bravery Guild",
        description: "Wow..... ur so big and tough uwu"
    },
    Mystical: {
        title: "Mystical Guild",
        description: "ho is u a witch or smth, I'm feelin faint"
    },
    Edgy: {
        title: "Edgy Guild",
        description: "Oh wow okay so ur just gonna be like that huh, emo ahh"
    }
};

function nextPage(currentPageNum, targetPageNum) {
    const currentDiv = document.getElementById(`page-${currentPageNum}`);

    if (targetPageNum > currentPageNum) {
        const checked = currentDiv.querySelector('input[type="radio"]:checked');
        if (!checked) {
            alert("Please select an answer before continuing :)");
            return;
        }
    }

    currentDiv.style.display = 'none';
    document.getElementById(`page-${targetPageNum}`).style.display = 'block';
}

document.getElementById('guild-quiz').addEventListener('submit', function(e) {
    e.preventDefault();
const tallies = {
    Healer: 0,
    Bravery: 0,
    Mystical: 0,
    Edgy: 0,
};

const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');

selectedRadios.forEach(radio => {
    const points = JSON.parse(radio.getAttribute('data-scores'));

    for (const [trait, value] of Object.entries(points)) {
        if (tallies.hasOwnProperty(trait)) {
            tallies[trait] += value;
        }
    }
});

const topTrait = Object.keys(tallies).reduce((a, b) => tallies[a] > tallies[b] ? a : b);

const resultInfo = guildDetails[topTrait];

document.getElementById('guild-quiz').style.display = 'none';
const resultBox = document.getElementById('result-box');
resultBox.style.display = 'block';
resultBox.innerHTML = `
<h2>${resultInfo.title}</h2>
<p>${resultInfo.description}</p>
<button type="button" id="restart-btn" onclick="location.reload()">Retake Quiz</button>
`;
});