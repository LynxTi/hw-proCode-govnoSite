const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('startPage');
})

router.get('/:id', (req, res)=> {
    const { id }= req.params;

    const articles = [
        {id: '1', title: "Монастырский остров", img: "ostrov.jpg", content: "Это окутанная легендами и тайнами достопримечательность Днепра — Монастырский остров это одно из самых посещаемых мест среди горожан. Тут можно отдохнуть на пляже, устроить романтическое свидание, посетить аквариум и просто прогуляться вдоль берега.Украшением острова является Николаевская церковь, построенная в 1999 году. Ее золоченый купол виден с разных точек города, также на острове установлен памятник Тарасу Шевченко, этот монумент один из самых крупных в Украине."},
        {id: '2', title: "Екатеринославский бульвар", img: "ekBulvar.jpg", content: 'Екатеринославский бульвар  одно из фешенебельных мест Днепропетровска. Тут расположены дорогие бутики, рестораны и магазины. Тут часто можно встретить известных людей нашего города. Однако мы настоятельно рекомендуем посетить этот бульвар вечером – зажигая огни фонарей и витрин, окуная будто в сказку он прикует вас к себе…'},
        {id: '3', title: "Еврейский общественный центр «Менора»", img: "menora.jpg", content: 'Центр «Менора»  — самый большой еврейский комплекс в мире, его основная задача — возрождение еврейской общины в Днепропетровске и в целом по Украине, а также поддержка идеи толерантности к разным национальностям. Центр состоит из семи башем, символизируя храмовый семи свечник. Стены «Меноры» облицованы специально привезенным для этого комплекса иерусалимским камнем, не имеющий аналогов в мире. В нем располагаются современные центры образования и досуга, рестораны, конференц-залы, музей, концертный зал «Синай».'},
        {id: '4', title: "Аэрокосмический музей", img: "astra.jpg", content:" город по праву считается центром украинской космической индустрии, поэтому создание Аэрокосмического музея  в городе вполне закономерно. Это единственный в Украине музей ракетно-космической техники.В музее экспонируются подлинные космические станции, спутники, боевые ракеты и много других интересных объектов. Открытие Аэрокосмического музея НЦАОМ им. Макарова состоялось 11 июня 1996 года."},
        {id: '5', title: "Смотровая площадка парка им. Шевченко", img: "smotrovaya.jpg", content:"С высоты смотровой площадки парка им. Шевченко  открывается красивый вид на Днепр, особенно шикарно выглядит в вечернее время. Не менее интересен каскадный фонтан, его серебристые потоки воды придают этому месту особое очарование.Особенно любят это место молодожены, свадебные фотосессии здесь происходят очень часто. Смотровая площадка — отличное место, куда пойти в Днепропетровске для тихого отдыха и созерцания прекрасного панорамы города."}
    ];

    const article = articles.find(val => val.id === id);
    
    res.render('sightsCityPage', {title: article.title, content: article.content, img: article.img});
})

module.exports = router;
