import { ref } from 'vue'

const initialInfra = [
  // Add your infrastructure endpoints here
  // { name: 'Service Name', key: 'service', url: 'https://service.example.com', date: '2025-01-01' },
]

initialInfra.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const infra = ref(initialInfra)

export default infra
