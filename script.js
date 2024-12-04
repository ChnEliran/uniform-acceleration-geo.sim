// אתחול המשתנים
let ggbApp;
let parameter1Value = document.getElementById('parameter1-value');
let parameter2Value = document.getElementById('parameter2-value');

// הגדרות GeoGebra
var params = {
    "appName": "classic",
    "width": 800,
    "height": 600,
    "showToolBar": true,
    "showAlgebraInput": true,
    "showMenuBar": true,
    "showResetIcon": true,
    "enableLabelDrags": false,
    "enableShiftDragZoom": true,
    "enableRightClick": false,
    "errorDialogsActive": false,
    "useBrowserForJS": false,
    "allowStyleBar": false,
    "preventFocus": false,
    "showZoomButtons": true,
    "capturingThreshold": 3,
    "appletOnLoad": function(api) {
        ggbApp = api;
        updateGraph(); // עדכון ראשוני של הגרף
    },
    "showFullscreenButton": true,
    "scale": 1,
    "disableAutoScale": false,
    "allowUpscale": false,
    "buttonShadows": false,
    "buttonRounding": 0.7,
    "id": "ggb1"
};

// יצירת האפלט
var applet = new GGBApplet(params, true);
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

// מאזיני אירועים לסרגלים
document.getElementById('parameter1').addEventListener('input', function(e) {
    parameter1Value.textContent = e.target.value;
    updateGraph();
});

document.getElementById('parameter2').addEventListener('input', function(e) {
    parameter2Value.textContent = e.target.value;
    updateGraph();
});

// פונקציה לעדכון הגרף
function updateGraph() {
    if (!ggbApp) return;
    
    const param1 = parseFloat(document.getElementById('parameter1').value);
    const param2 = parseFloat(document.getElementById('parameter2').value);
    
    // כאן תוכל להוסיף את הקוד שמעדכן את הגרף בהתאם לפרמטרים
    // לדוגמה:
    // ggbApp.setValue("a", param1);
    // ggbApp.setValue("b", param2);
}
