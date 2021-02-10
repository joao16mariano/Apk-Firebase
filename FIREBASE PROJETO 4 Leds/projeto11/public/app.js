
(function(){
    
  // Inicia o firebase Firebase
    
  var config = {
   apiKey: "AIzaSyC2b-BueCpLfPj-GoQ1hsuXhDy0iLg7WJE",
    authDomain: "joao-e0c75.firebaseapp.com",
    databaseURL: "https://joao-e0c75.firebaseio.com",   
    storageBucket: "joao-e0c75.appspot.com",
    messagingSenderId: "681686240330",   
    measurementId: "G-J0NMW67VJS"
  };
  
  firebase.initializeApp(config);

  var db = firebase.database();

  // Cria os listeners dos dados no firebase
 
  var lampRef = db.ref('lamp');  
  var lampRef1 = db.ref('lamp1');
  var lampRef2 = db.ref('lamp2');
  var lampRef3 = db.ref('lamp3');

  
 
  // Registrar função ao alterar valor da lampada  1
  var currentLampValue = false;
  lampRef.on('value', function(snapshot){
    var value = snapshot.val();
    var el = document.getElementById('currentLamp')
    if(value){
      el.classList.add('amber-text');
    }else{
      el.classList.remove('amber-text');
    }
    currentLampValue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnLamp = document.getElementById('btn-lamp');
  btnLamp.addEventListener('click', function(evt){
    lampRef.set(!currentLampValue);
  });



  // Registrar função ao alterar valor da lampada  2
  var currentLampValue1 = false;
  lampRef1.on('value', function(snapshot1){
    var value1 = snapshot1.val();
    var el1 = document.getElementById('currentLamp1')
    if(value1){
      el1.classList.add('amber-text');
    }else{
      el1.classList.remove('amber-text');
    }
    currentLampValue1 = !!value1;
  });

  // Registrar função de click no botão de lampada
  var btnLamp1 = document.getElementById('btn-lamp1');
  btnLamp1.addEventListener('click', function(evt){
    lampRef1.set(!currentLampValue1);
  });
  
  
  // Registrar função ao alterar valor da lampada   3
  var currentLampValue2 = false;
  lampRef2.on('value', function(snapshot2){
    var value2 = snapshot2.val();
    var el2 = document.getElementById('currentLamp2')
    if(value2){
      el2.classList.add('amber-text');
    }else{
      el2.classList.remove('amber-text');
    }
    currentLampValue2 = !!value2;
  });

  // Registrar função de click no botão de lampada
  var btnLamp2 = document.getElementById('btn-lamp2');
  btnLamp2.addEventListener('click', function(evt){
    lampRef2.set(!currentLampValue2);
  });
  
  
  // Registrar função ao alterar valor da lampada   4
  var currentLampValue3 = false;
  lampRef3.on('value', function(snapshot3){
    var value3 = snapshot3.val();
    var el3 = document.getElementById('currentLamp3')
    if(value3){
      el3.classList.add('amber-text');
    }else{
      el3.classList.remove('amber-text');
    }
    currentLampValue3 = !!value3;
  });

  // Registrar função de click no botão de lampada
  var btnLamp3 = document.getElementById('btn-lamp3');
  btnLamp3.addEventListener('click', function(evt){
    lampRef3.set(!currentLampValue3);
  });


})();






