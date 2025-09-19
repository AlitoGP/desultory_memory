// game.js - Desultory Memory game logic
let gameTimer = 0;
let timerInterval = null;
let currentObjectIndex = 0;
let objectSequence = [];
let clickCounts = {};
let completionHistory = [];
let startTime = 0;
let currentStartTime = 0;

function initGame() {
    // Get objects that have recipes (not empty arrays)
    const objectsWithRecipes = Object.keys(objects).filter(key => objects[key].recipe.length > 0);
    objectSequence = shuffleArray(objectsWithRecipes).slice(0, 10); // Take first 10 objects
    
    currentObjectIndex = 0;
    gameTimer = 0;
    clickCounts = {};
    completionHistory = [];
    
    createObjectGrid();
    showCurrentTarget();
    startTimer();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function createObjectGrid() {
    const objectsGrid = document.getElementById('objectsGrid');
    objectsGrid.innerHTML = '';
    clickCounts = {};

    Object.keys(objects).forEach(objectKey => {
        const obj = objects[objectKey];
        const objectElement = document.createElement('div');
        objectElement.className = 'object-item';
        objectElement.setAttribute('data-object', objectKey);
        objectElement.onclick = () => clickObject(objectKey);
        
        clickCounts[objectKey] = 0;
        
        objectElement.innerHTML = `
            <img src="${obj.image}" alt="${obj.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNjY2IiByeD0iOCIvPgo8dGV4dCB4PSIzMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPg=='">
            <span>${obj.name}</span>
            <div class="click-count">0</div>
        `;
        
        objectsGrid.appendChild(objectElement);
    });
}

function showCurrentTarget() {
    if (currentObjectIndex >= objectSequence.length) {
        completeGame();
        return;
    }

    const targetKey = objectSequence[currentObjectIndex];
    const target = objects[targetKey];
    document.getElementById('targetIcon').src = target.image;
    document.getElementById('targetName').textContent = target.name;
    document.getElementById('targetRecipe').textContent = `Recipe: ${target.recipe.join(' + ')}`;
}

function clickObject(objectKey) {
    const objectElement = document.querySelector(`[data-object='${objectKey}']`);
    clickCounts[objectKey]++;
    objectElement.classList.add('clicked');
    objectElement.querySelector('.click-count').textContent = clickCounts[objectKey];

    const targetKey = objectSequence[currentObjectIndex];
    if (objectKey === targetKey) {
        objectElement.classList.add('correct');
        handleCorrectSelection(objectKey);
    } else {
        objectElement.classList.add('incorrect');
        setTimeout(() => objectElement.classList.remove('incorrect'), 500);
    }
}

function handleCorrectSelection(objectKey) {
    const timeTaken = ((Date.now() - currentStartTime) / 1000).toFixed(2);
    completionHistory.push({ object: objects[objectKey], time: timeTaken });
    updateHistory();

    currentObjectIndex++;
    currentStartTime = Date.now();
    showCurrentTarget();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    completionHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <img class="history-icon" src="${entry.object.image}" alt="${entry.object.name}">
            <div class="history-info">
                <div class="history-name">${entry.object.name}</div>
                <div class="history-time">${entry.time}s</div>
            </div>
        `;
        historyList.appendChild(historyItem);
    });
}

function startTimer() {
    startTime = Date.now();
    currentStartTime = startTime;
    timerInterval = setInterval(() => {
        gameTimer = (Date.now() - startTime) / 1000;
        document.getElementById('timer').textContent = gameTimer.toFixed(2) + 's';
    }, 100);
}

function completeGame() {
    clearInterval(timerInterval);
    document.getElementById('finalTime').textContent = `You completed all objects in ${gameTimer.toFixed(2)} seconds!`;
    const completeContent = document.getElementById('completeContent');
    const gameComplete = document.getElementById('gameComplete');
    gameComplete.style.display = 'flex';
    setTimeout(() => completeContent.classList.add('show'), 100);
}

function restartGame() {
    const completeContent = document.getElementById('completeContent');
    completeContent.classList.remove('show');
    setTimeout(() => {
        document.getElementById('gameComplete').style.display = 'none';
        initGame();
    }, 300);
}

document.addEventListener('DOMContentLoaded', initGame);
