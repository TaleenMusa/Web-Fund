var nums = [2,7,11,15];
var tar = 9;
var newnums=[];
for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == tar) {
            newnums.push(i);
            newnums.push(j);
        }
}

}
console.log(newnums);