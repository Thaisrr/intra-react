const getData = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Plein de données');
        //reject('C\'est cassé');
    }, 1000)
    //reject('C\'est cassé');
}));


function modifyData(data) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data.toUpperCase())
        }, 1000)
    })
}

let datas;

getData()
    .then((response) => modifyData(response) )
    .then((json) => {
        datas = json;
        displayDatas();
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log('Terminé')
    })


console.log(datas); // undefined

const displayDatas = () => {
    console.log(datas); // Résultat
}

let datas2;

// Async Await
// Fonction asynchrone
// A l'intérieur de la fonction, le code sera géré de manière synchrone
// Retourne une promesse

async function loadData() {
    try {
        const response = await getData();
        console.log('load data, response: ', response);
        datas2 = await modifyData(response);
        console.log('load data, datas2 : ', datas2);
        return datas2;
    } catch (e) {
        console.log('gestion de l\'erreur');
    } finally {
        console.log('Terminé');
    }
}

// Encore une promesse
loadData();


