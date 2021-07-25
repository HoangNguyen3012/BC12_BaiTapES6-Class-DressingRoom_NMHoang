const getClothesData = new GetClothesData();

// Default functions
function setLocalStorage(arrayList) {
    localStorage.setItem('arrayList', JSON.stringify(arrayList));
};

function getLocalStorage() {
    if(localStorage.getItem('arrayList')){
        return JSON.parse(localStorage.getItem('arrayList'));
    };
};

function getEle(id) {
    return document.getElementById(id);
};
// Default functions end


/////////////// Clothing items display on Tab ////////////////////


/** Determine clothingType before displaying 
 * By filtering the received array
 * With matching clothingType on html Pills
*/
// check type of clothes
function checkClothingType(arr) {
    // let checkType = document.querySelector('#myTabContent .active').id; // retrieve current active tab from TabContent
    // const clothingType = arr.filter(item => item.clothingType === checkType);
    // return clothingType;
    return arr.filter(item => item.clothingType === document.querySelector('#myTabContent .active').id);
};
// check type of clothes ends

// display items
// edit this function to change the result list appearance
function renderItem(arrItems) {
    var i = 1;
    var content = '';
    arrItems.map(function(item, index){
        if(i <= 8){

            content += // Get content from BackEnd url
                `
                <div class="card text-center" >
                <img src="../assets/images/${item.clothingType}/${item.showPicture}.jpg" class="card-img-top" alt="..." style="height: 125px; width: auto; margin: auto">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <a href="#" class="btn btn-primary" id="tryOnModel" onclick="tryOnModel('${item.clothingType}', '${item.picture}')">Mặc thử</a>
                </div>
                </div>
                
                `;
            i++;
        };
        
    })
    getEle(document.querySelector('#myTabContent .active').id).innerHTML = content;
};
// display items ends

// display function
// call out this function to display a table list of results
function getList() {
    getClothesData.getList()
        .then(function (result) {
            renderItem(checkClothingType(result.data));
            setLocalStorage(result.data);
        })
        .catch(function (error) {
            console.log(error);
        })
};
getList(); // call out automatically
// display function ends

// BS4 asynchronous function
// Trigger on change of pills
// recall display function
$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    getList(); // call out display function
    event.target // newly activated tab
    event.relatedTarget // previous active tab
    
});
// recall display function ends


/////////////// Clothing items display on Tab ends ////////////////////



/////////////// Clothing items display on Model ////////////////////


// Add clothes to Model
function tryOnModel(clothingType, pictureOnModel) {
    console.log(clothingType)
    switch(clothingType) {
        case 'shirt':
            getEle('modelShirt').innerHTML = `<img src="../assets/images/shirt/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        case 'pants':
            getEle('modelPants').innerHTML = `<img src="../assets/images/pants/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        case 'hairStyle':
            getEle('modelHair').innerHTML = `<img src="../assets/images/hairStyle/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        case 'shoes':
            getEle('modelShoes').innerHTML = `<img src="../assets/images/shoes/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        case 'necklace':
            getEle('modelNecklace').innerHTML = `<img src="../assets/images/necklace/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        case 'bag':
            getEle('modelBag').innerHTML = `<img src="../assets/images/bag/${pictureOnModel}.png" alt="" style="width:100%;">`;
        break;
        default:
            getEle('modelBG').style.backgroundImage = `url(../assets/images/background/${pictureOnModel}.jpg)`;
    }

}
// Add clothes to Model ends


/////////////// Clothing items display on Model ends ////////////////////