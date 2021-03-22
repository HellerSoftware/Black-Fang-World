function viewChange(winCode){if(appUI){appUI.innerHTML=winCode;}}

function viewReturn(view_name){

    var view_registration_and_login =''
    var a =
    `
    <div id="mainMenu1">
        <div id="mainMenu2">
            <div class="lmmc-menu">
                <div class="logo-menu"><img src="" alt="LOGO" class="logo-menu-img"></div>
            </div>
        </div>
        

        <div>
            <div id="main-menu-r" class="main-menu">
                <button class="btn-n btn-n-n" onclick="window.close(); playSound('./sounds/click1.mp3');">Cerrar</button>
                <button class="btn-n btn-n-n" onclick="var open = require('open'); open('http://www.google.com'); playSound('./sounds/click1.mp3');">Página web</button>
                <a href="mailto:darkswordytcontact@gmail.com" class="btn-n" style="text-decoration: none; text-align: center;" onclick="playSound('./sounds/click1.mp3');">Contacto</a>
            </div>
            <hr>   
        </div>
    </div>
    <div id="page-g">
    <div style="width: 100%; background-image: url("./imgs/bgimg.png"); text-align: center;">
        <form class="btn-ri">
    
            <h1>Registrarse:</h1>
            <hr>
            <div class="ri">
                <input type="text" id="nameR" class="input-style1" placeholder="Nombre: ">
                <input type="password" id="passwordR" class="input-style1" placeholder="Contraseña: ">
                <div style="text-align: center;">
                    <button type="submit" class="button-ri btn-n rb">Registrarse</button>
                </div>
            </div>
        </form>
        <form class="btn-ri">
    
            <h1>Iniciar sesión:</h1>
            <hr>
            <div class="ri">
                <input type="text" id="nameIS" class="input-style1" placeholder="Nombre: ">
                <input type="password" id="passwordIS" class="input-style1" placeholder="Contraseña: ">
                <div style="text-align: center;">
                    <button type="menu" class="button-ri btn-n isb">Iniciar sesión</button>
                </div>
                
            </div>
        </form>
    </div>
    </div>
    `;
    
    var menu1 = 
    `
    <link rel="stylesheet" href="styles/neon-menu.css">
        <div>
        <div class="neon-border">
        <div class="neon-border" style="width: 20px;"></div>
        <h1 class="neon-text" style="text-align: center; font-size: 50px; padding: 20px;">Black Fang World</h1>
    </div>
    <div class="neon-border2" style=" width: 105px; float: left; margin: 0; border-radius: 3px;">
        <div id="menuGame-btnMore" style=" border-radius: 10px; cursor: pointer;">
            <br>
            <hr>
            <hr>
            <hr>
            <br>
        </div>
        <buttonAudio><button id="musicOnOffButton" class="neon-border neon-text" style="width: 104px; font-size: 15px;"><p id="sayMOnOff"></p></button></buttonAudio>
        <button id="webPageLink1" class="neon-border neon-text" style="width: 104px; font-size: 15px; margin-top: 5px;">Pagina web</button>
        <button id="masPage" class="neon-border neon-text" style="width: 104px; font-size: 15px; margin-top: 5px;">Mas<br>-</button>
        <button id="storePage" class="neon-border neon-text" style="width: 104px; font-size: 15px; margin-top: 5px;">Tienda -</button>
        <button id="closeApp" class="neon-border neon-text" style="width: 104px; font-size: 15px; margin-top: 5px;">CERRAR -</button>
        
        
    </div>
    <div>
        <div>
            <neon-btn>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                HISTORIA
            </neon-btn>
        </div>
        
        <div>
            <neon-btn>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                PVAI
            </neon-btn>
        </div>
        <div>
            <neon-btn>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                PVP
            </neon-btn>
        </div>
    </div>
    
        <hr style="width: 104px; margin: 0;">
        <div id="nih"></div>
        <hr style="width: 104px; margin: 0;">
    
    <div id="page-s" style="color: #ffffff;"></div>
    <input type="range" min="0" max="1" value="0.5" step="0.01" id="mislider" style="width: 100px; height: 3px; display: none">
    `;

    if(view_name == 'view_registration_and_login_1'){
        function_registration_and_login();
        return view_registration_and_login;
    }
}

module.exports = {
    viewChange,
    viewReturn,
}