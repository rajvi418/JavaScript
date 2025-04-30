var fruit = [100, 200];
var vegge = [200, 300];
var dairy = [200, 200];

cost = 0;

for (let a = 0; a < fruit.length; a++) {
    for (let b = 0; b < vegge.length; b++) {
        for (let c = 0; c < dairy.length; c++) {
            if (fruit[a] == vegge[b] | fruit[a] == dairy[c] | vegge[b] == dairy[c]) {
                cost = fruit[a] + vegge[b] + dairy[c];
                console.log("Cost:", + cost);

                tax = cost * 10 / 100;
                console.log("GST: " + tax + "%  ");

                total = cost - tax;
                console.log("Total Cost: " + total + " ");
            }
            else {
                console.log("Else");
            }
        }
    }
}
