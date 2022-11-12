import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
// import type { HandleMouseEventInterface } from '../../_interface'
import type { LoadingBackgroundMode } from './interface'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => false
  },
  text: {
    type: String
  },
  fontColor: {
    type: String
  },
  fullscreen: {
    type: Boolean
  },
  background: {
    type: String
  },
  mode: {
    type: String as PropType<LoadingBackgroundMode>
  },
  icon: {
    type: Object as PropType<VNode | Component>
  }
} as const

export type LoadingPropsType = ExtractPropTypes<typeof Props>
