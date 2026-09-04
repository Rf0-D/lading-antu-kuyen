import { CommunityThread } from "@/app/(lading)/comunities/components/CommunityTheadList";
import { ExperienceItem } from "@/app/(lading)/experiences/components/ExperienceCard";

export const mockExperiences: ExperienceItem[] = [
	{
		id: "exp-1",
		author: {
			name: "Isidora Alarcón",
			role: "Buscadora de Cielos",
			avatar: "/hero.png",
		},
		copies: 128,
		image: "/hero.png",
		price: "~ $250 USD",
		location: "Valle de Elqui, Coquimbo",
		description:
			"Noche mística de astrofotografía en el Valle del Elqui. Bajo el amparo de Küyen, el firmamento se reveló en su máximo esplendor. Pudimos observar la Vía Láctea y capturar nebulosas espectaculares.",
		tags: [
			"#Estrellas",
			"#Fotografía",
			"#Misticismo",
			"#Valle",
		],
		likes: 412,
		comments: 18,
	},
	{
		id: "exp-2",
		author: {
			name: "Tomás Herrera",
			role: "Explorador Andino",
			avatar: "/hero.png",
		},
		copies: 94,
		image: "/hero.png",
		price: "~ $180 USD",
		location: "San Pedro de Atacama, Antofagasta",
		description:
			"Una expedición nocturna por el desierto más árido del mundo, combinando observación astronómica, caminata y relatos ancestrales bajo uno de los cielos más limpios del planeta.",
		tags: [
			"#Atacama",
			"#Astronomía",
			"#Desierto",
			"#Aventura",
		],
		likes: 368,
		comments: 24,
	},
	{
		id: "exp-3",
		author: {
			name: "Catalina Rojas",
			role: "Viajera Austral",
			avatar: "/hero.png",
		},
		copies: 76,
		image: "/hero.png",
		price: "~ $320 USD",
		location: "Torres del Paine, Magallanes",
		description:
			"Ruta de trekking por los senderos más emblemáticos de Torres del Paine, recorriendo lagos glaciares, bosques patagónicos y miradores de montaña.",
		tags: [
			"#Patagonia",
			"#Trekking",
			"#Montaña",
			"#Naturaleza",
		],
		likes: 624,
		comments: 42,
	},
	{
		id: "exp-4",
		author: {
			name: "Felipe Arancibia",
			role: "Navegante del Sur",
			avatar: "/hero.png",
		},
		copies: 62,
		image: "/hero.png",
		price: "~ $140 USD",
		location: "Puerto Varas, Los Lagos",
		description:
			"Navegación por los lagos del sur de Chile con vistas al volcán Osorno, acompañada de gastronomía local y pequeñas caminatas por bosques nativos.",
		tags: [
			"#Lagos",
			"#Volcanes",
			"#Navegación",
			"#Sur",
		],
		likes: 287,
		comments: 13,
	},
	{
		id: "exp-5",
		author: {
			name: "Ignacia Melo",
			role: "Foodie Viajera",
			avatar: "/hero.png",
		},
		copies: 115,
		image: "/hero.png",
		price: "~ $85 USD",
		location: "Valparaíso, Valparaíso",
		description:
			"Recorrido gastronómico por cerros y mercados tradicionales de Valparaíso, descubriendo sabores locales, cafés históricos y pequeños restaurantes escondidos.",
		tags: [
			"#Gastronomía",
			"#Valparaíso",
			"#Cultura",
			"#Sabores",
		],
		likes: 348,
		comments: 31,
	},
	{
		id: "exp-6",
		author: {
			name: "Gabriel Soto",
			role: "Mochilero Pro",
			avatar: "/hero.png",
		},
		copies: 88,
		image: "/hero.png",
		price: "~ $110 USD",
		location: "Cajón del Maipo, Santiago",
		description:
			"Una jornada de senderismo por los paisajes cordilleranos del Cajón del Maipo, visitando termas naturales y miradores alejados de las rutas tradicionales.",
		tags: [
			"#Cordillera",
			"#Senderismo",
			"#Termas",
			"#Santiago",
		],
		likes: 271,
		comments: 17,
	},
	{
		id: "exp-7",
		author: {
			name: "Fernanda Díaz",
			role: "Guardiana del Bosque",
			avatar: "/hero.png",
		},
		copies: 54,
		image: "/hero.png",
		price: "~ $75 USD",
		location: "Huilo Huilo, Los Ríos",
		description:
			"Exploración guiada por la reserva biológica Huilo Huilo entre cascadas, bosques húmedos, senderos y miradores escondidos en plena selva valdiviana.",
		tags: [
			"#Bosque",
			"#Cascadas",
			"#HuiloHuilo",
			"#Ecoturismo",
		],
		likes: 391,
		comments: 29,
	},
	{
		id: "exp-8",
		author: {
			name: "Andrés Vicuña",
			role: "Rutas Australes",
			avatar: "/hero.png",
		},
		copies: 47,
		image: "/hero.png",
		price: "~ $290 USD",
		location: "Carretera Austral, Aysén",
		description:
			"Travesía de varios días por algunos de los sectores más espectaculares de la Carretera Austral, combinando bicicleta, camping y navegación.",
		tags: [
			"#CarreteraAustral",
			"#Bicicleta",
			"#Camping",
			"#Aysén",
		],
		likes: 533,
		comments: 38,
	},
	{
		id: "exp-9",
		author: {
			name: "Daniela Fuentes",
			role: "Exploradora Costera",
			avatar: "/hero.png",
		},
		copies: 71,
		image: "/hero.png",
		price: "~ $95 USD",
		location: "Pichilemu, O'Higgins",
		description:
			"Experiencia de surf al amanecer en Pichilemu, acompañada de una ruta por la costa y una sesión de descanso frente al Pacífico.",
		tags: [
			"#Surf",
			"#Océano",
			"#Pichilemu",
			"#Amanecer",
		],
		likes: 264,
		comments: 16,
	},
	{
		id: "exp-10",
		author: {
			name: "Matías Leiva",
			role: "Observador Natural",
			avatar: "/hero.png",
		},
		copies: 39,
		image: "/hero.png",
		price: "~ $130 USD",
		location: "Chiloé, Los Lagos",
		description:
			"Ruta por pequeños pueblos e iglesias patrimoniales de Chiloé, incluyendo navegación, gastronomía tradicional y observación de fauna costera.",
		tags: [
			"#Chiloé",
			"#Patrimonio",
			"#Fauna",
			"#Cultura",
		],
		likes: 319,
		comments: 22,
	},
	{
		id: "exp-11",
		author: {
			name: "Camila Sepúlveda",
			role: "Cazadora de Auroras",
			avatar: "/hero.png",
		},
		copies: 83,
		image: "/hero.png",
		price: "~ $210 USD",
		location: "Punta Arenas, Magallanes",
		description:
			"Salida fotográfica nocturna por los alrededores de Punta Arenas para observar el cielo austral y aprender técnicas de fotografía de larga exposición.",
		tags: [
			"#Magallanes",
			"#Fotografía",
			"#CieloAustral",
			"#Noche",
		],
		likes: 457,
		comments: 35,
	},
	{
		id: "exp-12",
		author: {
			name: "Sebastián Morales",
			role: "Viajero Volcánico",
			avatar: "/hero.png",
		},
		copies: 68,
		image: "/hero.png",
		price: "~ $160 USD",
		location: "Pucón, La Araucanía",
		description:
			"Ascenso guiado por paisajes volcánicos cercanos a Pucón, con paradas en miradores, bosques de araucarias y sectores termales.",
		tags: [
			"#Pucón",
			"#Volcán",
			"#Araucarias",
			"#Aventura",
		],
		likes: 402,
		comments: 27,
	},
];



export const MOCK_THREADS: CommunityThread[] = [
	{
		id: "thread-1",
		category: "PATAGONIA",
		date: "2026-07-15",
		title:
			"Consejos para primerizos en el Trekking W - Temporada 2026/2027",
		description:
			"Abro este hilo para recopilar los mejores tips sobre equipaje ligero, calzado ideal, reserva de refugios y cómo manejar los impredecibles vientos patagónicos.",
		tags: [
			"#Patagonia",
			"#Equipaje",
			"#Seguridad",
		],
		author: {
			name: "Gabriel Soto",
			role: "Mochilero Pro 🎒",
			avatar: "/hero.png",
		},
		likes: 54,
		replies: 28,
	},
	{
		id: "thread-2",
		category: "NORTE GRANDE",
		date: "2026-07-12",
		title:
			"Mejores picadas y restaurantes en San Pedro de Atacama",
		description:
			"Comer rico y no pagar una fortuna en San Pedro es posible. Aquí comparto restaurantes, cafés y pequeñas picadas que descubrimos durante el viaje.",
		tags: [
			"#Atacama",
			"#Gastronomía",
			"#Presupuesto",
		],
		author: {
			name: "Ignacia Melo",
			role: "Foodie Viajera 🧀",
			avatar: "/hero.png",
		},
		likes: 42,
		replies: 19,
	},
	{
		id: "thread-3",
		category: "LAGOS Y VOLCANES",
		date: "2026-07-10",
		title:
			"Preparación para el cruce de lagos andinos hacia Bariloche",
		description:
			"¿Alguien ha hecho el cruce en bicicleta recientemente? Tengo dudas sobre aduanas, equipamiento y restricciones para las embarcaciones.",
		tags: [
			"#Cicloturismo",
			"#Frontera",
			"#Navegación",
		],
		author: {
			name: "Andrés Vicuña",
			role: "Rutas Australes 🚢",
			avatar: "/hero.png",
		},
		likes: 23,
		replies: 11,
	},
	{
		id: "thread-4",
		category: "VALLE DEL ELQUI",
		date: "2026-07-08",
		title:
			"¿Cuál es el mejor observatorio para visitar en el Valle del Elqui?",
		description:
			"Estoy planificando una escapada de tres días y quisiera recomendaciones de observatorios, horarios, tours nocturnos y lugares para hacer astrofotografía.",
		tags: [
			"#Astronomía",
			"#Elqui",
			"#Estrellas",
		],
		author: {
			name: "Isidora Alarcón",
			role: "Buscadora de Cielos ✨",
			avatar: "/hero.png",
		},
		likes: 86,
		replies: 34,
	},
	{
		id: "thread-5",
		category: "CHILOÉ",
		date: "2026-07-06",
		title:
			"Ruta de 5 días por Chiloé sin vehículo propio",
		description:
			"Comparto una ruta que hicimos utilizando buses locales y transporte marítimo para conocer Castro, Dalcahue, Achao y algunos parques cercanos.",
		tags: [
			"#Chiloé",
			"#Transporte",
			"#Ruta",
		],
		author: {
			name: "Camila Sepúlveda",
			role: "Viajera Insular 🌊",
			avatar: "/hero.png",
		},
		likes: 67,
		replies: 22,
	},
	{
		id: "thread-6",
		category: "VALPARAÍSO",
		date: "2026-07-03",
		title:
			"Murales, cafés y rincones poco conocidos de Valparaíso",
		description:
			"Más allá de Cerro Alegre y Cerro Concepción hay muchos lugares interesantes. Dejo algunos recorridos a pie para descubrir arte urbano y pequeños cafés.",
		tags: [
			"#Valparaíso",
			"#Arte",
			"#Cultura",
		],
		author: {
			name: "Daniela Fuentes",
			role: "Exploradora Urbana 🎨",
			avatar: "/hero.png",
		},
		likes: 73,
		replies: 17,
	},
	{
		id: "thread-7",
		category: "ARAUCANÍA",
		date: "2026-07-01",
		title:
			"Ascenso al Villarrica: equipo necesario y nivel físico",
		description:
			"Estoy pensando en realizar el ascenso durante la próxima temporada. ¿Qué nivel físico recomiendan y qué equipamiento normalmente entrega la agencia?",
		tags: [
			"#Villarrica",
			"#Montaña",
			"#Trekking",
		],
		author: {
			name: "Matías Leiva",
			role: "Viajero Volcánico 🌋",
			avatar: "/hero.png",
		},
		likes: 49,
		replies: 31,
	},
	{
		id: "thread-8",
		category: "AYSÉN",
		date: "2026-06-28",
		title:
			"Carretera Austral en bicicleta: presupuesto y campings",
		description:
			"Estoy preparando un viaje de varias semanas por la Carretera Austral. Me interesa conocer precios actuales de campings, alimentación y transporte.",
		tags: [
			"#Aysén",
			"#Bicicleta",
			"#Camping",
		],
		author: {
			name: "Felipe Arancibia",
			role: "Cicloviajero 🚲",
			avatar: "/hero.png",
		},
		likes: 102,
		replies: 46,
	},
	{
		id: "thread-9",
		category: "COSTA CENTRAL",
		date: "2026-06-25",
		title:
			"Playas tranquilas cerca de Pichilemu para principiantes",
		description:
			"Busco sectores con olas más amigables que Punta de Lobos para aprender surf. También agradecería datos de escuelas y arriendo de tablas.",
		tags: [
			"#Pichilemu",
			"#Surf",
			"#Playas",
		],
		author: {
			name: "Fernanda Díaz",
			role: "Exploradora Costera 🏄‍♀️",
			avatar: "/hero.png",
		},
		likes: 38,
		replies: 14,
	},
	{
		id: "thread-10",
		category: "MAGALLANES",
		date: "2026-06-22",
		title:
			"Qué hacer en Punta Arenas durante una escala de dos días",
		description:
			"Tendremos dos días completos antes de continuar hacia Puerto Natales. Busco recomendaciones de museos, gastronomía, miradores y excursiones cercanas.",
		tags: [
			"#Magallanes",
			"#PuntaArenas",
			"#Itinerario",
		],
		author: {
			name: "Tomás Herrera",
			role: "Explorador Austral 🧭",
			avatar: "/hero.png",
		},
		likes: 61,
		replies: 25,
	},
];


export type DestinyCategory =
	| "nature"
	| "gastronomy"
	| "lodging"
	| "point";

export interface DestinyPoi {
	id: string;
	name: string;
	location: string;
	category: DestinyCategory;

	image: string;

	description: string;

	rating: number;

	price?: string;
	duration?: string;
	level?: string;

	verdict?: string;

	pros?: string[];
	cons?: string[];

	position: {
		top: string;
		left: string;
	};
}

export const DESTINIES: DestinyPoi[] = [
	{
		id: "eco-lodge-kuyen",
		name: "Eco-Lodge Küyen",
		location: "Valle de la Luna, Atacama",
		category: "lodging",
		image: "/hero.png",
		description:
			"Alojamiento sustentable integrado en la arquitectura local, diseñado para disfrutar de la tranquilidad del desierto y la observación astronómica.",
		rating: 4.8,
		price: "~$180 USD",
		duration: "Por noche",
		level: "$$$$",
		verdict:
			"Una excelente alternativa para quienes buscan astroturismo, descanso y sustentabilidad en pleno desierto.",
		pros: [
			"Cúpulas de observación",
			"Energía solar",
			"Entorno silencioso",
		],
		cons: [
			"Tarifa elevada",
			"Requiere reserva",
		],
		position: {
			top: "20%",
			left: "18%",
		},
	},

	{
		id: "mirador-base-torres",
		name: "Mirador Base Torres",
		location: "Torres del Paine, Magallanes",
		category: "nature",
		image: "/hero.png",
		description:
			"Uno de los senderos más representativos de la Patagonia chilena, rodeado de montañas, bosques, ríos y lagunas glaciares.",
		rating: 4.9,
		price: "Entrada parque",
		duration: "6 - 8 horas",
		level: "Intermedio",
		verdict:
			"Una experiencia imprescindible para quienes disfrutan del trekking y los paisajes de alta montaña.",
		pros: [
			"Paisajes extraordinarios",
			"Senderos señalizados",
			"Fotografía espectacular",
		],
		cons: [
			"Alta demanda",
			"Clima cambiante",
		],
		position: {
			top: "80%",
			left: "36%",
		},
	},

	{
		id: "sky-costanera",
		name: "Sky Costanera",
		location: "Santiago, Región Metropolitana",
		category: "point",
		image: "/hero.png",
		description:
			"Mirador urbano que permite observar Santiago y la cordillera de los Andes desde uno de los puntos más altos de la ciudad.",
		rating: 4.5,
		price: "~$20 USD",
		duration: "1 - 2 horas",
		level: "Fácil",
		verdict:
			"Una excelente introducción visual a Santiago y su relación con la cordillera.",
		pros: [
			"Vista panorámica",
			"Acceso sencillo",
			"Ubicación central",
		],
		cons: [
			"Puede estar concurrido",
			"Experiencia corta",
		],
		position: {
			top: "48%",
			left: "32%",
		},
	},

	{
		id: "restaurant-fueguino",
		name: "Restaurante Fueguino",
		location: "Ushuaia, Tierra del Fuego",
		category: "gastronomy",
		image: "/hero.png",
		description:
			"Gastronomía austral basada en productos del mar, carnes patagónicas y preparaciones tradicionales de Tierra del Fuego.",
		rating: 4.7,
		price: "~$45 USD",
		duration: "1 - 2 horas",
		level: "$$$",
		verdict:
			"Una buena alternativa para descubrir sabores australes en un ambiente acogedor.",
		pros: [
			"Productos locales",
			"Buena gastronomía",
			"Ambiente cálido",
		],
		cons: [
			"Precio elevado",
			"Puede requerir reserva",
		],
		position: {
			top: "88%",
			left: "48%",
		},
	},

	{
		id: "geysers-tatio",
		name: "Géiseres del Tatio",
		location: "San Pedro de Atacama, Antofagasta",
		category: "nature",
		image: "/hero.png",
		description:
			"Campo geotérmico ubicado a gran altitud donde fumarolas y géiseres forman uno de los paisajes más singulares del norte de Chile.",
		rating: 4.8,
		price: "~$40 USD",
		duration: "5 - 6 horas",
		level: "Moderado",
		verdict:
			"Vale la pena levantarse antes del amanecer para observar el campo geotérmico en su momento de mayor actividad.",
		pros: [
			"Paisaje único",
			"Amanecer espectacular",
			"Actividad geotérmica",
		],
		cons: [
			"Mucho frío",
			"Gran altitud",
		],
		position: {
			top: "14%",
			left: "32%",
		},
	},

	{
		id: "termas-geometricas",
		name: "Termas Geométricas",
		location: "Coñaripe, Los Ríos",
		category: "nature",
		image: "/hero.png",
		description:
			"Complejo termal integrado a un bosque nativo, con piscinas de agua caliente conectadas mediante pasarelas de madera.",
		rating: 4.9,
		price: "~$55 USD",
		duration: "3 - 4 horas",
		level: "Fácil",
		verdict:
			"Una de las experiencias termales más completas y visualmente atractivas del sur de Chile.",
		pros: [
			"Bosque nativo",
			"Aguas termales",
			"Excelente infraestructura",
		],
		cons: [
			"Entrada costosa",
			"Alta demanda",
		],
		position: {
			top: "61%",
			left: "37%",
		},
	},

	{
		id: "hotel-patagonia-camp",
		name: "Patagonia Camp",
		location: "Torres del Paine, Magallanes",
		category: "lodging",
		image: "/hero.png",
		description:
			"Alojamiento tipo yurta inmerso en el paisaje patagónico, con vistas privilegiadas hacia montañas, bosques y lagos.",
		rating: 4.9,
		price: "~$420 USD",
		duration: "Por noche",
		level: "$$$$$",
		verdict:
			"Una experiencia premium para disfrutar la Patagonia sin renunciar al confort.",
		pros: [
			"Ubicación privilegiada",
			"Vistas espectaculares",
			"Alta comodidad",
		],
		cons: [
			"Precio muy elevado",
			"Disponibilidad limitada",
		],
		position: {
			top: "77%",
			left: "56%",
		},
	},

	{
		id: "palafitos-castro",
		name: "Palafitos de Castro",
		location: "Castro, Chiloé",
		category: "point",
		image: "/hero.png",
		description:
			"Tradicional conjunto de viviendas construidas sobre pilotes en el borde costero de Castro, uno de los símbolos visuales de Chiloé.",
		rating: 4.6,
		price: "Gratis",
		duration: "1 hora",
		level: "Fácil",
		verdict:
			"Una parada sencilla pero imprescindible para entender la identidad arquitectónica chilota.",
		pros: [
			"Arquitectura tradicional",
			"Buenas fotografías",
			"Acceso gratuito",
		],
		cons: [
			"Visita breve",
			"Depende de la marea",
		],
		position: {
			top: "66%",
			left: "48%",
		},
	},

	{
		id: "marble-caves",
		name: "Capillas de Mármol",
		location: "Puerto Río Tranquilo, Aysén",
		category: "nature",
		image: "/hero.png",
		description:
			"Formaciones minerales esculpidas por las aguas del Lago General Carrera durante miles de años.",
		rating: 4.9,
		price: "~$35 USD",
		duration: "2 horas",
		level: "Fácil",
		verdict:
			"Uno de los paisajes naturales más singulares de la Carretera Austral.",
		pros: [
			"Formaciones únicas",
			"Agua turquesa",
			"Excelente fotografía",
		],
		cons: [
			"Dependiente del clima",
			"Acceso remoto",
		],
		position: {
			top: "71%",
			left: "28%",
		},
	},

	{
		id: "restaurant-borago",
		name: "Boragó",
		location: "Vitacura, Santiago",
		category: "gastronomy",
		image: "/hero.png",
		description:
			"Propuesta gastronómica contemporánea inspirada en ingredientes, territorios y ecosistemas de Chile.",
		rating: 4.8,
		price: "~$180 USD",
		duration: "3 horas",
		level: "$$$$$",
		verdict:
			"Una experiencia gastronómica especial para quienes buscan conocer Chile a través de sus ingredientes.",
		pros: [
			"Cocina innovadora",
			"Ingredientes chilenos",
			"Experiencia completa",
		],
		cons: [
			"Precio elevado",
			"Reserva anticipada",
		],
		position: {
			top: "45%",
			left: "48%",
		},
	},

	{
		id: "alto-atacama",
		name: "Nayara Alto Atacama",
		location: "San Pedro de Atacama, Antofagasta",
		category: "lodging",
		image: "/hero.png",
		description:
			"Hotel integrado al paisaje desértico con arquitectura inspirada en las construcciones tradicionales de la zona.",
		rating: 4.8,
		price: "~$380 USD",
		duration: "Por noche",
		level: "$$$$$",
		verdict:
			"Una opción de alto nivel para explorar Atacama desde un alojamiento integrado al entorno.",
		pros: [
			"Excelente ubicación",
			"Diseño integrado",
			"Servicios premium",
		],
		cons: [
			"Tarifa elevada",
			"Alta demanda",
		],
		position: {
			top: "25%",
			left: "43%",
		},
	},

	{
		id: "cerro-san-cristobal",
		name: "Cerro San Cristóbal",
		location: "Santiago, Región Metropolitana",
		category: "point",
		image: "/hero.png",
		description:
			"Uno de los principales miradores naturales de Santiago, accesible mediante senderos, teleférico y funicular.",
		rating: 4.6,
		price: "Gratis / transporte",
		duration: "2 - 3 horas",
		level: "Fácil",
		verdict:
			"Uno de los mejores lugares para obtener una vista panorámica de Santiago sin alejarse de la ciudad.",
		pros: [
			"Vista de Santiago",
			"Varias formas de acceso",
			"Amplias áreas verdes",
		],
		cons: [
			"Alta afluencia",
			"Smog algunos días",
		],
		position: {
			top: "51%",
			left: "58%",
		},
	},

	{
		id: "saltos-petrohue",
		name: "Saltos del Petrohué",
		location: "Puerto Varas, Los Lagos",
		category: "nature",
		image: "/hero.png",
		description:
			"Conjunto de rápidos y cascadas de aguas color turquesa con el volcán Osorno como parte del paisaje.",
		rating: 4.8,
		price: "Entrada parque",
		duration: "2 horas",
		level: "Fácil",
		verdict:
			"Una visita breve pero muy recomendable dentro de una ruta por la zona de Puerto Varas.",
		pros: [
			"Agua turquesa",
			"Vista al volcán",
			"Acceso sencillo",
		],
		cons: [
			"Puede estar concurrido",
			"Clima lluvioso",
		],
		position: {
			top: "62%",
			left: "61%",
		},
	},

	{
		id: "mercado-cardonal",
		name: "Mercado Cardonal",
		location: "Valparaíso, Valparaíso",
		category: "gastronomy",
		image: "/hero.png",
		description:
			"Mercado tradicional donde es posible encontrar productos frescos, comida chilena y parte importante de la vida cotidiana porteña.",
		rating: 4.4,
		price: "~$15 USD",
		duration: "1 - 2 horas",
		level: "$",
		verdict:
			"Una alternativa auténtica para conocer la gastronomía cotidiana de Valparaíso.",
		pros: [
			"Precios accesibles",
			"Ambiente local",
			"Comida tradicional",
		],
		cons: [
			"Zona concurrida",
			"Infraestructura sencilla",
		],
		position: {
			top: "42%",
			left: "68%",
		},
	},

	{
		id: "explora-rapa-nui",
		name: "Explora Rapa Nui",
		location: "Rapa Nui, Valparaíso",
		category: "lodging",
		image: "/hero.png",
		description:
			"Alojamiento enfocado en la exploración de Rapa Nui mediante rutas culturales, arqueológicas y naturales.",
		rating: 4.9,
		price: "~$550 USD",
		duration: "Por noche",
		level: "$$$$$",
		verdict:
			"Una experiencia de alto nivel para explorar la cultura y los paisajes de Rapa Nui.",
		pros: [
			"Excursiones guiadas",
			"Paisajes únicos",
			"Excelente servicio",
		],
		cons: [
			"Precio muy elevado",
			"Viaje aéreo necesario",
		],
		position: {
			top: "35%",
			left: "82%",
		},
	},
];

export const destinyCategoryStyles: Record<
	DestinyCategory,
	string
> = {
	nature: "bg-emerald-500",
	gastronomy: "bg-rose-500",
	lodging: "bg-indigo-500",
	point: "bg-sky-500",
};