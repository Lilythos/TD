import { ref } from 'vue'
import { siteConfig } from './config'

export const tools = ref([
  {
    name: 'Tools',
    autoLoad: true,
    owner: siteConfig.githubUser,
    repo: '',
    description: 'Static tools list',
    manualItems: [
      // Add your tool projects here
    ],
  },
])

export default tools
