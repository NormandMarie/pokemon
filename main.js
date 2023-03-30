class Attack{
  constructor(libelle,dégat) {
    this.libelle = libelle;
    this.dégat = dégat;
  }

}


class Pokemon{

  constructor(nom,numéro,taille,poids,type,pv, pvactu,speAttack,Attack){
    this.nom = nom;
    this.numéro = numéro;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.pv = pv;
    this.pvactu = pvactu;
    this.speAttack = speAttack;
    this.Attack = Attack;
  }
  attaque() {

    if (pokemon.pvactu === pokemon.pv * 0.2) {
      console.log(`${this.nom} lance ${this.speAttack.libelle} !`);
      this.pvactu = this.pvactu-this.speAttack.dégat
      return this.speAttack.dégat;
    } else {
      console.log(`${this.nom} lance ${this.Attack.libelle} !`);
      this.pvactu = this.pvactu-this.Attack.dégat
      console.log(this.pvactu);
      return this.Attack.dégat;
    }
  }
  ordrecombat(Pokemon1,Pokemon2){
    if (Pokemon1.Math.random() > Pokemon2.Math.random()) {
    Pokemon1.attaque(pokemon);

    }else {
      Pokemon2.attaque(pokemon);
    }
  }


}
