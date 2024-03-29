import type IconLink from './models/iconLink';
import type Project from './models/project';
import type Qualification from './models/qualification';
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

export const EXPERIENCE: Qualification[] = [
	{
		name: "Paylocity SSE",
		title: "Senior Software Engineer",
		date: "May 2022 - Present",
		skills: [
			{
				name: "Mobile (ionic framework) development lead for community feature team.",
				link: "",
			},
			{
				name: "Help scope out importance of new features.",
				link: "",
			},
			{
				name: "Assist and lead other devs in completion of new features.",
				link: "",
			},
		],
	},
	{
		name: "Paylocity SE",
		title: "Software Engineer",
		date: "Nov 2019 - May 2022",
		skills: [
			{
				name: "Worked with mobile team to introduce new features.",
				link: "",
			},
			{
				name: "Setup browserstack with webdriver automation testing.",
				link: "",
			},
			{
				name: "NGRX implementation into old angular app. (Rewrite of entire feature)",
				link: "",
			},
		],
	},
	{
		name: "Paylocity ASE",
		title: "Associate Software Engineer",
		date: "May 2016 - Nov 2019",
		skills: [
			{
				name: "Built out core features of community product.",
				link: "",
			},
			{
				name: "File upload using AWS.",
				link: "",
			},
			{
				name: "Upgraded Ionic application from AngularJS to Angular 2+",
				link: "",
			},
		],
	},
	{
		name: "BMobile",
		title: "Software Engineer",
		date: "May 2016 - May 2018",
		skills: [
			{
				name: "Worked on web app using google map integration, ASP.NET Core, and Angular2.",
				link: "",
			},
			{
				name: "Develop and manage ecommerce website.",
				link: "",
			},
			{
				name: "Used Ionic 3 to update old applications.",
				link: "",
			},
		],
	}
];

export const SKILLS: Qualification[] = [
	{
		name: "Frameworks",
		title: "",
		date: "",
		skills: [
			{
				name: "React",
				link: 'https://reactjs.org/'
			},
			{
				name: 'Angular',
				link: 'https://angular.io/'
			},
			{
				name: 'Svelte',
				link: 'https://svelte.dev/'
			},
			{
				name: '.NET',
				link: 'https://docs.microsoft.com/en-us/dotnet/fundamentals/'
			},
			{
				name: 'Ionic',
				link: 'https://ionicframework.com/'
			},
			{
				name: 'Godot',
				link: 'https://godotengine.org/'
			}
		],
	},
	{
		name: "Languages",
		title: "",
		date: "",
		skills: [
			{
				name: 'Javascript',
				link: 'https://www.javascript.com/'
			},
			{
				name: 'Typescript',
				link: 'https://www.typescriptlang.org/'
			},
			{
				name: 'C#',
				link: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
			},
			{
				name: 'GDScript',
				link: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html'
			}
		],
	},
	{
		name: "Backend",
		title: "",
		date: "",
		skills: [
			{
				name: 'Firebase',
				link: 'https://firebase.google.com/'
			},
			{
				name: 'MongoDb',
				link: 'https://www.mongodb.com/'
			},
			{
				name: 'AWS',
				link: 'https://aws.amazon.com/'
			},
		],
	},
	{
		name: "Learning",
		title: "",
		date: "",
		skills: [
			{
				name: 'Tauri',
				link: 'https://tauri.app/'
			},
			{
				name: 'Native iOS/Android',
				link: 'https://developer.apple.com/swift/'
			},
			{
				name: 'Swift',
				link: 'https://developer.apple.com/swift/'
			},
			{
				name: 'Kotlin',
				link: 'https://kotlinlang.org/'
			},
			{
				name: 'Nx',
				link: 'https://nx.dev/'
			}
		],
	},
];

export const PROJECTS: Project[] = [
	{
		name: 'arffdev.github.io',
		link: 'https://github.com/arffdev/arffdev.github.io',
		description: 'This project! This is a small portfolio/resume project I decided to make for fun. It was really just an excuse to mess around with svelte and github pages.',
		status: 'Released',
		imagePath: 'favicon.png',
	},
	{
		name: 'Court Booker',
		link: 'https://court-booker.web.app/',
		description: 'Court booking application where users can create their own clubs, invite other users to be a part of their clubs, and make reservations. Currently there is still a lot of features and QA missing from this project but the core is there (add players, make reservations, adjust club rules, invite not available yet).',
		history: 'During college I worked part time for a tennis club facility but their system was extremely archaic. Everything was done by hand, writing down who was what court (big sheets of paper), hand writing receipts etc. The original goal was to build something they could use for free or at least something with very limited cost. It has now evolved into a much large project that I am still actively working on in parallel with other things.',
		status: 'Prototype',
		imagePath: 'courtbooker.png',
	},
	{
		name: 'Megabat',
		link: 'https://pugdev.itch.io/',
		description: 'A simple game where you play as a fruit bat (megabat) that collects fruit every level.',
		history: 'Started as a small project to see what I could get done in a total of 48 hours and has since evolved into something I would like to build out more of so I can say I released a full game that is more then a prototype.',
		status: 'Prototype - Download and play for free.',
		imagePath: 'megabat.png',
	}
];