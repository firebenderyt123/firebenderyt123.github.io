"use strict";(self.webpackChunkTestReact=self.webpackChunkTestReact||[]).push([[731],{6098:function(n,e,t){t.d(e,{t:function(){return i},z:function(){return o}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;return window.innerWidth<n},o=function(){return window.innerWidth>window.innerHeight?window.innerWidth:window.innerHeight}},4469:function(n,e,t){t.d(e,{V:function(){return x}});var i=t(3144),o=t(5671),r=t(7326),a=t(136),s=t(9388),u=t(6274),c=t(9359),d=t(9049),l=t.n(d),f=t(2791),m=t(8492),h=(0,c.Z)("addTitle"),p=(0,c.Z)("clearDom"),v=function(n){(0,a.Z)(t,n);var e=(0,s.Z)(t);function t(){var n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,o.Z)(this,t),n=e.call(this),Object.defineProperty((0,r.Z)(n),p,{value:w}),Object.defineProperty((0,r.Z)(n),h,{value:g}),(0,u.Z)((0,r.Z)(n),p)[p](),t.isStats&&(n.showPanel(a),n.dom.style.left=82*t.count+"px",n.dom.classList.add("stats"),(0,u.Z)((0,r.Z)(n),h)[h](i),t.count++,console.log(t.count),document.body.appendChild(n.dom)),n}return(0,i.Z)(t)}(l());function g(n){var e=document.createElement("p");e.innerHTML=n,this.dom.append(e)}function w(){if(0==v.count||!v.isStats)for(var n=document.getElementsByClassName("stats");n.length>0;)n[0].remove()}v.isStats=!0,v.count=0;var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var e=(0,f.useMemo)((function(){return new(l())}),[]);(0,f.useEffect)((function(){e.showPanel(n),e.dom.style.left="auto",e.dom.style.right=0,document.body.appendChild(e.dom)})),(0,m.A)((function(){e.begin(),e.end()}))}}},9731:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i=t(9439),o=t(7760),r=t(2791),a=t(5712),s=t(8492),u=t(9740),c=t(184),d=o.MathUtils.randFloatSpread,l=function(n){var e=n.mat,t=void 0===e?new o.Matrix4:e,l=n.vec,f=void 0===l?new o.Vector3:l,m=n.mass,h=void 0===m?1:m,p=n.count,v=void 0===p?1:p,g=(0,r.useMemo)((function(){return new o.SphereGeometry(1,32,32)}),[]),w=(0,r.useMemo)((function(){return new o.MeshStandardMaterial({color:16711731,roughness:0,envMapIntensity:.2,emissive:"#370037"})}),[]),x=(0,u.m)("/cross.jpg"),y=(0,a.Eo)((function(){return{args:[1],mass:h,angularDamping:.1,linearDamping:.65,position:[d(20),d(20),d(20)]}}),(0,r.useRef)()),j=(0,i.Z)(y,2),Z=j[0],b=j[1];return(0,r.useMemo)((function(){for(var n=0;n<v;n++)b.at(n).mass.set(h)}),[h]),(0,s.A)((function(n){for(var e=0;e<v;e++)Z.current.getMatrixAt(e,t),b.at(e).applyForce(f.setFromMatrixPosition(t).normalize().multiplyScalar(-50).toArray(),[0,0,0])})),(0,c.jsx)("instancedMesh",{ref:Z,castShadow:!0,receiveShadow:!0,args:[null,null,v],geometry:g,material:w,"material-map":x})},f=function(n){var e=n.radius,t=void 0===e?3:e,o=(0,s.z)((function(n){return n.viewport})),r=(0,a.Eo)((function(){return{type:"Kinematic",args:[t],position:[0,0,0]}})),u=(0,i.Z)(r,2),c=(u[0],u[1]);return(0,s.A)((function(n){c.position.set(n.mouse.x*o.width/2,n.mouse.y*o.height/2,0)}))},m=t(9738),h=function(){var n=(0,s.z)(),e=n.camera,t=n.gl;return(0,r.useEffect)((function(){var n=new m.z(e,t.domElement);return n.enablePan=!1,n.enableRotate=!1,n.enableZoom=!1,function(){n.dispose()}}),[e,t]),null},p=t(6098),v=t(4469),g=t(5892),w=t(2878),x=t(3092),y=t(7009),j=t(2517),Z=(0,p.t)(),b=function(){return(0,v.V)(0,!1)},M=function(){var n=(0,r.useState)(1.5),e=(0,i.Z)(n,2),t=e[0],o=e[1];return(0,c.jsxs)(g.Xz,{shadows:!0,className:"app",dpr:t,camera:{position:[0,0,20],fov:35,near:1,far:40},gl:{powerPreference:"high-performance",alpha:!0,antialias:!0,stencil:!1,depth:!0},children:[(0,c.jsx)(w.q,{all:!0}),(0,c.jsx)(x.S,{pixelated:!0}),(0,c.jsxs)(y.A,{onIncline:function(){return o(2)},onDecline:function(){return o(1)},children:[(0,c.jsx)(h,{}),(0,c.jsx)("ambientLight",{intensity:.25}),(0,c.jsx)("spotLight",{intensity:1,angle:.2,penumbra:1,position:[30,30,30],castShadow:!0,"shadow-mapSize":[512,512]}),(0,c.jsx)("directionalLight",{intensity:5,position:[-10,-10,-10],color:"purple"}),(0,c.jsxs)(a.wI,{gravity:[0,2,0],iterations:10,children:[(0,c.jsx)(f,{radius:3}),(0,c.jsx)(l,{count:Z?4:20,mass:1})]}),(0,c.jsx)(j.qA,{files:"/adamsbridge.hdr"}),(0,c.jsx)(b,{})]})]})}}}]);
//# sourceMappingURL=731.13ec3853.chunk.js.map