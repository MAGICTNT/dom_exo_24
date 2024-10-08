function fixeSize() {
  const nombreNotes = parseInt(prompt("Combien y a-t-il de notes ?"));
  let somme = 0;
  let noteMax = -Infinity;
  let noteMin = Infinity;

  for (let i = 0; i < nombreNotes; i++) {
    let note;
    do {
      note = parseFloat(
        prompt("Veuillez entrer une note entre 0 et 20 compris :")
      );
      if (note < 0 || note > 20) {
        alert("ERREUR, veuillez réessayer !");
      }
    } while (note < 0 || note > 20);

    somme += note;
    if (note > noteMax) noteMax = note;
    if (note < noteMin) noteMin = note;
  }
  return { somme, noteMax, noteMin, nombreNotes };
}

function infinitySize() {
  let note;
  let somme = 0;
  let noteMax = -Infinity;
  let noteMin = Infinity;
  let nombreNotes = 0;

  do {
    note = parseFloat(
      prompt("Veuillez entrer une note entre 0 et 20 compris :")
    );
    if (note >= 0 && note <= 20) {
      somme += note;
      nombreNotes++;
      if (note > noteMax) {
        noteMax = note;
      }
      if (note < noteMin) {
        noteMin = note;
      }
    } else if (note < 0) {
      break;
    } else {
      alert("ERREUR, veuillez réessayer !");
    }
  } while (true);

  return { somme, noteMax, noteMin, nombreNotes };
}

function showResult(somme, noteMax, noteMin, nombreNotes) {
  const resultDiv = document.querySelector("#result");
  if (nombreNotes > 0) {
    const moyenne = somme / nombreNotes;
    resultDiv.innerHTML = `
            <h2>Résultats</h2>
            <p>La note maximale est de <strong>${noteMax.toFixed(
              2
            )}</strong> / 20</p>
            <p>La note minimale est de <strong>${noteMin.toFixed(
              2
            )}</strong> / 20</p>
            <p>La moyenne est de <strong>${moyenne.toFixed(2)}</strong> / 20</p>
        `;
  } else {
    resultDiv.innerHTML = `<p>Aucune note saisie.</p>`;
  }
}

function accueilMessage() {
  const choixMode = prompt(
    "Choisir un mode de saisie:\n" +
      "1 : Saisie fixe\n" +
      "2 : Saisie jusqu'à note négative\n" +
      "Votre choix :"
  );
  return choixMode;
}

function saisirNotes() {
  const choixMode = accueilMessage();
  let somme, noteMax, noteMin, nombreNotes;

  switch (choixMode) {
    case "1":
      ({ somme, noteMax, noteMin, nombreNotes } = fixeSize());
      break;

    case "2":
      ({ somme, noteMax, noteMin, nombreNotes } = infinitySize());
      break;

    default:
      alert("Choix invalide !");
      return;
  }
  showResult(somme, noteMax, noteMin, nombreNotes);
}

document.querySelector("#saisirButton").addEventListener("click", saisirNotes);
