let players = [];

function addPlayer() {
  var playerNameInput = document.getElementById('playerName');
  var goalsInput = document.getElementById('goals');

  var playerName = playerNameInput.value;
  var goals = parseInt(goalsInput.value);

  if (playerName.trim() !== '' && !isNaN(goals)) {
    players.push({ name: playerName, goals: goals });
    playerNameInput.value = '';
    goalsInput.value = '';
    updateGoalScorer();
  } else {
    alert('Please enter valid player name and goals.');
  }
}

function updateGoalScorer() {
  var goalScorerElement = document.getElementById('goal-scorer');

  if (players.length === 0) {
    goalScorerElement.innerHTML = '<p class="no-players">No players added yet.</p>';
    return;
  }

  let highestScorer = players.reduce((prev, current) => (prev.goals > current.goals) ? prev : current);

  let goalScorerHtml = `<p>The highest goal scorer is <strong>${highestScorer.name}</strong> with <strong>${highestScorer.goals}</strong> goals.</p>`;
  goalScorerElement.innerHTML = goalScorerHtml;
}
