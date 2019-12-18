{
    // 【公式トップページ】
    const defaults = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
    // → { 'a': 1, 'b': 2 }
    console.log(defaults);
    const partition = _.partition([1, 2, 3, 4], n => n % 2);
    // → [[1, 3], [2, 4]]
    console.log(partition);

    // 【細かすぎるけど伝わって欲しいlodash.jsの話】
    // each
    const bigArray = [1,2,3,4,5,6,7,8,9,10];
    _.each(bigArray, item => console.log(item));

    // (1)配列やオブジェクトを欲しい形に整形
    // map
    const charaArray = [
        {
            id: 25 , 
            name: 'ピカチュウ' ,
            type: ['でんき'],
        },
        {
            id: 35, 
            name: 'ピッピ',
            type: ['ノーマル'],
        },
        {
            id: 39, 
            name: 'プリン',
            type: ['ノーマル'],
        },
    ];

     console.log(
        _.map(charaArray, char => char.id)
    );
    console.log(
        _.map(charaArray, char => char.name)
    );
    console.log(
        _.map(charaArray, char => char.type)
    );

    // mapValues
    // 連想配列(idがキー)
    const charaData = {
        25: {
            name: 'ピカチュウ' , type: ['でんき'],
        },
        35: {
            name: 'ピッピ', type: ['ノーマル'],
        },
        39: {
            name: 'プリン',  type: ['ノーマル'],
        },
    };

    console.log(
        _.mapValues(charaData, chara => chara.name)
    );

    // 配列→オブジェクト
    console.log(
        _.map(charaArray, chara => chara.name)
    );
    console.log(
        _.mapKeys(charaArray, (chara) => chara.id)
    );

    // mapKeys
    console.log(
        _.mapKeys(charaArray, 'id')
    );
    console.log(
        _.groupBy(charaArray, 'id')
    );
    console.log(
        _.invertBy(charaArray, 'id')
    );
    
    // (2)絞り込み系
    // filter
    console.log(
        _.filter(charaArray, item => _.includes(item.type, 'でんき'))
    );

    // find
    console.log(
        _.find(charaArray, item => _.includes(item.type, 'ノーマル'))
    );

    // pickBy
    console.log(
        _.pickBy(charaData, item => _.includes(item.type, 'でんき'))
    );
    
    // compact
    console.log(
        _.compact([0, 1, 2, '', 'ab', null, undefined])
    );

    // 集合系
    // union / intersection /defference
    console.log(
        _.union([2], [1, 2])
    );
    
    console.log(
        _.intersection([2, 1], [2, 3])
    );
    
    // 並べ替え系
  
    
}