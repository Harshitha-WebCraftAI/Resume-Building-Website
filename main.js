import * as THREE from 'three';


  
  
const canvas = document.querySelector('#webgl');

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x06060a, 0.045);

const sizes = { width: window.innerWidth, height: window.innerHeight };

const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 200);
camera.position.set(0, 0.5, 12);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

   
scene.add(new THREE.AmbientLight(0xffffff, 0.35));

const keyLight = new THREE.DirectionalLight(0x64ffda, 1.5);
keyLight.position.set(5, 8, 5);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xa855f7, 1.2);
rimLight.position.set(-6, 3, -5);
scene.add(rimLight);

const pointLight = new THREE.PointLight(0x64ffda, 3, 20);
pointLight.position.set(0, 2, 3);
scene.add(pointLight);

function createStarfield() {
  const count = 1800;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = 20 + Math.random() * 60;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = new THREE.Color().setHSL(0.45 + Math.random() * 0.15, 0.8, 0.5 + Math.random() * 0.4);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geo, mat);
}
const stars = createStarfield();
scene.add(stars);


const coreGroup = new THREE.Group();
scene.add(coreGroup);

const coreWire = new THREE.Mesh(
  new THREE.IcosahedronGeometry(3.2, 1),
  new THREE.MeshBasicMaterial({
    color: 0x64ffda,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  })
);
coreGroup.add(coreWire);

const coreInner = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.2, 0),
  new THREE.MeshStandardMaterial({
    color: 0x0a0a1a,
    emissive: 0x64ffda,
    emissiveIntensity: 0.15,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.4,
    wireframe: true,
  })
);
coreGroup.add(coreInner);


const techColors = [0x64ffda, 0xa855f7, 0xff6b9d, 0x4dd4b0, 0x60a5fa, 0xfbbf24];
const orbiters = [];

for (let i = 0; i < 14; i++) {
  const size = 0.06 + Math.random() * 0.1;
  const geo = new THREE.IcosahedronGeometry(size, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: techColors[i % techColors.length],
    emissive: techColors[i % techColors.length],
    emissiveIntensity: 2,
    metalness: 0.6,
    roughness: 0.3,
  });
  const node = new THREE.Mesh(geo, mat);

  const radius = 4 + Math.random() * 3;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  node.position.set(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta) * 0.5,
    radius * Math.cos(phi)
  );

  scene.add(node);
  orbiters.push({
    mesh: node,
    radius,
    speed: 0.15 + Math.random() * 0.3,
    theta,
    phi,
    yOffset: (Math.random() - 0.5) * 2,
  });
}


function createRobot() {
  const robot = new THREE.Group();

  const darkMat = new THREE.MeshStandardMaterial({ color: 0x12121c, metalness: 0.9, roughness: 0.15 });
  const midMat  = new THREE.MeshStandardMaterial({ color: 0x1e1e2e, metalness: 0.7, roughness: 0.3 });
  const glowMat = new THREE.MeshStandardMaterial({
    color: 0x64ffda, emissive: 0x64ffda, emissiveIntensity: 2.5,
    metalness: 0.3, roughness: 0.2
  });

  // ── HEAD ──
  const headGroup = new THREE.Group();
  headGroup.position.y = 1.55;

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 32), darkMat);
  head.scale.set(1, 0.95, 0.95);
  headGroup.add(head);

  // Visor
  const visor = new THREE.Mesh(
    new THREE.SphereGeometry(0.53, 32, 32, 0, Math.PI * 2, Math.PI * 0.38, Math.PI * 0.28),
    new THREE.MeshStandardMaterial({ color: 0x05050c, metalness: 1, roughness: 0.05 })
  );
  visor.rotation.x = Math.PI * 0.02;
  headGroup.add(visor);

  // Eyes
  const eyeGeo = new THREE.SphereGeometry(0.065, 16, 16);
  const eyeL = new THREE.Mesh(eyeGeo, glowMat); eyeL.position.set(-0.15, 0.02, 0.48);
  const eyeR = new THREE.Mesh(eyeGeo, glowMat); eyeR.position.set(0.15, 0.02, 0.48);
  headGroup.add(eyeL, eyeR);

  // Antenna
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.32, 8), midMat);
  antenna.position.y = 0.7;
  headGroup.add(antenna);
  const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), glowMat);
  antennaTip.position.y = 0.88;
  headGroup.add(antennaTip);

  robot.add(headGroup);

  // ── BODY ──
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.38, 0.45, 16, 32), midMat);
  body.position.y = 0.48;
  robot.add(body);

  // Chest core
  const chestCore = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 16), glowMat);
  chestCore.position.set(0, 0.62, 0.36);
  robot.add(chestCore);

  // ── ARMS ──
  const armGeo = new THREE.CapsuleGeometry(0.1, 0.42, 8, 16);
  const handGeo = new THREE.SphereGeometry(0.12, 16, 16);

  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(-0.42, 0.82, 0);
  const leftArm = new THREE.Mesh(armGeo, midMat); leftArm.position.y = -0.24;
  const leftHand = new THREE.Mesh(handGeo, darkMat); leftHand.position.y = -0.52;
  leftArmPivot.add(leftArm, leftHand);
  robot.add(leftArmPivot);

  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(0.42, 0.82, 0);
  const rightArm = new THREE.Mesh(armGeo, midMat); rightArm.position.y = -0.24;
  const rightHand = new THREE.Mesh(handGeo, darkMat); rightHand.position.y = -0.52;
  rightArmPivot.add(rightArm, rightHand);
  robot.add(rightArmPivot);

  // ── HOVER RING ──
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.012, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0x64ffda, transparent: true, opacity: 0.35 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -1.15;
  robot.add(ring);

  // ── HOLOGRAPHIC BASE GLOW ──
  const baseGlow = new THREE.Mesh(
    new THREE.CircleGeometry(1.4, 64),
    new THREE.MeshBasicMaterial({
      color: 0x64ffda, transparent: true, opacity: 0.06,
      blending: THREE.AdditiveBlending
    })
  );
  baseGlow.rotation.x = -Math.PI / 2;
  baseGlow.position.y = -1.16;
  robot.add(baseGlow);

  return { robot, headGroup, leftArmPivot, rightArmPivot, antennaTip, chestCore, ring, eyeL, eyeR };
}

const robotRefs = createRobot();
robotRefs.robot.scale.setScalar(0.95);
scene.add(robotRefs.robot);


const cameraKeyframes = [
  { t: 0.00, pos: [0.0, 0.4, 8.5],  look: [0, 0.4, 0] },
  { t: 0.14, pos: [2.8, 0.2, 8.0],  look: [0, 0.2, 0] },
  { t: 0.28, pos: [-3.0, 0.8, 8.5], look: [0, 0.4, 0] },
  { t: 0.42, pos: [2.5, -0.6, 9.0], look: [0, 0.2, 0] },
  { t: 0.58, pos: [-2.8, 1.2, 8.5], look: [0, 0.5, 0] },
  { t: 0.74, pos: [2.2, 1.6, 9.0],  look: [0, 0.3, 0] },
  { t: 0.88, pos: [-2.0, -0.8, 8.5],look: [0, 0.2, 0] },
  { t: 1.00, pos: [0.0, 0.3, 7.5],  look: [0, 0.3, 0] },
];

function getCameraTarget(progress) {
  let a = cameraKeyframes[0];
  let b = cameraKeyframes[cameraKeyframes.length - 1];

  for (let i = 0; i < cameraKeyframes.length - 1; i++) {
    if (progress >= cameraKeyframes[i].t && progress <= cameraKeyframes[i + 1].t) {
      a = cameraKeyframes[i];
      b = cameraKeyframes[i + 1];
      break;
    }
  }
  const range = (b.t - a.t) || 1;
  const local = Math.min(Math.max((progress - a.t) / range, 0), 1);
  const e = local * local * (3 - 2 * local); // smoothstep

  return {
    pos: new THREE.Vector3().fromArray(a.pos).lerp(new THREE.Vector3().fromArray(b.pos), e),
    look: new THREE.Vector3().fromArray(a.look).lerp(new THREE.Vector3().fromArray(b.look), e),
  };
}


let scrollProgress = 0;
let targetScrollProgress = 0;
const mouse = { x: 0, y: 0 };
const smoothMouse = { x: 0, y: 0 };
const currentLook = new THREE.Vector3(0, 0.4, 0);

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  targetScrollProgress = max > 0 ? window.scrollY / max : 0;
}, { passive: true });

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


const clock = new THREE.Clock();
let firstFrameDone = false;

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();
  const delta = clock.getDelta ? 0 : 0; // keep as needed

  // Smooth scroll
  scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;

  // Smooth mouse
  smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
  smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;

  /* ── CAMERA ── */
  const target = getCameraTarget(scrollProgress);
  camera.position.lerp(target.pos, 0.04);

  // Mouse parallax offset
  camera.position.x += smoothMouse.x * 0.5;
  camera.position.y += smoothMouse.y * 0.3;

  currentLook.lerp(target.look, 0.05);
  camera.lookAt(currentLook);

  /* ── STARFIELD ── */
  stars.rotation.y = elapsed * 0.015;
  stars.rotation.x = elapsed * 0.008;

  /* ── DATA CORE ── */
  coreGroup.rotation.y = elapsed * 0.12;
  coreGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.1;
  coreInner.rotation.y = -elapsed * 0.2;
  coreInner.rotation.z = elapsed * 0.1;

  /* ── ORBITERS ── */
  orbiters.forEach((o, i) => {
    o.theta += o.speed * 0.01;
    o.mesh.position.x = o.radius * Math.sin(o.phi) * Math.cos(o.theta);
    o.mesh.position.z = o.radius * Math.sin(o.phi) * Math.sin(o.theta);
    o.mesh.position.y = o.radius * Math.cos(o.phi) * 0.5 + Math.sin(elapsed + i) * 0.3;
    o.mesh.rotation.x += 0.01;
    o.mesh.rotation.y += 0.015;
  });

  /* ── ROBOT ANIMATION ── */
  const r = robotRefs;

  // Hover bob
  r.robot.position.y = Math.sin(elapsed * 1.1) * 0.09;
  r.robot.position.x = Math.sin(elapsed * 0.5) * 0.05;

  // Gentle body sway
  r.robot.rotation.z = Math.sin(elapsed * 0.7) * 0.03;

  // Head look-around
  r.headGroup.rotation.y = Math.sin(elapsed * 0.55) * 0.28;
  r.headGroup.rotation.x = Math.sin(elapsed * 0.8) * 0.06;

  // Right arm wave (hello!)
  r.rightArmPivot.rotation.z = -0.35 + Math.sin(elapsed * 3.2) * 0.55;
  r.rightArmPivot.rotation.x = Math.sin(elapsed * 1.5) * 0.2;

  // Left arm gentle sway
  r.leftArmPivot.rotation.z = 0.22 + Math.sin(elapsed * 1.2 + 1) * 0.12;
  r.leftArmPivot.rotation.x = Math.sin(elapsed * 0.9) * 0.08;

  // Antenna wobble
  r.antennaTip.position.x = Math.sin(elapsed * 5) * 0.025;
  r.antennaTip.position.z = Math.cos(elapsed * 4) * 0.025;

  // Chest core pulse
  const pulse = 1 + Math.sin(elapsed * 3) * 0.18;
  r.chestCore.scale.setScalar(pulse);

  // Ring rotate
  r.ring.rotation.z = elapsed * 0.4;

  // Eye blink
  const blink = (Math.sin(elapsed * 1.8) > 0.96) ? 0.15 : 1;
  r.eyeL.scale.y = blink;
  r.eyeR.scale.y = blink;

  // Point light follows robot
  pointLight.position.set(
    r.robot.position.x,
    r.robot.position.y + 1.5,
    3
  );

  /* ── RENDER ── */
  renderer.render(scene, camera);

  // Hide loader after first render
  if (!firstFrameDone) {
    firstFrameDone = true;
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 400);
  }
}
animate();

const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;

  // Navbar background
  navbar.classList.toggle('scrolled', y > 40);

  // Progress bar
  const pct = max > 0 ? (y / max) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach((el) => observer.observe(el));

// Glass card mouse-follow glow
document.querySelectorAll('.glass-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

// Close mobile navbar on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});