// Les fichiers de `public/` sont servis à la racine du site : on les référence
// par leur URL (ex. "/assets/imgProjet/portfolio.png"), on ne les importe pas.

const imgProjet = "/assets/imgProjet";
const imgExperience = "/assets/imgExperience";

// Logos utilisés par les sections education / experience (encore commentées
// dans data.tsx). Ces fichiers ne sont pas encore présents dans public/assets/img.
export const images = {
  iconAnthropic: `${imgExperience}/anthropic.jpg`,
  LogoUniversite: `${imgExperience}/universiteRouen.png`,
  LogoDescartes: `${imgExperience}/descartes.jpg`,
  LogoYvelines: `${imgExperience}/yvelines.png`,
  LogoFidal: `${imgExperience}/fidal.jpg`,
  LogoHop: `${imgExperience}/hop.png`,
};

export const imagesProjets = {
  Billeterie1: `${imgProjet}/Billeterie.png`,
  Billeterie2: `${imgProjet}/billeterie1.jpg`,
  Billeterie3: `${imgProjet}/billeterie2.jpg`,
  Billeterie4: `${imgProjet}/billeterie3.jpg`,
  Billeterie5: `${imgProjet}/billeterie4.jpg`,
  Billeterie6: `${imgProjet}/billeterie5.jpg`,
  Dashboard1: `${imgProjet}/Dashboard.jpg`,
  Dashboard2: `${imgProjet}/Dashboard1.png`,
  Maquette1: `${imgProjet}/Maquette.png`,
  Maquette2: `${imgProjet}/telephone.png`,
  Portfolio: `${imgProjet}/portfolio.png`,
  Stussy1: `${imgProjet}/stussy.png`,
  Stussy2: `${imgProjet}/stussy1.png`,
  Stussy3: `${imgProjet}/stussy2.png`,
  Stussy4: `${imgProjet}/stussy3.png`,
  Hop1: `${imgProjet}/Hop1.png`,
};
