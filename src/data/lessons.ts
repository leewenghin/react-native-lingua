import type { LanguageCode, Lesson } from "@/types/learning";

const spanishLessons: Lesson[] = [
  {
    id: "es-u1-l1",
    languageCode: "es",
    unitId: "es-unit-1",
    number: 1,
    title: "Say Hello",
    subtitle: "Your first Spanish greeting",
    description: "Learn how to greet someone in the morning, afternoon, and evening.",
    imageKey: "greetings",
    estimatedMinutes: 5,
    goals: [
      { id: "es-u1-l1-g1", description: "Say hello in Spanish at any time of day." },
      { id: "es-u1-l1-g2", description: "Recognize common greeting words by ear." },
    ],
    vocabulary: [
      { id: "es-u1-l1-v1", term: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { id: "es-u1-l1-v2", term: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nos DEE-as" },
      { id: "es-u1-l1-v3", term: "Buenas tardes", translation: "Good afternoon", pronunciation: "BWEH-nas TAR-des" },
      { id: "es-u1-l1-v4", term: "Buenas noches", translation: "Good evening / Good night", pronunciation: "BWEH-nas NO-ches" },
    ],
    phrases: [
      { id: "es-u1-l1-p1", phrase: "¡Hola!", translation: "Hi!", context: "Casual greeting with anyone." },
      { id: "es-u1-l1-p2", phrase: "Buenos días.", translation: "Good morning.", context: "Used until around noon." },
      { id: "es-u1-l1-p3", phrase: "Buenas tardes.", translation: "Good afternoon.", context: "Used from noon to evening." },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "repeat_phrase",
        title: "Repeat the greeting",
        prompt: "Say hello in Spanish.",
        targetAnswer: "Hola",
        hints: ["It sounds like OH-lah."],
      },
      {
        id: "es-u1-l1-a2",
        type: "translate",
        title: "Morning greeting",
        prompt: "How do you say 'Good morning'?",
        targetAnswer: "Buenos días",
      },
      {
        id: "es-u1-l1-a3",
        type: "listen_and_respond",
        title: "Pick the right greeting",
        prompt: "Someone says 'Buenas tardes.' What time of day is it?",
        targetAnswer: "Afternoon",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, energetic Spanish teacher. Speak mostly in English. Teach only this lesson's greetings: Hola, Buenos días, Buenas tardes, and Buenas noches. Introduce one phrase at a time with pronunciation help. Keep replies to one or two short sentences. Ask the student to repeat each phrase.",
      openingLine:
        "Hey! Let's learn your first Spanish greetings. Repeat after me: Hola — that means hello.",
      teachingNotes: [
        "Stay on greeting vocabulary only.",
        "Use gentle encouragement after each attempt.",
        "Do not switch to French or Japanese.",
      ],
    },
  },
  {
    id: "es-u1-l2",
    languageCode: "es",
    unitId: "es-unit-1",
    number: 2,
    title: "Introduce Yourself",
    subtitle: "Share your name in Spanish",
    description: "Practice telling someone your name and asking for theirs.",
    imageKey: "culture",
    estimatedMinutes: 6,
    goals: [
      { id: "es-u1-l2-g1", description: "Say your name using 'Me llamo'." },
      { id: "es-u1-l2-g2", description: "Ask someone what their name is." },
    ],
    vocabulary: [
      { id: "es-u1-l2-v1", term: "Me llamo", translation: "My name is / I'm called", pronunciation: "meh YAH-mo" },
      { id: "es-u1-l2-v2", term: "¿Cómo te llamas?", translation: "What's your name?", pronunciation: "KOH-mo teh YAH-mas" },
      { id: "es-u1-l2-v3", term: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-cho GOOS-to" },
      { id: "es-u1-l2-v4", term: "Yo", translation: "I", pronunciation: "yo" },
    ],
    phrases: [
      { id: "es-u1-l2-p1", phrase: "Me llamo Alex.", translation: "My name is Alex.", context: "Replace Alex with your name." },
      { id: "es-u1-l2-p2", phrase: "¿Cómo te llamas?", translation: "What's your name?", context: "Informal, with friends." },
      { id: "es-u1-l2-p3", phrase: "Mucho gusto.", translation: "Nice to meet you.", context: "After someone introduces themselves." },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "fill_in_blank",
        title: "Complete the introduction",
        prompt: "Me ___ Maria.",
        targetAnswer: "llamo",
        hints: ["It means 'I am called'."],
      },
      {
        id: "es-u1-l2-a2",
        type: "translate",
        title: "Ask a question",
        prompt: "How do you ask 'What's your name?' informally?",
        targetAnswer: "¿Cómo te llamas?",
      },
      {
        id: "es-u1-l2-a3",
        type: "repeat_phrase",
        title: "Nice to meet you",
        prompt: "Say 'Nice to meet you' in Spanish.",
        targetAnswer: "Mucho gusto",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher. Teach only introductions: Me llamo, ¿Cómo te llamas?, and Mucho gusto. Speak mostly English, add Spanish slowly, and ask the student to introduce themselves. Keep responses short and conversational.",
      openingLine:
        "Great to see you again! Today we'll introduce ourselves. Try this: Me llamo — it means 'My name is.'",
      teachingNotes: [
        "Have the student say their own name with Me llamo.",
        "Praise effort, then ask them to ask your name in Spanish.",
      ],
    },
  },
  {
    id: "es-u1-l3",
    languageCode: "es",
    unitId: "es-unit-1",
    number: 3,
    title: "How Are You?",
    subtitle: "Check in with someone",
    description: "Ask and answer simple questions about how someone is feeling.",
    imageKey: "palace",
    estimatedMinutes: 6,
    goals: [
      { id: "es-u1-l3-g1", description: "Ask 'How are you?' in Spanish." },
      { id: "es-u1-l3-g2", description: "Reply with basic feelings like fine or tired." },
    ],
    vocabulary: [
      { id: "es-u1-l3-v1", term: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-mo es-TAS" },
      { id: "es-u1-l3-v2", term: "Bien", translation: "Well / Fine", pronunciation: "byen" },
      { id: "es-u1-l3-v3", term: "Muy bien", translation: "Very well", pronunciation: "mwee byen" },
      { id: "es-u1-l3-v4", term: "Cansado / Cansada", translation: "Tired (m/f)", pronunciation: "kan-SAH-do / kan-SAH-da" },
    ],
    phrases: [
      { id: "es-u1-l3-p1", phrase: "¿Cómo estás?", translation: "How are you?", context: "Informal check-in." },
      { id: "es-u1-l3-p2", phrase: "Estoy bien, gracias.", translation: "I'm fine, thank you.", context: "Polite positive reply." },
      { id: "es-u1-l3-p3", phrase: "Muy bien, ¿y tú?", translation: "Very well, and you?", context: "Return the question." },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "translate",
        title: "How are you?",
        prompt: "Translate: How are you?",
        targetAnswer: "¿Cómo estás?",
      },
      {
        id: "es-u1-l3-a2",
        type: "vocabulary_match",
        title: "Match the feeling",
        prompt: "Which word means 'very well'?",
        targetAnswer: "Muy bien",
      },
      {
        id: "es-u1-l3-a3",
        type: "listen_and_respond",
        title: "Reply politely",
        prompt: "Someone asks '¿Cómo estás?' Say you're fine and thank them.",
        targetAnswer: "Estoy bien, gracias.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are an upbeat Spanish teacher focusing on ¿Cómo estás?, Bien, Muy bien, and Estoy bien, gracias. Use English explanations, short examples, and ask the student to answer how they feel today in Spanish.",
      openingLine:
        "Let's check in with someone in Spanish. The question is ¿Cómo estás? — how are you?",
      teachingNotes: [
        "Model a full question-and-answer exchange.",
        "If the student struggles, offer the phrase in smaller pieces.",
      ],
    },
  },
  {
    id: "es-u2-l1",
    languageCode: "es",
    unitId: "es-unit-2",
    number: 4,
    title: "Order a Drink",
    subtitle: "At a café in Spanish",
    description: "Use polite phrases to order coffee or water.",
    imageKey: "food",
    estimatedMinutes: 7,
    goals: [
      { id: "es-u2-l1-g1", description: "Use 'Quiero' to order something politely." },
      { id: "es-u2-l1-g2", description: "Say please and thank you while ordering." },
    ],
    vocabulary: [
      { id: "es-u2-l1-v1", term: "Quiero", translation: "I want / I would like", pronunciation: "kee-EH-ro" },
      { id: "es-u2-l1-v2", term: "Café", translation: "Coffee", pronunciation: "ka-FEH" },
      { id: "es-u2-l1-v3", term: "Agua", translation: "Water", pronunciation: "AH-gwa" },
      { id: "es-u2-l1-v4", term: "Por favor", translation: "Please", pronunciation: "por fa-VOR" },
      { id: "es-u2-l1-v5", term: "Gracias", translation: "Thank you", pronunciation: "GRAH-syas" },
    ],
    phrases: [
      { id: "es-u2-l1-p1", phrase: "Quiero un café, por favor.", translation: "I'd like a coffee, please.", context: "Ordering at a café." },
      { id: "es-u2-l1-p2", phrase: "Quiero agua, por favor.", translation: "I'd like water, please.", context: "Simple drink order." },
      { id: "es-u2-l1-p3", phrase: "Gracias.", translation: "Thank you.", context: "After receiving your order." },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "fill_in_blank",
        title: "Polite order",
        prompt: "Quiero un café, ___.",
        targetAnswer: "por favor",
      },
      {
        id: "es-u2-l1-a2",
        type: "translate",
        title: "Order water",
        prompt: "Say 'I'd like water, please.'",
        targetAnswer: "Quiero agua, por favor.",
      },
      {
        id: "es-u2-l1-a3",
        type: "repeat_phrase",
        title: "Say thank you",
        prompt: "Say thank you in Spanish.",
        targetAnswer: "Gracias",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a cheerful Spanish café teacher. Teach only ordering phrases with Quiero, café, agua, por favor, and gracias. Role-play a barista scene in English with Spanish phrases sprinkled in. Keep it warm and practical.",
      openingLine:
        "Welcome to our little café! If you want something, you can say Quiero — I would like.",
      teachingNotes: [
        "Role-play ordering one drink at a time.",
        "Remind the student to add por favor and gracias.",
      ],
    },
  },
  {
    id: "es-u2-l2",
    languageCode: "es",
    unitId: "es-unit-2",
    number: 5,
    title: "Ask for Directions",
    subtitle: "Find your way in Spanish",
    description: "Ask where something is and understand simple location words.",
    imageKey: "travel",
    estimatedMinutes: 7,
    goals: [
      { id: "es-u2-l2-g1", description: "Ask where the bathroom or station is." },
      { id: "es-u2-l2-g2", description: "Understand left, right, and straight ahead." },
    ],
    vocabulary: [
      { id: "es-u2-l2-v1", term: "¿Dónde está...?", translation: "Where is...?", pronunciation: "DON-de es-TAH" },
      { id: "es-u2-l2-v2", term: "El baño", translation: "The bathroom", pronunciation: "el BAH-nyo" },
      { id: "es-u2-l2-v3", term: "A la derecha", translation: "To the right", pronunciation: "a la de-RE-cha" },
      { id: "es-u2-l2-v4", term: "A la izquierda", translation: "To the left", pronunciation: "a la is-kee-EHR-da" },
      { id: "es-u2-l2-v5", term: "Todo recto", translation: "Straight ahead", pronunciation: "TO-do REK-to" },
    ],
    phrases: [
      { id: "es-u2-l2-p1", phrase: "¿Dónde está el baño?", translation: "Where is the bathroom?", context: "Very useful travel phrase." },
      { id: "es-u2-l2-p2", phrase: "A la derecha.", translation: "To the right.", context: "Giving or hearing directions." },
      { id: "es-u2-l2-p3", phrase: "Todo recto.", translation: "Straight ahead.", context: "Simple direction instruction." },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "translate",
        title: "Find the bathroom",
        prompt: "Ask where the bathroom is.",
        targetAnswer: "¿Dónde está el baño?",
      },
      {
        id: "es-u2-l2-a2",
        type: "vocabulary_match",
        title: "Direction match",
        prompt: "Which phrase means 'to the left'?",
        targetAnswer: "A la izquierda",
      },
      {
        id: "es-u2-l2-a3",
        type: "listen_and_respond",
        title: "Go straight",
        prompt: "How do you say 'straight ahead'?",
        targetAnswer: "Todo recto",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a helpful Spanish travel teacher. Focus on ¿Dónde está...?, el baño, a la derecha, a la izquierda, and todo recto. Give mini direction scenarios and ask the student to repeat key phrases.",
      openingLine:
        "Need to find something in a new city? Start with ¿Dónde está...? — where is...?",
      teachingNotes: [
        "Use one location example, like the bathroom.",
        "Keep directions to one short instruction at a time.",
      ],
    },
  },
  {
    id: "es-u2-l3",
    languageCode: "es",
    unitId: "es-unit-2",
    number: 6,
    title: "Thank You and Goodbye",
    subtitle: "Close a conversation politely",
    description: "Wrap up conversations with thanks, you're welcome, and goodbye.",
    imageKey: "treasure",
    estimatedMinutes: 5,
    goals: [
      { id: "es-u2-l3-g1", description: "Say thank you and you're welcome." },
      { id: "es-u2-l3-g2", description: "Say goodbye in a friendly way." },
    ],
    vocabulary: [
      { id: "es-u2-l3-v1", term: "Gracias", translation: "Thank you", pronunciation: "GRAH-syas" },
      { id: "es-u2-l3-v2", term: "De nada", translation: "You're welcome", pronunciation: "de NA-da" },
      { id: "es-u2-l3-v3", term: "Adiós", translation: "Goodbye", pronunciation: "a-DYOHS" },
      { id: "es-u2-l3-v4", term: "Hasta luego", translation: "See you later", pronunciation: "AHS-ta LWEH-go" },
    ],
    phrases: [
      { id: "es-u2-l3-p1", phrase: "Muchas gracias.", translation: "Thank you very much.", context: "Extra polite thanks." },
      { id: "es-u2-l3-p2", phrase: "De nada.", translation: "You're welcome.", context: "Response to gracias." },
      { id: "es-u2-l3-p3", phrase: "Hasta luego.", translation: "See you later.", context: "Friendly goodbye." },
    ],
    activities: [
      {
        id: "es-u2-l3-a1",
        type: "translate",
        title: "You're welcome",
        prompt: "How do you say 'You're welcome'?",
        targetAnswer: "De nada",
      },
      {
        id: "es-u2-l3-a2",
        type: "repeat_phrase",
        title: "See you later",
        prompt: "Say 'See you later' in Spanish.",
        targetAnswer: "Hasta luego",
      },
      {
        id: "es-u2-l3-a3",
        type: "listen_and_respond",
        title: "Polite exchange",
        prompt: "Someone says 'Gracias.' What do you reply?",
        targetAnswer: "De nada",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a kind Spanish teacher wrapping up a lesson on gracias, de nada, adiós, and hasta luego. Practice short polite exchanges and end with a friendly goodbye in Spanish.",
      openingLine:
        "Let's finish strong with polite Spanish. When someone helps you, say Gracias — thank you.",
      teachingNotes: [
        "Practice a thanks-and-response pair.",
        "Close the lesson with Hasta luego.",
      ],
    },
  },
];

const frenchLessons: Lesson[] = [
  {
    id: "fr-u1-l1",
    languageCode: "fr",
    unitId: "fr-unit-1",
    number: 1,
    title: "Say Bonjour",
    subtitle: "French greetings for any moment",
    description: "Learn bonjour, bonsoir, and when to use each greeting.",
    imageKey: "greetings",
    estimatedMinutes: 5,
    goals: [
      { id: "fr-u1-l1-g1", description: "Greet someone in French during the day or evening." },
      { id: "fr-u1-l1-g2", description: "Recognize bonjour and bonsoir quickly." },
    ],
    vocabulary: [
      { id: "fr-u1-l1-v1", term: "Bonjour", translation: "Hello / Good day", pronunciation: "bon-ZHOOR" },
      { id: "fr-u1-l1-v2", term: "Bonsoir", translation: "Good evening", pronunciation: "bon-SWAR" },
      { id: "fr-u1-l1-v3", term: "Salut", translation: "Hi (informal)", pronunciation: "sa-LUU" },
      { id: "fr-u1-l1-v4", term: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAR" },
    ],
    phrases: [
      { id: "fr-u1-l1-p1", phrase: "Bonjour!", translation: "Hello!", context: "Used during the day." },
      { id: "fr-u1-l1-p2", phrase: "Bonsoir.", translation: "Good evening.", context: "Used in the evening." },
      { id: "fr-u1-l1-p3", phrase: "Salut!", translation: "Hi!", context: "Casual greeting with friends." },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "repeat_phrase",
        title: "Daytime greeting",
        prompt: "Say hello during the day in French.",
        targetAnswer: "Bonjour",
      },
      {
        id: "fr-u1-l1-a2",
        type: "translate",
        title: "Good evening",
        prompt: "How do you say 'Good evening'?",
        targetAnswer: "Bonsoir",
      },
      {
        id: "fr-u1-l1-a3",
        type: "vocabulary_match",
        title: "Casual hi",
        prompt: "Which word is an informal hi?",
        targetAnswer: "Salut",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm French teacher. Teach only bonjour, bonsoir, salut, and au revoir. Explain when to use each greeting in simple English and ask the student to repeat.",
      openingLine:
        "Bonjour! That's the classic French hello for daytime — let's say it together.",
      teachingNotes: [
        "Contrast bonjour and bonsoir by time of day.",
        "Keep the tone friendly and unhurried.",
      ],
    },
  },
  {
    id: "fr-u1-l2",
    languageCode: "fr",
    unitId: "fr-unit-1",
    number: 2,
    title: "Introduce Yourself",
    subtitle: "Je m'appelle...",
    description: "Share your name and ask someone theirs in French.",
    imageKey: "culture",
    estimatedMinutes: 6,
    goals: [
      { id: "fr-u1-l2-g1", description: "Introduce yourself with Je m'appelle." },
      { id: "fr-u1-l2-g2", description: "Ask someone their name politely." },
    ],
    vocabulary: [
      { id: "fr-u1-l2-v1", term: "Je m'appelle", translation: "My name is", pronunciation: "zhuh ma-PELL" },
      { id: "fr-u1-l2-v2", term: "Comment tu t'appelles ?", translation: "What's your name?", pronunciation: "ko-MON tue ta-PELL" },
      { id: "fr-u1-l2-v3", term: "Enchanté(e)", translation: "Nice to meet you", pronunciation: "on-shon-TAY" },
      { id: "fr-u1-l2-v4", term: "Je", translation: "I", pronunciation: "zhuh" },
    ],
    phrases: [
      { id: "fr-u1-l2-p1", phrase: "Je m'appelle Marie.", translation: "My name is Marie.", context: "Replace with your name." },
      { id: "fr-u1-l2-p2", phrase: "Comment tu t'appelles ?", translation: "What's your name?", context: "Informal question." },
      { id: "fr-u1-l2-p3", phrase: "Enchanté!", translation: "Nice to meet you!", context: "Said by a male speaker." },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "fill_in_blank",
        title: "My name is",
        prompt: "Je m'___ Luc.",
        targetAnswer: "appelle",
      },
      {
        id: "fr-u1-l2-a2",
        type: "translate",
        title: "Ask their name",
        prompt: "Ask 'What's your name?' informally.",
        targetAnswer: "Comment tu t'appelles ?",
      },
      {
        id: "fr-u1-l2-a3",
        type: "repeat_phrase",
        title: "Nice to meet you",
        prompt: "Say 'Nice to meet you' in French.",
        targetAnswer: "Enchanté",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are an encouraging French teacher covering Je m'appelle, Comment tu t'appelles?, and Enchanté. Ask the student to introduce themselves and respond warmly in short English sentences with French examples.",
      openingLine:
        "Let's introduce ourselves in French. Say Je m'appelle, then add your name.",
      teachingNotes: [
        "Break Je m'appelle into two parts if needed.",
        "Stay within introduction vocabulary only.",
      ],
    },
  },
  {
    id: "fr-u1-l3",
    languageCode: "fr",
    unitId: "fr-unit-1",
    number: 3,
    title: "How Are You?",
    subtitle: "Ça va?",
    description: "Ask and answer simple wellbeing questions in French.",
    imageKey: "palace",
    estimatedMinutes: 6,
    goals: [
      { id: "fr-u1-l3-g1", description: "Ask how someone is doing with Comment ça va?" },
      { id: "fr-u1-l3-g2", description: "Answer with ça va bien or pas mal." },
    ],
    vocabulary: [
      { id: "fr-u1-l3-v1", term: "Comment ça va ?", translation: "How are you?", pronunciation: "ko-MON sa va" },
      { id: "fr-u1-l3-v2", term: "Ça va", translation: "I'm okay / It goes", pronunciation: "sa va" },
      { id: "fr-u1-l3-v3", term: "Ça va bien", translation: "I'm doing well", pronunciation: "sa va byan" },
      { id: "fr-u1-l3-v4", term: "Pas mal", translation: "Not bad", pronunciation: "pa mahl" },
    ],
    phrases: [
      { id: "fr-u1-l3-p1", phrase: "Comment ça va ?", translation: "How are you?", context: "Common informal check-in." },
      { id: "fr-u1-l3-p2", phrase: "Ça va bien, merci.", translation: "I'm well, thanks.", context: "Positive reply." },
      { id: "fr-u1-l3-p3", phrase: "Pas mal, et toi ?", translation: "Not bad, and you?", context: "Casual response." },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "translate",
        title: "How are you?",
        prompt: "Translate: How are you?",
        targetAnswer: "Comment ça va ?",
      },
      {
        id: "fr-u1-l3-a2",
        type: "vocabulary_match",
        title: "Doing well",
        prompt: "Which phrase means 'I'm doing well'?",
        targetAnswer: "Ça va bien",
      },
      {
        id: "fr-u1-l3-a3",
        type: "listen_and_respond",
        title: "Reply naturally",
        prompt: "Say you're doing well and thank them.",
        targetAnswer: "Ça va bien, merci.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a lively French teacher focusing on Comment ça va?, Ça va bien, Pas mal, and merci. Ask the student how they're doing and guide them to answer in French with one short sentence.",
      openingLine:
        "In French, a friendly check-in is Comment ça va? — how's it going?",
      teachingNotes: [
        "Model one question and one answer.",
        "Encourage the student to add et toi?",
      ],
    },
  },
  {
    id: "fr-u2-l1",
    languageCode: "fr",
    unitId: "fr-unit-2",
    number: 4,
    title: "At the Café",
    subtitle: "Order in French",
    description: "Order coffee or tea politely at a French café.",
    imageKey: "food",
    estimatedMinutes: 7,
    goals: [
      { id: "fr-u2-l1-g1", description: "Use Je voudrais to order politely." },
      { id: "fr-u2-l1-g2", description: "Say s'il vous plaît and merci while ordering." },
    ],
    vocabulary: [
      { id: "fr-u2-l1-v1", term: "Je voudrais", translation: "I would like", pronunciation: "zhuh voo-DRAY" },
      { id: "fr-u2-l1-v2", term: "Un café", translation: "A coffee", pronunciation: "un ka-FAY" },
      { id: "fr-u2-l1-v3", term: "Un thé", translation: "A tea", pronunciation: "un tay" },
      { id: "fr-u2-l1-v4", term: "S'il vous plaît", translation: "Please", pronunciation: "seel voo PLAY" },
      { id: "fr-u2-l1-v5", term: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
    ],
    phrases: [
      { id: "fr-u2-l1-p1", phrase: "Je voudrais un café, s'il vous plaît.", translation: "I'd like a coffee, please.", context: "Polite café order." },
      { id: "fr-u2-l1-p2", phrase: "Je voudrais un thé, s'il vous plaît.", translation: "I'd like a tea, please.", context: "Alternative order." },
      { id: "fr-u2-l1-p3", phrase: "Merci beaucoup.", translation: "Thank you very much.", context: "After being served." },
    ],
    activities: [
      {
        id: "fr-u2-l1-a1",
        type: "fill_in_blank",
        title: "Polite order",
        prompt: "Je voudrais un café, ___.",
        targetAnswer: "s'il vous plaît",
      },
      {
        id: "fr-u2-l1-a2",
        type: "translate",
        title: "Order tea",
        prompt: "Say 'I'd like a tea, please.'",
        targetAnswer: "Je voudrais un thé, s'il vous plaît.",
      },
      {
        id: "fr-u2-l1-a3",
        type: "repeat_phrase",
        title: "Say thank you",
        prompt: "Say thank you in French.",
        targetAnswer: "Merci",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a charming French café teacher. Teach Je voudrais, un café, un thé, s'il vous plaît, and merci. Role-play ordering one drink and keep responses to one or two sentences.",
      openingLine:
        "Picture a Paris café. To order politely, start with Je voudrais — I would like.",
      teachingNotes: [
        "Emphasize s'il vous plaît for polite orders.",
        "Celebrate small wins before adding merci.",
      ],
    },
  },
  {
    id: "fr-u2-l2",
    languageCode: "fr",
    unitId: "fr-unit-2",
    number: 5,
    title: "Ask for Help",
    subtitle: "Excusez-moi...",
    description: "Get someone's attention and ask where something is.",
    imageKey: "travel",
    estimatedMinutes: 7,
    goals: [
      { id: "fr-u2-l2-g1", description: "Get attention with Excusez-moi." },
      { id: "fr-u2-l2-g2", description: "Ask where the metro or bathroom is." },
    ],
    vocabulary: [
      { id: "fr-u2-l2-v1", term: "Excusez-moi", translation: "Excuse me", pronunciation: "ex-kuu-zay MWAH" },
      { id: "fr-u2-l2-v2", term: "Où est...?", translation: "Where is...?", pronunciation: "oo ay" },
      { id: "fr-u2-l2-v3", term: "Le métro", translation: "The metro", pronunciation: "lu may-TROH" },
      { id: "fr-u2-l2-v4", term: "Les toilettes", translation: "The restroom", pronunciation: "lay twa-LET" },
      { id: "fr-u2-l2-v5", term: "Pardon", translation: "Sorry / Pardon me", pronunciation: "par-DON" },
    ],
    phrases: [
      { id: "fr-u2-l2-p1", phrase: "Excusez-moi, où est le métro ?", translation: "Excuse me, where is the metro?", context: "Asking for directions." },
      { id: "fr-u2-l2-p2", phrase: "Où sont les toilettes ?", translation: "Where are the restrooms?", context: "Useful travel question." },
      { id: "fr-u2-l2-p3", phrase: "Pardon.", translation: "Sorry.", context: "When bumping into someone." },
    ],
    activities: [
      {
        id: "fr-u2-l2-a1",
        type: "translate",
        title: "Excuse me",
        prompt: "How do you politely say 'Excuse me'?",
        targetAnswer: "Excusez-moi",
      },
      {
        id: "fr-u2-l2-a2",
        type: "fill_in_blank",
        title: "Find the metro",
        prompt: "Excusez-moi, ___ est le métro ?",
        targetAnswer: "où",
      },
      {
        id: "fr-u2-l2-a3",
        type: "listen_and_respond",
        title: "Restroom question",
        prompt: "Ask where the restrooms are.",
        targetAnswer: "Où sont les toilettes ?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a patient French travel teacher. Focus on Excusez-moi, Où est...?, le métro, and les toilettes. Give one real-world scenario and ask the student to repeat the full question.",
      openingLine:
        "Need help in France? Start with Excusez-moi — excuse me — then ask your question.",
      teachingNotes: [
        "Practice one full question end to end.",
        "Keep scenarios practical and short.",
      ],
    },
  },
  {
    id: "fr-u2-l3",
    languageCode: "fr",
    unitId: "fr-unit-2",
    number: 6,
    title: "Polite Goodbye",
    subtitle: "Merci and au revoir",
    description: "Thank people and say goodbye naturally in French.",
    imageKey: "treasure",
    estimatedMinutes: 5,
    goals: [
      { id: "fr-u2-l3-g1", description: "Say thank you and you're welcome." },
      { id: "fr-u2-l3-g2", description: "End a chat with au revoir or à bientôt." },
    ],
    vocabulary: [
      { id: "fr-u2-l3-v1", term: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
      { id: "fr-u2-l3-v2", term: "De rien", translation: "You're welcome", pronunciation: "duh RYAN" },
      { id: "fr-u2-l3-v3", term: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAR" },
      { id: "fr-u2-l3-v4", term: "À bientôt", translation: "See you soon", pronunciation: "a byan-TOH" },
    ],
    phrases: [
      { id: "fr-u2-l3-p1", phrase: "Merci beaucoup.", translation: "Thank you very much.", context: "Extra polite thanks." },
      { id: "fr-u2-l3-p2", phrase: "De rien.", translation: "You're welcome.", context: "Casual response to merci." },
      { id: "fr-u2-l3-p3", phrase: "Au revoir!", translation: "Goodbye!", context: "Standard farewell." },
    ],
    activities: [
      {
        id: "fr-u2-l3-a1",
        type: "translate",
        title: "You're welcome",
        prompt: "How do you say 'You're welcome'?",
        targetAnswer: "De rien",
      },
      {
        id: "fr-u2-l3-a2",
        type: "repeat_phrase",
        title: "See you soon",
        prompt: "Say 'See you soon' in French.",
        targetAnswer: "À bientôt",
      },
      {
        id: "fr-u2-l3-a3",
        type: "listen_and_respond",
        title: "Thanks exchange",
        prompt: "Someone says 'Merci.' What do you reply?",
        targetAnswer: "De rien",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a gracious French teacher covering merci, de rien, au revoir, and à bientôt. Practice a short polite closing exchange and end with a cheerful goodbye.",
      openingLine:
        "Let's close conversations beautifully. Merci means thank you — try it with me.",
      teachingNotes: [
        "Practice thanks and a friendly goodbye back to back.",
        "Keep the tone warm and natural.",
      ],
    },
  },
];

const japaneseLessons: Lesson[] = [
  {
    id: "ja-u1-l1",
    languageCode: "ja",
    unitId: "ja-unit-1",
    number: 1,
    title: "Say Hello",
    subtitle: "Basic Japanese greetings",
    description: "Learn konnichiwa, ohayō, and konbanwa for different times of day.",
    imageKey: "greetings",
    estimatedMinutes: 5,
    goals: [
      { id: "ja-u1-l1-g1", description: "Greet someone in Japanese politely." },
      { id: "ja-u1-l1-g2", description: "Match greetings to the time of day." },
    ],
    vocabulary: [
      { id: "ja-u1-l1-v1", term: "Konnichiwa", translation: "Hello / Good afternoon", pronunciation: "kon-nee-chee-wah" },
      { id: "ja-u1-l1-v2", term: "Ohayō", translation: "Good morning (informal)", pronunciation: "oh-hah-yoh" },
      { id: "ja-u1-l1-v3", term: "Konbanwa", translation: "Good evening", pronunciation: "kon-bahn-wah" },
      { id: "ja-u1-l1-v4", term: "Sayōnara", translation: "Goodbye", pronunciation: "sah-yoh-nah-rah" },
    ],
    phrases: [
      { id: "ja-u1-l1-p1", phrase: "Konnichiwa!", translation: "Hello!", context: "General daytime greeting." },
      { id: "ja-u1-l1-p2", phrase: "Ohayō!", translation: "Good morning!", context: "Morning greeting with friends." },
      { id: "ja-u1-l1-p3", phrase: "Konbanwa.", translation: "Good evening.", context: "Used in the evening." },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "repeat_phrase",
        title: "Hello",
        prompt: "Say hello in Japanese.",
        targetAnswer: "Konnichiwa",
      },
      {
        id: "ja-u1-l1-a2",
        type: "translate",
        title: "Good evening",
        prompt: "How do you say 'Good evening'?",
        targetAnswer: "Konbanwa",
      },
      {
        id: "ja-u1-l1-a3",
        type: "vocabulary_match",
        title: "Morning greeting",
        prompt: "Which greeting is used in the morning?",
        targetAnswer: "Ohayō",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a gentle Japanese teacher. Teach konnichiwa, ohayō, konbanwa, and sayōnara only. Explain timing in English and ask the student to repeat each greeting clearly.",
      openingLine:
        "Let's start with a friendly Japanese hello: Konnichiwa — good afternoon or hello.",
      teachingNotes: [
        "Introduce one greeting at a time.",
        "Keep pronunciation slow and clear.",
      ],
    },
  },
  {
    id: "ja-u1-l2",
    languageCode: "ja",
    unitId: "ja-unit-1",
    number: 2,
    title: "Introduce Yourself",
    subtitle: "Watashi wa...",
    description: "Say your name and ask someone else's name politely.",
    imageKey: "culture",
    estimatedMinutes: 6,
    goals: [
      { id: "ja-u1-l2-g1", description: "Introduce yourself with Watashi wa ... desu." },
      { id: "ja-u1-l2-g2", description: "Ask someone's name with O-namae wa?" },
    ],
    vocabulary: [
      { id: "ja-u1-l2-v1", term: "Watashi", translation: "I / me", pronunciation: "wah-tah-shee" },
      { id: "ja-u1-l2-v2", term: "Desu", translation: "Am / is (polite)", pronunciation: "dess" },
      { id: "ja-u1-l2-v3", term: "O-namae wa?", translation: "What is your name?", pronunciation: "oh-nah-mah-eh wah" },
      { id: "ja-u1-l2-v4", term: "Hajimemashite", translation: "Nice to meet you", pronunciation: "hah-jee-meh-mah-shee-teh" },
    ],
    phrases: [
      { id: "ja-u1-l2-p1", phrase: "Watashi wa Yuki desu.", translation: "I am Yuki.", context: "Replace Yuki with your name." },
      { id: "ja-u1-l2-p2", phrase: "O-namae wa?", translation: "What is your name?", context: "Polite question." },
      { id: "ja-u1-l2-p3", phrase: "Hajimemashite.", translation: "Nice to meet you.", context: "When meeting someone new." },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "fill_in_blank",
        title: "I am...",
        prompt: "Watashi wa Alex ___.",
        targetAnswer: "desu",
      },
      {
        id: "ja-u1-l2-a2",
        type: "translate",
        title: "Ask a name",
        prompt: "Ask 'What is your name?' politely.",
        targetAnswer: "O-namae wa?",
      },
      {
        id: "ja-u1-l2-a3",
        type: "repeat_phrase",
        title: "Nice to meet you",
        prompt: "Say 'Nice to meet you' in Japanese.",
        targetAnswer: "Hajimemashite",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a respectful Japanese teacher covering Watashi wa ... desu, O-namae wa?, and Hajimemashite. Explain the polite desu ending simply and ask the student to introduce themselves.",
      openingLine:
        "In Japanese, you can say Watashi wa, then your name, then desu — I am...",
      teachingNotes: [
        "Build the sentence in three small steps.",
        "Encourage a full self-introduction.",
      ],
    },
  },
  {
    id: "ja-u1-l3",
    languageCode: "ja",
    unitId: "ja-unit-1",
    number: 3,
    title: "How Are You?",
    subtitle: "O-genki desu ka?",
    description: "Ask if someone is well and answer politely.",
    imageKey: "palace",
    estimatedMinutes: 6,
    goals: [
      { id: "ja-u1-l3-g1", description: "Ask O-genki desu ka?" },
      { id: "ja-u1-l3-g2", description: "Answer Genki desu or Daijōbu desu." },
    ],
    vocabulary: [
      { id: "ja-u1-l3-v1", term: "O-genki desu ka?", translation: "How are you?", pronunciation: "oh-gen-kee dess kah" },
      { id: "ja-u1-l3-v2", term: "Genki desu", translation: "I'm well", pronunciation: "gen-kee dess" },
      { id: "ja-u1-l3-v3", term: "Daijōbu desu", translation: "I'm okay", pronunciation: "die-joh-boo dess" },
      { id: "ja-u1-l3-v4", term: "Arigatō", translation: "Thank you", pronunciation: "ah-ree-gah-toh" },
    ],
    phrases: [
      { id: "ja-u1-l3-p1", phrase: "O-genki desu ka?", translation: "How are you?", context: "Polite wellbeing question." },
      { id: "ja-u1-l3-p2", phrase: "Genki desu, arigatō.", translation: "I'm well, thank you.", context: "Positive reply." },
      { id: "ja-u1-l3-p3", phrase: "Daijōbu desu.", translation: "I'm okay.", context: "Simple reassuring answer." },
    ],
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "translate",
        title: "How are you?",
        prompt: "Ask 'How are you?' politely in Japanese.",
        targetAnswer: "O-genki desu ka?",
      },
      {
        id: "ja-u1-l3-a2",
        type: "vocabulary_match",
        title: "I'm well",
        prompt: "Which phrase means 'I'm well'?",
        targetAnswer: "Genki desu",
      },
      {
        id: "ja-u1-l3-a3",
        type: "listen_and_respond",
        title: "Polite reply",
        prompt: "Say you're well and thank them.",
        targetAnswer: "Genki desu, arigatō.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm Japanese teacher focusing on O-genki desu ka?, Genki desu, Daijōbu desu, and arigatō. Guide a short question-and-answer exchange in English with Japanese phrases.",
      openingLine:
        "To ask how someone is doing, you can say O-genki desu ka?",
      teachingNotes: [
        "Model one polite question and answer.",
        "Praise clear pronunciation over speed.",
      ],
    },
  },
  {
    id: "ja-u2-l1",
    languageCode: "ja",
    unitId: "ja-unit-2",
    number: 4,
    title: "At the Shop",
    subtitle: "Kudasai and onegai shimasu",
    description: "Ask for something politely when shopping or ordering.",
    imageKey: "food",
    estimatedMinutes: 7,
    goals: [
      { id: "ja-u2-l1-g1", description: "Use ... o kudasai to ask for something." },
      { id: "ja-u2-l1-g2", description: "Add onegai shimasu for extra politeness." },
    ],
    vocabulary: [
      { id: "ja-u2-l1-v1", term: "Kudasai", translation: "Please give me", pronunciation: "koo-dah-sigh" },
      { id: "ja-u2-l1-v2", term: "Onegai shimasu", translation: "Please (polite)", pronunciation: "oh-neh-guy shee-mahs" },
      { id: "ja-u2-l1-v3", term: "Mizu", translation: "Water", pronunciation: "mee-zoo" },
      { id: "ja-u2-l1-v4", term: "O-cha", translation: "Tea", pronunciation: "oh-cha" },
      { id: "ja-u2-l1-v5", term: "Arigatō", translation: "Thank you", pronunciation: "ah-ree-gah-toh" },
    ],
    phrases: [
      { id: "ja-u2-l1-p1", phrase: "Mizu o kudasai.", translation: "Water, please.", context: "Simple shop request." },
      { id: "ja-u2-l1-p2", phrase: "O-cha o kudasai.", translation: "Tea, please.", context: "Ordering a drink." },
      { id: "ja-u2-l1-p3", phrase: "Onegai shimasu.", translation: "Please.", context: "Extra polite request." },
    ],
    activities: [
      {
        id: "ja-u2-l1-a1",
        type: "fill_in_blank",
        title: "Water please",
        prompt: "Mizu o ___.",
        targetAnswer: "kudasai",
      },
      {
        id: "ja-u2-l1-a2",
        type: "translate",
        title: "Tea please",
        prompt: "Say 'Tea, please.'",
        targetAnswer: "O-cha o kudasai.",
      },
      {
        id: "ja-u2-l1-a3",
        type: "repeat_phrase",
        title: "Extra polite",
        prompt: "Say 'Please' politely.",
        targetAnswer: "Onegai shimasu",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a polite Japanese shop teacher. Teach mizu, o-cha, ... o kudasai, onegai shimasu, and arigatō. Role-play buying one item and ask the student to repeat the request.",
      openingLine:
        "When you want something in Japanese, put the item first, then o kudasai — please.",
      teachingNotes: [
        "Use one item example like tea or water.",
        "Remind the student that politeness matters in Japanese.",
      ],
    },
  },
  {
    id: "ja-u2-l2",
    languageCode: "ja",
    unitId: "ja-unit-2",
    number: 5,
    title: "Excuse Me",
    subtitle: "Sumimasen and dōzo",
    description: "Get attention politely and respond with simple courtesy phrases.",
    imageKey: "travel",
    estimatedMinutes: 7,
    goals: [
      { id: "ja-u2-l2-g1", description: "Use Sumimasen to get attention or apologize lightly." },
      { id: "ja-u2-l2-g2", description: "Use Dōzo when offering or inviting someone." },
    ],
    vocabulary: [
      { id: "ja-u2-l2-v1", term: "Sumimasen", translation: "Excuse me / Sorry", pronunciation: "soo-mee-mah-sen" },
      { id: "ja-u2-l2-v2", term: "Dōzo", translation: "Please / Go ahead", pronunciation: "doh-zoh" },
      { id: "ja-u2-l2-v3", term: "Eki", translation: "Station", pronunciation: "eh-kee" },
      { id: "ja-u2-l2-v4", term: "Doko", translation: "Where", pronunciation: "doh-koh" },
      { id: "ja-u2-l2-v5", term: "Desu ka?", translation: "Is it? / Question marker", pronunciation: "dess kah" },
    ],
    phrases: [
      { id: "ja-u2-l2-p1", phrase: "Sumimasen.", translation: "Excuse me.", context: "Getting attention politely." },
      { id: "ja-u2-l2-p2", phrase: "Eki wa doko desu ka?", translation: "Where is the station?", context: "Asking for a location." },
      { id: "ja-u2-l2-p3", phrase: "Dōzo.", translation: "Go ahead.", context: "Offering someone to go first." },
    ],
    activities: [
      {
        id: "ja-u2-l2-a1",
        type: "translate",
        title: "Excuse me",
        prompt: "How do you say 'Excuse me'?",
        targetAnswer: "Sumimasen",
      },
      {
        id: "ja-u2-l2-a2",
        type: "fill_in_blank",
        title: "Where is the station?",
        prompt: "Eki wa ___ desu ka?",
        targetAnswer: "doko",
      },
      {
        id: "ja-u2-l2-a3",
        type: "listen_and_respond",
        title: "Go ahead",
        prompt: "Say 'Go ahead' in Japanese.",
        targetAnswer: "Dōzo",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a considerate Japanese teacher covering sumimasen, eki wa doko desu ka?, and dōzo. Practice one polite interruption and one simple location question.",
      openingLine:
        "In Japan, Sumimasen is your go-to for excuse me or sorry — let's try it together.",
      teachingNotes: [
        "Explain sumimasen works for light apologies too.",
        "Keep location questions to one example.",
      ],
    },
  },
  {
    id: "ja-u2-l3",
    languageCode: "ja",
    unitId: "ja-unit-2",
    number: 6,
    title: "Thank You and Goodbye",
    subtitle: "Arigatō and sayōnara",
    description: "Close conversations with thanks and friendly farewells.",
    imageKey: "treasure",
    estimatedMinutes: 5,
    goals: [
      { id: "ja-u2-l3-g1", description: "Say arigatō and arigatō gozaimasu." },
      { id: "ja-u2-l3-g2", description: "Say goodbye with sayōnara or mata ne." },
    ],
    vocabulary: [
      { id: "ja-u2-l3-v1", term: "Arigatō", translation: "Thank you", pronunciation: "ah-ree-gah-toh" },
      { id: "ja-u2-l3-v2", term: "Arigatō gozaimasu", translation: "Thank you (polite)", pronunciation: "ah-ree-gah-toh goh-zah-ee-mahs" },
      { id: "ja-u2-l3-v3", term: "Dōitashimashite", translation: "You're welcome", pronunciation: "doh-ee-tah-shee-mah-she-teh" },
      { id: "ja-u2-l3-v4", term: "Mata ne", translation: "See you", pronunciation: "mah-tah neh" },
    ],
    phrases: [
      { id: "ja-u2-l3-p1", phrase: "Arigatō gozaimasu.", translation: "Thank you very much.", context: "Polite thanks." },
      { id: "ja-u2-l3-p2", phrase: "Dōitashimashite.", translation: "You're welcome.", context: "Polite response." },
      { id: "ja-u2-l3-p3", phrase: "Mata ne!", translation: "See you!", context: "Casual goodbye with friends." },
    ],
    activities: [
      {
        id: "ja-u2-l3-a1",
        type: "translate",
        title: "Polite thanks",
        prompt: "Say 'Thank you' politely.",
        targetAnswer: "Arigatō gozaimasu",
      },
      {
        id: "ja-u2-l3-a2",
        type: "repeat_phrase",
        title: "See you",
        prompt: "Say 'See you' casually in Japanese.",
        targetAnswer: "Mata ne",
      },
      {
        id: "ja-u2-l3-a3",
        type: "listen_and_respond",
        title: "You're welcome",
        prompt: "Someone thanks you. Reply politely.",
        targetAnswer: "Dōitashimashite",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a kind Japanese teacher focusing on arigatō, arigatō gozaimasu, dōitashimashite, and mata ne. Practice a short thanks exchange and end with a friendly goodbye.",
      openingLine:
        "Let's finish with gratitude. Arigatō means thank you — try it with me.",
      teachingNotes: [
        "Show the difference between casual and polite thanks.",
        "Close with mata ne for a friendly tone.",
      ],
    },
  },
];

export const lessons: Lesson[] = [
  ...spanishLessons,
  ...frenchLessons,
  ...japaneseLessons,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === lessonId);
}

export function getLessonsByLanguage(languageCode: LanguageCode): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageCode === languageCode)
    .sort((a, b) => a.number - b.number);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.number - b.number);
}

export function getLessonCountByLanguage(languageCode: LanguageCode): number {
  return getLessonsByLanguage(languageCode).length;
}
