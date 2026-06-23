export interface Post {
  id: string;
  image: string;
  likes: number;
  comments: number;
  engagementRate: number;
  type: 'photo' | 'video' | 'carousel' | 'reel';
  date: string;
  caption: string;
}

export interface HistoryData {
  date: string;
  followers: number;
  er: number;
}

export interface InstagramProfile {
  username: string;
  fullName: string;
  avatar: string;
  followers: number;
  following: number;
  postsCount: number;
  engagementRate: number;
  category: string;
  bio: string;
  monthlyHistory: { date: string; followers: number }[];
  weeklyERHistory: { date: string; er: number }[];
  posts: Post[];
  hourlyEngagement: { hour: string; value: number }[];
}

export const mockProfiles: InstagramProfile[] = [
  {
    username: "tech_gustavo",
    fullName: "Gustavo | Tech & Dev",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
    followers: 45200,
    following: 450,
    postsCount: 148,
    engagementRate: 5.65,
    category: "Tecnologia & Programação",
    bio: "Construindo coisas incríveis com React & Tailwind 💻 | Reviews de Tecnologia | Viciado em Café ☕ | São Paulo, Brasil.",
    monthlyHistory: [
      { date: "Jan", followers: 38000 },
      { date: "Fev", followers: 39500 },
      { date: "Mar", followers: 41200 },
      { date: "Abr", followers: 42800 },
      { date: "Mai", followers: 44100 },
      { date: "Jun", followers: 45200 },
    ],
    weeklyERHistory: [
      { date: "Sem 1", er: 5.10 },
      { date: "Sem 2", er: 5.42 },
      { date: "Sem 3", er: 5.25 },
      { date: "Sem 4", er: 5.65 },
    ],
    hourlyEngagement: [
      { hour: "08:00", value: 35 },
      { hour: "10:00", value: 45 },
      { hour: "12:00", value: 75 },
      { hour: "14:00", value: 50 },
      { hour: "16:00", value: 55 },
      { hour: "18:00", value: 85 },
      { hour: "20:00", value: 95 },
      { hour: "22:00", value: 70 },
    ],
    posts: [
      {
        id: "tg_1",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 2310,
        comments: 245,
        engagementRate: 5.65,
        type: "reel",
        date: "1 dia atrás",
        caption: "Meu setup dos sonhos atualizado de 2026! O que você mudaria aqui? 👇🔥 #setup #gamingsetup #developer #code"
      },
      {
        id: "tg_2",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 1980,
        comments: 185,
        engagementRate: 4.79,
        type: "carousel",
        date: "3 dias atrás",
        caption: "5 extensões do VS Code que salvam a minha vida todos os dias. Salve para não esquecer! 💾 #coding #vscode #webdev"
      },
      {
        id: "tg_3",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 1850,
        comments: 140,
        engagementRate: 4.40,
        type: "photo",
        date: "1 semana atrás",
        caption: "Focando nos projetos de hoje. O café já está pronto! E você, está trabalhando em que? ☕💻 #devlife #buildinpublic"
      },
      {
        id: "tg_4",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 1610,
        comments: 110,
        engagementRate: 3.81,
        type: "carousel",
        date: "2 semanas atrás",
        caption: "Guia completo sobre React 19 em 5 slides. Qual a sua novidade favorita? 🚀 #reactjs #frontend #programador"
      }
    ]
  },
  {
    username: "gourmet_bites",
    fullName: "Gourmet Bites | Food & Travel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    followers: 124500,
    following: 842,
    postsCount: 312,
    engagementRate: 4.82,
    category: "Gastronomia & Estilo de Vida",
    bio: "Explorando o mundo uma refeição por vez. 📍 São Paulo, Brasil. Contato comercial: contato@gourmetbites.com 🍕✈️",
    monthlyHistory: [
      { date: "Jan", followers: 110000 },
      { date: "Fev", followers: 112500 },
      { date: "Mar", followers: 115000 },
      { date: "Abr", followers: 118200 },
      { date: "Mai", followers: 121000 },
      { date: "Jun", followers: 124500 },
    ],
    weeklyERHistory: [
      { date: "Sem 1", er: 4.20 },
      { date: "Sem 2", er: 4.51 },
      { date: "Sem 3", er: 4.38 },
      { date: "Sem 4", er: 4.82 },
    ],
    hourlyEngagement: [
      { hour: "08:00", value: 20 },
      { hour: "10:00", value: 35 },
      { hour: "12:00", value: 90 },
      { hour: "14:00", value: 60 },
      { hour: "16:00", value: 40 },
      { hour: "18:00", value: 75 },
      { hour: "20:00", value: 98 },
      { hour: "22:00", value: 65 },
    ],
    posts: [
      {
        id: "gb_1",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 5420,
        comments: 580,
        engagementRate: 4.82,
        type: "carousel",
        date: "2 dias atrás",
        caption: "O melhor hambúrguer artesanal de SP! Com quem você dividiria essa maravilha? 👇🍔 #burger #spfood #review"
      },
      {
        id: "gb_2",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 4120,
        comments: 320,
        engagementRate: 3.57,
        type: "reel",
        date: "5 dias atrás",
        caption: "Dica de restaurante romântico no coração da cidade 🍷✨ Ideal para um date! #restaurante #sp #dateideas"
      },
      {
        id: "gb_3",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 3920,
        comments: 280,
        engagementRate: 3.37,
        type: "photo",
        date: "1 semana atrás",
        caption: "Começando o dia com esse café da manhã perfeito no hotel. Bom dia! ☕🥐 #breakfast #travelgram"
      },
      {
        id: "gb_4",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 3240,
        comments: 190,
        engagementRate: 2.76,
        type: "photo",
        date: "2 semanas atrás",
        caption: "Quem também ama um doce de sobremesa? Esse petit gâteau estava incrível! 🍫🍨 #sweet #sobremesa"
      }
    ]
  },
  {
    username: "fit_clara",
    fullName: "Clara Fit | Healthy Habits",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    followers: 87900,
    following: 520,
    postsCount: 284,
    engagementRate: 3.42,
    category: "Saúde, Fitness & Bem-estar",
    bio: "Te ajudo a encontrar sua melhor versão com treinos funcionais simples e receitas saudáveis de verdade! 💪🥗 Comece hoje!",
    monthlyHistory: [
      { date: "Jan", followers: 82000 },
      { date: "Fev", followers: 83100 },
      { date: "Mar", followers: 84500 },
      { date: "Abr", followers: 85800 },
      { date: "Mai", followers: 86900 },
      { date: "Jun", followers: 87900 },
    ],
    weeklyERHistory: [
      { date: "Sem 1", er: 3.10 },
      { date: "Sem 2", er: 3.32 },
      { date: "Sem 3", er: 3.20 },
      { date: "Sem 4", er: 3.42 },
    ],
    hourlyEngagement: [
      { hour: "08:00", value: 65 },
      { hour: "10:00", value: 45 },
      { hour: "12:00", value: 50 },
      { hour: "14:00", value: 35 },
      { hour: "16:00", value: 55 },
      { hour: "18:00", value: 92 },
      { hour: "20:00", value: 80 },
      { hour: "22:00", value: 40 },
    ],
    posts: [
      {
        id: "fc_1",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 2710,
        comments: 290,
        engagementRate: 3.42,
        type: "reel",
        date: "3 dias atrás",
        caption: "Treino de abdômen rápido de 10 minutos para fazer em casa! Sem desculpas hoje 💪 #homeworkout #fitness #abs"
      },
      {
        id: "fc_2",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 2240,
        comments: 160,
        engagementRate: 2.73,
        type: "carousel",
        date: "6 dias atrás",
        caption: "3 substituições saudáveis que fazem muita diferença no seu emagrecimento sem sofrer 🥗✨ #healthyfood #diet"
      },
      {
        id: "fc_3",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 1920,
        comments: 110,
        engagementRate: 2.31,
        type: "photo",
        date: "1 semana atrás",
        caption: "A constância supera a intensidade. Continue firme no seu propósito de hoje! 🌟 #motivação #foco #wellness"
      },
      {
        id: "fc_4",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=400",
        likes: 1620,
        comments: 95,
        engagementRate: 1.95,
        type: "reel",
        date: "2 semanas atrás",
        caption: "Receita de panqueca de aveia proteica super rápida e deliciosa pro café da manhã 🥞🍓 #fitrecipes #alimentacao"
      }
    ]
  }
];

// Helper to generate a new mock profile
export function generateMockProfile(username: string, fullName: string, category: string): InstagramProfile {
  const followers = Math.floor(Math.random() * 80000) + 15000;
  const following = Math.floor(Math.random() * 800) + 200;
  const postsCount = Math.floor(Math.random() * 150) + 40;
  
  // Calculate average likes and comments to reach a realistic engagement rate (e.g., 2% to 6%)
  const engagementRate = parseFloat((Math.random() * 4 + 2).toFixed(2)); // 2.00 - 6.00%
  const totalInteractionsNeeded = Math.round((followers * engagementRate) / 100);
  const avgLikes = Math.round(totalInteractionsNeeded * 0.93);
  const avgComments = Math.round(totalInteractionsNeeded * 0.07);

  const images = [
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600&h=400"
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  ];

  const monthlyHistory = [
    { date: "Jan", followers: Math.round(followers * 0.85) },
    { date: "Fev", followers: Math.round(followers * 0.88) },
    { date: "Mar", followers: Math.round(followers * 0.91) },
    { date: "Abr", followers: Math.round(followers * 0.94) },
    { date: "Mai", followers: Math.round(followers * 0.97) },
    { date: "Jun", followers: followers },
  ];

  const weeklyERHistory = [
    { date: "Sem 1", er: parseFloat((engagementRate - 0.4).toFixed(2)) },
    { date: "Sem 2", er: parseFloat((engagementRate + 0.2).toFixed(2)) },
    { date: "Sem 3", er: parseFloat((engagementRate - 0.1).toFixed(2)) },
    { date: "Sem 4", er: engagementRate },
  ];

  const hourlyEngagement = [
    { hour: "08:00", value: Math.floor(Math.random() * 40) + 20 },
    { hour: "10:00", value: Math.floor(Math.random() * 40) + 30 },
    { hour: "12:00", value: Math.floor(Math.random() * 50) + 45 },
    { hour: "14:00", value: Math.floor(Math.random() * 30) + 20 },
    { hour: "16:00", value: Math.floor(Math.random() * 40) + 30 },
    { hour: "18:00", value: Math.floor(Math.random() * 50) + 50 },
    { hour: "20:00", value: Math.floor(Math.random() * 40) + 60 },
    { hour: "22:00", value: Math.floor(Math.random() * 40) + 30 },
  ];

  const posts: Post[] = [
    {
      id: `custom_${username}_1`,
      image: images[0],
      likes: Math.round(avgLikes * 1.3),
      comments: Math.round(avgComments * 1.4),
      engagementRate: parseFloat((engagementRate * 1.3).toFixed(2)),
      type: "reel",
      date: "1 dia atrás",
      caption: `Explorando novidades em ${category}! O que acharam deste post? Comentem abaixo 👇✨ #novidade #trending #sucesso`
    },
    {
      id: `custom_${username}_2`,
      image: images[1],
      likes: Math.round(avgLikes * 1.0),
      comments: Math.round(avgComments * 1.0),
      engagementRate: engagementRate,
      type: "carousel",
      date: "4 dias atrás",
      caption: `3 dicas rápidas para você implementar ainda hoje. Salve este post para consultar depois! 💾📌 #dicas #aprendizado`
    },
    {
      id: `custom_${username}_3`,
      image: images[2],
      likes: Math.round(avgLikes * 0.95),
      comments: Math.round(avgComments * 0.9),
      engagementRate: parseFloat((engagementRate * 0.93).toFixed(2)),
      type: "photo",
      date: "1 semana atrás",
      caption: `A constância é a chave para o sucesso. Vamos com tudo nessa semana! 🚀💼 #motivação #foco #trabalho`
    },
    {
      id: `custom_${username}_4`,
      image: images[3],
      likes: Math.round(avgLikes * 0.8),
      comments: Math.round(avgComments * 0.7),
      engagementRate: parseFloat((engagementRate * 0.78).toFixed(2)),
      type: "video",
      date: "2 semanas atrás",
      caption: `Confira os bastidores do nosso último projeto em ${category}. Bastante trabalho e dedicação envolvidos! 🎥🔥 #bastidores #behindthescenes`
    }
  ];

  return {
    username,
    fullName,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    followers,
    following,
    postsCount,
    engagementRate,
    category,
    bio: `Perfil demonstrativo de ${category}. Criado para análise de métricas de engajamento no Instagram. 🚀📊`,
    monthlyHistory,
    weeklyERHistory,
    hourlyEngagement,
    posts
  };
}
