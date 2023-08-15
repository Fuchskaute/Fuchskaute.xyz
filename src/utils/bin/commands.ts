// List of commands that do not require API calls

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

  return 'Opening gitlab...'
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
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
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

        The koishi.de domain has been retired. All HTTP queries will be redirected to fuchskaute.xyz.

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
