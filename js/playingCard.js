var playingCardScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, 250));
    camera.attachControl(canvas, true);

    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 0, 10), scene);

    light.parent = camera;

    var material = new BABYLON.StandardMaterial(scene);
    material.alpha = 1;
    material.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    var box = BABYLON.MeshBuilder.CreateBox("box", {
        height: 88,
        width: 63,
        depth: 0.5
    }, scene);
    box.material = material;

    return scene;
};
