AFRAME.registerComponent('base', {
    schema: {
      radius: {type: "number", default: 150},
      height: {type: "number", default: 3}
    },
    init: function () {
        this.el.setAttribute("geometry",{
          primitive: "cylinder",
          radius: this.data.radius,
          height: this.data.height
        });

        this.el.setAttribute("material", {color: "#1769aa"});
      }
  });

  AFRAME.registerComponent('move-front', {
    schema: {
      moveZ:{type: "number", default: 0},
    },
    tick: function () {
        window.addEventListener("click", (e) =>{
          this.data.moveZ = this.data.moveZ + 0.01
        })
        var pos = this.el.getAttribute("position")
        pos.z = this.data.moveZ
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
      }
  });

