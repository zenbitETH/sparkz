pragma circom 2.0.3;

/*** 
Firstly, we would need to verify that a user is at some location

@params will be latitude, longitude, range, locationName
=>  bunch of if-else or switch statement to proove whether 
    someone is at the given location or not
=>  decide a range for tolerance of error in coordinates

***/

function validatePublicLocation(locationName, latitude, longitude, range) {
    /*  location is an array of integer Arrays of the locationNames 
        where last 2 integers denote coordinate of that
        location. Here locationNames are LocationHash of that location
    */
    // var location[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    var location[5][3] = [[locationHash,x,y],
            [locationHash,x,y],
        [0x6e4d3307fa06cef393c558029417ef5fbc7ae41140f5fc79c4dc1d29b0fb180,2060613,10043243]];
    var count = 0;
    for (var i = 0; i < 5; i++) {
        if (locationName == location[i][0] && 
        latitude <= location[i][1] + range && 
        latitude >= location[i][1] - range && 
        longitude <= location[i][2] + range &&
        longitude >= location[i][1] - range) {
            count++;
        }
    }
    return count;
}

template LocationProof() {
    signal input locationName;
    signal input latitude;
    signal input longitude;
    signal input range;
    signal output isValidPublicLocation;
    isValidPublicLocation <-- validatePublicLocation(locationName, latitude, longitude, range);
}

component main = LocationProof();

/* INPUT = {
    "locationName": "0xdcc721bdb36f1d643b7b274ba0febc49c08f0106e760a6ec25f60f7f32e74d1",
    "latitude": "2060156",
    "longitude": "10044205",
    "range": "100"
} */