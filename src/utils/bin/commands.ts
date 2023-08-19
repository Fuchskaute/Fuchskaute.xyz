// List of commands that do not require API calls

import useSound from 'use-sound';
import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 

Welcome to my website!

More about me:
'sumfetch' - short summary.
'privacy' - privacy policy.
'services' - overview of the hosted services.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const gitlab = async (args: string[]): Promise<string> => {
  window.open(`https://gitlab.com/${config.social.gitlab}/`);

  return 'Opening gitlab...';
}

// Search
export const librex = async (args: string[]): Promise<string> => {
  window.open(`https://librex.koishi.de/search.php?q=${args.join(' ')}`);
  return `Searching librex for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `gabriel_ultrakill`;
};

export const cat = async(args: string[]): Promise<string> => {
  if (args[0] == 'gabriel_ultrakill') {
return `
BEHOLD, THE POWER OF AN ANGEL
fttffLLLLLfffLCGGGLtttt1ttttfG00GCft11tfLLffffff
tttttffLLLLfLCGGGGLffft1ttttLG0000GLLLffffffffff
ttttttffLLfC00GGCLfttt11ttttfLCG0880CfLffffftttt
ttttttfLLLG880GCLft11111111ttfLLCG888GfLLftttttt
1ttttLGLf0880GLtt11tffLCCLLffttffLG888GfLLttt111
1tttfCCf0880Cf11tfCG00GGG00GCLtt1tLG888GfCL1111t
tittLCfG000Ct11fCG000Git1t0GGGCf11tfG808LLGf111C
1iiLGfL000Ct1ttLGGGGGL;11iGGGGGftfttL00GGfLL1ii1
111LGfG00Gftt1;iGL1ii1i1111111Gt:i1tfG0GGLtC1iii
iitCLtG00C1;:,:tGf:::;i11i;::iCCi,,:;C0GGCiCf;;;
;;tCft0GLt1;,:1LCGLfLf;11iCCLCGGf;::ifLCCGifL:::
;;1Lti1iii11i;tLLCGG0Cit11GGGGCLtii11ii;i1;tf:::
;;;;;;;;;iiii;1LfLLCCLii;1CCCLft1;1ii;;::::;::;;
::::::;;;;;;;;;tttttffftfLLfttt1;;i;;::::;::;;;;
::::::::::;;;i;;ii11t1;iiit1iii;:i;::::::;;;;;;;
1ii;::::::::;;i::;i1i;:11:;ii;;:;;::::;;;;;;;ii1
0Cftt1:i1:::::;;::;;;;;11i;;ii::;;::::i;:;11tffC
CGLLL;:tt::::::;;.,:;i;1i;iii,,;;:::;:1i::tGCLft
ttft;::t1;;::::,....,;i111i:....::::::i1:::1t11t
00f:::;tiiii;,,......,:i1;.......,:;1i;1:::,iCG0
GG;:::i;:1ttt;..................,;1fft,i;::::CGG
t;,:::i,;tttff;................:1LCCLL:;i:::,it1
t::::;;:1ffffLL1,.............:tLCCLLLi,1:::,itt`
       }

  else return `cat: ${args}: No such file or directory`;
}

export const services = async (args: string[]): Promise<string> => {
return `
All services I host and plan to host on this site are Free and Open Source Software.
Librex: A privacy-respecting libre search engine developed by hnhx and endorsed by Richard Stallman.
Searx: A privacy-respecting meta search engine.
Invidious: A privacy-respecting YouTube frontend. Much lighter on resources and recommended for people on older hardware and/or slower connections. [NOT AVAILABLE YET]
Fuchskaute.xyz: This page. My own fork of LiveTerm
`;
};

export const privacy = async (args: string[]): Promise<string> => {
  return `
Connections and requests to the ports 80 and 443 are not logged, altho your IP will be stored in RAM while you are on the site and may be cached. (I have to say this)
No cookies whatsoever, the exception is searx with its optional cookies for user preferences.
Your requests on this site are not logged.
Attempts to connect via ssh are logged for a prolonged period of time. Repeated attempts will result in a permanent ban.
Your search requests are not logged.
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `My beloved. I <3 Emacs.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████▒█    ██  ▄████▄   ██░ ██   ██████  ██ ▄█▀▄▄▄       █    ██ ▄▄▄█████▓▓█████
▓██   ▒ ██  ▓██▒▒██▀ ▀█  ▓██░ ██▒▒██    ▒  ██▄█▒▒████▄     ██  ▓██▒▓  ██▒ ▓▒▓█   ▀
▒████ ░▓██  ▒██░▒▓█    ▄ ▒██▀▀██░░ ▓██▄   ▓███▄░▒██  ▀█▄  ▓██  ▒██░▒ ▓██░ ▒░▒███
░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒░▓█ ░██   ▒   ██▒▓██ █▄░██▄▄▄▄██ ▓▓█  ░██░░ ▓██▓ ░ ▒▓█  ▄
░▒█░   ▒▒█████▓ ▒ ▓███▀ ░░▓█▒░██▓▒██████▒▒▒██▒ █▄▓█   ▓██▒▒▒█████▓   ▒██▒ ░ ░▒████▒
 ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░ ▒ ░░▒░▒▒ ▒▓▒ ▒ ░▒ ▒▒ ▓▒▒▒   ▓▒█░░▒▓▒ ▒ ▒   ▒ ░░   ░░ ▒░ ░
 ░     ░░▒░ ░ ░   ░  ▒    ▒ ░▒░ ░░ ░▒  ░ ░░ ░▒ ▒░ ▒   ▒▒ ░░░▒░ ░ ░     ░     ░ ░  ░
 ░ ░    ░░░ ░ ░ ░         ░  ░░ ░░  ░  ░  ░ ░░ ░  ░   ▒    ░░░ ░ ░   ░         ░
          ░     ░ ░       ░  ░  ░      ░  ░  ░        ░  ░   ░                 ░  ░
                ░
NOTICE: It seems I accidentally removed the searx warning while playing with the website.
        The service will remain __down__ until further notice. Please use librex.fuchskaute.xyz instead.

        The koishi.de domain has been retired. All HTTP requests will be redirected to fuchskaute.xyz.

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
