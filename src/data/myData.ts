import PasslogLogo from '../assets/passlog_logo.svg'
import CalcularyLogo from '../assets/calculary_logo.svg'
import AssignitLogo from '../assets/assignit_logo.svg'
import MoviewLogo from '../assets/moview_logo.svg'
import PlaylifyLogo from '../assets/playlify_logo.svg'
import GithubLogo from '../assets/social/github.svg'
import InstagramLogo from '../assets/social/instagram.svg'
import LinkedinLogo from '../assets/social/linkedin.svg'

// THis is a comments man

interface ProyectProps {
  name: string
  description: string
  link: string
  code: string
  logo: string
}

interface SocialLinks {
  icon: string
  link: string,
  fiverrLink?: boolean
}

export const proyects: ProyectProps[] = [
  {
    name: 'Passlog',
    description: 'Save all your private data like passwords, notes & cards and keep them safe in one place, Passlog is the open source proyect were you can store all your sensitive information and stop worrying about it.',
    link: 'https://passlog.failedbump.com/',
    code: 'https://github.com/jralvarenga/passlog',
    logo: PasslogLogo
  },
  {
    name: 'Moview',
    description: 'See what are the top movies and TV series of the moment with Moview',
    link: 'https://moview.failedbump.com',
    code: 'https://github.com/jralvarenga/moview',
    logo: MoviewLogo
  },
  {
    name: 'Calculary',
    description: 'Does everything that a normal calculator and more, solve your math functions quickly and have a preview of how the plot looks like, solve a function derivative or integral or use numerical methods to solve multiple problems with Calculary.',
    link: 'https://play.google.com/store/apps/details?id=com.failedbump.calculary',
    code: 'https://github.com/jralvarenga/calculary',
    logo: CalcularyLogo
  },
  {
    name: 'Assignit',
    description: 'Keep all your tasks or assigments organized in one place where you can add assignments (tasks, events, etc.) to your subjects (task group), add new assignments, view them in your Assignit Agenda or Google Calendar, see your stadistics and more.',
    link: 'https://assignit.vercel.app',
    code: 'https://github.com/jralvarenga/assignit',
    logo: AssignitLogo
  },
  {
    name: 'Playlify',
    description: 'Create new playlists and discover new music from just one song.',
    link: 'https://playlify.vercel.app',
    code: 'https://github.com/jralvarenga/playlify',
    logo: PlaylifyLogo
  },
]

export const socialLinks: SocialLinks[] = [
  {
    link: 'https://github.com/jralvarenga',
    icon: GithubLogo
  },
  {
    link: 'https://www.instagram.com/rigo_alvarenga/',
    icon: InstagramLogo
  },
  {
    link: 'https://github.com/jralvarenga',
    icon: LinkedinLogo
  }
]