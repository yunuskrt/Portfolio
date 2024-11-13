export const DiplomaticInteractions = {
	lightColor: '#96897b',
	darkColor: '#534c44',
	title: 'DIPLOMATIC INTERACTIONS',
	modelName: 'flags',
	description: 'Global Interactions Through Dynamic Visuals',
	icons: [
		{ src: '/logos/nextjs.png', text: 'Next.js' },
		{ src: '/logos/semantic_ui.png', text: 'Semantic UI' },
		{ src: '/logos/chartjs.png', text: 'Chart.js' },
	],
	images: [
		{
			id: 1,
			src: '/projects/diplomatic_interactions/1-welcome_page.png',
			alt: 'Welcome Page',
			title: 'Welcome Page',
			description:
				'Informatif welcome page.\nDescriptive icons.\nSlogan of the app.',
		},
		{
			id: 2,
			src: '/projects/diplomatic_interactions/2-cartography_report_page.png',
			alt: 'Cartography Report Page',
			title: 'Cartography Report Page',
			description:
				'Report of interactions on the cartography.\nHeatmap of interactions based on density of interactions.\nFilter interactions by reporter country, type of interaction, conversation type, topic, start year, and end year.',
		},
		{
			id: 3,
			src: '/projects/diplomatic_interactions/3-country_search_page.png',
			alt: 'Country Search Page',
			title: 'Country Search Page',
			description:
				'Includes a rapid search bar to find the interactions of a specific country.\nIncludes all the countries below search bar.',
		},
		{
			id: 4,
			src: '/projects/diplomatic_interactions/4-country_report_page.png',
			alt: 'Country Report Page',
			title: 'Country Report Page',
			description:
				'Report of interactions of a specific country.\nVisualize country interactions by network, cartography or year.',
		},
		{
			id: 5,
			src: '/projects/diplomatic_interactions/5-interaction_bar_chart_page.png',
			alt: 'Interaction Bar Chart Page',
			title: 'Interaction Bar Chart Page',
			description:
				'List of interactions among 2 countries.\nBar chart of interactions by topic.',
		},
		{
			id: 6,
			src: '/projects/diplomatic_interactions/6-publications_page.png',
			alt: 'Publications Page',
			title: 'Publications Page',
			description: 'Publications page of the app.',
		},
	],
	buttons: [
		{
			id: 'github',
			text: 'Github',
			external: true,
			href: 'https://github.com/yunuskrt/DiplomaticInteractions',
		},
	],
}

export const Lineup = {
	lightColor: '#6c8070',
	darkColor: '#343d36',
	title: 'LINEUP',
	modelName: 'stadium',
	description: 'Soccer Squad Guessing Game',
	icons: [
		{ src: '/logos/flutter.png', text: 'Flutter' },
		{ src: '/logos/python.png', text: 'Python' },
		{ src: '/logos/nestjs.png', text: 'NestJs' },
		{ src: '/logos/mongodb.png', text: 'MongoDB' },
	],
	imageWidth: '175px',
	images: [
		{
			id: 1,
			src: '/projects/lineup/1-welcome_screen.png',
			alt: 'welcome screen',
			title: 'Welcome Screen',
			description: 'Includes animated app logo and title.',
		},
		{
			id: 2,
			src: '/projects/lineup/2-main_menu_screen.png',
			alt: 'main-menu screen',
			title: 'Main Menu Screen',
			description:
				'Includes 3 buttons to navigate to the game, settings and about pages.\nEither play single player or multiplayer.',
		},
		{
			id: 3,
			src: '/projects/lineup/3-multiplayer_menu_screen.png',
			alt: 'multi-menu screen',
			title: 'Multiplayer Menu Screen',
			description:
				'Includes 3 buttons to navigate to the join and create game pages.\nEither join a game or create a game or play random with another user.',
		},
		{
			id: 4,
			src: '/projects/lineup/4-create_room_screen.png',
			alt: 'create-room screen',
			title: 'Create Room Screen',
			description:
				'Includes a text field to enter a room name.\nCreates a room with entered name in the database.',
		},
		{
			id: 5,
			src: '/projects/lineup/5-join_room_screen.png',
			alt: 'join-room screen',
			title: 'Join Room Screen',
			description:
				'Includes a text field to enter a room name.\nEmits a join event to the server.\nJoins the room if it exists.',
		},
		{
			id: 6,
			src: '/projects/lineup/6-filter_screen.png',
			alt: 'filter screen',
			title: 'Filter Screen',
			description:
				'Retrieves the match from the database based on the selected filters.\nFilters by league, season, round and matchday.',
		},
		{
			id: 7,
			src: '/projects/lineup/7-start_game_screen.png',
			alt: 'start-game screen',
			title: 'Start Game Screen',
			description:
				'Displays the match information.\nDisplays the formation, names, logos of the teams.\nChoose either home team or away team.\nButton to start the game.',
		},
		{
			id: 8,
			src: '/projects/lineup/8-game_screen.png',
			alt: 'game screen',
			title: 'Game Screen',
			description:
				'Displays the formation of the team.\nDisplays the player cards.\nType to submit the guessed player from the soccer squad.\nButton to submit the guess.\nButton to quit the game.',
		},
	],
	buttons: [
		{
			id: 'github',
			text: 'Github',
			detailText: '(Mobile)',
			external: true,
			href: 'https://github.com/yunuskrt/LineupApp',
		},
		{
			id: 'github',
			text: 'Github',
			detailText: '(Backend)',
			external: true,
			href: 'https://github.com/yunuskrt/LineupAPI',
		},
		{
			id: 'github',
			text: 'Github',
			detailText: '(Web Scraper)',
			external: true,
			href: 'https://github.com/yunuskrt/LineupScraper',
		},
	],
}

export const EmployeeManagementDashboard = {
	lightColor: '#8f6b84',
	darkColor: '#4a2e42',
	title: 'EMPLOYEE MANAGEMENT DASHBOARD',
	modelName: 'employee',
	description: 'Project and Team Tracking for Corporate Workflows',
	icons: [
		{ src: '/logos/semantic_ui.png', text: 'Semantic UI' },
		{ src: '/logos/highcharts.png', text: 'HighchartsJS' },
		{ src: '/logos/jquery.png', text: 'jQuery' },
		{ src: '/logos/php.png', text: 'PHP' },
		{ src: '/logos/mysql.png', text: 'MySQL' },
	],
	images: [
		{
			id: 1,
			src: '/projects/employee_management_dashboard/1-home_page.png',
			alt: 'home page',
			title: 'Home Page',
			description:
				'Pie chart and bar chart of some employee statistics.\nList of employees in datatable.',
		},
		{
			id: 2,
			src: '/projects/employee_management_dashboard/2-all_employees_page.png',
			alt: 'employees page',
			title: 'Employees Page',
			description:
				'Includes photos and names of all employees.\nUser is redirected to the employee profile page when clicked on the employee.',
		},
		{
			id: 3,
			src: '/projects/employee_management_dashboard/3-employee_page.png',
			alt: 'employee page',
			title: 'Employee Profile Page',
			description:
				'Details of the employee.\nList of projects and teams that the employee is involved in.\nAdd, remove or update skills of the employee.\nAdd, remove or update projects of the employee.',
		},
		{
			id: 4,
			src: '/projects/employee_management_dashboard/4-all_projects_page.png',
			alt: 'projects page',
			title: 'Projects Page',
			description:
				'Includes title and description of all projects.\nUser is redirected to the project progress page when clicked on the project.',
		},
		{
			id: 5,
			src: '/projects/employee_management_dashboard/5-project_progress_page.png',
			alt: 'project-progress page',
			title: 'Project Progress Page',
			description:
				'Details of the project.\nList of tasks that the project includes.\nAdd, remove or update tasks of the project.\nProgress bar of the project.',
		},
	],
	buttons: [
		{
			id: 'github',
			text: 'Github',
			external: true,
			href: 'https://github.com/yunuskrt/UserMgmDashboard',
		},
	],
}

export const BirthdayTracker = {
	lightColor: '#2d61ad',
	darkColor: '#11284a',
	title: 'BIRTHDAY TRACKER',
	modelName: 'cake',
	description:
		"A Simple App to Track and Categorize Your Friends' and Family's Birthdays",
	icons: [
		{ src: '/logos/nestjs.png', text: 'NestJS' },
		{ src: '/logos/jwt.png', text: 'JWT' },
		{ src: '/logos/nextjs.png', text: 'NextJS' },
		{ src: '/logos/bootstrap.png', text: 'Bootstrap' },
		{ src: '/logos/mongodb.png', text: 'MongoDB' },
	],
	images: [
		{
			id: 1,
			src: '/projects/birthday_tracker/1-auth_page.png',
			alt: 'auth page',
			title: 'Authorization Page',
			description:
				'Login and register modals.\nUser is redirected to the dashboard when logged in.\nUses NestJs jwt authentication behind the scenes.',
		},
		{
			id: 2,
			src: '/projects/birthday_tracker/2-birthdays_page.png',
			alt: 'birthdays page',
			title: 'Birthdays Page',
			description:
				'List of birthdays of friends and family.\nList of upcoming birthdays within the selected filter.\nAdd, remove or update birthdays.',
		},
	],
	buttons: [
		{
			id: 'github',
			text: 'Github',
			external: true,
			href: 'https://github.com/yunuskrt/BirthdayTracker',
		},
	],
}

export const SettingConfigurator = {
	lightColor: '#87715f',
	darkColor: '#3d3228',
	title: 'SETTING CONFIGURATOR',
	modelName: 'settings',
	description:
		'Full Stack Web App that serves the configurations for mobile apps.',
	icons: [
		{ src: '/logos/nodejs.png', text: 'NodeJS' },
		{ src: '/logos/vue.png', text: 'VueJS' },
		{ src: '/logos/firebase.png', text: 'Firebase' },
	],
	images: [
		{
			id: 1,
			src: '/projects/setting_configurator/1-login_page.png',
			alt: 'login page',
			title: 'Login Page',
			description:
				'User is redirected to the parameters page when logged in.\nUses Firebase authentication token to secure the backend operations.',
		},
		{
			id: 2,
			src: '/projects/setting_configurator/2-parameters_page.png',
			alt: 'parameters page',
			title: 'Parameters Page',
			description:
				'List of parameters that the app includes.\nAdd, remove or update parameters.\nCustomize parameter depending on country.',
		},
		{
			id: 3,
			src: '/projects/setting_configurator/3-parameter_page.png',
			alt: 'paramater page',
			title: 'Parameter Page',
			description:
				'Details of the parameter.\nList of values of the paramater for each country.\nRemove or update configurations for the parameter value of the country.',
		},
	],
	buttons: [
		{
			id: 'github',
			text: 'Github',
			external: true,
			href: 'https://github.com/yunuskrt/SettingConfigurator',
		},
	],
}
