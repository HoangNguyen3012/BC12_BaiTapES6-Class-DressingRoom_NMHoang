function GetClothesData() {
    this.getList = function() {
        var promise = axios({
            url: 'https://60ea735d5dd7ff0017b39775.mockapi.io/DressingRoom', // comma
            method: 'GET',
        });
        return promise;
    };
};