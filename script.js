

function init(){
  $.ajaxSetup({async: false});
  let link = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
  //Get the data using the link
  data = $.getJSON(link).responseJSON;
  console.log(data);
  get("leftPanel").innerHTML = cards(data);
  get("fci").innerHTML = fillDropDown("full_complaint_id");
  get("cyn").innerHTML = fillDropDown("complaint_year_number");
  get("county").innerHTML = fillDropDown("county");
  get("pbn").innerHTML = fillDropDown("patrol_borough_name");
  get("offense").innerHTML = fillDropDown("offense_category");
  get("motive").innerHTML = fillDropDown("bias_motive_description");
  get("arrest_date").innerHTML = fillDropDown("arrest_date");
  get("arrest_id").innerHTML = fillDropDown("arrest_id");
  get("results2").innerHTML = data.length + " results found.";
   
}
//https://replit.com/@MelonieChiu/WDT4Lesson-47Activity#script.js
function FilterByFCI(){
  build = ""; //to declare the build variable
  let fci = get("fci").value;
  subdata = filter( data, "full_complaint_id" , fci);
  get("rightPanel").innerHTML =  cards(subdata );
  get("results").innerHTML = subdata.length + " results found.";
}

function FilterByCYN(){
  build = ""; //to clear the output
  let cyn = get("cyn").value;
  subdata = filter( data, "complaint_year_number", cyn);
  get("rightPanel").innerHTML =  cards(subdata);
  get("results").innerHTML = subdata.length + " results found.";
}

function FilterByCountyAndPatrol(){
  pbn = get("pbn").value;
  county = get("county").value;
  subdata = filter( data, "patrol_borough_name", pbn );
  subdata = filter( subdata, "county ",county )   ;
  get("results").innerHTML = subdata.length + " results found.";
  get("rightPanel").innerHTML = cards( subdata );
}

function FilterByOffenseOrMotive(){//wip, make a filter card in html
  motive = get("motive").value;
  offense = get("offense").value;
  subdata1 = filter( data, "offense_category", offense );
  subdata2 = filter( data, "bias_motive_description", motive);
  subdata = subdata1.concat(subdata2);
  get("results").innerHTML = subdata.length + " results found.";
  get("rightPanel").innerHTML = cards( subdata );
  
}

function FilterByAdorAi(){//wip, make a filter card in html
 arrest_date = get("arrest_date").value;
 arrest_id= get("arrest_id").value;
 subdata1 = filter( data, " arrest_date", arrest_date );
 subdata2 = filter( data, "arrest_id", arrest_id )   
 subdata = subdata1.concat(subdata2);
 get("results").innerHTML = subdata.length + " results found.";
 get("rightPanel").innerHTML = cards( subdata );
}











//https://replit.com/@MelonieChiu/WDT4Lesson551A#helper.js
window.onload = function(){  
// Get the modal
var modal0 = document.getElementById('modal0');
var modal1 = document.getElementById('modal1');

var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
  
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
  
var modal6 = document.getElementById('modal6');
// Get the button that opens the modal
var but0 = document.getElementById("but0");
var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");
  var but4 = document.getElementById("but4");
var but5 = document.getElementById("but5");
  var but6 = document.getElementById("but6");
// Get the <span> element that closes the modal
var close0 = document.getElementsByClassName("close")[0];
var close1 = document.getElementsByClassName("close")[1];
var close2 = document.getElementsByClassName("close")[2];
var close3 = document.getElementsByClassName("close")[3];
var close4 = document.getElementsByClassName("close")[4];
var close5 = document.getElementsByClassName("close")[5];
var close6 = document.getElementsByClassName("close")[6];

// When the user clicks the button, open the modal 
but0.onclick = function() {
    modal0.style.display = "block";
}
but1.onclick = function() {
    modal1.style.display = "block";
}
  but2.onclick = function() {
    modal2.style.display = "block";
}
but3.onclick = function() {
    modal3.style.display = "block";
}
  but4.onclick = function() {
    modal4.style.display = "block";
}
but5.onclick = function() {
    modal5.style.display = "block";
}
  but6.onclick = function() {
    modal6.style.display = "block";
}


// When the user clicks on (x), closes the modal
close0.onclick = function() {
    modal0.style.display = "none";
}
close1.onclick = function() {
    modal1.style.display = "none";
}
  close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}
  close4.onclick = function() {
    modal4.style.display = "none";
}
close5.onclick = function() {
    modal5.style.display = "none";
}
  close6.onclick = function() {
    modal6.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
  window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
  }
    window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    }
        window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
        }
          window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
          }
            window.onclick = function(event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}
  
    //Task 3a: String interpolate the name, image and description into each of the HTML below

    let content = `
     <div class="container center"style="max-width:2140px">
                    <div class="card2">    
                     <p>The New York City Police Department (NYPD) is the largest and one of the oldest municipal police departments in the United States, with approximately 36,000 officers and 19,000 civilian employees. For more insight into the demographics of the Department, please see recent demographics here. The NYPD was established in 1845, and today, is responsible for policing an 8.5-million-person city, by performing a wide variety of public safety, law enforcement, traffic management, counterterror, and emergency response roles.</p>
                    </div>
                       <img src="https://www.nyc.gov/assets/nypd/images/content/banners/about/about-banner.png" style=" width:177px; 
  height:178px;
  box-shadow:2px 2px 5px rgba(0, 0, 0, 1);
  margin: 5px 5px 5px 10px;">
                
                  </div>

                  
               `;
    let content2 = `
     <div class="container center"style="max-width:2140px">
                    <div class="card2">    
                     <p>This website is mainly for educational and personal uses. You will find different forms of data that is centered around hate crimes in NYC. This includes access to filtering through data, charts, and simplified information cards. This website is free to use except for commercial uses, merchandise, propaganda, disinformation, etc. The data is provided by NYC Open Data and directly from NYPD. All rights reserved.  </p>
                    </div>
                  </div>

                  
               `;
    let content3 = `
     <div class="container center"style="max-width:2140px">
                    <div class="card2">    
                     <p>Hate crimes have a broader effect than most other kinds of crime. Hate crime victims include not only the crime’s immediate target but also others like them. Hate crimes affect families, communities, and at times, the entire nation. 
                  
The Hate Crimes Education Gap is the significant disparity between hate crimes that actually occur and those that are publicly viewed. It is critical to educate oneself of hate crimes not only to show support and get help for victims, but also to send a clear message that the community will not tolerate these kinds of crimes. Reporting and learning about these hate crimes allows communities and law enforcement to fully understand the scope of the problem in a community and put resources toward preventing and addressing attacks based on bias and hate.  </p>
                    </div>
                  </div>

                  
               `;
      let content4 = `
     <div class="container center"style="max-width:2140px">
                    <div class="card2">    
                     <p>Hate Crime: At the federal level, a crime motivated by bias against race, color, religion, national origin, sexual orientation, gender, gender identity, or disability.<p><br>
<p>
Bias or Hate Incident: Acts of prejudice that are not crimes and do not involve violence, threats, or property damage.  </p>
                    </div>
                  </div>

                  
               `;
  let collapsible = new Collapsible("About The NYPD", content);
  
  let collapsible2 = new Collapsible("What Will I Find Here?", content2);
  
  let collapsible3 = new Collapsible("Why Is This Data Important?", content3);  let collapsible4 = new Collapsible("Terminology", content4);
      collapsible.render("op1")
      collapsible2.render("op2")
      collapsible3.render("op3")
      collapsible4.render("op4")

  let build = "";
  build += `<div >`;
  build += `   <h3>How To Report a Hate Crime/Bias Incident </h3><hr>`;
  build += `  <hr>
			<p>A person reports a hate crime in the same manner as they would report any other crime. If it is a serious crime in progress, call 911. If it is a non-serious crime, or a crime that occurred in the past, call your local precinct. The responding police officers will provide whatever immediate assistance is needed, and begin the reporting process. If the situation is deemed to be a possible bias-motivated incident, the NYPD Hate Crime Task Force will be notified.

Upon notification of a possible hate crime, detectives from the NYPD Hate Crime Task Force will respond and conduct a thorough investigation. The NYPD Hate Crime Task Force is a dedicated citywide team of investigators who are responsible for investigating all hate crimes and related incidents that occur within the city. Victims of hate crimes can be assured that they will be provided with the appropriate assistance, by the local precinct's Community Affairs team and the NYPD Hate Crime Task Force. People’s immigration status does not in any way prevent them from reporting Hate Crimes or receiving essential services.
</p>`;
  build += `</div>`
    let modal = new Modal("<img src='images/building.png'>", build); 
  modal.render("modal_output");
  }
  
    

 


 