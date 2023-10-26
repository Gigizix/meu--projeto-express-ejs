const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'Página de contatos!' });
});

const produtos = [
  {id: 1, nome: "Flor Pluméria", preco: "60,00", imagem: "imagem1.png" , descricao: "Plumerias têm hastes grossas, folhas de couro, e uma abundância de flores do início do verão até o outono. Nos trópicos algumas variedades podem crescer até uma altura de mais de 30 pés. Variedades mais curtas podem ser plantadas e podadas em uma grande cobertura. As flores de plumeria são muito perfumadas, por isso elas são plantadasplantam árvores perto de janelas ou pátios para desfrutar da fragrância sedutora. As cores das flores incluem rosa, vermelho, branco e amarelo. Plumerias são frequentemente plantadas em recipientes e fazem excelentes flores cortadas."},
  {id: 2, nome: "Flor de Maio", preco: "45,00", imagem: "imagem2.png", descricao: "A flor de Maio amarela, também conhecida como cacto-da-Páscoa, pertence à família Cactaceae e é nativa do México. Ela se destaca por suas flores amarelas, que costumam surgir na primavera, e seus ramos achatados e verde-escuros. Além do mais, a flor de Maio amarela é uma planta suculenta, ou seja, armazena água em suas folhas e caules para sobreviver em períodos de seca. Isso faz com que ela seja muito resistente e exige poucos cuidados."},
  {id: 3, nome: "Rosa do Deserto", preco: "60,00", imagem: "imagem3.png", descricao: " rosa-do-deserto está relacionada com a sua formação mineral, que acontece por meio do sulfato de cálcio hidratado. Isso quer dizer que a rosa-do-deserto é uma espécie selenita, originária do termo Selene, designando a deusa grega da lua.Dentro dessa ideia, acredita-se que a rosa-do-deserto pode simbolizar clareza mental, gentileza, amor, atenção e tolerância."},
  {id: 4, nome: "Rosa de Lótulos ", preco: "32.90", imagem: "imagem4.png", descricao: ""},
  {id: 5, nome: "", preco: 69.90, imagem: "imagem5.png", descricao: ""},
  
]

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Página do produto!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});