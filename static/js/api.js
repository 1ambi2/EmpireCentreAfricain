const proxyUrl =
  "https://publicapi.nationsglory.fr/country/lime/EmpireCentreAfricain";

fetch(proxyUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //Power
    const power = data.power;
    const maxPower = data.maxpower;
    const powerElement = document.querySelector(".power");
    powerElement.innerHTML = power + "/" + maxPower;

    //Claims
    const claims = data.count_claims;
    const claimsElement = document.querySelector(".claim");
    claimsElement.innerHTML = claims;

    //MMR
    const mmr = data.mmr;
    const mmrElement = document.querySelector(".mmr");
    mmrElement.innerHTML = mmr;

    //Level
    const level = data.level;
    const levelElement = document.querySelector(".level");
    levelElement.innerHTML = level;

  })
  .catch((err) => console.error(err));