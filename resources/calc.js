
//console.log(personally, ticketNum, tier2, tier3, tier4, sales, revenue);

document.addEventListener('DOMContentLoaded', getInputValues);

var outputrevyear = document.getElementById('outputrevyear');
var outputrevmonth = document.getElementById('outputrevmonth');


var outputrevyearFull = document.getElementById('outputrevyearFull');
var totalagents = document.getElementById('totalagents');
var outputtotalmissed = document.getElementById('outputtotalmissed');



function getInputValues() {
    var personally = document.getElementById('personally');
    var sales = document.getElementById('sales');
    var tier2 = document.getElementById('tier2');
    var tier3 = document.getElementById('tier3');
    var tier4 = document.getElementById('tier4');
    var tier5 = document.getElementById('tier5');
    var tier6 = document.getElementById('tier6');
    var tier7 = document.getElementById('tier7');

};

console.log("| Personally Sponsored: ", personally.value, "| Tier2: ", tier2.value, tier3.innerText, tier4.innerText,"| Sales", sales.value,  "| output: ", outputrevyear.innerText);

// All inputs by the class name: form-control.
var allInputs = document.querySelectorAll(".form-control");
// taking all changes on all the inputs. 
allInputs.forEach(element => {
    element.addEventListener('change', (e) => {
        console.log(e.target.id +  " Changed")
        //get all updated values. 
        getInputValues();
        var t1 = personally.value;
        var t2 = tier2.value;
        var t3 = tier3.value;
        var t4 = tier4.value;
        var t5 = tier5.value;
        var t6 = tier6.value;
        var t7 = tier7.value;
        var sa = sales.value;
        
        var totalCalc = 0 
        totalagents.innerText = Number(t1) + Number(t2) + Number(t3) + Number(t4) + Number(t5) + Number(t6) + Number(t7);

        // =IF(A3=1,
        // ((A3*50*H3)), 
        if (t1 >= 1) {
            totalCalc += (t1 * 50 * sa);
            console.log("t1 ran" + totalCalc);

        } 
        // IF(A3=2,
        // ((A3*50*H3) + (B3*60*H3)), 
       
        if (t1 >= 2) {
            totalCalc += (t2 * 60 * sa);
            console.log("t2 ran" + totalCalc);
        };
    
        // IF(A3<=3,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3)),

        if (t1 >= 3) {
            totalCalc += (t3 * 12 * sa);
            console.log("t3 ran" + totalCalc);
        };
        // IF(A3<=5,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3)),
        if (t1 >= 5) {
            totalCalc += (t4 * 10 * sa);
            console.log("t4 ran" + totalCalc);
        };

        // IF(A3<=7,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3)),
        if (t1 >= 7) {
            totalCalc += (t5 * 11 * sa);
            console.log("t5 ran" + totalCalc);
        };

        // IF(A3<=10,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3) + (F3*12*H3)),
        if (t1 >= 10) {
            totalCalc += (t6 * 12 * sa);
            console.log("t4 ran" + totalCalc);
        };
        // IF(A3>=15,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3) + (F3*12*H3)) + (G3*40*H3))))))))
        if (t1 >= 15) {
            totalCalc += (t7 * 40 * sa);
            console.log("t4 ran" + totalCalc);
        };

        //updating output values
        //update for total inpcome/year
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        
            // These options are needed to round to whole numbers if that's what you want.
            minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
        });
        
        outputrevyear.innerText = formatter.format(totalCalc);
        outputrevmonth.innerText = formatter.format(totalCalc/12)
//        outputrevmonth.innerText = Number((totalCalc/12).toFixed(2));

        var totalCalcPossible = (t1 * 50 * sa)+ (t2 * 60 * sa) + (t3 * 12 * sa) + (t4 * 10 * sa)+(t5 * 11 * sa) + (t6 * 12 * sa)+ (t7 * 40 * sa)

        outputrevyearFull.innerText = formatter.format(totalCalcPossible);
        outputrevyearFullmonth.innerText = formatter.format(totalCalcPossible/12);

        outputtotalmissed.innerText = formatter.format(totalCalcPossible - totalCalc)
        outputtotalmissedmonth.innerText = formatter.format((totalCalcPossible - totalCalc)/12);

        console.log("| Personally Sponsored: ", personally.value, "| Tier2: ", tier2.value, tier3.innerText, tier4.innerText,"| Sales", sales.value,  "| output: ", outputrevyear.innerText);

    })
})




/*
Payment tier	Paid Ammount Per Closing	Personal Sponshorshps
1	50	1
2	60	2
3	12	3
4	10	5
5	11	7
6	12	10
7	40	15
*/