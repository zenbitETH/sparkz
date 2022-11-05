pragma circom 2.0.3;

/**
parameters:

["0x01231cce15a2720bfb50adeefb937cfe6bc8d30f4286ef5039fcbfc1dabc8bc4", 
"0x21d75cdc2eea75b01bdaec3dff4264fb8f2806559d581ddd3427a8248bd9c7e7"],
[["0x17dc22ee6be4a99a1121d14938a1a34a99d4009b4c95614fcbeff296f595b090","0x11e980b414b887a5786d56a7cb1dde9bd460a7e0a8c56d53fba487437f95e79b"],
["0x28a8c2294f90689f8b2dece0192556f4b42315fe18beb01e1baecca19c2bda93","0x13979fa61e6684dea67ba4c8867c0738557d8fab5d715f7ceb8839c9b0a8ff02"]],
["0x1052e7c1830caf2544bcb0f4ec3f0fef2e24743988806b8e86965ce4d3077397","0x0bb2f54af44434e9b56d77334371b2d2ebc223561d865dc563dbd3600e7ccfb7"],
["0x0000000000000000000000000000000000000000000000000000000000000000"]*/

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
    var location[18][3] = [[0xb48d1e7f3ec2cd61200b75007868508ed4915c39835aea15771d52b5e5af2c1,3780295,12244844],
        [0x5ea9401191d9964703720acb4a47f178c767116c1b91177ef5b15903eec951c,3780820,12247502],
        [0x2a8d9535cccb885152c78c8f340303c11273d2b48687cca8ade18149997843f,3782603,12247865],
        [0x1bcb0ef6c288b1bf6bbac837419a22a7e492de74344ec71aa31497a8168f8b3,3780389,12246508],
        [0x24c0e98e1ebac9b8e79b4b6233fbcf932cb1fcdc2eb1a3af4db15887437667f,3776823,12248568],
        [0xe1045ad132b775f241ee8159e77a14e30f4550fc146a8fc5bbf0a6611d2cf552,3776863,12244169],
        [0x36c4747008207646e318ccb05c34c4756943c361e7f1764b7a2ef5b10da8f3e8,3776810,12238815],
        [0x63069d28d80fff34b89f0564411f6109fd5923642bd3bc830ffc2371b0aab285,3777811,12241731],
        [0x505b816c0a64a2273862b369bfb8a76f92bff7257c46532af5ebff297d91b81a,3778572,12240108],
        [0x1c9ba10f30d5cd344085aaf70937381c98385a531f12bf0433342e8b6019534a,3775986,12251099],
        [0x6d0476b537047d1e769a7b15a18dc495893290f46fd8ca311cd74a6b1e46d4a1,3779381,12248357],
        [0x9505665f3c0ccc17ad1036f8bc0cd79841e65f81bec6d743d300dea085e37830,3778975,12239720],
        [0x8a84a5d38f233d6125aa553bb6d70f08969dd1bd9d27aef8f4f87cad4e2fbd45,3777858,12238957],
        [0x00bf3a345d11e5e493d1129ac0ae4cc897772ce8d35d09285fe1e289ecd72cad,3779540,12239363],
        [0xd8e4c7967f5077636acfa74c027ed0e0f1eaad838a9cc7c9540949d6f2472a01,3775986,12242718],
        [0xff5613276a1676d80dc84bd1501c48601093d2c43c1cdc70e0ffb0205d27ce00,3773328,12250528],
        [0x10190a7c03c84889b98f3d8c060621fc1f3a92cbd8490b7ea53b44c56d98125a,3777764,12242053],
        [0xa219ea8b9989096cb5c1fbefadf695cab7367d31e3fad7d7b5329447aadf57cb,3780875,12241251]];

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
    "locationName": "0xb48d1e7f3ec2cd61200b75007868508ed4915c39835aea15771d52b5e5af2c1",
    "latitude": "3780295",
    "longitude": "12244844",
    "range": "10"
} */