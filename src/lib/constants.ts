import type IconLink from './models/iconLink';
import type Project from './models/project';
import type TechStack from './models/techstack';

export const ICON_LINKS: IconLink[] = [
  {
    link: "https://github.com/arffdev",
		name: "GitHub",
		iconPath: "src/lib/assets/github.png",
		iconWidth: "30px",
		iconHeight: "30px",
		iconCss: "padding-bottom: 30px;"
  },
  {
    link: "https://pugdev.itch.io/",
		name: "itch.io",
		iconPath: "src/lib/assets/itchio.png",
		iconWidth: "30px",
		iconHeight: "30px",
		iconCss: "padding-bottom: 20px;"
  },
  {
    link: "https://www.linkedin.com/in/coby-arff-12a675139/",
    name: "LinkedIn",
		iconPath: "src/lib/assets/linkedIn.png",
		iconWidth: "50px",
		iconHeight: "50px",
		iconCss: "padding-bottom: 30px;"
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


export const PROJECTS: Project[] = [
	{
		name: 'arffdev.github.io',
		projectLink: 'https://github.com/arffdev/arffdev.github.io',
		description: 'This project! This is a small portfolio/resume project I decided to make for fun. It was really just an excuse to mess around with svelte and github pages.',
		status: 'Released'
	},
	{
		name: 'Court Booker',
		projectLink: 'https://court-booker.web.app/',
		description: 'Court booking application where users can create their own clubs, invite other users to be a part of their clubs, and make reservations. Currently there is still a lot of features and QA missing from this project but the core is there (add players, make reservations, adjust club rules, invite not available yet).',
		history: 'During college I worked part time for a tennis club facility but their system was extremely archaic. Everything was done by hand, writing down who was what court (big sheets of paper), hand writing receipts etc. The original goal was to build something they could use for free or at least something with very limited cost. It has now evolved into a much large project that I am still actively working on in parallel with other things.',
		status: 'Prototype'
	},
	{
		name: 'Megabat',
		projectLink: 'https://pugdev.itch.io/',
		description: 'A simple game where you play as a fruit bat (megabat) that collects fruit every level.',
		history: 'Started as a small project to see what I could get done in a total of 48 hours and has since evolved into something I would like to build out more of so I can say I released a full game that is more then a prototype.',
		status: 'Prototype - Download and play for free.'
	}
];