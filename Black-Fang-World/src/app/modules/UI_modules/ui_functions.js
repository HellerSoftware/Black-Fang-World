function viewChange(winCode){if(appUI){appUI.innerHTML=winCode;}}

function viewReturn(view_name){

    var view_registration_and_login = 
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
                <div>
                        <p style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 22px;">Hombre:</p>
                        <input type="radio" id="sex" name="sexOpt" style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 15px;" value="H">
                    </div>
                    <div>
                        <p style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 22px;">Mujer:</p>
                        <input type="radio" id="sex" name="sexOpt" style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 15px;" value="M">
                    </div>
                    <div>
                        <p style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 22px;">Helicoptero apache:</p>
                        <input type="radio" id="sex" name="sexOpt" style="font-size: 12px; text-align: left; display: inline-block; width: 10px; border: 1px; margin: 0 15px;" value="O">
                    </div>
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

    if(view_name == 'view_registration_and_login_1'){
        function_registration_and_login();
        return view_registration_and_login;
    }
}

module.exports = {
    viewChange,
    viewReturn,
}