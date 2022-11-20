import StickyCard from './src/sticky-card.vue'

import { install } from '../_utils'

export const FStickyCard = install(StickyCard)

export type StickyCardInstance = InstanceType<typeof StickyCard>

export * from './src/interface.d'

export default StickyCard