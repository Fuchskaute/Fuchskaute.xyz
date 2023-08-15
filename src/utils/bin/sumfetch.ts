import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@
     @@@                        @@@
        @@@                  @@@ @@
         @|  @@@@@@@@@@@@@@@@   @@
         @|                      @@

`;
  } else {
    return `
         -/oyddmdhs+:.                       sumfetch
     -odNMMMMMMMMNNmhy+-                    -----------
   -yNMMMMMMMMMMMNNNmmdhy+-                  ABOUT
 omMMMMMMMMMMMNhhyyyohmdddhhhdo              ${config.name}
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+            <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.         爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh         -----------
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy          CONTACT
       /mMMMMMMNNNmmmdddhhhhhmMNhs:          <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    oNMMMMMMMNNNmmmddddhhdmMNhs+             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  sNMMMMMMMMNNNmmmdddddmNMmhs/.              <u><a href="https://gitlab.com/${config.social.gitlab}" target="_blank">gitlab.com/${config.social.gitlab}</a></u>
 /NMMMMMMMMNNNNmmmdddmNMNdso:               -----------
+MMMMMMMNNNNNmmmmdmNMNdso/-                 󰒋 HOSTED SERVICES
yMMNNNNNNNmmmmmNNMmhs+/-                     Librex: <u><a href="https://librex.fuchskaute.xyz" target="_blank">librex.fuchskaute.xyz</a></u>
/hMMNNNNNNNNMNdhs++/-                       󰗃 Invidious: TODO
/ohdmmddhys+++/:.
  -//////:--.
`;
}
};


export default sumfetch;
