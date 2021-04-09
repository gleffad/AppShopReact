//les require dynamiques poour les img ne fonctionne pas
//les require avec une variable dynamique ne fonctionnerons jamais.
//il faut passer par un const const img = {poisson : {nom :, bla:}, prout :{}

const images = {
  home: {
    name: "home",
    uri: require("../assets/homeLogo.png"),
  },
  poisson: {
    name: "poisson",
    uri: require("../assets/poisson.png"),
  },
  background: {
    name: "background",
    uri: require("../assets/background.png"),
  },
};

export { images };
