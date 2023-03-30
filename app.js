let paratonnerre = new Attack("paratonnerre",25);
let statik = new Attack("statik", 10);
let pikachu = new Pokemon('Pikachu',25 , 40, 6, "Electrique", 82,82, paratonnerre,statik);

const adaptabilié = new Attack("adaptabilié",9);
const anticipation = new Attack("anticipation",15);
const evoli =new Pokemon('evoli', 133, 'normal', 30, 6.5, 70,70, adaptabilié, anticipation);


pikachu.attaque();
