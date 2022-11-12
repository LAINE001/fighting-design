# Loading 加载

`Loading` 用于加载状态的提示，可通过组件内置指令便捷使用

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/loading)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/loading.md)

## 基本使用

通过指令`v-loading`，传入`Boolean`即可切换loading

<f-button type="primary" @click="onclick1">切换 loading</f-button>
<div v-loading="loading1">
  <p>那天她走了</p>
  <p>像风一样</p>
</div>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick1">开始 loading</f-button>
  <div v-loading="loading1">
    <p>那天她走了</p>
    <p>像风一样</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading1 = ref(false)
  const onclick1 = () => {
    loading1.value = !loading1.value
  }
</script>
```

:::

## 自定义文案

可通过元素`attribute`方式展示自定义文案

<f-button type="primary" @click="onclick2">展示文字</f-button>
<div v-loading="loading2" f-loading-text="加载中">
  <p>在夜色中</p>
  <p>我有三次受难</p>
  <p>我有三种幸福</p>
</div>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick2">展示文字</f-button>
  <div v-loading="loading2" f-loading-text="加载中">
    <p>在夜色中</p>
    <p>我有三次受难</p>
    <p>我有三种幸福</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading2 = ref(false)
  const onclick2 = () => {
    loading2.value = true
  }
</script>
```

:::

## 白色背景

通过属性`mode`可设置loading背景遮罩样式。可选`dark`、`light`

<f-button type="primary" @click="onclick3">切换loading</f-button>
<div v-loading="loading3" f-loading-text="加载中.." f-loading-mode="light">
  <p>流浪、爱情、生存</p>
  <p>诗歌、王位、太阳</p>
</div>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick2">展示文字</f-button>
  <div v-loading="loading2" f-loading-text="加载中" f-loading-mode="light">
    <p>流浪、爱情、生存</p>
    <p>诗歌、王位、太阳</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading2 = ref(false)
  const onclick2 = () => {
    loading2.value = true
  }
</script>
```

:::


## 全屏加载

通过指令修饰符`fullscreen`可使loading全屏显示

<f-button type="primary" @click="onclick4">切换loading</f-button>
<div v-loading.fullscreen="loading4">
  <p>全屏loading</p>
</div>

::: details 显示代码

```html
<template>
  <f-button type="primary" @click="onclick4">展示文字</f-button>
  <div v-loading.fullscreen="loading4">
    <p>全屏loading</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading4 = ref(false)
  const onclick4 = () => {
    loading4.value = !loading4.value
    setTimeout(() => {
      loading4.value = !loading4.value
    }, 2000)
  }
</script>
```

:::

## Directive

| 名称         | 说明                 | 类型                       | 可选值 | 默认值 |
| ------------ | -------------------- | -------------------------- | ------ | ------ |
| `v-loading`       | 是否展示 loading     | boolean                | ——     | false  |
| `f-loading-text`  | loading文字         | string                  | ——     | ——     |
| `f-loading-mode`  | 背景色模式         | string            | `dark` / `light`  |  `dark`    |
| `f-loading-background`  | 背景色        | string           |  ——   |  ——            |
| `f-loading-fontColor`  | 文字及icon颜色  | string          |  ——   |   `主题色`   |


## Interface

组件导出以下类型定义：

```ts
import type { LoadingInstance, LoadingPropsType } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/yn22638" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/48940123?v=4" />
</a>

<a href="https://github.com/Alphatrionty" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/57850101?v=4" />
</a>

<a href="https://github.com/laine001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/40457081?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  import { FIconSnowflake } from '@fighting-design/fighting-icon'

  const loading1 = ref(false)
  const onclick1 = () => {
    loading1.value = !loading1.value
  }

  const loading2 = ref(false)
  const onclick2 = () => {
    loading2.value = !loading2.value
  }

  const loading3 = ref(false)
  const onclick3 = () => {
    loading3.value = !loading3.value
  }

  const loading4 = ref(false)
  const onclick4 = () => {
    loading4.value = !loading4.value

    setTimeout(() => {
      loading4.value = !loading4.value
    }, 2000)
  }
</script>
