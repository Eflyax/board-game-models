var createCardBack = function (scene) {
    var materialBack = new BABYLON.StandardMaterial(scene);
    materialBack.alpha = 1;
    materialBack.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    var backTexture = new BABYLON.Texture("img/back.jpg", scene);
    materialBack.diffuseTexture = backTexture;
    var faceUV = [];
    faceUV[0] = new BABYLON.Vector4(1, 1, 0, 0);
    var cardBack = BABYLON.MeshBuilder.CreateBox("box1", {
        height: 88,
        width: 63,
        depth: 0.5,
        faceUV: faceUV
    }, scene);
    cardBack.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0.5));
    cardBack.material = materialBack;
};

var createCardFace = function (scene) {
    var materialBack = new BABYLON.StandardMaterial(scene);
    materialBack.alpha = 1;
    materialBack.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    var backTexture = new BABYLON.Texture("img/mana-green.jpg", scene);
    materialBack.diffuseTexture = backTexture;
    var faceUV = [];
    faceUV[0] = new BABYLON.Vector4(1, 1, 0, 0);
    var cardFace = BABYLON.MeshBuilder.CreateBox("box", {
        height: 88,
        width: 63,
        depth: 0.5,
        faceUV: faceUV
    }, scene);
    cardFace.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));
    cardFace.material = materialBack;
};

var playingCardScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, 250));
    camera.alpha = -Math.PI / 1.8;
    camera.attachControl(canvas, true);

    camera.lowerRadiusLimit = 220;
    camera.upperRadiusLimit = 330;

    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(200, 100, 100), scene);
    light.parent = camera;

    createCardBack(scene);
    createCardFace(scene);

    return scene;
};
