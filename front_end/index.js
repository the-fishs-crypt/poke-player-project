const BASEAPIURL ='http://localhost:3000';
const API_METHODS = ['/Insert_Logins_A','/Insert_Logins_B','/retrive_user_partys']
//i dont give a shit {indian guy singing}

//=========================================functions===========================================


//--------------------------------------basic html functions-----------------------
function initialize_page(page,party_list_panel_id){
    partys = get_pokemon_partys("partys","trainer_data","id","0");

    
}


function manage_battle(){
    let sprite1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
    let sprite2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png";
    document.getElementById("opponent_pokemon").src = sprite1;
    document.getElementById("user_pokemon").src = sprite2;
    ;
}

//---------------------------------------------api functions [pokeplayer Database]------------------------------------------
function test_api(username,password,mailaddress,party,pref_typing,theme){
    sign_up_apiA(username,password,mailaddress);
    sign_up_apiB(party,pref_typing,theme);
}


//==============================party maker functions======================================
//------------------------------party innit functions












//================================================================async functions=======================================================================
//----------------------------------------------------------------pokeplayer api functions------------------------------------------------------------

async function get_pokemon_partys(collum,table,identifier,key){
        
    try{
        const trainer_data_response = await fetch(BASEAPIURL + API_METHODS[2],{body:JSON.stringify({collum: collum,table:table,identifier:identifier, key: key}), method:"post",headers:{'content-type':'application/json'}});

        if(!trainer_data_response.ok){
            throw new Error ('Aborting... ${pokeapiResponse.status}');
        }
        
        const pokeData = await trainer_data_response.json()
        console.log(pokeData);
        return pokeData.results
    } catch (error) {
        console.error('The error is', error)
    }
}

async function sign_up_apiA(username, password, mailaddress) {
    var apiUrl = BASEAPIURL + API_METHODS[0];
    try {
        // Make a GET request
        const response = await fetch(apiUrl, {body:JSON.stringify({username: username , password: password , mailaddress: mailaddress}), method:"post",headers:{'content-type':'application/json'}});
        //const response = await fetch(apiUrl, {body:JSON.stringify({name: "Liam"}), method:"post", headers:{'content-type':'application/json'}});
        console.log(response)
        //alert("here")
        if (!response.status) { 
            throw new Error('Network response was not ok');
        }
        /*if (!response.ok) {
            throw new Error('Network response was not ok');
        }*/
        const data = await response.json();
        console.log(data);
        window.location.href = "/front_end/api testing.html"
    } catch (error) {
        console.error('Error:', error);
    }
}
async function sign_up_apiB(party, pref_typing, theme) {
    var apiUrl = BASEAPIURL + API_METHODS[1];
    try {
        // Make a GET request
        const response = await fetch(apiUrl, {body:JSON.stringify({party: party ,preffered_typing:pref_typing, theme: theme}), method:"post",headers:{'content-type':'application/json'}});
        //const response = await fetch(apiUrl, {body:JSON.stringify({name: "Liam"}), method:"post", headers:{'content-type':'application/json'}});
        console.log(response)
        //alert("here")
        if (!response.status) {
            throw new Error('Network response was not ok');
        }
        /*if (!response.ok) {
            throw new Error('Network response was not ok');
        }*/
        const data = await response.json();
        console.log(data);
        window.location.href = "/front_end/api testing.html"
    } catch (error) {
        console.error('Error:', error);
    }
}
//--------------------------------------------------------------pokemon api functions-----------------------------------------------------------------
async function get_pokemon(offset,limit){
    if(offset == null){
        
        offset= 0
    }

    try {
        let pokeapiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/?offset="+ offset +"&limit=20");

        if(!pokeapiResponse.ok){
            throw new Error ('Aborting... ${pokeapiResponse.status}');
        }

        const pokeData = await pokeapiResponse.json()
        console.log(pokeData);
        return pokeData.results
    } catch (error) {
        console.error('The error is', error)
    }
}

/*
{"name":"bulbasaur",
"type":"grass",
"height":60,
"held_item":
"stats":{
"speed":1,
"strength":1,
"etc":etc
},
"moves":[
    ]
}

*/