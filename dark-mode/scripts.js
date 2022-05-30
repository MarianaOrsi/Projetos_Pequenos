// selecionando os nós
const body = document.querySelector('body');
const button = document.getElementById('myButton');
const h1 = document.querySelector('h1');
const items = document.querySelectorAll('.item');

// alteração para o dark mode
function changeMode() {
    button.classList.toggle('button-dark');
    body.classList.toggle('body-dark');
    h1.classList.toggle('title-dark');
    for (let i of items) {
        i.classList.toggle('item-dark');
        i.classList.toggle('container-dark');
    }
}

/* Aqui nos "importamos o conteudo como objetos"*/

/* 
let object1 = {
    image: ./imagens/tiger.jpg,
    title: 'O tigre',
    description: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
};

let object2 = {
    image: ./imagens/leon.jpg,
    title: 'O leão',
    description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
};

let object3 = {
    image: ./imagens/leopardo.jpg,
    title: 'O leopardo',
    description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como antera negra(melanista).'
};

let object4 = {
    image: ./imagens/pantera-negra.jpg,
     title: 'A pantera negra',
     description: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.'
};

let object5 = {
    image: ./imagens/jaguar.jpg,
    title: 'O jaguar',
    description: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).'
};

let object6 = {
    image: ./imagens/chita.jpg,
    title: 'O guepardo',
    description: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
};

let listObjects = [object1, object2, object3, object4, object5, object6] */