import App from './App.svelte';

const mount = document.createElement('div');
document.body.appendChild(mount);
mount.id = 'sheodox-vrv-subtitler';
mount.style.height = '100%';
mount.style.width = '100%';

const app = new App({
	target: mount
});
