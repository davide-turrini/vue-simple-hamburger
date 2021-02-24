<script lang="ts">

export default {
  name: 'VSimpleHamburger',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    fx: {
      type:  String,
      default: 'boring'
    },
    px: {
      type: String,
      default: '15px'
    },
    py: {
      type: String,
      default: '15px'
    },
    width: {
      type: String,
      default: '40px'
    },
    height: {
      type: String,
      default: '4px'
    },
    spacing: {
      type: String,
      default: '6px'
    },
    color: {
      type: String,
      default: '#000'
    },
    borderRadius: {
      type: String,
      default: '4px'
    },
    hoverOpacity: {
      type: String,
      default: '0.7'
    },
    activeColor: {
      type: String,
      default: '#000'
    },
    activeHoverOpacity: {
      type: String,
      default: '0.7'
    }
  },
  computed: {
    style (): object {
      return {
        '--hamburger-padding-x': this.px,
        '--hamburger-padding-y': this.py,
        '--hamburger-layer-width': this.width,
        '--hamburger-layer-height': this.height,
        '--hamburger-layer-spacing': this.spacing,
        '--hamburger-layer-color': this.color,
        '--hamburger-layer-border-radius': this.borderRadius,
        '--hamburger-hover-opacity': this.hoverOpacity,
        '--hamburger-active-layer-color': this.activeColor,
        '--hamburger-active-hover-opacity': this.activeHoverOpacity
      }
    }
  }
}
</script>

<template>
  <div class="vue-simple-hamburger">
    <button
      class="hamburger focus:outline-none"
      :class="(active ? 'active' : '') + ' fx-' + fx"
      :style="style"
      type="button"
      @click="$emit('click')
    ">
      <span class="box">
        <span class="line"></span>
      </span>
    </button>
  </div>
</template>

<style scoped>
  :root {
    --hamburger-padding-x : 15px;
    --hamburger-padding-y : 15px;
    --hamburger-layer-width : 40px;
    --hamburger-layer-height : 4px;
    --hamburger-layer-spacing : 6px;
    --hamburger-layer-color : black;
    --hamburger-layer-border-radius : 4px;
    --hamburger-hover-opacity : 0.7;
    --hamburger-active-layer-color : black;
    --hamburger-active-hover-opacity : 0.7;
  }
  /* * base */
  button {
    padding: var(--hamburger-padding-y) var(--hamburger-padding-x);
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  button.active span.line, button.active span.line::before, button.active span.line::after{
    background-color: var(--hamburger-active-layer-color);
  }
  span.box {
    width: var(--hamburger-layer-width);
    height: calc((var(--hamburger-layer-height) * 3) + (var(--hamburger-layer-spacing) * 2));
    display: inline-block;
    position: relative;
  }
  span.line {
    display: block;
    top: 50%;
    margin-top: calc(var(--hamburger-layer-height) / -2);
  }
  span.line::before, span.line, span.line::after{
    width: var(--hamburger-layer-width);
    height: var(--hamburger-layer-height);
    background-color: var(--hamburger-layer-color);
    border-radius: var(--hamburger-layer-border-radius);
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  span.line::before, span.line::after {
    content: "";
    display: block;
  }
  span.line::before {
    top: calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -1);
  }
  span.line::after{
    bottom: calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -1);
  }
  /* * 3DX */
  .fx-3dx span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dx span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dx span.line::before, .fx-3dx span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dx.active span.line {
    background-color: transparent !important;
    transform: rotateY(180deg);
  }
  .fx-3dx.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dx.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * 3DX Reverse */
  .fx-3dx-r span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dx-r span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dx-r span.line::before, .fx-3dx-r span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dx-r.active span.line {
    background-color: transparent !important;
    transform: rotateY(-180deg);
  }
  .fx-3dx-r.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dx-r.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * 3DY */
  .fx-3dy span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dy span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dy span.line::before, .fx-3dy span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dy.active span.line {
    background-color: transparent !important;
    transform: rotateX(-180deg);
  }
  .fx-3dy.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dy.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * 3DY Reverse */
  .fx-3dy-r span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dy-r span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dy-r span.line::before, .fx-3dy-r span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dy-r.active span.line {
    background-color: transparent !important;
    transform: rotateX(180deg);
  }
  .fx-3dy-r.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dy-r.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * 3DXY */
  .fx-3dxy span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dxy span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dxy span.line::before, .fx-3dxy span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dxy.active span.line {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg);
  }
  .fx-3dxy.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dxy.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * 3DXY Reverse */
  .fx-3dxy-r span.box {
    perspective: calc(var(--hamburger-layer-width) * 2);
  }
  .fx-3dxy-r span.line {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dxy-r span.line::before, .fx-3dxy-r span.line::after{
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fx-3dxy-r.active span.line {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
  }
  .fx-3dxy-r.active span.line::before {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-3dxy-r.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
  }
  /* * Arrow */
  .fx-arrow.active span.line::before {
    transform: translateX(calc(var(--hamburger-layer-width) * -0.2)) rotate(-45deg) scale(0.7, 1);
  }
  .fx-arrow.active span.line::after{
    transform: translateX(calc(var(--hamburger-layer-width) * -0.2)) rotate(45deg) scale(0.7, 1);
  }
  /* * Arrow Right */
  .fx-arrow-r.active span.line::before {
    transform: translateX(calc(var(--hamburger-layer-width) * 0.2)) rotate(45deg) scale(0.7, 1);
  }
  .fx-arrow-r.active span.line::after{
    transform: translateX(calc(var(--hamburger-layer-width) * 0.2)) rotate(-45deg) scale(0.7, 1);
  }
  /* * Arrow Alt */
  .fx-arrowalt span.line::before {
    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .fx-arrowalt span.line::after{
    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .fx-arrowalt.active span.line::before {
    top: 0;
    transform: translateX(calc(var(--hamburger-layer-width) * -0.2)) translateY(calc(var(--hamburger-layer-width) * -0.25)) rotate(-45deg) scale(0.7, 1);
    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  .fx-arrowalt.active span.line::after{
    bottom: 0;
    transform: translateX(calc(var(--hamburger-layer-width) * -0.2)) translateY(calc(var(--hamburger-layer-width) * 0.25)) rotate(45deg) scale(0.7, 1);
    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  /* * Arrow Alt Right */
  .fx-arrowalt-r span.line::before {
    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .fx-arrowalt-r span.line::after{
    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .fx-arrowalt-r.active span.line::before {
    top: 0;
    transform: translateX(calc(var(--hamburger-layer-width) * 0.2)) translateY(calc(var(--hamburger-layer-width) * -0.25)) rotate(45deg) scale(0.7, 1);
    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  .fx-arrowalt-r.active span.line::after{
    bottom: 0;
    transform: translateX(calc(var(--hamburger-layer-width) * 0.2)) translateY(calc(var(--hamburger-layer-width) * 0.25)) rotate(-45deg) scale(0.7, 1);
    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  /* * Arrow Turn */
  .fx-arrowturn.active span.line {
    transform: rotate(-180deg);
  }
  .fx-arrowturn.active span.line::before {
    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
  }
  .fx-arrowturn.active span.line::after{
    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
  }
  /* * Arrow Turn Right */
  .fx-arrowturn-r.active span.line {
    transform: rotate(-180deg);
  }
  .fx-arrowturn-r.active span.line::before {
    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
  }
  .fx-arrowturn-r.active span.line::after{
    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
  }
  /* * Boring */
  .fx-boring span.line, .fx-boring span.line::before, .fx-boring span.line::after{
    transition-property: none;
  }
  .fx-boring.active span.line {
    transform: rotate(45deg);
  }
  .fx-boring.active span.line::before {
    top: 0;
    opacity: 0;
  }
  .fx-boring.active span.line::after{
    bottom: 0;
    transform: rotate(-90deg);
  }
  /* * Collapse */
  .fx-collapse span.line {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-collapse span.line::after{
    top: calc(((var(--hamburger-layer-spacing) * 2) + (var(--hamburger-layer-height) * 2)) * -1);
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
  }
  .fx-collapse span.line::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-collapse.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -1)) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-collapse.active span.line::after{
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
  }
  .fx-collapse.active span.line::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Collapse Reverse */
  .fx-collapse-r span.line {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-collapse-r span.line::after{
    top: calc(((var(--hamburger-layer-spacing) * 2) + (var(--hamburger-layer-height) * 2)) * -1);
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
  }
  .fx-collapse-r span.line::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-collapse-r.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -1)) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-collapse-r.active span.line::after{
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
  }
  .fx-collapse-r.active span.line::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Elastic */
  .fx-elastic span.line {
    top: calc(var(--hamburger-layer-height) / 2);
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .fx-elastic span.line::before {
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    transition: opacity 0.125s 0.275s ease;
  }
  .fx-elastic span.line::after{
    top: calc((var(--hamburger-layer-height) * 2) + (var(--hamburger-layer-spacing) * 2));
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .fx-elastic.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)))) rotate(135deg);
    transition-delay: 0.075s;
  }
  .fx-elastic.active span.line::before {
    transition-delay: 0s;
    opacity: 0;
  }
  .fx-elastic.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -2)) rotate(-270deg);
    transition-delay: 0.075s;
  }
  /* * Elastic Reverse */
  .fx-elastic-r span.line {
    top: calc(var(--hamburger-layer-height) / 2);
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .fx-elastic-r span.line::before {
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    transition: opacity 0.125s 0.275s ease;
  }
  .fx-elastic-r span.line::after{
    top: calc((var(--hamburger-layer-height) * 2) + (var(--hamburger-layer-spacing) * 2));
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .fx-elastic-r.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)))) rotate(-135deg);
    transition-delay: 0.075s;
  }
  .fx-elastic-r.active span.line::before {
    transition-delay: 0s;
    opacity: 0;
  }
  .fx-elastic-r.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -2)) rotate(270deg);
    transition-delay: 0.075s;
  }
  /* * Emphatic */
  .fx-emphatic {
    overflow: hidden;
  }
  .fx-emphatic span.line {
    transition: background-color 0.125s 0.175s ease-in;
  }
  .fx-emphatic span.line::before {
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
  }
  .fx-emphatic span.line::after{
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
  }
  .fx-emphatic.active span.line {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important;
  }
  .fx-emphatic.active span.line::before {
    left: calc(var(--hamburger-layer-width) * -2);
    top: calc(var(--hamburger-layer-width) * -2);
    transform: translateX(calc(var(--hamburger-layer-width) * 2)) translateY(calc(var(--hamburger-layer-width) * 2)) rotate(45deg);
    transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .fx-emphatic.active span.line::after{
    right: calc(var(--hamburger-layer-width) * -2);
    top: calc(var(--hamburger-layer-width) * -2);
    transform: translateX(calc(var(--hamburger-layer-width) * -2)) translateY(calc(var(--hamburger-layer-width) * 2)) rotate(-45deg);
    transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  /* * Emphatic Reverse */
  .fx-emphatic-r {
    overflow: hidden;
  }
  .fx-emphatic-r span.line {
    transition: background-color 0.125s 0.175s ease-in;
  }
  .fx-emphatic-r span.line::before {
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
  }
  .fx-emphatic-r span.line::after{
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
  }
  .fx-emphatic-r.active span.line {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important;
  }
  .fx-emphatic-r.active span.line::before {
    left: calc(var(--hamburger-layer-width) * -2);
    top: calc(var(--hamburger-layer-width) * 2);
    transform: translateX(calc(var(--hamburger-layer-width) * 2)) translateY(calc(var(--hamburger-layer-width) * -2)) rotate(-45deg);
    transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .fx-emphatic-r.active span.line::after{
    right: calc(var(--hamburger-layer-width) * -2);
    top: calc(var(--hamburger-layer-width) * 2);
    transform: translateX(calc(var(--hamburger-layer-width) * -2)) translateY(calc(var(--hamburger-layer-width) * -2)) rotate(45deg);
    transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  /* * Minus */
  .fx-minus span.line::before, .fx-minus span.line::after{
    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
  }
  .fx-minus.active span.line::before, .fx-minus.active span.line::after{
    opacity: 0;
    transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
  }
  .fx-minus.active span.line::before {
    top: 0;
  }
  .fx-minus.active span.line::after{
    bottom: 0;
  }
  /* * Slider */
  .fx-slider span.line {
    top: calc(var(--hamburger-layer-height) / 2);
  }
  .fx-slider span.line::before {
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  .fx-slider span.line::after{
    top: calc((var(--hamburger-layer-height) * 2) + (var(--hamburger-layer-spacing) * 2));
  }
  .fx-slider.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)))) rotate(45deg);
  }
  .fx-slider.active span.line::before {
    transform: rotate(-45deg) translateX(calc(var(--hamburger-layer-width) / -7)) translateY(calc(var(--hamburger-layer-spacing) * -1));
    opacity: 0;
  }
  .fx-slider.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -2)) rotate(-90deg);
  }
  /* * Slider Reverse */
  .fx-slider-r span.line {
    top: calc(var(--hamburger-layer-height) / 2);
  }
  .fx-slider-r span.line::before {
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  .fx-slider-r span.line::after{
    top: calc((var(--hamburger-layer-height) * 2) + (var(--hamburger-layer-spacing) * 2));
  }
  .fx-slider-r.active span.line {
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)))) rotate(-45deg);
  }
  .fx-slider-r.active span.line::before {
    transform: rotate(45deg) translateX(calc(var(--hamburger-layer-width) / 7)) translateY(calc(var(--hamburger-layer-spacing) * -1));
    opacity: 0;
  }
  .fx-slider-r.active span.line::after{
    transform: translateY(calc((var(--hamburger-layer-spacing) + var(--hamburger-layer-height)) * -2)) rotate(90deg);
  }
  /* * Spin */
  .fx-spin span.line {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spin span.line::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .fx-spin span.line::after{
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spin.active span.line {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-spin.active span.line::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .fx-spin.active span.line::after{
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Spin Reverse */
  .fx-spin-r span.line {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spin-r span.line::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .fx-spin-r span.line::after{
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spin-r.active span.line {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-spin-r.active span.line::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .fx-spin-r.active span.line::after{
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Spring */
  .fx-spring span.line {
    top: calc(var(--hamburger-layer-height) / 2);
    transition: background-color 0s 0.13s linear;
  }
  .fx-spring span.line::before {
    top: calc(var(--hamburger-layer-height) + var(--hamburger-layer-spacing));
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spring span.line::after{
    top: calc((var(--hamburger-layer-height) * 2) + (var(--hamburger-layer-spacing) * 2));
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spring.active span.line {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .fx-spring.active span.line::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(45deg);
  }
  .fx-spring.active span.line::after{
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)))) rotate(-45deg);
  }
  /* * Spring Reverse */
  .fx-spring-r span.line {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spring-r span.line::after{
    top: calc((var(--hamburger-layer-spacing) * 2 + var(--hamburger-layer-height) * 2) * -1);
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;
  }
  .fx-spring-r span.line::before {
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-spring-r.active span.line {
    transform: translateY(calc((var(--hamburger-layer-height) + var(--hamburger-layer-spacing)) * -1)) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-spring-r.active span.line::after{
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;
  }
  .fx-spring-r.active span.line::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Stand */
  .fx-stand span.line {
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
  }
  .fx-stand span.line::before {
    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-stand span.line::after{
    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-stand.active span.line {
    transform: rotate(90deg);
    background-color: transparent !important;
    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
  }
  .fx-stand.active span.line::before {
    top: 0;
    transform: rotate(-45deg);
    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-stand.active span.line::after{
    bottom: 0;
    transform: rotate(45deg);
    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Stand Reverse */
  .fx-stand-r span.line {
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
  }
  .fx-stand-r span.line::before {
    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-stand-r span.line::after{
    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-stand-r.active span.line {
    transform: rotate(-90deg);
    background-color: transparent !important;
    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
  }
  .fx-stand-r.active span.line::before {
    top: 0;
    transform: rotate(-45deg);
    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-stand-r.active span.line::after{
    bottom: 0;
    transform: rotate(45deg);
    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Squeeze */
  .fx-squeeze span.line {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-squeeze span.line::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }
  .fx-squeeze span.line::after{
    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .fx-squeeze.active span.line {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .fx-squeeze.active span.line::before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }
  .fx-squeeze.active span.line::after{
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  /* * Vortex */
  .fx-vortex span.line {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .fx-vortex span.line::before, .fx-vortex span.line::after{
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear;
  }
  .fx-vortex span.line::before {
    transition-property: top, opacity;
  }
  .fx-vortex span.line::after{
    transition-property: bottom, transform;
  }
  .fx-vortex.active span.line {
    transform: rotate(765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .fx-vortex.active span.line::before, .fx-vortex.active span.line::after{
    transition-delay: 0s;
  }
  .fx-vortex.active span.line::before {
    top: 0;
    opacity: 0;
  }
  .fx-vortex.active span.line::after{
    bottom: 0;
    transform: rotate(90deg);
  }
  /* * Vortex Reverse */
  .fx-vortex-r span.line {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .fx-vortex-r span.line::before, .fx-vortex-r span.line::after{
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear;
  }
  .fx-vortex-r span.line::before {
    transition-property: top, opacity;
  }
  .fx-vortex-r span.line::after{
    transition-property: bottom, transform;
  }
  .fx-vortex-r.active span.line {
    transform: rotate(-765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .fx-vortex-r.active span.line::before, .fx-vortex-r.active span.line::after{
    transition-delay: 0s;
  }
  .fx-vortex-r.active span.line::before {
    top: 0;
    opacity: 0;
  }
  .fx-vortex-r.active span.line::after{
    bottom: 0;
    transform: rotate(-90deg);
  }
</style>
