//Data Source: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9

function init(){
  $.ajaxSetup({async: false});
  let link = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
 data = $.getJSON(link).responseJSON;

let subdata;

 get("output").innerHTML = "";
  let his = 0, jew = 0, mus = 0, asian = 0, arab = 0, hin = 0, multi = 0, other = 0;

  //Construct the chart data using the full agency name.  Hint: Go to the data source.
for(i = 0; i < data.length; i++){
    info = data[i];
   if(info.bias_motive_description  == "ANTI-HISPANIC"){
      his++;
    }else if(info.bias_motive_description  == "ANTI-JEWISH"){
      jew++;
    }else if(info.bias_motive_description  == "ANTI-MUSLIM"){
      mus++;
    }else if(info.bias_motive_description  ==  "ANTI-ASIAN"){
      asian++;
    }else if(info.bias_motive_description  == "ANTI-ARAB"){
      arab++;
    }else if(info.bias_motive_description  == "ANTI-HINDU"){
      hin++;
    }else if(info.bias_motive_description  == "ANTI-MULTI-RACIAL GROUPS"){
      multi++;
    }else if(info.bias_motive_description  == "ANTI-OTHER ETHNICITY"){
      other++;
    }
  }


  // Retrieve the chart type from the user via the drop down menu
 let chartData = [
    ["ANTI-HISPANIC",his],
    ["ANTI-JEWISH",jew],
    ["ANTI-MUSLIM", mus],
    ["ANTI-ASIAN", asian],
    ["ANTI-ARAB",arab],
    ["ANTI-HINDU", hin],
    ["ANTI-MULTI-RACIAL GROUPS", multi],
    ["OTHER", other],
  ]
    displayChart(chartData,"output","pie");
    let amhg = 0, at = 0, af = 0,  afhl = 0,  agnc = 0,  almg = 0;
for(let i = 0; i < data.length; i++){
    let info = data[i];
    if(info.bias_motive_description == "ANTI-MALE HOMOSEXUAL (GAY)"){
      amhg++;
    }else if(info.bias_motive_description  == "ANTI-TRANSGENDER"){
      at++;
    }else if(info.bias_motive_description  == "ANTI-FEMALE"){
      af++;
    }else if(info.bias_motive_description  == "ANTI-FEMALE HOMOSEXUAL (LESBIAN)"){
      afhl++;
    }else if(info.bias_motive_description  == "ANTI-GENDER NON-CONFORMING"){
      agnc++;
    }else if(info.bias_motive_description  == "ANTI-LGBT (MIXED GROUP)"){
      almg++;
    }
  }

  chartData2 = [
    ["ANTI-MALE HOMOSEXUAL (GAY)",amhg],
    ["ANTI-TRANSGENDER",at],
    ["ANTI-FEMALE", af],
    ["ANTI-FEMALE HOMOSEXUAL (LESBIAN)", afhl],
    ["ANTI-GENDER NON-CONFORMING",agnc],
    ["ANTI-LGBT (MIXED GROUP)", almg],
  ]
  
    displayChart2(chartData2,"output2","bar");
   let ac = 0, six= 0, ab = 0,  aeo = 0,  ajw = 0, aor = 0;
  for(let i = 0; i < data.length; i++){
     info = data[i];
  
    if(info.bias_motive_description  == "ANTI-CATHOLIC"){
      ac++;
    }else if(info.bias_motive_description  == "60 YRS AND OLDER"){
      six++;
    }else if(info.bias_motive_description  == "ANTI-BUDDHIST"){
      ab++;
    }else if(info.bias_motive_description  == "ANTI-EASTERN ORTHODOX"){
      aeo++;
    }else if(info.bias_motive_description  == "ANTI-JEHOVAHS WITNESS"){
      ajw++;
    }else if(info.bias_motive_description  == "ANTI-OTHER RELIGION"){
      aor++;
    }
  }

  // Retrieve the chart type from the user via the drop down menu
 chartData3 = [
    ["ANTI-CATHOLIC",ac],
    ["60 YRS AND OLDER",six],
    ["ANTI-BUDDHIST", ab],
    ["ANTI-EASTERN ORTHODOX", aeo],
    ["ANTI-JEHOVAHS WITNESS",ajw],
    ["ANTI-OTHER RELIGION", aor],
  ]
  
  //Display the chart of the breakdown of the complaints by agencies.

    displayChart3(chartData3,"output3", "donut");


    let front = `<div class="container center">
                    <div class="card_f">
                        <h2>Manhattan</h2>
                        <img src="https://image.newyorkcity.ca/wp-content/uploads/2021/09/Manhattan-in-New-York-Brooklyn-Bridge.jpg.webp">
                    </div>
                </div>`;
    let back = ` <div class="container center">
                    <div class="card_f">    
                        <p>Manhattan is the most densely populated of New York City’s 5 boroughs. It's mostly made up of Manhattan Island, bounded by the Hudson, East and Harlem rivers. Among the world’s major commercial, financial and cultural centers, it’s the heart of “the Big Apple.” Its iconic sites include skyscrapers such as the Empire State Building, neon-lit Times Square and the theaters of Broadway.</p>
                    </div>
                  </div>`;    

    let card = new FlipCard(front,back);
    card.render("flipcard_output");
// 2nd flip card
    let front2 = `<div class="container center">
                    <div class="card_f">
                        <h2>Queens</h2>
                        <img src="https://content.r9cdn.net/rimg/dimg/94/0b/176edc87-city-47598-177452c7f24.jpg?crop=true&width=1366&height=768&xhint=3839&yhint=3164">
                    </div>
                </div>`;
    let back2 = ` <div class="container center">
                    <div class="card_f">    
                        <p>Queens is a New York City borough on Long Island across the East River from Manhattan. Flushing Meadows Corona Park, with the Unisphere, a 12-story 1964 World's Fair globe sculpture, hosts the annual U.S. Open tennis tournament. The park’s Queens Museum is known for the "Panorama," a building-for-building model of New York City. Nearby Citi Field is the stadium of pro baseball team, the Mets.</p>
                    </div>
                  </div>`;    

    let card2 = new FlipCard(front2,back2);
    card2.render("flipcard_output2");
   // 3rd flip card
    let front3 = `<div class="container center">
                    <div class="card_f">
                        <h2>Brooklyn</h2>
                        <img src="https://www.travelandleisure.com/thmb/OaoR831skHt0pgmEf3wr_wrOkMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/williamsburg-brooklyn-BKWKND0919-7879535b105747929a72774fa1806874.jpg">
                    </div>
                </div>`;
    let back3 = ` <div class="container center">
                    <div class="card_f">    
                        <p>Brooklyn is a borough of New York City, coextensive with Kings County, in the U.S. state of New York. Kings County is the most populous county in the State of New York, and the second-most-densely-populated county in the United States, behind New York County.</p>
                    </div>
                  </div>`;    

    let card3 = new FlipCard(front3,back3);
    card3.render("flipcard_output3");
    // 4th flip card
    let front4 = `<div class="container center">
                    <div class="card_f">
                        <h2>The Bronx</h2>
                        <img src="https://media.cntraveler.com/photos/58ff7410332aee5e4e8a4e55/16:9/w_2560%2Cc_limit/south-bronx-cr-redux-h_14758149.jpg">
                    </div>
                </div>`;
    let back4 = ` <div class="container center">
                    <div class="card_f">    
                        <p>The Bronx is a borough of New York City. It's known for Yankee Stadium, the home field of the New York Yankees baseball team. Dating from 1899, the vast Bronx Zoo houses hundreds of species of animals. Nearby, the sprawling New York Botanical Garden features a landmark greenhouse with rainforest and cactus displays. By the Hudson River, Wave Hill is a landscaped public garden with wooded paths and a cultural center. </p>
                    </div>
                  </div>`;    

    let card4 = new FlipCard(front4,back4);
    card4.render("flipcard_output4");
   // 5th flip card
    let front5 = `<div class="container center">
                    <div class="card_f">
                        <h2>Staten Island</h2>
                        <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSbX45pDlKlnzvtBuKvkLk1Eb7PLHwWrkDm0tUdFnznw6D2u-E7mz086Q3_kbsPcToH">
                    </div>
                </div>`;
    let back5 = ` <div class="container center">
                    <div class="card_f">    
                        <p>Staten Island is the southernmost of New York City's 5 boroughs. It is connected to Lower Manhattan via the Staten Island Ferry, which runs across New York Harbor. Staten Island Zoo is home to kangaroos, birds of prey and snakes. The Snug Harbor Cultural Center and Botanical Garden features flower beds, Greek revival buildings and art galleries. Its grounds also include the Staten Island Children’s Museum. </p>
                    </div>
                  </div>`;    

    let card5 = new FlipCard(front5,back5);
    card5.render("flipcard_output5");
}






function ByMotiveSexOrientation(){
  amhg = 0, at = 0, af = 0,  afhl = 0,  agnc = 0,  almg = 0;
for(let i = 0; i < data.length; i++){
    let info = data[i];
    if(info.bias_motive_description == "ANTI-MALE HOMOSEXUAL (GAY)"){
      amhg++;
    }else if(info.bias_motive_description  == "ANTI-TRANSGENDER"){
      at++;
    }else if(info.bias_motive_description  == "ANTI-FEMALE"){
      af++;
    }else if(info.bias_motive_description  == "ANTI-FEMALE HOMOSEXUAL (LESBIAN)"){
      afhl++;
    }else if(info.bias_motive_description  == "ANTI-GENDER NON-CONFORMING"){
      agnc++;
    }else if(info.bias_motive_description  == "ANTI-LGBT (MIXED GROUP)"){
      almg++;
    }
  }

  chartData2 = [
    ["ANTI-MALE HOMOSEXUAL (GAY)",amhg],
    ["ANTI-TRANSGENDER",at],
    ["ANTI-FEMALE", af],
    ["ANTI-FEMALE HOMOSEXUAL (LESBIAN)", afhl],
    ["ANTI-GENDER NON-CONFORMING",agnc],
    ["ANTI-LGBT (MIXED GROUP)", almg],
  ]
  
   let chartType2 = get("chartType2").value;
    displayChart2(chartData2,"output2",chartType2);
  }




function ByMotiveReligion(){
   ac = 0, six= 0, ab = 0,  aeo = 0,  ajw = 0, aor = 0;
  for(let i = 0; i < data.length; i++){
     info = data[i];
  
    if(info.bias_motive_description  == "ANTI-CATHOLIC"){
      ac++;
    }else if(info.bias_motive_description  == "60 YRS AND OLDER"){
      six++;
    }else if(info.bias_motive_description  == "ANTI-BUDDHIST"){
      ab++;
    }else if(info.bias_motive_description  == "ANTI-EASTERN ORTHODOX"){
      aeo++;
    }else if(info.bias_motive_description  == "ANTI-JEHOVAHS WITNESS"){
      ajw++;
    }else if(info.bias_motive_description  == "ANTI-OTHER RELIGION"){
      aor++;
    }

  // Retrieve the chart type from the user via the drop down menu
 chartData3 = [
    ["ANTI-CATHOLIC",ac],
    ["60 YRS AND OLDER",six],
    ["ANTI-BUDDHIST", ab],
    ["ANTI-EASTERN ORTHODOX", aeo],
    ["ANTI-JEHOVAHS WITNESS",ajw],
    ["ANTI-OTHER RELIGION", aor],
  ]
  
  //Display the chart of the breakdown of the complaints by agencies.
   chartType3 = get("chartType3").value;
    displayChart3(chartData3,"output3",chartType3);

  }
}
function ByMotiveRace_E(){
   get("output").innerHTML = "";
  his = 0, jew = 0, mus = 0, asian = 0, arab = 0, hin = 0, multi = 0, other = 0;

  // Construct the chart data using the full agency name.  Hint: Go to the data source.
for(i = 0; i < data.length; i++){
    info = data[i];
   if(info.bias_motive_description  == "ANTI-HISPANIC"){
      his++;
    }else if(info.bias_motive_description  == "ANTI-JEWISH"){
      jew++;
    }else if(info.bias_motive_description  == "ANTI-MUSLIM"){
      mus++;
    }else if(info.bias_motive_description  ==  "ANTI-ASIAN"){
      asian++;
    }else if(info.bias_motive_description  == "ANTI-ARAB"){
      arab++;
    }else if(info.bias_motive_description  == "ANTI-HINDU"){
      hin++;
    }else if(info.bias_motive_description  == "ANTI-MULTI-RACIAL GROUPS"){
      multi++;
    }else if(info.bias_motive_description  == "ANTI-OTHER ETHNICITY"){
      other++;
    }
  }


  //Task 3: Retrieve the chart type from the user via the drop down menu
  chartData = [
    ["ANTI-HISPANIC",his],
    ["ANTI-JEWISH",jew],
    ["ANTI-MUSLIM", mus],
    ["ANTI-ASIAN", asian],
    ["ANTI-ARAB",arab],
    ["ANTI-HINDU", hin],
    ["ANTI-MULTI-RACIAL GROUPS", multi],
    ["OTHER", other],
  ]

    chartType = get("chartType").value;
    displayChart(chartData,"output",chartType);
}


