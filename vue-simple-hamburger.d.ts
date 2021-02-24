import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const VueSimpleHamburger: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default VueSimpleHamburger;
