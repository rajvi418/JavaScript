var phy = [5, 10]; // variable A
var chem = [5, 10]; // Variable B
var bio = [5, 10]; // Variable C
var math = [5, 10]; // Variable D
result = 0;
// let sub = [12, 12, 12, 12];
// let ans = 0;
// // {
//     for (let i = 0; i <= sub.length; i++) {
//         ans += sub[i];
//         console.log(ans)
//     }
// }
for (let a = 0; a < phy.length; a++) {
    for (let b = 0; b < chem.length; b++) {
        for (let c = 0; c < bio.length; c++) {
            for (let d = 0; d < math.length; d++) {
                if (phy[a] == chem[b] | phy[a] == bio[c] | phy[a] == math[d]) {
                    result = phy[a] + chem[b] + bio[c] + math[d];
                    console.log("total result:", + result);
                }
                else {
                    console.log("helow");
                }
            }
        }
    }

}















// result2 = phy[1] + chem[1] + bio[1] + math[1];


// console.log("Phy Marks");
// phyresult = phy[0] + phy[1];
// console.log("phyresult: " + phyresult);

// console.log("Chem Marks");
// chemresult = chem[0] + chem[1];
// console.log("Chem result: " + chemresult);

// console.log("Bio Marks");
// bioresult = bio[0] + bio[1];
// console.log("Bio result: " + bioresult);

// console.log("Math Marks");
// mathresult = math[0] + math[1];
// console.log("Math result: " + mathresult);

// console.log("Total Marks");
// console.log("Phy: ", + phy[0], phy[1]);
// console.log("Chem: ", + chem[0], chem[1]);
// console.log("Bio: ", + bio[0], bio[1]);
// console.log("Math: ", + math[0], math[1]);

// console.log("First Result: " + result);
// console.log("Second Result: " + result2);

