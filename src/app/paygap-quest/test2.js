// Date de référence : Unequal Pay Day
const unequalPayDay = new Date('2025-10-20T00:00:00');
const counterElement = document.getElementById('counter');

function updateCounter() {
    const today = new Date();
    let diff = today - unequalPayDay;

    // Utilisation de Math.abs pour garantir des valeurs positives
    const absoluteDiff = Math.abs(diff);

    const diffDays = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((absoluteDiff / (1000 * 60 * 60)) % 24);
    const diffMinutes = Math.floor((absoluteDiff / (1000 * 60)) % 60);

    // Logique hybride d'affichage
    if (diff < 0) {
        // AVANT le 20 octobre : Compte à rebours
        counterElement.innerHTML = `Dans <strong>${diffDays} jours</strong>, <strong>${diffHours} heures</strong> et <strong>${diffMinutes} minutes</strong>, les femmes travailleront gratuitement.`;
    } else {
        // APRÈS le 20 octobre : Temps écoulé
        counterElement.innerHTML = `Depuis <strong>${diffDays} jours</strong>, <strong>${diffHours} heures</strong> et <strong>${diffMinutes} minutes</strong>, les femmes travaillent gratuitement.`;
    }
}

// Mise à jour de l'affichage chaque minute
setInterval(updateCounter, 1000 * 60);
updateCounter();