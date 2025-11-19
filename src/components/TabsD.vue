<template lang="pug">
.tabs-a
  .row
    .col-lg-5
      .row
        .col-sm-6.col-lg-12.mb-3(
          v-for="(elm,index) of elements"
          :key="'tabs-menu-'+elm.id"
        )
          button.tabs-a__tab(
            :class="{'tabs-a__tab__selected': selected === elm.id}"
            @click="selected = elm.id"
            @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
          ) 
            .tabs-a__tab__text(v-html="elm.titulo")
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click
    
    .col-lg-7
      .tabs-a__content-item(
        v-for="elm of elements"
        :key="'tabs-a-content-'+elm.id"
        v-show="selected === elm.id"
        :class="{'tabs-a__content-item--active' : selected === elm.id}"
        v-child="elm.elm"
      )

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-pkg-fliz/plugin/components/componentSlotMixins'
export default {
  name: 'TabsD',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass">
.tabs-a
  &__tab
    display: block
    width: 100%
    text-align: left
    background-color: $color-acento-botones
    padding: 15px 20px
    border-radius: 5px
    color: $color-sistema-a
    &__text
      overflow: hidden
      text-overflow: ellipsis
    &:last-child
      margin-bottom: 0 !important
    &:hover, &:active, &:focus
      color: $color-sistema-a

    &__selected
      font-weight: $base-bold-font-weight

      @media (min-width: $bp-min-lg)
        position: relative
        &:before
          content: ''
          display: block
          position: absolute
          right: 0
          top: 50%
          width: 15px
          height: 15px
          transform: translate(5px,-50%)  rotate(45deg)
          background-color: $color-acento-botones

  &__content-item
    opacity: 0
    &--active
      animation: tab-content-active 0.5s ease-in-out forwards

  &.color-primario
    .tabs-a__tab
      &:hover, &:active, &:focus
        background-color: #9028E2
        color: textColor($color-primario)
      &__selected
        background-color: #9028E2
        color: textColor($color-primario)
        &:before
          background-color: #9028E2
</style>
