pragma circom 2.0.3;

/**
parameters:
["0x1efed265f9358e6448e67f05e8defe69786769baaf989aa945cdae3ec176dc88", "0x0f7e552d829449a358da6fd7f7c7c6a0969b418c1b318dfb2c697865ff3e8ddb"],
[["0x226fbb8b40a3e68855a0a35953d5419cbb5ef7524fc19ce6b7336b1d3d17d64d", "0x1d1b4c5395f096b89bc5ef969972e7dd2c96cdf6e04609f33e76b0acb7238353"],
["0x1ad0159ef8c13da85ccd285e750c81cd9aafa090e75282585c835b0b168ce962", "0x1056733f2ef36a5861334836a6fa2d0dee260b0e121f3a6f4f667c2ae789b91d"]],
["0x14620bce4f2c020b5d29fabd599a2602609e87d1b42686df40ff288603fac423", "0x0c52905f7eca17af074a32d4a163283a7ca664a36d1738fa383a78055f0dead7"],
["0x0000000000000000000000000000000000000000000000000000000000000000"]
*/

/*** 
Firstly, we would need to verify that a user is at some location

@params will be latitude, longitude, range, locationName
=>  bunch of if-else or switch statement to proove whether 
    someone is at the given location or not
=>  decide a range for tolerance of error in coordinates

***/

function validatePublicLocation(locationName, latitude, longitude, range) {
    /*  location is an array of intArrays of the locationNames 
        where last 2 integers denote coordinate of that
        location. Here locationNames are LocationHash of that location
    */
    // var location[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    // delete the last character from the string 
    var location[5][3] = [[0xb48d1e7f3ec2cd61200b75007868508ed4915c39835aea15771d52b5e5af2c1,3780295,12244844],
        [0x5ea9401191d9964703720acb4a47f178c767116c1b91177ef5b15903eec951c,3780820,12247502],
        [0x2a8d9535cccb885152c78c8f340303c11273d2b48687cca8ade18149997843f,3782603,12247865],
        [0x1bcb0ef6c288b1bf6bbac837419a22a7e492de74344ec71aa31497a8168f8b3,3780389,12246508],
        [0x24c0e98e1ebac9b8e79b4b6233fbcf932cb1fcdc2eb1a3af4db15887437667f,3776823,12248568]];
    var count = 0;
    for (var i = 0; i < 4; i++) {
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
    "locationName": "0x2a8d9535cccb885152c78c8f340303c11273d2b48687cca8ade18149997843f",
    "latitude": "2060156",
    "longitude": "10044205",
    "range": "10"
} */