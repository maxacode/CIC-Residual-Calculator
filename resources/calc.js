//console.log(personally, ticketNum, tier2, tier3, tier4, sales, revenue);

//changed paid to CIC as statis 12 * 99 plus singel IT 250 cost

//!!! DONE !!!!!
// Change tabs of Commison calc (Traditiona/ Capp/ICon) to red highlight
// "Total Paid to Traditial should change to match Tab or "Other company" 


// CAPPING
// should be 20220 instead of 36,440
// If
// avg salfe price * # of sales * avg comm rate * comm split <= 16k
//  65$ transaction fee for first 12 until cap
//  if cap then 1-8 = 65 then 10-12 $140
//  $315
// 13 till 20 transactions $275
// TRANS FEE BROKEN DOWN
// $25 broker review fee on each transaction 
// plus $40 paid only for first 12 transactions then dropss until capp
// plus $250 when they capp (16k) on every transaction for 8 trans more
// then plus $75 permenently 
//  ICON
//  Anual Community Fee - 3k 

document.addEventListener('DOMContentLoaded', residualGetInputValues);

var outputrevyear = document.getElementById('outputrevyear');
var outputrevmonth = document.getElementById('outputrevmonth');


var outputrevyearFull = document.getElementById('outputrevyearFull');
var totalagents = document.getElementById('totalagents');
var outputtotalmissed = document.getElementById('outputtotalmissed');


document.getElementById("versionNumber").innerText = "Version 5.3";


function residualGetInputValues() {
    var personally = document.getElementById('personally');
    var sales = document.getElementById('sales');
    var tier2 = document.getElementById('tier2');
    var tier3 = document.getElementById('tier3');
    var tier4 = document.getElementById('tier4');
    var tier5 = document.getElementById('tier5');
    var tier6 = document.getElementById('tier6');
    var tier7 = document.getElementById('tier7');

};


// pie chart

var labels = [
    'Earned',
    'Missed',
];
var data = {
    labels: labels,
    datasets: [{
        label: 'Revenue/Year Missed',
        backgroundColor: [
            '#0f9d58',
            '#3c4043',
        ],
        borderColor: '#aaaa',
        data: [100, 0],
        hoverOffset: 20
    }]
};

window.config = {
    type: 'pie',
    data: data,
    options: {

        responsive: true,
        align: 'top',
        radius: 130,
        color: '',
        plugins: {
            tooltip: {
                backgroundColor: "",
                bodyFont: {
                    size: 1
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 15,
                        weight: "bold"
                    }
                },
                position: "bottom",
            }
        }
    }
};

var myChartRes = new Chart(
    document.getElementById('myChart'),
    config,

);

//console.log("| Personally Sponsored: ", personally.value, "| Tier2: ", tier2.value, tier3.innerText, tier4.innerText,"| Sales", sales.value,  "| output: ", outputrevyear.innerText);

//
// <div>
// <canvas id="myChart" width="50" height="50"></canvas>

// </div>

// all preset buttons
var _3got3 = document.getElementById('3got3');
var _6got6 = document.getElementById('6got6');
var _15got15 = document.getElementById('15got15');



var compt1 = 100
var compt2 = 50
var compt3 = 15
var compt4 = 15
var compt5 = 10
var compt6 = 15
var compt7 = 40


var allButtons = document.querySelectorAll('.fa-share');
allButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        // personally = 3;
        var whichButton = e.target.parentElement.id;
        if (whichButton === '2get2') {
            var multiplier = 2;
        } else if (whichButton === '3get3') {
            var multiplier = 3;
        } else if (whichButton === '5get5') {
            var multiplier = 5;
        } else { window.location.reload();}

        personally.value = multiplier;        
        tier2.value = personally.value * multiplier;
        tier3.value = tier2.value * multiplier;
        tier4.value = tier3.value * multiplier;
        tier5.value = tier4.value * multiplier;
        tier6.value = tier5.value * multiplier;
        tier7.value = tier6.value * multiplier;
         
        personally.dispatchEvent(new Event('change'));

})});

// All inputs by the class name: form-control.
var allInputs = document.querySelectorAll(".form-control");
// taking all changes on all the inputs. 
allInputs.forEach(element => {
    element.addEventListener('change', (e) => {
        //  console.log(e.target.id +  " Changed")
        //get all updated values. 
        residualGetInputValues();
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
        totalagents.style.backgroundColor = '#aaaa';

        // =IF(A3=1,
        // ((A3*50*H3)), 
        if (t1 >= 1) {
            totalCalc += (t1 * compt1 * sa);

            // console.log("t1 ran" + totalCalc);

        }
        // IF(A3=2,
        // ((A3*50*H3) + (B3*60*H3)), 

        if (t1 >= 2) {
            totalCalc += (t2 * compt2 * sa);

            // console.log("t2 ran" + totalCalc);
        };

        // IF(A3<=3,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3)),

        if (t1 >= 3) {
            totalCalc += (t3 * compt3 * sa);

            // console.log("t3 ran" + totalCalc);
        };
        // IF(A3<=5,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3)),
        if (t1 >= 5) {
            totalCalc += (t4 * compt4 * sa);

            //  console.log("t4 ran" + totalCalc);
        };

        // IF(A3<=7,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3)),
        if (t1 >= 7) {
            totalCalc += (t5 * compt5 * sa);

            //  console.log("t5 ran" + totalCalc);
        };

        // IF(A3<=10,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3) + (F3*12*H3)),
        if (t1 >= 10) {

            totalCalc += (t6 * compt6 * sa);

            // console.log("t4 ran" + totalCalc);
        };
        // IF(A3>=15,
        // ((A3*50*H3) + (B3*60*H3) +(C3*12*H3) + (D3*10*H3) +(E3*11*H3) + (F3*12*H3)) + (G3*40*H3))))))))
        if (t1 >= 15) {
            totalCalc += (t7 * compt7 * sa);
            //console.log("t4 ran" + totalCalc);
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

        outputrevyear.style.backgroundColor = '#aaaa';
        outputrevyear.innerText = formatter.format(totalCalc);
        outputrevmonth.style.backgroundColor = '#aaaa';

        outputrevmonth.innerText = formatter.format(totalCalc / 12)

        var totalCalcPossible = (t1 * compt1 * sa) + (t2 * compt2 * sa) + (t3 * compt3 * sa) + (t4 * compt4 * sa) + (t5 * compt5 * sa) + (t6 * compt6 * sa) + (t7 * compt7 * sa)


        outputrevyearFull.style.backgroundColor = '#aaaa';
        outputrevyearFull.innerText = formatter.format(totalCalcPossible);
        outputrevyearFullmonth.style.backgroundColor = '#aaaa';
        outputrevyearFullmonth.innerText = formatter.format(totalCalcPossible / 12);

        outputtotalmissed.style.backgroundColor = '#aaaa';

        outputtotalmissed.innerText = formatter.format(totalCalcPossible - totalCalc)
        outputtotalmissedmonth.style.backgroundColor = '#aaaa';

        outputtotalmissedmonth.innerText = formatter.format((totalCalcPossible - totalCalc) / 12);
        //fff
        //console.log("| Personally Sponsored: ", personally.value, "| Tier2: ", tier2.value, tier3.innerText, tier4.innerText,"| Sales", sales.value,  "| output: ", outputrevyear.innerText);

        window.myChartRes.destroy();
        var values = [totalCalc, Number(totalCalcPossible - totalCalc)];
        //console.log(values);
        var data = {
            labels: labels,
            datasets: [{
                label: 'Revenue/Year Missed',
                backgroundColor: [
                    '#0f9d58',
                    '#3c4043',
                ],
                borderColor: '#aaaa',
                data: values,
                hoverOffset: 40
            }]
        };

        window.config = {
            type: 'pie',
            data: data,
            options: {

                responsive: true,
                align: 'top',
                radius: 130,
                color: '',
                plugins: {
                    tooltip: {
                        backgroundColor: "",
                        bodyFont: {
                            size: 25
                        }
                    },
                    legend: {
                        labels: {
                            font: {
                                size: 15,
                                weight: "bold"
                            }
                        },
                        position: "bottom",
                    }
                }
            }
        };

        window.myChartRes = new Chart(
            document.getElementById('myChart'),
            config,

        );
    })
})



///// COmmision 


var commissionOutputTotalPaidTraditional = document.getElementById('commissionOutputTotalPaidTraditional');
var commissionOutputTotalPaidCic = document.getElementById('commissionOutputTotalPaidCic');
var commissionOutputSavings = document.getElementById('commissionOutputSavings');
var commissionOutputIncome = document.getElementById('commissionOutputIncome');
var commissionOutputSavingsAndValue = document.getElementById('commissionOutputSavingsAndValue')
var totalpaidtoxyztest = document.getElementById('totalpaidtoxyztest');




var values = [commissionOutputTotalPaidTraditional.innerText.replace(/\D/g, ""), commissionOutputTotalPaidCic.innerText.replace(/\D/g, "")];


console.log(values)

var labelsComm = [
    'Traditonal Company',
    'Call It Closed',
];
var data = {
    labels: labelsComm,
    datasets: [{
        label: 'Traditional vs CIC Cost',
        backgroundColor: [
            '#c8102e',
            '#0f9d58',
        ],
        borderColor: '#aaaa',
        data: values,
        hoverOffset: 20
    }]
};

console.log(data);

window.config = {
    type: 'bar',
    data: data,
    options: {

        responsive: true,
        align: 'bottom',
        radius: 190,
        color: '',
        plugins: {
            tooltip: {
                backgroundColor: "",
                bodyFont: {
                    size: 1
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 20,
                        weight: "bold"
                    }
                },
                position: "top",
            }
        }
    }
};

const ctx = document.getElementById('myChart2').getContext('2d');

const myChartComm = new Chart(ctx,config);


function commissionGetInputValues() {
    var commissionAvgSalePrice = document.getElementById('commissionAvgSalePrice');
    var commissionNumOfSales = document.getElementById('commissionNumOfSales');
    var commissionAvgCommRate = document.getElementById('commissionAvgCommRate');
    var commissionCommSplit = document.getElementById('commissionCommSplit');
    var commissionMonthlyFee = document.getElementById('commissionMonthlyFee');
    var commissionTransactionFee = document.getElementById('commissionTransactionFee');
    var commissionCostOfSystems = document.getElementById('commissionCostOfSystems');
    var commissionValueOfSystems = document.getElementById('commissionValueOfSystems');
    var commissionRecruitedAgents = document.getElementById('commissionRecruitedAgents');
    var commissionIncomeFromRecruiting  = document.getElementById('commissionIncomeFromRecruiting');
}



//window.currentCommissionCompany = "none"

var allInputsComm = document.querySelectorAll(".form-controlComm");
allInputsComm.forEach(element => {
    element.addEventListener('change', (e) => {
        // commissionGetInputValues()
        //console.log(e)
        //console.log(e.target.parentElement)

          // Create our number formatter.
        var format$ = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',

            // These options are needed to round to whole numbers if that's what you want.
            minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
        });

        console.log(currentCommissionCompany)

        if (currentCommissionCompany == "CommissionCompany1") {
            console.log("Output comp1")

             
            // Output Variable for total paid to company (sale price * comision % * num of sales * percentage split) + (monthly fee * 12) + (transaction fee * num of sales) + (12 * system per month)
            var totalPaidOutputCalc = (commissionAvgSalePrice.value
                *
                (commissionAvgCommRate.value/100)
                *
                commissionNumOfSales.value
                *
                (commissionCommSplit.value/100))
                +
                (commissionMonthlyFee.value * 12)
                +
                (commissionTransactionFee.value * commissionNumOfSales.value)
                +
                (commissionCostOfSystems.value * 12)
                

                //Output to teh actual html
        //  console.log("totalPaidOut-Output: " , totalPaidOutputCalc);
            commissionOutputTotalPaidTraditional.innerText = format$.format(totalPaidOutputCalc)


        } else if (currentCommissionCompany == "CommissionCompany2") {
            console.log("Output comp2")

                // 
    // $25 broker review fee on each transaction 

    // plus $40 paid only for first 12 transactions then dropss until capp

    // plus $250 when they capp (16k) on every transaction for 8 trans more

    // then plus $75 permenently 

    //avg salfe price * # of sales * avg comm rate * comm split <= 16k


            // Looping through each sale. 
            var totalPaidOutputCalc = 0 

            function createRange(min, max) {
                var range = [];
                for (let i = min; i <= max; i++) {
                    range.push(i);
                    totalPaidOutputCalc = totalPaidOutputCalc + commissionAvgSalePrice.value * (commissionAvgCommRate.value/100) * (commissionCommSplit.value/100)

                    console.log(totalPaidOutputCalc)
                }
                return range;
            }
            
            createRange(0, commissionNumOfSales.value)
            
            totalPaidOutputCalc = (commissionAvgSalePrice.value * commissionNumOfSales.value * (commissionAvgCommRate.value/100) * (commissionCommSplit.value/100))

           //w console.log(totalPaidOutputCalc)

            if (totalPaidOutputCalc > 16000) {
                totalPaidOutputCalc = 16000 }
            

            var totalPaidOutputCalc = ( totalPaidOutputCalc + 
                // $25 broker review fee on each transaction 
            (25 * commissionNumOfSales.value)
            )

            // plus $40 paid only for first 12 transactions then dropss until capp

            if (commissionNumOfSales.value <= 12) {
                totalPaidOutputCalc = totalPaidOutputCalc + (40 * commissionNumOfSales.value)
                } else { totalPaidOutputCalc = totalPaidOutputCalc + (40 * 12)}
            
            
           
            

            commissionOutputTotalPaidTraditional.innerText = format$.format(totalPaidOutputCalc)




        }
        else if (currentCommissionCompany == "CommissionCompany3") {
            console.log("Output comp3")

        }



      

       
        //output for total paid to cic (299 * num of sales) + (1400 -yearly fees)
        // now "changed paid to CIC as statis 12 * 99 plus singel IT 250 cost
        var totalPaidOutputCalcCic = (

            1443)

        commissionOutputTotalPaidCic.innerText = format$.format(totalPaidOutputCalcCic)

        // total saved with CIC = paid to traditional - paid to CIC
        commissionOutputSavings.innerText = format$.format(
            totalPaidOutputCalc - totalPaidOutputCalcCic);

            // output for income with CIC based on agets recruted * 6 (sales a year) * $50 first level.

        var incomeFromRecuritng = (commissionRecruitedAgents.value)*6*50
        commissionOutputIncome.innerText = format$.format(incomeFromRecuritng)
      
        // ouput of total value = saved + income from recruiting
        commissionOutputSavingsAndValue.innerText = format$.format(
            incomeFromRecuritng + (totalPaidOutputCalc - totalPaidOutputCalcCic))


        // Updating the chart with all the new values
        var values = [totalPaidOutputCalc, totalPaidOutputCalcCic];
    

        myChartComm.data.datasets[0].data = values;
      
        myChartComm.update();

    })
})

// commissionChartInitBlank();


/// **************
// Setting active backgrounds on which preset is setup.. .loadButtons may be the way to go 
var commissionCompany1JS = document.getElementById('commissionCompany1');
var commissionCompany2JS = document.getElementById('commissionCompany2');
var commissionCompany3JS = document.getElementById('commissionCompany3');

var allPreSets = document.querySelectorAll(".fa-shareComm")

function commissionCompany1 () {

    window.currentCommissionCompany = "CommissionCompany1"
    console.log(currentCommissionCompany)


    allPreSets.forEach(preset => {
        preset.style.color = "#020202"

    } )

    // c8102e = CIC Red
    // 0000000 = black
    // ebebeb = light grey

    // ffffff = white    

    totalpaidtoxyztest.innerText = "Total Paid to Traditional"

    commissionCompany1JS.style.backgroundColor = "#c8102e"
    commissionCompany1JS.lastElementChild.style.color = "#ffffff"

    commissionCompany2JS.style.backgroundColor = "#ebebeb"
    commissionCompany2JS.lastElementChild.style.color = "#c8102e"

    commissionCompany3JS.style.backgroundColor = "#ebebeb"
    commissionCompany3JS.lastElementChild.style.color = "#c8102e"



    //commissionCompany1JS.firstChild.

    commissionAvgSalePrice.value = 260000
    commissionNumOfSales.value = '20'
    commissionAvgCommRate.value = '2.8'
    commissionCommSplit.value = '20'
    commissionMonthlyFee.value = '0'
    commissionTransactionFee.value = '0'
    commissionCostOfSystems.value = '500'
    commissionValueOfSystems.value = '0'
    commissionRecruitedAgents.value = 5
    commissionIncomeFromRecruiting.value = '0'
    commissionOutputIncome.value = commissionRecruitedAgents.innerText;
   // window.myChart2.destroy();
    // console.log("destroyChart2 - 316")
    commissionRecruitedAgents.dispatchEvent(new Event('change'));
    
    console.log("ran Comp1")
}

function commissionCompany2 () {
    window.currentCommissionCompany = "CommissionCompany2"
    console.log(currentCommissionCompany)



    totalpaidtoxyztest.innerText = "Total Paid to Virtual Company"


    commissionCompany2JS.style.backgroundColor = "#c8102e"
    commissionCompany2JS.lastElementChild.style.color = "#ffffff"

    commissionCompany1JS.style.backgroundColor = "#ebebeb"
    commissionCompany1JS.lastElementChild.style.color = "#c8102e"

    commissionCompany3JS.style.backgroundColor = "#ebebeb"
    commissionCompany3JS.lastElementChild.style.color = "#c8102e"

    
    commissionAvgSalePrice.value = 260000
    commissionNumOfSales.value = '20'
    commissionAvgCommRate.value = '2.8'
    commissionCommSplit.value = '20'
    commissionMonthlyFee.value = '85'
    commissionTransactionFee.value = '315'
    commissionCostOfSystems.value = '0'
    commissionValueOfSystems.value = '0'
    commissionRecruitedAgents.value = 5
    commissionIncomeFromRecruiting.value = commissionRecruitedAgents.value * 800
    commissionOutputIncome.value = commissionRecruitedAgents.innerText;
   // window.myChart2.destroy();
    // console.log("destroyChart2 - 316")

       // Create our number formatter.
       var format$ = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    });
    

  

    console.log("ran Comp2")

    commissionRecruitedAgents.dispatchEvent(new Event('change'));
    
}

function commissionCompany3 () {
    window.currentCommissionCompany = "CommissionCompany3"
    console.log(currentCommissionCompany)



    totalpaidtoxyztest.innerText = "Total Paid "


    commissionCompany3JS.style.backgroundColor = "#c8102e"
    commissionCompany3JS.lastElementChild.style.color = "#ffffff"

    commissionCompany1JS.style.backgroundColor = "#ebebeb"
    commissionCompany1JS.lastElementChild.style.color = "#c8102e"

    commissionCompany2JS.style.backgroundColor = "#ebebeb"
    commissionCompany2JS.lastElementChild.style.color = "#c8102e"

    commissionAvgSalePrice.value = 260000
    commissionNumOfSales.value = '35'
    commissionAvgCommRate.value = '2.8'
    commissionCommSplit.value = '20'
    commissionMonthlyFee.value = '85'
    commissionTransactionFee.value = '150'
    commissionCostOfSystems.value = '0'
    commissionValueOfSystems.value = '0'
    commissionRecruitedAgents.value = 5
    commissionIncomeFromRecruiting.value = commissionRecruitedAgents.value * 800
    commissionOutputIncome.value = commissionRecruitedAgents.innerText;
   // window.myChart2.destroy();
    // console.log("destroyChart2 - 316")
    console.log("ran Comp3")


    commissionRecruitedAgents.dispatchEvent(new Event('change'));
  
    
}

document.addEventListener('DOMContentLoaded', commissionCompany1());


// console.log( myChartComm.data.datasets[0].data );
// console.log( myChartComm.data.datasets );

