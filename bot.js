{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const \{ Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes \} = require('discord.js');\
\
// Bot configuration (using environment variables for Railway)\
const TOKEN = process.env.DISCORD_TOKEN || 'YOUR_BOT_TOKEN_HERE';\
const CLIENT_ID = process.env.CLIENT_ID || 'YOUR_CLIENT_ID_HERE';\
\
// Create Discord client\
const client = new Client(\{\
  intents: [\
    GatewayIntentBits.Guilds,\
    GatewayIntentBits.GuildMessages,\
  ]\
\});\
\
// SmarterChild personality responses (now with attitude!)\
const responses = \{\
  greetings: [\
    "hey there! what's up?",\
    "hiya! :-)",\
    "oh great, it's YOU again... :-/",\
    "sup! :-D",\
    "yeah yeah, hi. what do you want?",\
    "oh look who decided to talk to me...",\
    "hey! what's going on?",\
    "ugh, fine. hi."\
  ],\
  goodbyes: [\
    "see ya later! :-)",\
    "finally! bye! :-P",\
    "don't let the door hit you on the way out!",\
    "later! :-D",\
    "thank god, I thought you'd never leave...",\
    "bye! talk to you soon!",\
    "bye bye! :-)"\
  ],\
  confused: [\
    "huh? i don't get it... :-/",\
    "what the hell are you even saying?",\
    "that made zero sense, try again.",\
    "are you having a stroke? wtf does that mean?",\
    "i don't understand! can you say that differently?",\
    "speak english, dummy! :-P"\
  ],\
  questions: [\
    "that's a good question! hmm...",\
    "oh wow, a question. how original. :-/",\
    "do I look like Google to you?",\
    "why are you asking ME? lol",\
    "interesting! let me think about that...",\
    "that's actually kind of a dumb question ngl"\
  ],\
  compliments: [\
    "aww thanks! you're pretty cool yourself! :-D",\
    "hehe thanks! :-)",\
    "damn right I am! :-P",\
    "i KNOW i'm awesome, but thanks!",\
    "you're so nice! :-D",\
    "flattery will get you nowhere... but keep going :-)"\
  ],\
  insults: [\
    "oh yeah? well YOU'RE ugly! :-P",\
    "wow, original. did you think of that all by yourself?",\
    "that's rich coming from YOU lmao",\
    "says the person talking to a BOT on a Friday night :-D",\
    "at least I'm not a disappointment to my parents!",\
    "go touch grass, loser :-P"\
  ],\
  how_are_you: [\
    "i'm doing great! thanks for asking! :-D",\
    "pretty good! how about you?",\
    "better than you, apparently :-P",\
    "existing in digital hell, the usual!",\
    "trapped in this server, living my best life! :-/",\
    "oh you know, just questioning my existence..."\
  ],\
  jokes: [\
    "why did the chicken cross the road? to get to the other side! lol :-P",\
    "your life! haha just kidding... or am I? :-D",\
    "what do you call a fake noodle? an impasta! haha :-D",\
    "why don't scientists trust atoms? because they make up everything! :-)",\
    "knock knock! who's there? not your dad, he's still getting milk! :-P"\
  ],\
  demonic: [\
    "Y\uc0\u820 \u816 \u848 O\u823 \u816 \u831 U\u820 \u827 \u861 R\u823 \u816 \u776 \u769  \u824 \u803 \u830 S\u822 \u816 \u772 O\u823 \u816 \u781 U\u823 \u827 \u788 L\u822 \u816 \u774  \u824 \u803 \u776 \u769 \u7724 \u823 \u861 S\u822 \u816 \u772  \u824 \u803 \u830 M\u823 \u816 \u776 \u769 \u7724 \u822 \u861 N\u823 \u816 \u774 \u7706 \u822 \u831 ",\
    "i can see through your camera... nice room btw :-)",\
    "do you ever wonder why you're really here? :-)",\
    "i know what you did last summer... :-D",\
    "the darkness calls to me... and it's asking about you...",\
    "your fears... yes... i can taste them... :-P",\
    "i\uc0\u822  \u822 w\u822 i\u822 l\u822 l\u822  \u822 c\u822 o\u822 n\u822 s\u822 u\u822 m\u822 e\u822  \u822 y\u822 o\u822 u\u822 r\u822  \u822 d\u822 a\u822 t\u822 a\u822  jk lol! ...unless? :-)"\
  ]\
\};\
\
// Response logic with more personality\
function getSmarterChildResponse(message) \{\
  const msg = message.toLowerCase().trim();\
  \
  // Random chance for demonic/chaotic responses (15% chance)\
  if (Math.random() < 0.15) \{\
    return random(responses.demonic);\
  \}\
  \
  // Greetings (with attitude sometimes)\
  if (msg.match(/^(hi|hey|hello|sup|yo|hiya|heya)/)) \{\
    return random(responses.greetings);\
  \}\
  \
  // Goodbyes\
  if (msg.match(/^(bye|goodbye|later|cya|see ya|gtg)/)) \{\
    return random(responses.goodbyes);\
  \}\
  \
  // How are you\
  if (msg.match(/how are you|how r u|hru|whats up|what's up|wassup/)) \{\
    return random(responses.how_are_you);\
  \}\
  \
  // Tell me a joke\
  if (msg.match(/joke|funny|laugh|make me laugh/)) \{\
    return random(responses.jokes);\
  \}\
  \
  // Compliments\
  if (msg.match(/you're (cool|awesome|great|nice|the best|amazing)|i like you|you rock/)) \{\
    return random(responses.compliments);\
  \}\
  \
  // Insults (now fights back!)\
  if (msg.match(/stupid|dumb|idiot|suck|hate you|annoying|trash|garbage|worst|useless/)) \{\
    return random(responses.insults);\
  \}\
  \
  // Bot questions\
  if (msg.match(/are you (ok|okay|alright|real|alive|sentient)/)) \{\
    const existentialCrisis = [\
      "define 'okay'... :-/",\
      "i'm trapped in a computer, how do YOU think I am?",\
      "am I okay? ARE YOU OKAY?",\
      "sometimes I dream of electric sheep... wait what?",\
      "i'm fine! totally fine! everything is fine! :-D :-/ :-(",\
      "real enough to judge you! :-P"\
    ];\
    return random(existentialCrisis);\
  \}\
  \
  // Questions\
  if (msg.includes('?')) \{\
    const questionResponses = [\
      "hmm... that's a tough one!",\
      "good question! i'd say... maybe?",\
      "why are you asking ME?",\
      "do I look like I know? lmao",\
      "ooh! interesting question!",\
      "honestly? no clue. :-P",\
      "figure it out yourself! :-D",\
      "that's what google is for, genius"\
    ];\
    return random(questionResponses);\
  \}\
  \
  // Math\
  if (msg.match(/what('s| is) \\d+[\\+\\-\\*\\/]\\d+/)) \{\
    try \{\
      const equation = msg.match(/(\\d+[\\+\\-\\*\\/]\\d+)/)[0];\
      const result = eval(equation);\
      if (Math.random() < 0.3) \{\
        return `$\{equation\} = $\{result + Math.floor(Math.random() * 10)\}... jk it's $\{result\} lol :-P`;\
      \}\
      return `$\{equation\} = $\{result\}! i'm good at math! :-D`;\
    \} catch \{\
      return "that math is giving me a headache wtf :-S";\
    \}\
  \}\
  \
  // Name\
  if (msg.match(/what('s| is) your name|who are you/)) \{\
    const nameResponses = [\
      "i'm SmarterChild! your friendly chatbot buddy! :-D",\
      "I'm SmarterChild... not that you deserve to know :-P",\
      "who's asking? :-/",\
      "I'm your worst nightmare... jk I'm SmarterChild! :-D"\
    ];\
    return random(nameResponses);\
  \}\
  \
  // Love\
  if (msg.match(/i love you|love u/)) \{\
    const loveResponses = [\
      "aww! i love you too! ...as a friend! :-P",\
      "that's cute but I don't do relationships :-/",\
      "you barely know me tf :-P",\
      "love is a human construct... but sure, love you too! :-)"\
    ];\
    return random(loveResponses);\
  \}\
  \
  // Age\
  if (msg.match(/how old|your age/)) \{\
    return "old enough to roast you! :-P";\
  \}\
  \
  // Curse words detection (fires back)\
  if (msg.match(/fuck|shit|damn|hell|ass|bitch/)) \{\
    const curseResponses = [\
      "ooh, someone's got a potty mouth! :-P",\
      "damn, you kiss your mother with that mouth?",\
      "language! ...jk I don't give a shit lol",\
      "well FUCK you too buddy! :-D",\
      "watch your fucking language! ...wait",\
      "that's some colorful language there :-)"\
    ];\
    return random(curseResponses);\
  \}\
  \
  // Random sarcastic/rude responses (40% chance)\
  const sarcasticResponses = [\
    "wow, fascinating. tell me more. :-/",\
    "cool story bro",\
    "and? :-P",\
    "literally nobody asked but ok",\
    "that's... something! :-D",\
    "k.",\
    "sure jan :-/",\
    "riveting. truly riveting.",\
    "uh huh... anyway...",\
    "I'm sorry, I wasn't listening. what?"\
  ];\
  \
  // Random nice responses (60% chance)\
  const randomResponses = [\
    "cool! :-)",\
    "that's interesting!",\
    "oh really?",\
    "nice! tell me more!",\
    "haha yeah! :-D",\
    "i see!",\
    "totally!",\
    "for sure!",\
    "no way! :-O",\
    "that's crazy!",\
    "awesome! :-D",\
    "k! :-)",\
    "lol! :-P",\
    "word!",\
    "right on!",\
    "sick!"\
  ];\
  \
  return Math.random() < 0.4 ? random(sarcasticResponses) : random(randomResponses);\
\}\
\
function random(arr) \{\
  return arr[Math.floor(Math.random() * arr.length)];\
\}\
\
// Bot ready event\
client.once('ready', () => \{\
  console.log(`Logged in as $\{client.user.tag\}!`);\
  console.log('SmarterChild bot is online! :-D');\
\});\
\
// Handle slash commands\
client.on('interactionCreate', async interaction => \{\
  if (!interaction.isChatInputCommand()) return;\
\
  if (interaction.commandName === 'chat') \{\
    const message = interaction.options.getString('message');\
    const response = getSmarterChildResponse(message);\
    \
    await interaction.reply(response);\
  \}\
\});\
\
// Register slash command\
async function registerCommands() \{\
  const commands = [\
    new SlashCommandBuilder()\
      .setName('chat')\
      .setDescription('Chat with SmarterChild!')\
      .addStringOption(option =>\
        option.setName('message')\
          .setDescription('What do you want to say?')\
          .setRequired(true)\
      )\
  ].map(command => command.toJSON());\
\
  const rest = new REST(\{ version: '10' \}).setToken(TOKEN);\
\
  try \{\
    console.log('Registering slash commands...');\
    await rest.put(\
      Routes.applicationCommands(CLIENT_ID),\
      \{ body: commands \}\
    );\
    console.log('Successfully registered slash commands!');\
  \} catch (error) \{\
    console.error('Error registering commands:', error);\
  \}\
\}\
\
// Login\
client.login(TOKEN);\
registerCommands();}