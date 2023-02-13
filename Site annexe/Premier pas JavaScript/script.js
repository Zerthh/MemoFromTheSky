alert(
  "Bienvenu dans l'antre du dobby. Vous êtes maintenant piégé. Votre âme s'est materialisé à l'interieur de ce programme. Chaque mauvaise réponse vous fera perdre 10 de vos 30 Points de Vie. Une seule réponse est possible pour chaque question."
);

var animal = prompt("Dobby est un : 'Chien' ; 'Pigeon' ; 'Rat' ?");

var question1 =
  animal == "Pigeon"
    ? "Tu as de la chance..."
    : "Tu avais 3 vie et tu viens d'en perdre une.. C'est bête !";
alert(question1);

var Chien = "Chien" && 30;
var Pigeon = "Pigeon" && 30;
var Rat = "Rat" && 30;

while (animal == "Chien") {
  console.log(
    "La vie de l'utilisateur diminue à " + Chien + " PV grâce à la toutoune!"
  );

  if (Chien == 20 || Chien == 0) {
    break;
  }
  Chien--;
}

while (animal == "Rat") {
  console.log(
    "La vie de l'utilisateur diminue à " + Rat + " PV à cause du Rat."
  );

  if (Rat == 20 || Rat == 0) {
    break;
  }
  Rat--;
}

var phrase1 =
  "Celle-là était un peu facile, le gros nez de Dobby de Harry Potter est un indice trop puissant de comparaison à mon petit Pigeon. La prochaine sera plus dûr.";
var phrase2 =
  "En effet j'avais une chienne mais elle s'appellait Talia, dommage pour toi. Ressaisis toi ou le cimetiere sera ta maison.";
var phrase3 =
  "Ca aurait pu ! Un rat à un long nez typique de Dobby dans Harry Potter...Tant pis pour toi. Il te reste plus que deux chances avant de mourrir.";

if (animal == "Pigeon") {
  alert(phrase1);
} else if (animal == "Chien") {
  alert(phrase2);
} else if (animal == "Rat") {
  alert(phrase3);
}

var phrasebis1 =
  "On me dit dans l'oreille qu'une cinquantaine de piégé sont passé à la trappe...Il te restes encore " +
  Pigeon +
  " points de vie.";
var phrasebis2 =
  "La bonne réponse était un Pigeon ! Il te restes " +
  Chien +
  " points de vie.";
var phrasebis3 =
  "La bonne réponse était un Pigeon ! Il te restes " + Rat + " points de vie.";

if (animal == "Pigeon") {
  alert(phrasebis1);
} else if (animal == "Chien") {
  alert(phrasebis2);
} else if (animal == "Rat") {
  alert(phrasebis3);
}

console.log("Passage à la deuxieme question."); // Deuxieme Question //

var jeu = prompt(
  "Dans l'album de l'antre de Dobby, il y a une vidéo de : 'Minecraft'  ; 'Dofus' ; 'LeagueOfLegends' ?"
);

var question2 =
  jeu == "LeagueOfLegends"
    ? "Bravo..Tu as raison."
    : "Et non ! Mwahaha donnes moi tes 10 PV !";
alert(question2);

var Minecraft = "Minecraft" && 30;
var Dofus = "Dofus" && 30;
var LeagueOfLegends = "LeagueOfLegends" && 30;

while (jeu == "Minecraft" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Minecraft + " PV !");

  if (Minecraft == 10 || Minecraft == 0) {
    break;
  }
  Minecraft--;
}

while (jeu == "Minecraft" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Minecraft + " PV !");

  if (Minecraft == 10 || Minecraft == 0) {
    break;
  }
  Minecraft--;
}

while (jeu == "Minecraft" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Minecraft + " PV !");

  if (Minecraft == 20 || Minecraft == 0) {
    break;
  }
  Minecraft--;
}

while (jeu == "Dofus" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Dofus + " PV !");

  if (Dofus == 10 || Dofus == 0) {
    break;
  }
  Dofus--;
}

while (jeu == "Dofus" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Dofus + " PV !");

  if (Dofus == 10 || Dofus == 0) {
    break;
  }
  Dofus--;
}

while (jeu == "Dofus" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Dofus + " PV !");

  if (Dofus == 20 || Dofus == 0) {
    break;
  }
  Dofus--;
}

var phrase4 =
  "J'avais prévenu que celle-ci serait plus compliqué que la premiere...Il ne fallait pas me sous-estimer.";
var phrase5 =
  "D'abord tu dis que Dobby est un Rat, maintenant tu te dis que la vidéo est de Minecraft, tu ne tiens décidemment pas à la vie.";
var phrase6 =
  "D'abord tu dis que Dobby est un Chien et maintenant tu dis que la vidéo est de Minecraft ? Tu accumules les erreurs dis-donc.";
var phrase7 =
  "D'abord tu dis que Dobby est un Rat, maintenant tu te dis que la vidéo est de Dofus, tu ne tiens décidemment pas à la vie.";
var phrase8 =
  "D'abord tu dis que Dobby est un Chien, maintenant tu te dis que la vidéo est de Dofus, tu ne tiens décidemment pas à la vie.";
var phrase9 =
  "Quelle genre de sorcellerie utilises-tu pour deviner toute les réponses...Tu n'auras pas la dernière crois moi.";
var phrase10 =
  "Je te félicites, tu t'es trompé sur la premiere mais tu ne t'es pas avoué vaincu, et tu as répondu juste, Bravo.";

if (jeu == "Minecraft" && animal == "Pigeon") {
  alert(phrase4);
} else if (jeu == "Minecraft" && animal == "Rat") {
  alert(phrase5);
} else if (jeu == "Minecraft" && animal == "Chien") {
  alert(phrase6);
} else if (jeu == "Dofus" && animal == "Pigeon") {
  alert(phrase4);
} else if (jeu == "Dofus" && animal == "Rat") {
  alert(phrase7);
} else if (jeu == "Dofus" && animal == "Chien") {
  alert(phrase8);
} else if (jeu == "LeagueOfLegends" && animal == "Pigeon") {
  alert(phrase9);
} else if (jeu == "LeagueOfLegends" && animal == "Rat") {
  alert(phrase10);
} else if (jeu == "LeagueOfLegends" && animal == "Chien") {
  alert(phrase10);
}

var phrase4bis =
  "La bonne réponse était LeagueOfLegends. Il te restes encore 20 points de vie.";
var phrase5bis =
  "La bonne réponse était LeagueOfLegends. Il te restes encore 10 points de vie.";
var phrase6bis = "Il te restes encore 30 points de vie.";
var phrase7bis = "Il te restes encore 20 points de vie.";

if (jeu == "Minecraft" && animal == "Pigeon") {
  alert(phrase4bis);
} else if (jeu == "Minecraft" && animal == "Rat") {
  alert(phrase5bis);
} else if (jeu == "Minecraft" && animal == "Chien") {
  alert(phrase5bis);
} else if (jeu == "Dofus" && animal == "Pigeon") {
  alert(phrase4bis);
} else if (jeu == "Dofus" && animal == "Rat") {
  alert(phrase5bis);
} else if (jeu == "Dofus" && animal == "Chien") {
  alert(phrase5bis);
} else if (jeu == "LeagueOfLegends" && animal == "Pigeon") {
  alert(phrase6bis);
} else if (jeu == "LeagueOfLegends" && animal == "Rat") {
  alert(phrase7bis);
} else if (jeu == "LeagueOfLegends" && animal == "Chien") {
  alert(phrase7bis);
}

console.log("Passage à la dernière question."); // Dernière Question //

var rank = prompt(
  "Dans l'antre de Dobby, tout en bas, est gravé le rank de son humain sur le jeu LeagueOfLegends. Son rank est : 'Diamant2'  ; 'Gold1' ; 'Platine3' ?"
);

var question3 =
  rank == "Diamant2"
    ? "C'est evidemment vrai."
    : "Faux. Dobby n'obéirai pas à quelqu'un de rank inferieur à Diamant.";
alert(question3);

var Diamant2 = "Diamant2" && 30;
var Gold1 = "Gold1" && 30;
var Platine3 = "Platine3" && 30;

while (rank == "Gold1" && jeu == "Minecraft" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == -1) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "Dofus" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == -1) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == 10) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == 10) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "Dofus" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == -1) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "Minecraft" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == -1) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == 20) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "Minecraft" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == 10) {
    break;
  }
  Gold1--;
}

while (rank == "Gold1" && jeu == "Dofus" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Gold1 + " PV !");

  if (Gold1 == 10) {
    break;
  }
  Gold1--;
}

while (rank == "Platine3" && jeu == "Minecraft" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == 10) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "Dofus" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == 10) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "LeagueOfLegends" && animal == "Pigeon") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == 20) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "Minecraft" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == -1) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "Dofus" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == -1) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "LeagueOfLegends" && animal == "Rat") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == 10) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "Minecraft" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == -1) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "LeagueOfLegends" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == 10) {
    break;
  }
  Platine3--;
}

while (rank == "Platine3" && jeu == "Dofus" && animal == "Chien") {
  console.log("La vie de l'utilisateur diminue à " + Platine3 + " PV !");

  if (Platine3 == -1) {
    break;
  }
  Platine3--;
}

var phrase11 =
  "La bonne réponse était Diamant2. Tu n'as plus de points de vie. Ton âme est désormais miens. Tu voyageras entre les pixels de l'antre de Dobby. Adieu.";
var phrase12 =
  "Dans l'antre de Dobby la premiere regle à respecter est de toujours flatter l'égo de son humain. La bonne réponse était Diamant2. Il te reste 10 Points de Vie. C'est assez pour prendre la fuite. Adieu.";
var phrase13 =
  "Tu avais pris le melon à force de toujours répondre juste. Te voilà ramener brusquement à la réalité. Toutefois, la quête est terminé et tu t'en est sortie vivant, bravo. Tu quittes l'antre avec 20 Points de vie. Adieu.";
var phrase14 =
  "Encore un repas qui me passe sous le nez..Je ne sais pas quel miracle t'as sauvé, mais tu as répondu juste à cette derniere question. Il te restai 10 Points de vie. C'est suffisant pour prendre tes jambes à ton cou. Adieu.";
var phrase15 =
  "Jolie palmarès. Une note de 2/3 je te félicites. Tu gagnes le droit de quitter l'antre par la porte principale. Ferme bien la porte en partant. Tu quittes l'aventure avec 20 points de vie. Adieu.";
var phrase16 =
  "Bravo, tu as répondu juste aux 3 questions. La quête est terminé est t'octroie 50 points d'experience, et le titre 'Je suis venu, j'ai vu, j'ai vaincu.'. Adieu.";

if (rank == "Diamant2" && jeu == "LeagueOfLegends" && animal == "Pigeon") {
  alert(phrase16);
} else if (
  rank == "Diamant2" &&
  jeu == "LeagueOfLegends" &&
  animal == "Chien"
) {
  alert(phrase15);
} else if (rank == "Diamant2" && jeu == "LeagueOfLegends" && animal == "Rat") {
  alert(phrase15);
} else if (rank == "Diamant2" && jeu == "Minecraft" && animal == "Chien") {
  alert(phrase14);
} else if (rank == "Diamant2" && jeu == "Minecraft" && animal == "Rat") {
  alert(phrase14);
} else if (rank == "Diamant2" && jeu == "Minecraft" && animal == "Pigeon") {
  alert(phrase15);
} else if (rank == "Diamant2" && jeu == "Dofus" && animal == "Chien") {
  alert(phrase14);
} else if (rank == "Diamant2" && jeu == "Dofus" && animal == "Rat") {
  alert(phrase14);
} else if (rank == "Diamant2" && jeu == "Dofus" && animal == "Pigeon") {
  alert(phrase15);
} else if (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Chien") {
  alert(phrase12);
} else if (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Rat") {
  alert(phrase12);
} else if (rank == "Gold1" && jeu == "LeagueOfLegends" && animal == "Pigeon") {
  alert(phrase13);
} else if (rank == "Gold1" && jeu == "Minecraft" && animal == "Chien") {
  alert(phrase11);
} else if (rank == "Gold1" && jeu == "Minecraft" && animal == "Rat") {
  alert(phrase11);
} else if (rank == "Gold1" && jeu == "Minecraft" && animal == "Pigeon") {
  alert(phrase12);
} else if (rank == "Gold1" && jeu == "Dofus" && animal == "Chien") {
  alert(phrase11);
} else if (rank == "Gold1" && jeu == "Dofus" && animal == "Rat") {
  alert(phrase11);
} else if (rank == "Gold1" && jeu == "Dofus" && animal == "Pigeon") {
  alert(phrase12);
} else if (
  rank == "Platine3" &&
  jeu == "LeagueOfLegends" &&
  animal == "Chien"
) {
  alert(phrase12);
} else if (rank == "Platine3" && jeu == "LeagueOfLegends" && animal == "Rat") {
  alert(phrase12);
} else if (
  rank == "Platine3" &&
  jeu == "LeagueOfLegends" &&
  animal == "Pigeon"
) {
  alert(phrase13);
} else if (rank == "Platine3" && jeu == "Minecraft" && animal == "Chien") {
  alert(phrase11);
} else if (rank == "Platine3" && jeu == "Minecraft" && animal == "Rat") {
  alert(phrase11);
} else if (rank == "Platine3" && jeu == "Minecraft" && animal == "Pigeon") {
  alert(phrase12);
} else if (rank == "Platine3" && jeu == "Dofus" && animal == "Chien") {
  alert(phrase11);
} else if (rank == "Platine3" && jeu == "Dofus" && animal == "Rat") {
  alert(phrase11);
} else if (rank == "Platine3" && jeu == "Dofus" && animal == "Pigeon") {
  alert(phrase12);
}
