import type Link from './models/link';
import type TechStack from './models/techstack';

export const PROFILE_LINKS: Link[] = [
  {
    display: "GitHub",
    link: "https://github.com/arffdev"
  },
  {
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/coby-arff-12a675139/"
  },
  {
    display: "itch.io",
    link: "https://pugdev.itch.io/"
  }
];

export const TECH_STACKS: TechStack[] = [
	{
		name: 'React',
		color: '#61dafb',
		borderColor: '#ffffff',
		link: 'https://reactjs.org/'
	},
	{
		name: 'Angular',
		color: '#dd0031',
		borderColor: '#ffffff',
		link: 'https://angular.io/'
	},
	{
		name: 'Svelte',
		color: '#ff3e00',
		borderColor: '#ffffff',
		link: 'https://svelte.dev/'
	},
	{
		name: '.NET',
		color: '#5b24e3',
		borderColor: '#ffffff',
		link: 'https://docs.microsoft.com/en-us/dotnet/fundamentals/'
	},
	{
		name: 'Ionic',
		color: '#42ccff',
		borderColor: '#ffffff',
		link: 'https://ionicframework.com/'
	},
	{
		name: 'Godot',
		color: '#478cbf',
		borderColor: '#ffffff',
		link: 'https://godotengine.org/'
	}
];

export const CODE_STACKS: TechStack[] = [
	{
		name: 'Javascript',
		color: '#fcdc00',
		borderColor: '#ffffff',
		link: 'https://www.javascript.com/'
	},
	{
		name: 'Typescript',
		color: '#3178c6',
		borderColor: '#ffffff',
		link: 'https://www.typescriptlang.org/'
	},
	{
		name: 'C#',
		color: '#5b24e3',
		borderColor: '#ffffff',
		link: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
	},
	{
		name: 'GDScript',
		color: '#478cbf',
		borderColor: '#ffffff',
		link: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html'
	}
];

export const BACKEND_SERVICES: TechStack[] = [
	{
		name: 'Firebase',
		color: '#1a73e8',
		borderColor: '#ffcc30',
		link: 'https://firebase.google.com/'
	},
	{
		name: 'MongoDb',
		color: '#13aa51',
		borderColor: '#ffffff',
		link: 'https://www.mongodb.com/'
	},
	{
		name: 'AWS',
		color: '#ec912d',
		borderColor: '#ffffff',
		link: 'https://aws.amazon.com/'
	},
];

export const LEARNING_MATERIAL: TechStack[] = [
	{
		name: 'Tauri',
		color: '#24c8db',
		borderColor: '#ffc131',
		link: 'https://tauri.app/'
	},
	{
		name: 'Native iOS/Android',
		color: '#3ddc84',
		borderColor: '#ffffff',
		link: 'https://developer.apple.com/swift/'
	},
	{
		name: 'Swift',
		color: '#fd7e35',
		borderColor: '#ffffff',
		link: 'https://developer.apple.com/swift/'
	},
	{
		name: 'Kotlin',
		color: '#7f52ff',
		borderColor: '#ffffff',
		link: 'https://kotlinlang.org/'
	}
];
