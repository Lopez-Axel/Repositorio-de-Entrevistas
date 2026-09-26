import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate, x as createAstro } from "./server_D3-gdkgn.mjs";
import { t as createComponent } from "./compiler_BmKePrG-.mjs";
import * as React$1 from "react";
import { useCallback, useEffect, useState } from "react";
import clsx$1 from "clsx";
import PropTypes from "prop-types";
import composeClasses from "@mui/utils/composeClasses";
import styleFunctionSx, { unstable_defaultSxConfig } from "@mui/system/styleFunctionSx";
import { ThemeProvider, createBox, createSpacing, createStack, css, keyframes, unstable_createCssVarsProvider, unstable_createGetCssVar, unstable_memoTheme, useTheme } from "@mui/system";
import _formatErrorMessage from "@mui/utils/formatMuiErrorMessage";
import deepmerge, { isPlainObject } from "@mui/utils/deepmerge";
import { alpha, darken, getContrastRatio, hslToRgb, lighten, private_safeAlpha, private_safeColorChannel, private_safeDarken, private_safeEmphasize, private_safeLighten } from "@mui/system/colorManipulator";
import { createUnarySpacing } from "@mui/system/spacing";
import { createGetColorSchemeSelector, prepareCssVars, prepareTypographyVars } from "@mui/system/cssVars";
import systemCreateTheme from "@mui/system/createTheme";
import generateUtilityClass from "@mui/utils/generateUtilityClass";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import createStyled from "@mui/system/createStyled";
import SystemDefaultPropsProvider, { useDefaultProps } from "@mui/system/DefaultPropsProvider";
import useForkRef from "@mui/utils/useForkRef";
import appendOwnerState from "@mui/utils/appendOwnerState";
import resolveComponentProps from "@mui/utils/resolveComponentProps";
import mergeSlotProps from "@mui/utils/mergeSlotProps";
import capitalize from "@mui/utils/capitalize";
import integerPropType from "@mui/utils/integerPropType";
import chainPropTypes from "@mui/utils/chainPropTypes";
import generateUtilityClasses from "@mui/utils/generateUtilityClasses";
import unstable_ClassNameGenerator from "@mui/utils/ClassNameGenerator";
import createChainedFunction from "@mui/utils/createChainedFunction";
import getActiveElement from "@mui/utils/getActiveElement";
import ownerDocument from "@mui/utils/ownerDocument";
import ownerWindow from "@mui/utils/ownerWindow";
import setRef from "@mui/utils/setRef";
import useEnhancedEffect from "@mui/utils/useEnhancedEffect";
import useId from "@mui/utils/useId";
import unsupportedProp from "@mui/utils/unsupportedProp";
import useEventCallback from "@mui/utils/useEventCallback";
import refType from "@mui/utils/refType";
import elementTypeAcceptingRef from "@mui/utils/elementTypeAcceptingRef";
import isFocusVisible from "@mui/utils/isFocusVisible";
import useLazyRef from "@mui/utils/useLazyRef";
import useOnMount from "@mui/utils/useOnMount";
import useTimeout from "@mui/utils/useTimeout";
import SystemInitColorSchemeScript from "@mui/system/InitColorSchemeScript";
import resolveProps from "@mui/utils/resolveProps";
import getScrollbarSize from "@mui/utils/getScrollbarSize";
import HTMLElementType from "@mui/utils/HTMLElementType";
import elementAcceptingRef from "@mui/utils/elementAcceptingRef";
import getReactElementRef from "@mui/utils/getReactElementRef";
import exactProp from "@mui/utils/exactProp";
import contains from "@mui/utils/contains";
import * as ReactDOM from "react-dom";
import useValueAsRef from "@mui/utils/useValueAsRef";
import TransitionGroupContext from "react-transition-group/cjs/TransitionGroupContext.js";
import extractEventHandlers from "@mui/utils/extractEventHandlers";
//#region src/components/astro/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Plataforma de Entrevistas", description = "Entrevistas asistidas por IA para descubrir oportunidades de software en pequeños negocios." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#4f46e5"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%234f46e5'/%3E%3Cpath d='M9 12h14M9 17h14M9 22h9' stroke='white' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E"><title>${title}</title>${renderHead($$result)}</head><body><div class="app-shell">${renderSlot($$result, $$slots["default"])}</div></body></html>`;
}, "C:/Users/WIN_11/Documents/Axel/My_Interview/My_Interview/src/components/astro/Layout.astro", void 0);
//#endregion
//#region src/components/astro/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { showNav = true } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="app-header"><div class="app-header__inner"><a class="brand" href="/"><span class="brand__mark" aria-hidden="true">IE</span><span class="brand__text"><span class="brand__title">Plataforma de Entrevistas</span><span class="brand__subtitle">Oportunidades de software para pequeños negocios</span></span></a>${showNav && renderTemplate`<nav class="header-nav" aria-label="Principal"><a class="header-nav__link" href="/">Inicio</a><a class="header-nav__link" href="/interview/new">Nueva entrevista</a></nav>`}</div></header>`;
}, "C:/Users/WIN_11/Documents/Axel/My_Interview/My_Interview/src/components/astro/Header.astro", void 0);
//#endregion
//#region node_modules/@mui/material/colors/common.mjs
var common = {
	black: "#000",
	white: "#fff"
};
//#endregion
//#region node_modules/@mui/material/colors/grey.mjs
var grey = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
};
//#endregion
//#region node_modules/@mui/material/colors/purple.mjs
var purple = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
};
//#endregion
//#region node_modules/@mui/material/colors/red.mjs
var red = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
};
//#endregion
//#region node_modules/@mui/material/colors/orange.mjs
var orange = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
};
//#endregion
//#region node_modules/@mui/material/colors/blue.mjs
var blue = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
};
//#endregion
//#region node_modules/@mui/material/colors/lightBlue.mjs
var lightBlue = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
};
//#endregion
//#region node_modules/@mui/material/colors/green.mjs
var green = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
};
//#endregion
//#region node_modules/@mui/material/styles/createPalette.mjs
function getLight() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: common.white,
			default: common.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var light = getLight();
function getDark() {
	return {
		text: {
			primary: common.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: common.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
	const tonalOffsetLight = tonalOffset.light || tonalOffset;
	const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
	if (!intent[direction]) {
		if (intent.hasOwnProperty(shade)) intent[direction] = intent[shade];
		else if (direction === "light") intent.light = lighten(intent.main, tonalOffsetLight);
		else if (direction === "dark") intent.dark = darken(intent.main, tonalOffsetDark);
	}
}
function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
	const tonalOffsetLight = tonalOffset.light || tonalOffset;
	const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
	if (!intent[direction]) {
		if (intent.hasOwnProperty(shade)) intent[direction] = intent[shade];
		else if (direction === "light") intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
		else if (direction === "dark") intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
	}
}
function getDefaultPrimary(mode = "light") {
	if (mode === "dark") return {
		main: blue[200],
		light: blue[50],
		dark: blue[400]
	};
	return {
		main: blue[700],
		light: blue[400],
		dark: blue[800]
	};
}
function getDefaultSecondary(mode = "light") {
	if (mode === "dark") return {
		main: purple[200],
		light: purple[50],
		dark: purple[400]
	};
	return {
		main: purple[500],
		light: purple[300],
		dark: purple[700]
	};
}
function getDefaultError(mode = "light") {
	if (mode === "dark") return {
		main: red[500],
		light: red[300],
		dark: red[700]
	};
	return {
		main: red[700],
		light: red[400],
		dark: red[800]
	};
}
function getDefaultInfo(mode = "light") {
	if (mode === "dark") return {
		main: lightBlue[400],
		light: lightBlue[300],
		dark: lightBlue[700]
	};
	return {
		main: lightBlue[700],
		light: lightBlue[500],
		dark: lightBlue[900]
	};
}
function getDefaultSuccess(mode = "light") {
	if (mode === "dark") return {
		main: green[400],
		light: green[300],
		dark: green[700]
	};
	return {
		main: green[800],
		light: green[500],
		dark: green[900]
	};
}
function getDefaultWarning(mode = "light") {
	if (mode === "dark") return {
		main: orange[400],
		light: orange[300],
		dark: orange[700]
	};
	return {
		main: "#ed6c02",
		light: orange[500],
		dark: orange[900]
	};
}
function contrastColor(background) {
	return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
}
function createPalette(palette) {
	const { mode = "light", contrastThreshold = 3, tonalOffset = .2, colorSpace, ...other } = palette;
	const primary = palette.primary || getDefaultPrimary(mode);
	const secondary = palette.secondary || getDefaultSecondary(mode);
	const error = palette.error || getDefaultError(mode);
	const info = palette.info || getDefaultInfo(mode);
	const success = palette.success || getDefaultSuccess(mode);
	const warning = palette.warning || getDefaultWarning(mode);
	function getContrastText(background) {
		if (colorSpace) return contrastColor(background);
		const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
		if (process.env.NODE_ENV !== "production") {
			const contrast = getContrastRatio(background, contrastText);
			if (contrast < 3) console.error([
				`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
				"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.",
				"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"
			].join("\n"));
		}
		return contrastText;
	}
	const augmentColor = ({ color, name, mainShade = 500, lightShade = 300, darkShade = 700 }) => {
		color = { ...color };
		if (!color.main && color[mainShade]) color.main = color[mainShade];
		if (!color.hasOwnProperty("main")) throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.\nThe color object needs to have a \`main\` property or a \`${mainShade}\` property.` : _formatErrorMessage(11, name ? ` (${name})` : "", mainShade));
		if (typeof color.main !== "string") throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.\n\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n
Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : _formatErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
		if (colorSpace) {
			mixLightOrDark(colorSpace, color, "light", lightShade, tonalOffset);
			mixLightOrDark(colorSpace, color, "dark", darkShade, tonalOffset);
		} else {
			addLightOrDark(color, "light", lightShade, tonalOffset);
			addLightOrDark(color, "dark", darkShade, tonalOffset);
		}
		if (!color.contrastText) color.contrastText = getContrastText(color.main);
		return color;
	};
	let modeHydrated;
	if (mode === "light") modeHydrated = getLight();
	else if (mode === "dark") modeHydrated = getDark();
	if (process.env.NODE_ENV !== "production") {
		if (!modeHydrated) console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
	}
	return deepmerge({
		common: { ...common },
		mode,
		primary: augmentColor({
			color: primary,
			name: "primary"
		}),
		secondary: augmentColor({
			color: secondary,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: augmentColor({
			color: error,
			name: "error"
		}),
		warning: augmentColor({
			color: warning,
			name: "warning"
		}),
		info: augmentColor({
			color: info,
			name: "info"
		}),
		success: augmentColor({
			color: success,
			name: "success"
		}),
		grey,
		contrastThreshold,
		getContrastText,
		augmentColor,
		tonalOffset,
		...modeHydrated
	}, other);
}
//#endregion
//#region node_modules/@mui/material/styles/focusVisible.mjs
var focusVisibleOffsetVar = "--_focusVisible-offset";
var focusVisibleBehaviorVar = "--_focusVisible-behavior";
var focusVisibleShadowVar = "--_focusVisible-shadow";
var offsetValue = `var(${focusVisibleOffsetVar}, 1)`;
var behaviorValue = `var(${focusVisibleBehaviorVar}, )`;
var outsetFocusRing = {
	[focusVisibleOffsetVar]: 1,
	[focusVisibleBehaviorVar]: "initial"
};
function applyChildrenFocusVisible(color) {
	return { [focusVisibleShadowVar]: color };
}
function mergeFocusVisibleInput(optionsFocusVisible, args) {
	return args.reduce((acc, arg) => arg && "focusVisible" in arg ? deepmerge(acc, { focusVisible: arg.focusVisible }) : acc, { focusVisible: optionsFocusVisible }).focusVisible;
}
/**
* Whether an input is this module's own output. Only `wireFocusVisibleVars` emits the offset calc,
* so it identifies a ring fed back in by `createTheme(existingTheme, …)`.
*/
function isResolvedFocusVisible(input) {
	return input != null && typeof input === "object" && typeof input.outlineOffset === "string" && input.outlineOffset.includes(focusVisibleOffsetVar);
}
/**
* Resolve the opt-in ring, wiring in the private inset vars. `outlineColor` is the caller's default
* — a hex, the palette var, or a scheme's primary — overridden by a user-provided `outlineColor`.
*/
function resolveFocusVisible(input, outlineColor) {
	return wireFocusVisibleVars({
		outlineStyle: "solid",
		outlineColor,
		outlineWidth: 2,
		outlineOffset: 2,
		boxShadow: `var(${focusVisibleShadowVar}, 0 0)`,
		...input === true ? null : input
	});
}
/**
* Wire the private inset vars into a resolved `theme.focusVisible` so a custom `outlineOffset` or
* `boxShadow` insets automatically on clip-prone components. Mutates and returns the object.
*/
function wireFocusVisibleVars(resolved) {
	const offset = resolved.outlineOffset ?? 0;
	if (typeof offset !== "string" || !offset.includes(focusVisibleOffsetVar)) resolved.outlineOffset = `calc(${offsetValue} * ${typeof offset === "number" ? `${offset}px` : offset})`;
	const standaloneBoxShadows = /* @__PURE__ */ new Set([
		"none",
		"initial",
		"inherit",
		"unset",
		"revert",
		"revert-layer"
	]);
	if (typeof resolved.boxShadow === "string" && !standaloneBoxShadows.has(resolved.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(resolved.boxShadow) && !resolved.boxShadow.includes(focusVisibleBehaviorVar)) resolved.boxShadow = `${behaviorValue} ${resolved.boxShadow}`;
	return resolved;
}
//#endregion
//#region node_modules/@mui/material/styles/createMixins.mjs
function createMixins(breakpoints, mixins) {
	return {
		toolbar: {
			minHeight: 56,
			[breakpoints.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[breakpoints.up("sm")]: { minHeight: 64 }
		},
		...mixins
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createTypography.mjs
function round(value) {
	return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = { textTransform: "uppercase" };
var defaultFontFamily = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
/**
* @see @link{https://m2.material.io/design/typography/the-type-system.html}
* @see @link{https://m2.material.io/design/typography/understanding-typography.html}
*/
function createTypography(palette, typography) {
	const { fontFamily = defaultFontFamily, fontSize = 14, fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, htmlFontSize = 16, allVariants, pxToRem: pxToRem2, ...other } = typeof typography === "function" ? typography(palette) : typography;
	if (process.env.NODE_ENV !== "production") {
		if (typeof fontSize !== "number") console.error("MUI: `fontSize` is required to be a number.");
		if (typeof htmlFontSize !== "number") console.error("MUI: `htmlFontSize` is required to be a number.");
	}
	const coef = fontSize / 14;
	const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
	const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
		fontFamily,
		fontWeight,
		fontSize: pxToRem(size),
		lineHeight,
		...fontFamily === defaultFontFamily ? { letterSpacing: `${round(letterSpacing / size)}em` } : {},
		...casing,
		...allVariants
	});
	const variants = {
		h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
		h2: buildVariant(fontWeightLight, 60, 1.2, -.5),
		h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
		h4: buildVariant(fontWeightRegular, 34, 1.235, .25),
		h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
		h6: buildVariant(fontWeightMedium, 20, 1.6, .15),
		subtitle1: buildVariant(fontWeightRegular, 16, 1.75, .15),
		subtitle2: buildVariant(fontWeightMedium, 14, 1.57, .1),
		body1: buildVariant(fontWeightRegular, 16, 1.5, .15),
		body2: buildVariant(fontWeightRegular, 14, 1.43, .15),
		button: buildVariant(fontWeightMedium, 14, 1.75, .4, caseAllCaps),
		caption: buildVariant(fontWeightRegular, 12, 1.66, .4),
		overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	};
	return deepmerge({
		htmlFontSize,
		pxToRem,
		fontFamily,
		fontSize,
		fontWeightLight,
		fontWeightRegular,
		fontWeightMedium,
		fontWeightBold,
		...variants
	}, other, { clone: false });
}
//#endregion
//#region node_modules/@mui/material/styles/shadows.mjs
var shadowKeyUmbraOpacity = .2;
var shadowKeyPenumbraOpacity = .14;
var shadowAmbientShadowOpacity = .12;
function createShadow(...px) {
	return [
		`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
		`${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
		`${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`
	].join(",");
}
var shadows = [
	"none",
	createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
//#endregion
//#region node_modules/@mui/material/styles/createTransitions.mjs
var DEFAULT_TRANSITION_PROPS$1 = ["all"];
var EMPTY_OPTIONS$1 = {};
var easing = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function formatMs(milliseconds) {
	return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
	if (!height) return 0;
	const constant = height / 36;
	return Math.min(Math.round((4 + 15 * constant ** .25 + constant / 5) * 10), 3e3);
}
function createTransitions(inputTransitions) {
	const transitions = { ...inputTransitions };
	delete transitions.reducedMotion;
	const mergedEasing = {
		...easing,
		...transitions.easing
	};
	const mergedDuration = {
		...duration,
		...transitions.duration
	};
	const createTransitionValue = (props = DEFAULT_TRANSITION_PROPS$1, options = EMPTY_OPTIONS$1) => {
		const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0, ...other } = options;
		if (process.env.NODE_ENV !== "production") {
			const isString = (value) => typeof value === "string";
			const isNumber = (value) => !Number.isNaN(parseFloat(value));
			if (!isString(props) && !Array.isArray(props)) console.error("MUI: Argument \"props\" must be a string or Array.");
			if (!isNumber(durationOption) && !isString(durationOption)) console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
			if (!isString(easingOption)) console.error("MUI: Argument \"easing\" must be a string.");
			if (!isNumber(delay) && !isString(delay)) console.error("MUI: Argument \"delay\" must be a number or a string.");
			if (typeof options !== "object") console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
			if (Object.keys(other).length !== 0) console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
		}
		return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
	};
	return {
		getAutoHeightDuration,
		create: transitions.create ?? createTransitionValue,
		...transitions,
		easing: mergedEasing,
		duration: mergedDuration
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createMotion.mjs
var EMPTY_MOTION = {};
function createMotion(inputMotion = EMPTY_MOTION) {
	return {
		reducedMotion: "never",
		...inputMotion
	};
}
//#endregion
//#region node_modules/@mui/material/styles/zIndex.mjs
var zIndex = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region node_modules/@mui/material/styles/stringifyTheme.mjs
function isSerializable(val) {
	return isPlainObject(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
}
/**
* `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
*
* This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
* For example, in a Next.js project:
*
* ```js
* // next.config.js
* const { extendTheme } = require('@mui/material/styles');
*
* const theme = extendTheme();
* // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
* theme.toRuntimeSource = stringifyTheme;
*
* module.exports = withPigment({
*  theme,
* });
* ```
*/
function stringifyTheme(baseTheme = {}) {
	const serializableTheme = { ...baseTheme };
	function serializeTheme(object) {
		const array = Object.entries(object);
		for (let index = 0; index < array.length; index++) {
			const [key, value] = array[index];
			if (!isSerializable(value) || key.startsWith("unstable_") || key.startsWith("internal_")) delete object[key];
			else if (isPlainObject(value)) {
				object[key] = { ...value };
				serializeTheme(object[key]);
			}
		}
	}
	serializeTheme(serializableTheme);
	return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region node_modules/@mui/material/styles/createThemeNoVars.mjs
function coefficientToPercentage(coefficient) {
	if (typeof coefficient === "number") return `${(coefficient * 100).toFixed(0)}%`;
	return `calc((${coefficient}) * 100%)`;
}
var parseAddition = (str) => {
	if (!Number.isNaN(+str)) return +str;
	const numbers = str.match(/\d*\.?\d+/g);
	if (!numbers) return 0;
	let sum = 0;
	for (let i = 0; i < numbers.length; i += 1) sum += +numbers[i];
	return sum;
};
function attachColorManipulators(theme) {
	Object.assign(theme, {
		alpha(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `oklch(from ${color} l c h / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
			if (obj.vars) return `rgba(${color.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
			return alpha(color, parseAddition(coefficient));
		},
		lighten(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `color-mix(in ${obj.colorSpace}, ${color}, #fff ${coefficientToPercentage(coefficient)})`;
			return lighten(color, coefficient);
		},
		darken(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `color-mix(in ${obj.colorSpace}, ${color}, #000 ${coefficientToPercentage(coefficient)})`;
			return darken(color, coefficient);
		}
	});
}
function createThemeNoVars(options = {}, ...args) {
	const { breakpoints: breakpointsInput, mixins: mixinsInput = {}, spacing: spacingInput, palette: paletteInput = {}, motion: motionInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}, shape: shapeInput, colorSpace, ...other } = options;
	if (options.vars && options.generateThemeVars === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : _formatErrorMessage(22));
	const palette = createPalette({
		...paletteInput,
		colorSpace
	});
	const systemTheme = systemCreateTheme(options);
	let muiTheme = deepmerge(systemTheme, {
		mixins: createMixins(systemTheme.breakpoints, mixinsInput),
		palette,
		shadows: shadows.slice(),
		typography: createTypography(palette, typographyInput),
		motion: createMotion(motionInput),
		transitions: createTransitions(transitionsInput),
		zIndex: { ...zIndex }
	});
	muiTheme = deepmerge(muiTheme, other);
	muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
	delete muiTheme.transitions.reducedMotion;
	if (muiTheme.focusVisible != null && muiTheme.focusVisible !== false) muiTheme.focusVisible = resolveFocusVisible(muiTheme.focusVisible, muiTheme.palette.primary.main);
	if (process.env.NODE_ENV !== "production") {
		const stateClasses = [
			"active",
			"checked",
			"completed",
			"disabled",
			"error",
			"expanded",
			"focused",
			"focusVisible",
			"required",
			"selected"
		];
		const traverse = (node, component) => {
			let key;
			for (key in node) {
				const child = node[key];
				if (stateClasses.includes(key) && Object.keys(child).length > 0) {
					if (process.env.NODE_ENV !== "production") {
						const stateClass = generateUtilityClass("", key);
						console.error([
							`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`,
							"You can not override it like this: ",
							JSON.stringify(node, null, 2),
							"",
							`Instead, you need to use the '&.${stateClass}' syntax:`,
							JSON.stringify({ root: { [`&.${stateClass}`]: child } }, null, 2),
							"",
							"https://mui.com/r/state-classes-guide"
						].join("\n"));
					}
					node[key] = {};
				}
			}
		};
		Object.keys(muiTheme.components).forEach((component) => {
			const styleOverrides = muiTheme.components[component].styleOverrides;
			if (styleOverrides && component.startsWith("Mui")) traverse(styleOverrides, component);
		});
	}
	muiTheme.unstable_sxConfig = {
		...unstable_defaultSxConfig,
		...other?.unstable_sxConfig
	};
	muiTheme.unstable_sx = function sx(props) {
		return styleFunctionSx({
			sx: props,
			theme: this
		});
	};
	muiTheme.toRuntimeSource = stringifyTheme;
	attachColorManipulators(muiTheme);
	return muiTheme;
}
//#endregion
//#region node_modules/@mui/material/styles/getOverlayAlpha.mjs
function getOverlayAlpha(elevation) {
	let alphaValue;
	if (elevation < 1) alphaValue = 5.11916 * elevation ** 2;
	else alphaValue = 4.5 * Math.log(elevation + 1) + 2;
	return Math.round(alphaValue * 10) / 1e3;
}
//#endregion
//#region node_modules/@mui/material/styles/createColorScheme.mjs
var defaultDarkOverlays = [...Array(25)].map((_, index) => {
	if (index === 0) return "none";
	const overlay = getOverlayAlpha(index);
	return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
	return {
		inputPlaceholder: mode === "dark" ? .5 : .42,
		inputUnderline: mode === "dark" ? .7 : .42,
		switchTrackDisabled: mode === "dark" ? .2 : .12,
		switchTrack: mode === "dark" ? .3 : .38
	};
}
function getOverlays(mode) {
	return mode === "dark" ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
	const { palette: paletteInput = { mode: "light" }, opacity, overlays, colorSpace, ...other } = options;
	const palette = createPalette({
		...paletteInput,
		colorSpace
	});
	return {
		palette,
		opacity: {
			...getOpacity(palette.mode),
			...opacity
		},
		overlays: overlays || getOverlays(palette.mode),
		...other
	};
}
//#endregion
//#region node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function shouldSkipGeneratingVar(keys) {
	return keys[0] === "motion" || keys[0] === "focusVisible" || !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || keys[0] === "palette" && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
/**
* @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
*/
var excludeVariablesFromRoot = (cssVarPrefix) => [
	...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`),
	`--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`,
	`--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`
];
//#endregion
//#region node_modules/@mui/material/styles/createGetSelector.mjs
var createGetSelector_default = (theme) => (colorScheme, css) => {
	const root = theme.rootSelector || ":root";
	const selector = theme.colorSchemeSelector;
	let rule = selector;
	if (selector === "class") rule = ".%s";
	if (selector === "data") rule = "[data-%s]";
	if (selector?.startsWith("data-") && !selector.includes("%s")) rule = `[${selector}="%s"]`;
	if (theme.defaultColorScheme === colorScheme) {
		if (colorScheme === "dark") {
			const excludedVariables = {};
			excludeVariablesFromRoot(theme.cssVarPrefix).forEach((cssVar) => {
				excludedVariables[cssVar] = css[cssVar];
				delete css[cssVar];
			});
			if (rule === "media") return {
				[root]: css,
				[`@media (prefers-color-scheme: dark)`]: { [root]: excludedVariables }
			};
			if (rule) return {
				[rule.replace("%s", colorScheme)]: excludedVariables,
				[`${root}, ${rule.replace("%s", colorScheme)}`]: css
			};
			return { [root]: {
				...css,
				...excludedVariables
			} };
		}
		if (rule && rule !== "media") return `${root}, ${rule.replace("%s", String(colorScheme))}`;
	} else if (colorScheme) {
		if (rule === "media") return { [`@media (prefers-color-scheme: ${String(colorScheme)})`]: { [root]: css } };
		if (rule) return rule.replace("%s", String(colorScheme));
	}
	return root;
};
//#endregion
//#region node_modules/@mui/material/styles/createThemeWithVars.mjs
function assignNode(obj, keys) {
	keys.forEach((k) => {
		if (!obj[k]) obj[k] = {};
	});
}
function setColor(obj, key, defaultValue) {
	if (!obj[key] && defaultValue) obj[key] = defaultValue;
}
function toRgb(color) {
	if (typeof color !== "string" || !color.startsWith("hsl")) return color;
	return hslToRgb(color);
}
function setColorChannel(obj, key) {
	if (!(`${key}Channel` in obj)) obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
}
function getSpacingVal(spacingInput) {
	if (typeof spacingInput === "number") return `${spacingInput}px`;
	if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) return spacingInput;
	return "8px";
}
var silent = (fn) => {
	try {
		return fn();
	} catch (error) {}
};
var createGetCssVar = (cssVarPrefix = "mui") => unstable_createGetCssVar(cssVarPrefix);
function attachColorScheme$1(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
	if (!scheme) return;
	scheme = scheme === true ? {} : scheme;
	const mode = colorScheme === "dark" ? "dark" : "light";
	if (!restTheme) {
		colorSchemes[colorScheme] = createColorScheme({
			...scheme,
			palette: {
				mode,
				...scheme?.palette
			},
			colorSpace
		});
		return;
	}
	const { palette, ...muiTheme } = createThemeNoVars({
		...restTheme,
		palette: {
			mode,
			...scheme?.palette
		},
		colorSpace
	});
	colorSchemes[colorScheme] = {
		...scheme,
		palette,
		opacity: {
			...getOpacity(mode),
			...scheme?.opacity
		},
		overlays: scheme?.overlays || getOverlays(mode)
	};
	return muiTheme;
}
/**
* A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
* This is better suited for apps that only need a single color scheme.
*
* To enable built-in `light` and `dark` color schemes, either:
* 1. provide a `colorSchemeSelector` to define how the color schemes will change.
* 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
*/
function createThemeWithVars(options = {}, ...args) {
	const { colorSchemes: colorSchemesInput = { light: true }, defaultColorScheme: defaultColorSchemeInput, disableCssColorScheme = false, cssVarPrefix = "mui", nativeColor = false, shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar, colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0, rootSelector = ":root", ...input } = options;
	const firstColorScheme = Object.keys(colorSchemesInput)[0];
	const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
	const getCssVar = createGetCssVar(cssVarPrefix);
	const { [defaultColorScheme]: defaultSchemeInput, light: builtInLight, dark: builtInDark, ...customColorSchemes } = colorSchemesInput;
	const colorSchemes = { ...customColorSchemes };
	let defaultScheme = defaultSchemeInput;
	if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) defaultScheme = true;
	if (!defaultScheme) throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : _formatErrorMessage(21, defaultColorScheme));
	let colorSpace;
	if (nativeColor) colorSpace = "oklch";
	const muiTheme = attachColorScheme$1(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
	if (builtInLight && !colorSchemes.light) attachColorScheme$1(colorSpace, colorSchemes, builtInLight, void 0, "light");
	if (builtInDark && !colorSchemes.dark) attachColorScheme$1(colorSpace, colorSchemes, builtInDark, void 0, "dark");
	let theme = {
		defaultColorScheme,
		...muiTheme,
		cssVarPrefix,
		colorSchemeSelector: selector,
		rootSelector,
		getCssVar,
		colorSchemes,
		font: {
			...prepareTypographyVars(muiTheme.typography),
			...muiTheme.font
		},
		spacing: getSpacingVal(input.spacing)
	};
	Object.keys(theme.colorSchemes).forEach((key) => {
		const palette = theme.colorSchemes[key].palette;
		const setCssVarColor = (cssVar) => {
			const tokens = cssVar.split("-");
			const color = tokens[1];
			const colorToken = tokens[2];
			return getCssVar(cssVar, palette[color][colorToken]);
		};
		if (palette.mode === "light") {
			setColor(palette.common, "background", "#fff");
			setColor(palette.common, "onBackground", "#000");
		}
		if (palette.mode === "dark") {
			setColor(palette.common, "background", "#000");
			setColor(palette.common, "onBackground", "#fff");
		}
		function colorMix(method, color, coefficient) {
			if (colorSpace) {
				let mixer;
				if (method === private_safeAlpha) mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
				if (method === private_safeDarken) mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
				if (method === private_safeLighten) mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
				return `color-mix(in ${colorSpace}, ${color}, ${mixer})`;
			}
			return method(color, coefficient);
		}
		assignNode(palette, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]);
		if (palette.mode === "light") {
			setColor(palette.Alert, "errorColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .6));
			setColor(palette.Alert, "infoColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .6));
			setColor(palette.Alert, "successColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .6));
			setColor(palette.Alert, "warningColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .6));
			setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
			setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.main)));
			setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.main)));
			setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.main)));
			setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.main)));
			setColor(palette.Alert, "errorStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .9));
			setColor(palette.Alert, "infoStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .9));
			setColor(palette.Alert, "successStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .9));
			setColor(palette.Alert, "warningStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .9));
			setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
			setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
			setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
			setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
			setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
			setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
			setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
			setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
			setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
			setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
			setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.LinearProgress, "errorBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.LinearProgress, "infoBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.LinearProgress, "successBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.LinearProgress, "warningBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .62));
			setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette.text.primary, .11) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
			setColor(palette.Slider, "primaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.Slider, "secondaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.Slider, "errorTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.Slider, "infoTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.Slider, "successTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.Slider, "warningTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .62));
			const snackbarContentBackground = colorSpace ? colorMix(private_safeDarken, nativeColor ? getCssVar("palette-background-default") : palette.background.default, .6825) : private_safeEmphasize(palette.background.default, .8);
			setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
			setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? dark.text.primary : palette.getContrastText(snackbarContentBackground)));
			setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, .15));
			setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
			setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
			setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
			setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
			setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.Switch, "successDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .62));
			setColor(palette.TableCell, "border", colorMix(private_safeLighten, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette.divider, 1), .88));
			setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette.grey[700], .92));
		}
		if (palette.mode === "dark") {
			setColor(palette.Alert, "errorColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .6));
			setColor(palette.Alert, "infoColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .6));
			setColor(palette.Alert, "successColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .6));
			setColor(palette.Alert, "warningColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .6));
			setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
			setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
			setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
			setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
			setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.dark)));
			setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.dark)));
			setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.dark)));
			setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.dark)));
			setColor(palette.Alert, "errorStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .9));
			setColor(palette.Alert, "infoStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .9));
			setColor(palette.Alert, "successStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .9));
			setColor(palette.Alert, "warningStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .9));
			setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
			setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
			setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
			setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
			setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
			setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
			setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
			setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
			setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
			setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
			setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
			setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .5));
			setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .5));
			setColor(palette.LinearProgress, "errorBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .5));
			setColor(palette.LinearProgress, "infoBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .5));
			setColor(palette.LinearProgress, "successBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .5));
			setColor(palette.LinearProgress, "warningBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .5));
			setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette.text.primary, .13) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
			setColor(palette.Slider, "primaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .5));
			setColor(palette.Slider, "secondaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .5));
			setColor(palette.Slider, "errorTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .5));
			setColor(palette.Slider, "infoTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .5));
			setColor(palette.Slider, "successTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .5));
			setColor(palette.Slider, "warningTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .5));
			const snackbarContentBackground = colorSpace ? colorMix(private_safeLighten, nativeColor ? getCssVar("palette-background-default") : palette.background.default, .985) : private_safeEmphasize(palette.background.default, .98);
			setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
			setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? light.text.primary : palette.getContrastText(snackbarContentBackground)));
			setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, .15));
			setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
			setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
			setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
			setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
			setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .55));
			setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .55));
			setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .55));
			setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .55));
			setColor(palette.Switch, "successDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .55));
			setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .55));
			setColor(palette.TableCell, "border", colorMix(private_safeDarken, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette.divider, 1), .68));
			setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette.grey[700], .92));
		}
		if (!nativeColor) {
			setColorChannel(palette.background, "default");
			setColorChannel(palette.background, "paper");
			setColorChannel(palette.common, "background");
			setColorChannel(palette.common, "onBackground");
			setColorChannel(palette, "divider");
		}
		Object.keys(palette).forEach((color) => {
			const colors = palette[color];
			if (color !== "tonalOffset" && !nativeColor && colors && typeof colors === "object") {
				if (colors.main) setColor(palette[color], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
				if (colors.light) setColor(palette[color], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
				if (colors.dark) setColor(palette[color], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
				if (colors.contrastText) setColor(palette[color], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
				if (color === "text") {
					setColorChannel(palette[color], "primary");
					setColorChannel(palette[color], "secondary");
				}
				if (color === "action") {
					if (colors.active) setColorChannel(palette[color], "active");
					if (colors.selected) setColorChannel(palette[color], "selected");
				}
			}
		});
	});
	theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
	const focusVisibleInput = mergeFocusVisibleInput(options.focusVisible, args);
	if (focusVisibleInput != null && focusVisibleInput !== false) theme.focusVisible = resolveFocusVisible(focusVisibleInput, getCssVar("palette-primary-main"));
	const parserConfig = {
		prefix: cssVarPrefix,
		disableCssColorScheme,
		shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
		getSelector: createGetSelector_default(theme),
		enableContrastVars: nativeColor
	};
	const { vars, generateThemeVars, generateStyleSheets } = prepareCssVars(theme, parserConfig);
	theme.vars = vars;
	Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
		theme[key] = value;
	});
	theme.generateThemeVars = generateThemeVars;
	theme.generateStyleSheets = generateStyleSheets;
	theme.generateSpacing = function generateSpacing() {
		return createSpacing(input.spacing, createUnarySpacing(this));
	};
	theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
	theme.spacing = theme.generateSpacing();
	theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
	theme.unstable_sxConfig = {
		...unstable_defaultSxConfig,
		...input?.unstable_sxConfig
	};
	theme.unstable_sx = function sx(props) {
		return styleFunctionSx({
			sx: props,
			theme: this
		});
	};
	theme.internal_cache = {};
	theme.toRuntimeSource = stringifyTheme;
	return theme;
}
//#endregion
//#region node_modules/@mui/material/styles/createTheme.mjs
function attachColorScheme(theme, scheme, colorScheme) {
	if (!theme.colorSchemes) return;
	if (colorScheme) theme.colorSchemes[scheme] = {
		...colorScheme !== true && colorScheme,
		palette: createPalette({
			...colorScheme === true ? {} : colorScheme.palette,
			mode: scheme
		})
	};
}
/**
* Generate a theme base on the options received.
* @param options Takes an incomplete theme object and adds the missing parts.
* @param args Deep merge the arguments with the about to be returned theme.
* @returns A complete, ready-to-use theme object.
*/
function createTheme(options = {}, ...args) {
	const { palette, cssVariables = false, colorSchemes: initialColorSchemes = !palette ? { light: true } : void 0, defaultColorScheme: initialDefaultColorScheme = palette?.mode, ...other } = options;
	const defaultColorSchemeInput = initialDefaultColorScheme || "light";
	const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
	const colorSchemesInput = {
		...initialColorSchemes,
		...palette ? { [defaultColorSchemeInput]: {
			...typeof defaultScheme !== "boolean" && defaultScheme,
			palette
		} } : void 0
	};
	if (cssVariables === false) {
		if (!("colorSchemes" in options)) return createThemeNoVars(options, ...args);
		let paletteOptions = palette;
		if (!("palette" in options)) {
			if (colorSchemesInput[defaultColorSchemeInput]) {
				if (colorSchemesInput[defaultColorSchemeInput] !== true) paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
				else if (defaultColorSchemeInput === "dark") paletteOptions = { mode: "dark" };
			}
		}
		const theme = createThemeNoVars({
			...options,
			palette: paletteOptions
		}, ...args);
		theme.defaultColorScheme = defaultColorSchemeInput;
		theme.colorSchemes = colorSchemesInput;
		if (theme.palette.mode === "light") {
			theme.colorSchemes.light = {
				...colorSchemesInput.light !== true && colorSchemesInput.light,
				palette: theme.palette
			};
			attachColorScheme(theme, "dark", colorSchemesInput.dark);
		}
		if (theme.palette.mode === "dark") {
			theme.colorSchemes.dark = {
				...colorSchemesInput.dark !== true && colorSchemesInput.dark,
				palette: theme.palette
			};
			attachColorScheme(theme, "light", colorSchemesInput.light);
		}
		if (theme.focusVisible != null && theme.focusVisible !== false) {
			let focusVisibleInput = theme.focusVisible;
			const rawFocusVisible = mergeFocusVisibleInput(options.focusVisible, args);
			const authoredColor = rawFocusVisible && typeof rawFocusVisible === "object" ? rawFocusVisible.outlineColor : void 0;
			if (!authoredColor || isResolvedFocusVisible(rawFocusVisible) && authoredColor === theme.palette.primary.main) {
				const { outlineColor, ...rest } = focusVisibleInput;
				focusVisibleInput = rest;
			}
			Object.keys(theme.colorSchemes).forEach((scheme) => {
				const schemePalette = theme.colorSchemes?.[scheme]?.palette;
				if (schemePalette?.primary) theme.colorSchemes[scheme].focusVisible = resolveFocusVisible(focusVisibleInput, schemePalette.primary.main);
			});
		}
		return theme;
	}
	if (!palette && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") colorSchemesInput.light = true;
	return createThemeWithVars({
		...other,
		colorSchemes: colorSchemesInput,
		defaultColorScheme: defaultColorSchemeInput,
		...typeof cssVariables !== "boolean" && cssVariables
	}, ...args);
}
//#endregion
//#region node_modules/@mui/material/styles/defaultTheme.mjs
var defaultTheme$1 = createTheme();
//#endregion
//#region node_modules/@mui/material/styles/identifier.mjs
var identifier_default = "$$material";
//#endregion
//#region node_modules/@mui/material/styles/useTheme.mjs
function useTheme$1() {
	const theme = useTheme(defaultTheme$1);
	if (process.env.NODE_ENV !== "production") React$1.useDebugValue(theme);
	return theme["$$material"] || theme;
}
//#endregion
//#region node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function slotShouldForwardProp(prop) {
	return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
//#endregion
//#region node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
//#endregion
//#region node_modules/@mui/material/styles/styled.mjs
var styled = createStyled({
	themeId: identifier_default,
	defaultTheme: defaultTheme$1,
	rootShouldForwardProp
});
//#endregion
//#region node_modules/@mui/material/utils/memoTheme.mjs
var memoTheme = unstable_memoTheme;
//#endregion
//#region node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
function DefaultPropsProvider(props) {
	return /*#__PURE__*/ jsx(SystemDefaultPropsProvider, { ...props });
}
process.env.NODE_ENV !== "production" && (DefaultPropsProvider.propTypes = {
	/**
	* @ignore
	*/
	children: PropTypes.node,
	/**
	* @ignore
	*/
	value: PropTypes.object.isRequired
});
function useDefaultProps$1(params) {
	return useDefaultProps(params);
}
//#endregion
//#region node_modules/@mui/material/utils/useSlot.mjs
/**
* An internal function to create a Material UI slot.
*
* This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
* while Base UI does not need to support leaf component customization.
*
* @param {string} name: name of the slot
* @param {object} parameters
* @returns {[Slot, slotProps]} The slot's React component and the slot's props
*
* Note: the returned slot's props
* - will never contain `component` prop.
* - might contain `as` prop.
*/
function useSlot(name, parameters) {
	const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false, ...useSlotPropsParams } = parameters;
	const { component: rootComponent, slots = { [name]: void 0 }, slotProps = { [name]: void 0 }, ...other } = externalForwardedProps;
	const elementType = slots[name] || initialElementType;
	const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
	const { props: { component: slotComponent, ...mergedProps }, internalRef } = mergeSlotProps({
		className,
		...useSlotPropsParams,
		externalForwardedProps: name === "root" ? other : void 0,
		externalSlotProps: resolvedComponentsProps
	});
	const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
	const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
	return [elementType, appendOwnerState(elementType, {
		...name === "root" && !rootComponent && !slots[name] && internalForwardedProps,
		...name !== "root" && !slots[name] && internalForwardedProps,
		...mergedProps,
		...LeafComponent && !shouldForwardComponentProp && { as: LeafComponent },
		...LeafComponent && shouldForwardComponentProp && { component: LeafComponent },
		ref
	}, ownerState)];
}
//#endregion
//#region node_modules/@mui/material/utils/capitalize.mjs
var capitalize_default = capitalize;
//#endregion
//#region node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs
/**
* Type guard to check if the object has a "main" property of type string.
*
* @param obj - the object to check
* @returns boolean
*/
function hasCorrectMainProperty(obj) {
	return typeof obj.main === "string";
}
/**
* Checks if the object conforms to the SimplePaletteColorOptions type.
* The minimum requirement is that the object has a "main" property of type string, this is always checked.
* Optionally, you can pass additional properties to check.
*
* @param obj - The object to check
* @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
* @returns boolean
*/
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
	if (!hasCorrectMainProperty(obj)) return false;
	for (const value of additionalPropertiesToCheck) if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") return false;
	return true;
}
/**
* Creates a filter function used to filter simple palette color options.
* The minimum requirement is that the object has a "main" property of type string, this is always checked.
* Optionally, you can pass additional properties to check.
*
* @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
* @returns ([, value]: [any, PaletteColorOptions]) => boolean
*/
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
	return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}
//#endregion
//#region node_modules/@mui/material/Paper/paperClasses.mjs
function getPaperUtilityClass(slot) {
	return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", [
	"root",
	"rounded",
	"outlined",
	"elevation",
	"elevation0",
	"elevation1",
	"elevation2",
	"elevation3",
	"elevation4",
	"elevation5",
	"elevation6",
	"elevation7",
	"elevation8",
	"elevation9",
	"elevation10",
	"elevation11",
	"elevation12",
	"elevation13",
	"elevation14",
	"elevation15",
	"elevation16",
	"elevation17",
	"elevation18",
	"elevation19",
	"elevation20",
	"elevation21",
	"elevation22",
	"elevation23",
	"elevation24"
]);
//#endregion
//#region node_modules/@mui/material/styles/reducedMotion.mjs
var defaultStyles = { transition: "none" };
function resolveReducedMotionStyles(reducedMotion, styles) {
	if (reducedMotion === "always") return styles;
	if (reducedMotion === "system") return { "@media (prefers-reduced-motion: reduce)": styles };
	return null;
}
//#endregion
//#region node_modules/@mui/material/transitions/utils.mjs
var reflow = (node) => node.scrollTop;
var EMPTY_STYLE = {};
var DEFAULT_TRANSITION_PROPS = ["all"];
var EMPTY_OPTIONS = {};
function normalizedTransitionCallback(nodeRef, callback) {
	return (maybeIsAppearing) => {
		if (callback) {
			const node = nodeRef.current;
			if (maybeIsAppearing === void 0) callback(node);
			else callback(node, maybeIsAppearing);
		}
	};
}
/**
* Return the child style for a transition. Reuse predefined style objects when
* no custom styles are present so memoized children see the same object.
*/
function getTransitionChildStyle(state, inProp, baseStyles, hiddenStyles, styleProp, childStyle) {
	const base = state === "exited" && !inProp ? hiddenStyles : baseStyles[state] || baseStyles.exited;
	return styleProp || childStyle ? {
		...base,
		...styleProp,
		...childStyle
	} : base;
}
function getTransitionProps(props, options) {
	const { timeout, easing, style = EMPTY_STYLE } = props;
	return {
		duration: style.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
		easing: style.transitionTimingFunction ?? (typeof easing === "object" ? easing[options.mode] : easing),
		delay: style.transitionDelay
	};
}
/**
* Returns CSS that disables component-owned transitions when reduced motion is active.
* Pass custom styles only when the default `transition: none` reset is not enough.
*/
function getReducedMotionStyles(theme, styles) {
	const resolvedStyles = styles ?? defaultStyles;
	return resolveReducedMotionStyles(theme.motion?.reducedMotion, resolvedStyles);
}
function getTransitionStyles(theme, props = DEFAULT_TRANSITION_PROPS, options = EMPTY_OPTIONS) {
	const transition = theme.transitions?.create?.(props, options);
	const reducedMotionStyles = getReducedMotionStyles(theme);
	if (transition === void 0) return reducedMotionStyles ?? EMPTY_STYLE;
	const transitionStyles = { transition };
	return reducedMotionStyles ? {
		...transitionStyles,
		...reducedMotionStyles
	} : transitionStyles;
}
//#endregion
//#region node_modules/@mui/material/Paper/Paper.mjs
var useUtilityClasses$17 = (ownerState) => {
	const { square, elevation, variant, classes } = ownerState;
	const slots = { root: [
		"root",
		variant,
		!square && "rounded",
		variant === "elevation" && `elevation${elevation}`
	] };
	return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled("div", {
	name: "MuiPaper",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			styles[ownerState.variant],
			!ownerState.square && styles.rounded,
			ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]
		];
	}
})(memoTheme(({ theme }) => ({
	backgroundColor: (theme.vars || theme).palette.background.paper,
	color: (theme.vars || theme).palette.text.primary,
	...getTransitionStyles(theme, "box-shadow"),
	variants: [
		{
			props: ({ ownerState }) => !ownerState.square,
			style: { borderRadius: theme.shape.borderRadius }
		},
		{
			props: { variant: "outlined" },
			style: { border: `1px solid ${(theme.vars || theme).palette.divider}` }
		},
		{
			props: { variant: "elevation" },
			style: {
				boxShadow: "var(--Paper-shadow)",
				backgroundImage: "var(--Paper-overlay)"
			}
		}
	]
})));
var Paper = /*#__PURE__*/ React$1.forwardRef(function Paper(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiPaper"
	});
	const theme = useTheme$1();
	const { className, component = "div", elevation = 1, square = false, variant = "elevation", ...other } = props;
	const ownerState = {
		...props,
		component,
		elevation,
		square,
		variant
	};
	const classes = useUtilityClasses$17(ownerState);
	if (process.env.NODE_ENV !== "production") {
		if (theme.shadows[elevation] === void 0) console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
	}
	return /*#__PURE__*/ jsx(PaperRoot, {
		as: component,
		ownerState,
		className: clsx$1(classes.root, className),
		ref,
		...other,
		style: {
			...variant === "elevation" && {
				"--Paper-shadow": (theme.vars || theme).shadows[elevation],
				...theme.vars && { "--Paper-overlay": theme.vars.overlays?.[elevation] },
				...!theme.vars && theme.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))}, ${alpha("#fff", getOverlayAlpha(elevation))})` }
			},
			...other.style
		}
	});
});
process.env.NODE_ENV !== "production" && (Paper.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* Shadow depth, corresponds to `dp` in the spec.
	* It accepts values between 0 and 24 inclusive.
	* @default 1
	*/
	elevation: chainPropTypes(integerPropType, (props) => {
		const { elevation, variant } = props;
		if (elevation > 0 && variant === "outlined") return /* @__PURE__ */ new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
		return null;
	}),
	/**
	* If `true`, rounded corners are disabled.
	* @default false
	*/
	square: PropTypes.bool,
	/**
	* @ignore
	*/
	style: PropTypes.object,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* The variant to use.
	* @default 'elevation'
	*/
	variant: PropTypes.oneOfType([PropTypes.oneOf(["elevation", "outlined"]), PropTypes.string])
});
//#endregion
//#region node_modules/@mui/material/Alert/alertClasses.mjs
function getAlertUtilityClass(slot) {
	return generateUtilityClass("MuiAlert", slot);
}
var alertClasses = generateUtilityClasses("MuiAlert", [
	"root",
	"action",
	"icon",
	"message",
	"filled",
	"colorSuccess",
	"colorInfo",
	"colorWarning",
	"colorError",
	"outlined",
	"standard"
]);
//#endregion
//#region node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
function getSvgIconUtilityClass(slot) {
	return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"colorAction",
	"colorError",
	"colorDisabled",
	"fontSizeInherit",
	"fontSizeSmall",
	"fontSizeMedium",
	"fontSizeLarge"
]);
//#endregion
//#region node_modules/@mui/material/SvgIcon/SvgIcon.mjs
var useUtilityClasses$16 = (ownerState) => {
	const { color, fontSize, classes } = ownerState;
	const slots = { root: [
		"root",
		color !== "inherit" && `color${capitalize_default(color)}`,
		`fontSize${capitalize_default(fontSize)}`
	] };
	return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled("svg", {
	name: "MuiSvgIcon",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`],
			styles[`fontSize${capitalize_default(ownerState.fontSize)}`]
		];
	}
})(memoTheme(({ theme }) => ({
	userSelect: "none",
	width: "1em",
	height: "1em",
	display: "inline-block",
	flexShrink: 0,
	...getTransitionStyles(theme, "fill", { duration: (theme.vars ?? theme).transitions?.duration?.shorter }),
	variants: [
		{
			props: (props) => !props.hasSvgAsChild,
			style: { fill: "currentColor" }
		},
		{
			props: { fontSize: "inherit" },
			style: { fontSize: "inherit" }
		},
		{
			props: { fontSize: "small" },
			style: { fontSize: theme.typography?.pxToRem?.(20) || "1.25rem" }
		},
		{
			props: { fontSize: "medium" },
			style: { fontSize: theme.typography?.pxToRem?.(24) || "1.5rem" }
		},
		{
			props: { fontSize: "large" },
			style: { fontSize: theme.typography?.pxToRem?.(35) || "2.1875rem" }
		},
		...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
			props: { color },
			style: { color: (theme.vars ?? theme).palette?.[color]?.main }
		})),
		{
			props: { color: "action" },
			style: { color: (theme.vars ?? theme).palette?.action?.active }
		},
		{
			props: { color: "disabled" },
			style: { color: (theme.vars ?? theme).palette?.action?.disabled }
		},
		{
			props: { color: "inherit" },
			style: { color: void 0 }
		}
	]
})));
var SvgIcon = /*#__PURE__*/ React$1.forwardRef(function SvgIcon(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiSvgIcon"
	});
	const { children, className, color = "inherit", component = "svg", fontSize = "medium", htmlColor, inheritViewBox = false, titleAccess, viewBox = "0 0 24 24", ...other } = props;
	const hasSvgAsChild = /*#__PURE__*/ React$1.isValidElement(children) && children.type === "svg";
	const ownerState = {
		...props,
		color,
		component,
		fontSize,
		instanceFontSize: inProps.fontSize,
		inheritViewBox,
		viewBox,
		hasSvgAsChild
	};
	const more = {};
	if (!inheritViewBox) more.viewBox = viewBox;
	const classes = useUtilityClasses$16(ownerState);
	return /*#__PURE__*/ jsxs(SvgIconRoot, {
		as: component,
		className: clsx$1(classes.root, className),
		focusable: "false",
		color: htmlColor,
		"aria-hidden": titleAccess ? void 0 : true,
		role: titleAccess ? "img" : void 0,
		ref,
		...more,
		...other,
		...hasSvgAsChild && children.props,
		ownerState,
		children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/ jsx("title", { children: titleAccess }) : null]
	});
});
process.env.NODE_ENV !== "production" && (SvgIcon.propTypes = {
	/**
	* Node passed into the SVG element.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	* You can use the `htmlColor` prop to apply a color attribute to the SVG element.
	* @default 'inherit'
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"inherit",
		"action",
		"disabled",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
	* @default 'medium'
	*/
	fontSize: PropTypes.oneOfType([PropTypes.oneOf([
		"inherit",
		"large",
		"medium",
		"small"
	]), PropTypes.string]),
	/**
	* Applies a color attribute to the SVG element.
	*/
	htmlColor: PropTypes.string,
	/**
	* If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
	* prop will be ignored.
	* Useful when you want to reference a custom `component` and have `SvgIcon` pass that
	* `component`'s viewBox to the root node.
	* @default false
	*/
	inheritViewBox: PropTypes.bool,
	/**
	* The shape-rendering attribute. The behavior of the different options is described on the
	* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
	* If you are having issues with blurry icons you should investigate this prop.
	*/
	shapeRendering: PropTypes.string,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* Provides a human-readable title for the element that contains it.
	* https://www.w3.org/TR/SVG-access/#Equivalent
	*/
	titleAccess: PropTypes.string,
	/**
	* Allows you to redefine what the coordinates without units mean inside an SVG element.
	* For example, if the SVG element is 500 (width) by 200 (height),
	* and you pass viewBox="0 0 50 20",
	* this means that the coordinates inside the SVG will go from the top left corner (0,0)
	* to bottom right (50,20) and each unit will be worth 10px.
	* @default '0 0 24 24'
	*/
	viewBox: PropTypes.string
});
SvgIcon.muiName = "SvgIcon";
//#endregion
//#region node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
/**
* Private module reserved for @mui packages.
*/
function createSvgIcon(path, displayName) {
	function Component(props, ref) {
		return /*#__PURE__*/ jsx(SvgIcon, {
			"data-testid": process.env.NODE_ENV !== "production" ? `${displayName}Icon` : void 0,
			ref,
			...props,
			children: path
		});
	}
	if (process.env.NODE_ENV !== "production") Component.displayName = `${displayName}Icon`;
	Component.muiName = SvgIcon.muiName;
	return /*#__PURE__*/ React$1.memo(/*#__PURE__*/ React$1.forwardRef(Component));
}
//#endregion
//#region node_modules/@mui/material/utils/getActiveElement.mjs
var getActiveElement_default = getActiveElement;
//#endregion
//#region node_modules/@mui/material/utils/useId.mjs
var useId_default = useId;
//#endregion
//#region node_modules/@mui/material/utils/unsupportedProp.mjs
var unsupportedProp_default = unsupportedProp;
//#endregion
//#region node_modules/@mui/material/utils/useEventCallback.mjs
var useEventCallback_default = useEventCallback;
//#endregion
//#region node_modules/@mui/material/utils/useForkRef.mjs
var useForkRef_default = useForkRef;
//#endregion
//#region node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs
function useFocusableWhenDisabled(parameters) {
	const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
	const isFocusableComposite = composite && focusableWhenDisabled !== false;
	const isNonFocusableComposite = composite && focusableWhenDisabled === false;
	return React$1.useMemo(() => {
		const additionalProps = { onKeyDown(event) {
			if (disabled && focusableWhenDisabled && event.key !== "Tab") event.preventDefault();
		} };
		if (!composite) {
			additionalProps.tabIndex = tabIndexProp;
			if (!isNativeButton && disabled) additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
		}
		if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) additionalProps["aria-disabled"] = disabled;
		if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) additionalProps.disabled = disabled;
		return additionalProps;
	}, [
		composite,
		disabled,
		focusableWhenDisabled,
		isFocusableComposite,
		isNonFocusableComposite,
		isNativeButton,
		tabIndexProp
	]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/useButtonBase.mjs
var EMPTY = {};
function useButtonBase(parameters) {
	const { nativeButton, nativeButtonProp, internalNativeButton = nativeButton, allowInferredHostMismatch = false, disabled, type, hasFormAction = false, tabIndex = 0, focusableWhenDisabled: focusableWhenDisabledParam, stopEventPropagation = false, onBeforeKeyDown, onBeforeKeyUp } = parameters;
	const rootRef = React$1.useRef(null);
	const focusableWhenDisabled = focusableWhenDisabledParam === true;
	const focusableWhenDisabledProps = useFocusableWhenDisabled({
		focusableWhenDisabled,
		disabled,
		isNativeButton: nativeButton,
		tabIndex
	});
	if (process.env.NODE_ENV !== "production") React$1.useEffect(() => {
		const root = rootRef.current;
		if (root == null) return;
		const isButtonTag = root.tagName === "BUTTON";
		if (nativeButtonProp !== void 0) {
			if (nativeButtonProp && !isButtonTag) console.error("MUI: A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Render a real <button> or set `nativeButton` to `false`.");
			if (!nativeButtonProp && isButtonTag) console.error("MUI: A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while additionally applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Render a non-<button> such as <div>, or set `nativeButton` to `true`.");
			return;
		}
		if (allowInferredHostMismatch) return;
		if (internalNativeButton && !isButtonTag) console.error("MUI: A component rendering a native <button> resolved to a non-<button> element, but `nativeButton={false}` was not specified and the resolved root is a non-<button>. When rendering a custom component, set `nativeButton={false}` explicitly or render a <button> element.");
		if (!internalNativeButton && isButtonTag) console.error("MUI: A component that acts as a non-native button resolved to a native <button> element, but `nativeButton={true}` was not specified. When rendering a custom component, set `nativeButton={true}` explicitly or render a non-<button> element.");
	}, [
		allowInferredHostMismatch,
		internalNativeButton,
		nativeButtonProp
	]);
	const hasNativeKeyboardActivation = React$1.useCallback(() => {
		const root = rootRef.current;
		if (root == null) return nativeButton;
		if (root.tagName === "BUTTON") return true;
		return Boolean(root.tagName === "A" && root.href);
	}, [nativeButton]);
	const buttonProps = React$1.useMemo(() => {
		const resolvedButtonProps = focusableWhenDisabled ? {} : { tabIndex: disabled ? -1 : tabIndex };
		if (nativeButton) {
			resolvedButtonProps.type = type === void 0 && !hasFormAction ? "button" : type;
			if (!focusableWhenDisabled) resolvedButtonProps.disabled = disabled;
		} else {
			resolvedButtonProps.role = "button";
			if (!focusableWhenDisabled && disabled) resolvedButtonProps["aria-disabled"] = disabled;
		}
		if (focusableWhenDisabled) return {
			...resolvedButtonProps,
			...focusableWhenDisabledProps
		};
		return resolvedButtonProps;
	}, [
		disabled,
		focusableWhenDisabled,
		focusableWhenDisabledProps,
		hasFormAction,
		nativeButton,
		tabIndex,
		type
	]);
	return {
		getButtonProps: React$1.useCallback((externalProps = EMPTY) => {
			const { onClick: externalOnClick, onKeyDown: externalOnKeyDown, onKeyUp: externalOnKeyUp, ...otherExternalProps } = externalProps;
			const handleClick = (event) => {
				if (stopEventPropagation) event.stopPropagation();
				if (disabled) {
					event.preventDefault();
					return;
				}
				externalOnClick?.(event);
			};
			const handleKeyDown = (event) => {
				if (focusableWhenDisabled) focusableWhenDisabledProps.onKeyDown(event);
				if (disabled) return;
				onBeforeKeyDown?.(event);
				externalOnKeyDown?.(event);
				if (event.target !== event.currentTarget || hasNativeKeyboardActivation()) return;
				if (event.key === " ") {
					event.preventDefault();
					return;
				}
				if (event.key === "Enter") {
					event.preventDefault();
					event.currentTarget.click();
				}
			};
			const handleKeyUp = (event) => {
				if (disabled) return;
				onBeforeKeyUp?.(event);
				externalOnKeyUp?.(event);
				if (event.target === event.currentTarget && !hasNativeKeyboardActivation() && event.key === " " && !event.defaultPrevented) event.currentTarget.click();
			};
			return {
				...buttonProps,
				...otherExternalProps,
				onClick: handleClick,
				onKeyDown: handleKeyDown,
				onKeyUp: handleKeyUp
			};
		}, [
			buttonProps,
			disabled,
			focusableWhenDisabled,
			focusableWhenDisabledProps,
			hasNativeKeyboardActivation,
			onBeforeKeyDown,
			onBeforeKeyUp,
			stopEventPropagation
		]),
		rootRef
	};
}
//#endregion
//#region node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs
/**
* Lazy initialization container for the Ripple instance. This improves
* performance by delaying mounting the ripple until it's needed.
*/
var LazyRipple = class LazyRipple {
	/** React ref to the ripple instance */
	/** If the ripple component should be mounted */
	/** Promise that resolves when the ripple component is mounted */
	/** If the ripple component has been mounted */
	/** React state hook setter */
	static create() {
		return new LazyRipple();
	}
	static use() {
		const ripple = useLazyRef(LazyRipple.create).current;
		const [shouldMount, setShouldMount] = React$1.useState(false);
		ripple.shouldMount = shouldMount;
		ripple.setShouldMount = setShouldMount;
		React$1.useEffect(ripple.mountEffect, [shouldMount]);
		return ripple;
	}
	constructor() {
		this.ref = { current: null };
		this.mounted = null;
		this.didMount = false;
		this.shouldMount = false;
		this.setShouldMount = null;
	}
	mount() {
		if (!this.mounted) {
			this.mounted = createControlledPromise();
			this.shouldMount = true;
			this.setShouldMount(this.shouldMount);
		}
		return this.mounted;
	}
	mountEffect = () => {
		if (this.shouldMount && !this.didMount) {
			if (this.ref.current !== null) {
				this.didMount = true;
				this.mounted.resolve();
			}
		}
	};
	start(...args) {
		this.mount().then(() => this.ref.current?.start(...args));
	}
	stop(...args) {
		this.mount().then(() => this.ref.current?.stop(...args));
	}
	pulsate(...args) {
		this.mount().then(() => this.ref.current?.pulsate(...args));
	}
};
function useLazyRipple() {
	return LazyRipple.use();
}
function createControlledPromise() {
	let resolve;
	let reject;
	const p = new Promise((resolveFn, rejectFn) => {
		resolve = resolveFn;
		reject = rejectFn;
	});
	p.resolve = resolve;
	p.reject = reject;
	return p;
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/Ripple.mjs
/**
* @ignore - internal component.
*/
function Ripple(props) {
	const { className, classes, pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props;
	const [leaving, setLeaving] = React$1.useState(false);
	const exitTimer = useTimeout();
	const exitTimerStartedRef = React$1.useRef(false);
	const onExitedRef = React$1.useRef(onExited);
	onExitedRef.current = onExited;
	const hasExitedCallback = onExited != null;
	const rippleClassName = clsx$1(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
	const rippleStyles = {
		width: rippleSize,
		height: rippleSize,
		top: -(rippleSize / 2) + rippleY,
		left: -(rippleSize / 2) + rippleX
	};
	const childClassName = clsx$1(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
	if (!inProp && !leaving) setLeaving(true);
	React$1.useEffect(() => {
		if (!inProp && hasExitedCallback) {
			if (!exitTimerStartedRef.current) {
				exitTimerStartedRef.current = true;
				exitTimer.start(timeout, () => {
					exitTimerStartedRef.current = false;
					onExitedRef.current?.();
				});
			}
		} else {
			exitTimerStartedRef.current = false;
			exitTimer.clear();
		}
	}, [
		exitTimer,
		hasExitedCallback,
		inProp,
		timeout
	]);
	return /*#__PURE__*/ jsx("span", {
		className: rippleClassName,
		style: rippleStyles,
		children: /*#__PURE__*/ jsx("span", { className: childClassName })
	});
}
process.env.NODE_ENV !== "production" && (Ripple.propTypes = {
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	/**
	* @ignore - controlled by TouchRipple
	*/
	in: PropTypes.bool,
	/**
	* @ignore - controlled by TouchRipple
	*/
	onExited: PropTypes.func,
	/**
	* If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
	*/
	pulsate: PropTypes.bool,
	/**
	* Diameter of the ripple.
	*/
	rippleSize: PropTypes.number,
	/**
	* Horizontal position of the ripple center.
	*/
	rippleX: PropTypes.number,
	/**
	* Vertical position of the ripple center.
	*/
	rippleY: PropTypes.number,
	/**
	* Exit delay.
	*/
	timeout: PropTypes.number.isRequired
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]);
//#endregion
//#region node_modules/@mui/material/transitions/useReducedMotion.mjs
var MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
var REDUCED_MOTION_DURATION = 0;
var REDUCED_MOTION_DELAY = "0ms";
var NOOP$1 = () => {};
var getDefaultSnapshot = () => false;
var getReducedMotionSnapshot = () => true;
var subscribeNoop = () => NOOP$1;
/**
* Subscribes to the OS reduced-motion media query only when the theme mode needs it.
* React 17 reads the media query after mount, matching useMediaQuery's fallback path.
*/
function useReducedMotionMediaQueryOld(enabled) {
	const [queryState, setQueryState] = React$1.useState(() => ({
		enabled,
		matches: enabled ? null : false
	}));
	let matches = queryState.matches;
	if (queryState.enabled !== enabled) {
		matches = null;
		if (!enabled) matches = false;
	}
	useEnhancedEffect(() => {
		const setResolvedMatches = (nextMatches) => {
			setQueryState((previousState) => {
				if (previousState.enabled === enabled && previousState.matches === nextMatches) return previousState;
				return {
					enabled,
					matches: nextMatches
				};
			});
		};
		if (!enabled) {
			if (queryState.enabled) setResolvedMatches(false);
			return;
		}
		if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
			setResolvedMatches(false);
			return;
		}
		const mediaQueryList = window.matchMedia(MEDIA_QUERY);
		const update = () => {
			setResolvedMatches(mediaQueryList.matches);
		};
		update();
		mediaQueryList.addEventListener("change", update);
		return () => {
			mediaQueryList.removeEventListener("change", update);
		};
	}, [enabled, queryState.enabled]);
	return matches;
}
var maybeReactUseSyncExternalStore = { ...React$1 }.useSyncExternalStore;
/**
* React 18+ can read the media query during client renders, so newly mounted
* transitions do not start from the SSR-safe reduced-motion default.
*/
function useReducedMotionMediaQueryNew(enabled) {
	const getServerSnapshot = enabled ? getReducedMotionSnapshot : getDefaultSnapshot;
	const [getSnapshot, subscribe] = React$1.useMemo(() => {
		if (!enabled || typeof window === "undefined" || typeof window.matchMedia !== "function") return [getDefaultSnapshot, subscribeNoop];
		const mediaQueryList = window.matchMedia(MEDIA_QUERY);
		return [() => mediaQueryList.matches, (notify) => {
			mediaQueryList.addEventListener("change", notify);
			return () => {
				mediaQueryList.removeEventListener("change", notify);
			};
		}];
	}, [enabled]);
	return maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
var useReducedMotionMediaQuery = maybeReactUseSyncExternalStore !== void 0 ? useReducedMotionMediaQueryNew : useReducedMotionMediaQueryOld;
/**
* Resolves whether a Material UI transition should reduce motion and provides
* adjusted CSS transition timing for MUI-owned duration/delay values.
*/
function useReducedMotion(mode, disablePrefersReducedMotion) {
	const prefersReducedMotion = useReducedMotionMediaQuery(!disablePrefersReducedMotion && mode === "system");
	const shouldReduceMotion = !disablePrefersReducedMotion && (mode === "always" || mode === "system" && prefersReducedMotion !== false);
	return React$1.useMemo(() => ({
		shouldReduceMotion,
		getTransitionTiming(timing) {
			if (!shouldReduceMotion) return timing;
			return {
				duration: REDUCED_MOTION_DURATION,
				delay: REDUCED_MOTION_DELAY
			};
		}
	}), [shouldReduceMotion]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/TouchRipple.mjs
var DURATION = 550;
var EMPTY_OBJ = {};
var EMPTY_ARRAY = [];
var NOOP = () => {};
/**
* Keep the same DOM order TouchRipple had when it used react-transition-group:
* exiting ripples stay in place, and new ripples are inserted before the final
* group of ripples that are waiting for their exit animation to finish.
*
* @param {number[]} prevOrder The previous DOM order, including ripples that may be exiting.
* @param {number[]} nextActiveKeys The ripples that should still be treated as active.
* @returns {number[]} The next DOM order, preserving the position of exiting ripples where possible.
*/
function mergeRippleOrder(prevOrder, nextActiveKeys) {
	const nextKeySet = new Set(nextActiveKeys);
	const nextKeysPending = /* @__PURE__ */ new Map();
	let pendingKeys = [];
	for (const prevKey of prevOrder) if (nextKeySet.has(prevKey)) {
		if (pendingKeys.length > 0) {
			nextKeysPending.set(prevKey, pendingKeys);
			pendingKeys = [];
		}
	} else pendingKeys.push(prevKey);
	const nextOrder = [];
	for (const nextKey of nextActiveKeys) {
		const pendingBefore = nextKeysPending.get(nextKey);
		if (pendingBefore) nextOrder.push(...pendingBefore);
		nextOrder.push(nextKey);
	}
	nextOrder.push(...pendingKeys);
	return nextOrder;
}
/**
* Calculate where the ripple should start and how large it must be to cover the host element.
*
* @param {object} params
* @param {object} params.event The mouse or touch event that started the ripple.
* @param {HTMLElement | null} params.element The host element used for measurements. Tests pass `null`.
* @param {boolean} params.center If `true`, start the ripple from the center of the host element.
* @returns {{ rippleX: number, rippleY: number, rippleSize: number }} The ripple position and size.
*/
function computeRippleState({ event, element, center }) {
	const rect = element ? element.getBoundingClientRect() : {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	let rippleX;
	let rippleY;
	if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
		rippleX = Math.round(rect.width / 2);
		rippleY = Math.round(rect.height / 2);
	} else {
		const { clientX, clientY } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
		rippleX = Math.round(clientX - rect.left);
		rippleY = Math.round(clientY - rect.top);
	}
	let rippleSize;
	if (center) {
		rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
		if (rippleSize % 2 === 0) rippleSize += 1;
	} else {
		const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
		const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
		rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
	}
	return {
		rippleX,
		rippleY,
		rippleSize
	};
}
var enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
var exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
var pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function getAnimationStyles(theme) {
	if (theme.motion.reducedMotion === "always") return null;
	const styles = css`
    &.${touchRippleClasses.rippleVisible} {
      animation-name: ${enterKeyframe};
      animation-duration: ${DURATION}ms;
      animation-timing-function: ${theme.transitions.easing.easeInOut};
    }

    &.${touchRippleClasses.ripplePulsate} {
      animation-duration: ${theme.transitions.duration.shorter}ms;
    }

    & .${touchRippleClasses.childLeaving} {
      animation-name: ${exitKeyframe};
      animation-duration: ${DURATION}ms;
      animation-timing-function: ${theme.transitions.easing.easeInOut};
    }

    & .${touchRippleClasses.childPulsate} {
      animation-name: ${pulsateKeyframe};
      animation-duration: 2500ms;
      animation-timing-function: ${theme.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
	if (theme.motion.reducedMotion === "system") return css`
      @media (prefers-reduced-motion: no-preference) {
        ${styles}
      }
    `;
	return styles;
}
var TouchRippleRoot = styled("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
});
var TouchRippleRipple = styled(Ripple, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({ theme }) => getAnimationStyles(theme)}
`;
/**
* @ignore - internal component.
*/
var TouchRipple = /*#__PURE__*/ React$1.forwardRef(function TouchRipple(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiTouchRipple"
	});
	const reducedMotion = useReducedMotion(useTheme$1().motion.reducedMotion, false);
	const { center: centerProp = false, classes = EMPTY_OBJ, className, ...other } = props;
	const [rippleState, setRippleState] = React$1.useState({
		items: EMPTY_ARRAY,
		order: EMPTY_ARRAY
	});
	const ripples = rippleState.items;
	const nextKey = React$1.useRef(0);
	const rippleCallback = React$1.useRef(null);
	const mountedRef = React$1.useRef(false);
	useOnMount(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	});
	React$1.useEffect(() => {
		if (rippleCallback.current) {
			rippleCallback.current();
			rippleCallback.current = null;
		}
	}, [ripples]);
	const ignoringMouseDown = React$1.useRef(false);
	const startTimer = useTimeout();
	const startTimerCommit = React$1.useRef(null);
	const container = React$1.useRef(null);
	const handleExited = useEventCallback_default((key) => {
		if (!mountedRef.current) return;
		setRippleState((prevState) => {
			const nextItems = prevState.items.filter((ripple) => ripple.key !== key);
			return {
				items: nextItems,
				order: mergeRippleOrder(prevState.order.filter((rippleKey) => rippleKey !== key), nextItems.filter((ripple) => !ripple.exiting).map((ripple) => ripple.key))
			};
		});
	});
	const startCommit = useEventCallback_default((params) => {
		const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
		const key = nextKey.current;
		nextKey.current += 1;
		setRippleState((prevState) => {
			const nextItems = [...prevState.items, {
				key,
				pulsate,
				rippleX,
				rippleY,
				rippleSize,
				exiting: false
			}];
			return {
				items: nextItems,
				order: mergeRippleOrder(prevState.order, nextItems.filter((ripple) => !ripple.exiting).map((ripple) => ripple.key))
			};
		});
		rippleCallback.current = cb;
	});
	const start = useEventCallback_default((event = EMPTY_OBJ, options = EMPTY_OBJ, cb = NOOP) => {
		const { pulsate = false, center = centerProp || options.pulsate, fakeElement = false } = options;
		if (event?.type === "mousedown" && ignoringMouseDown.current) {
			ignoringMouseDown.current = false;
			return;
		}
		if (event?.type === "touchstart") ignoringMouseDown.current = true;
		const { rippleX, rippleY, rippleSize } = computeRippleState({
			event,
			element: fakeElement ? null : container.current,
			center
		});
		if (event?.touches) {
			if (startTimerCommit.current === null) {
				startTimerCommit.current = () => {
					startCommit({
						pulsate,
						rippleX,
						rippleY,
						rippleSize,
						cb
					});
				};
				startTimer.start(80, () => {
					if (startTimerCommit.current) {
						startTimerCommit.current();
						startTimerCommit.current = null;
					}
				});
			}
		} else startCommit({
			pulsate,
			rippleX,
			rippleY,
			rippleSize,
			cb
		});
	});
	const pulsate = useEventCallback_default(() => {
		start(EMPTY_OBJ, { pulsate: true });
	});
	const stop = useEventCallback_default((event, cb) => {
		startTimer.clear();
		if (event?.type === "touchend" && startTimerCommit.current) {
			startTimerCommit.current();
			startTimerCommit.current = null;
			startTimer.start(0, () => {
				stop(event, cb);
			});
			return;
		}
		startTimerCommit.current = null;
		setRippleState((prevState) => {
			const firstActiveIndex = prevState.items.findIndex((ripple) => !ripple.exiting);
			if (firstActiveIndex === -1) return prevState;
			const nextItems = prevState.items.slice();
			nextItems[firstActiveIndex] = {
				...nextItems[firstActiveIndex],
				exiting: true
			};
			return {
				items: nextItems,
				order: mergeRippleOrder(prevState.order, nextItems.filter((ripple) => !ripple.exiting).map((ripple) => ripple.key))
			};
		});
		rippleCallback.current = cb;
	});
	React$1.useImperativeHandle(ref, () => ({
		pulsate,
		start,
		stop
	}), [
		pulsate,
		start,
		stop
	]);
	const rippleByKey = new Map(ripples.map((ripple) => [ripple.key, ripple]));
	const orderedRipples = rippleState.order.map((rippleKey) => rippleByKey.get(rippleKey)).filter(Boolean);
	return /*#__PURE__*/ jsx(TouchRippleRoot, {
		className: clsx$1(touchRippleClasses.root, classes.root, className),
		ref: container,
		...other,
		children: orderedRipples.map((ripple) => /*#__PURE__*/ jsx(TouchRippleRipple, {
			classes: {
				ripple: clsx$1(classes.ripple, touchRippleClasses.ripple),
				rippleVisible: clsx$1(classes.rippleVisible, touchRippleClasses.rippleVisible),
				ripplePulsate: clsx$1(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
				child: clsx$1(classes.child, touchRippleClasses.child),
				childLeaving: clsx$1(classes.childLeaving, touchRippleClasses.childLeaving),
				childPulsate: clsx$1(classes.childPulsate, touchRippleClasses.childPulsate)
			},
			timeout: reducedMotion.shouldReduceMotion ? 0 : DURATION,
			pulsate: ripple.pulsate,
			rippleX: ripple.rippleX,
			rippleY: ripple.rippleY,
			rippleSize: ripple.rippleSize,
			in: !ripple.exiting,
			onExited: () => handleExited(ripple.key)
		}, ripple.key))
	});
});
process.env.NODE_ENV !== "production" && (TouchRipple.propTypes = {
	/**
	* If `true`, the ripple starts at the center of the component
	* rather than at the point of interaction.
	*/
	center: PropTypes.bool,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs
function getButtonBaseUtilityClass(slot) {
	return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]);
//#endregion
//#region node_modules/@mui/material/ButtonBase/ButtonBase.mjs
var useUtilityClasses$15 = (ownerState) => {
	const { disabled, focusVisible, focusVisibleClassName, suppressFocusVisible, classes } = ownerState;
	const composedClasses = composeClasses({ root: [
		"root",
		disabled && "disabled",
		focusVisible && !suppressFocusVisible && "focusVisible"
	] }, getButtonBaseUtilityClass, classes);
	if (focusVisible && !suppressFocusVisible && focusVisibleClassName) composedClasses.root += ` ${focusVisibleClassName}`;
	return composedClasses;
};
var ButtonBaseRoot = styled("button", {
	name: "MuiButtonBase",
	slot: "Root"
})(memoTheme(({ theme }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${buttonBaseClasses.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" },
	variants: [{
		props: { internalDisabledThemeFocusVisible: false },
		style: theme.focusVisible && {
			...outsetFocusRing,
			[`&.${buttonBaseClasses.focusVisible}`]: theme.focusVisible
		}
	}]
})));
/**
* `ButtonBase` contains as few styles as possible.
* It aims to be a simple building block for creating a button.
* It contains a load of style reset and some focus/ripple logic.
*/
var ButtonBase = /*#__PURE__*/ React$1.forwardRef(function ButtonBase(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiButtonBase"
	});
	const { action, centerRipple = false, children, className, component = "button", disabled = false, disableRipple = false, disableTouchRipple = false, focusRipple = false, focusVisibleClassName, focusableWhenDisabled, suppressFocusVisible = false, internalNativeButton: internalNativeButtonProp, internalDisabledThemeFocusVisible = false, LinkComponent = "a", nativeButton: nativeButtonProp, onBlur, onClick: onClickProp, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown: onKeyDownProp, onKeyUp: onKeyUpProp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex = 0, TouchRippleProps, touchRippleRef, type, ...other } = props;
	const isLink = Boolean(other.href || other.to);
	const hasFormAction = Boolean(other.formAction);
	let ComponentProp = component;
	if (ComponentProp === "button" && isLink) ComponentProp = LinkComponent;
	const internalNativeButton = typeof ComponentProp === "string" ? ComponentProp === "button" : internalNativeButtonProp ?? false;
	const nativeButton = nativeButtonProp ?? internalNativeButton;
	const ripple = useLazyRipple();
	const handleRippleRef = useForkRef_default(ripple.ref, touchRippleRef);
	const [focusVisible, setFocusVisible] = React$1.useState(false);
	if ((disabled || suppressFocusVisible) && focusVisible) setFocusVisible(false);
	const handleBeforeKeyDown = useEventCallback_default((event) => {
		if (focusRipple && !event.repeat && focusVisible && event.key === " ") ripple.stop(event, () => {
			ripple.start(event);
		});
	});
	const handleBeforeKeyUp = useEventCallback_default((event) => {
		if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) ripple.stop(event, () => {
			ripple.pulsate(event);
		});
	});
	const { getButtonProps, rootRef: buttonRef } = useButtonBase({
		nativeButton,
		nativeButtonProp,
		internalNativeButton,
		allowInferredHostMismatch: isLink || typeof ComponentProp === "string",
		disabled,
		type,
		hasFormAction,
		tabIndex,
		onBeforeKeyDown: handleBeforeKeyDown,
		onBeforeKeyUp: handleBeforeKeyUp
	});
	const { onClick, onKeyDown, onKeyUp, ...buttonProps } = getButtonProps({
		onClick: onClickProp,
		onKeyDown: onKeyDownProp,
		onKeyUp: onKeyUpProp
	});
	React$1.useImperativeHandle(action, () => ({ focusVisible: () => {
		setFocusVisible(true);
		buttonRef.current.focus();
	} }), [buttonRef]);
	const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
	React$1.useEffect(() => {
		if (focusVisible && focusRipple && !disableRipple) ripple.pulsate();
	}, [
		disableRipple,
		focusRipple,
		focusVisible,
		ripple
	]);
	const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
	const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
	const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
	const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
	const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
		if (focusVisible) event.preventDefault();
		if (onMouseLeave) onMouseLeave(event);
	}, disableTouchRipple);
	const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
	const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
	const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
	const handleBlur = useRippleHandler(ripple, "stop", (event) => {
		if (!isFocusVisible(event.target)) setFocusVisible(false);
		if (onBlur) onBlur(event);
	}, false);
	const handleFocus = useEventCallback_default((event) => {
		if (!buttonRef.current) buttonRef.current = event.currentTarget;
		if (!suppressFocusVisible && isFocusVisible(event.target)) {
			setFocusVisible(true);
			if (onFocusVisible) onFocusVisible(event);
		}
		if (onFocus) onFocus(event);
	});
	const linkProps = {};
	if (isLink) {
		linkProps.tabIndex = disabled ? -1 : tabIndex;
		if (disabled) linkProps["aria-disabled"] = disabled;
		linkProps.type = type;
	}
	const handleRef = useForkRef_default(ref, buttonRef);
	const ownerState = {
		...props,
		centerRipple,
		component,
		disabled,
		disableRipple,
		disableTouchRipple,
		focusRipple,
		suppressFocusVisible,
		tabIndex,
		focusVisible,
		internalDisabledThemeFocusVisible
	};
	const classes = useUtilityClasses$15(ownerState);
	return /*#__PURE__*/ jsxs(ButtonBaseRoot, {
		as: ComponentProp,
		className: clsx$1(classes.root, className),
		ownerState,
		onBlur: handleBlur,
		onClick,
		onContextMenu: handleContextMenu,
		onFocus: handleFocus,
		onKeyDown,
		onKeyUp,
		onMouseDown: handleMouseDown,
		onMouseLeave: handleMouseLeave,
		onMouseUp: handleMouseUp,
		onDragLeave: handleDragLeave,
		onTouchEnd: handleTouchEnd,
		onTouchMove: handleTouchMove,
		onTouchStart: handleTouchStart,
		ref: handleRef,
		...isLink ? linkProps : buttonProps,
		...other,
		children: [children, enableTouchRipple ? /*#__PURE__*/ jsx(TouchRipple, {
			ref: handleRippleRef,
			center: centerRipple,
			...TouchRippleProps
		}) : null]
	});
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
	return useEventCallback_default((event) => {
		if (eventCallback) eventCallback(event);
		if (!skipRippleAction) ripple[rippleAction](event);
		return true;
	});
}
process.env.NODE_ENV !== "production" && (ButtonBase.propTypes = {
	/**
	* A ref for imperative actions.
	* It currently only supports `focusVisible()` action.
	*/
	action: refType,
	/**
	* If `true`, the ripples are centered.
	* They won't start at the cursor interaction position.
	* @default false
	*/
	centerRipple: PropTypes.bool,
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: elementTypeAcceptingRef,
	/**
	* If `true`, the component is disabled.
	* @default false
	*/
	disabled: PropTypes.bool,
	/**
	* If `true`, the ripple effect is disabled.
	*
	* ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
	* to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
	* @default false
	*/
	disableRipple: PropTypes.bool,
	/**
	* If `true`, the touch ripple effect is disabled.
	* @default false
	*/
	disableTouchRipple: PropTypes.bool,
	/**
	* If `true`, the base button will have a keyboard focus ripple.
	* @default false
	*/
	focusRipple: PropTypes.bool,
	/**
	* This prop can help identify which element has keyboard focus.
	* The class name will be applied when the element gains the focus through keyboard interaction.
	* It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
	* The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
	* A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
	* if needed.
	*/
	focusVisibleClassName: PropTypes.string,
	/**
	* @ignore
	*/
	formAction: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	* @ignore
	*/
	href: PropTypes.any,
	/**
	* The component used to render a link when the `href` prop is provided.
	* @default 'a'
	*/
	LinkComponent: PropTypes.elementType,
	/**
	* Whether the custom component is expected to render a native `<button>` element
	* when passing a React component to the `component` or `slots` prop.
	*/
	nativeButton: PropTypes.bool,
	/**
	* @ignore
	*/
	onBlur: PropTypes.func,
	/**
	* @ignore
	*/
	onClick: PropTypes.func,
	/**
	* @ignore
	*/
	onContextMenu: PropTypes.func,
	/**
	* @ignore
	*/
	onDragLeave: PropTypes.func,
	/**
	* @ignore
	*/
	onFocus: PropTypes.func,
	/**
	* Callback fired when the component is focused with a keyboard.
	* We trigger a `onFocus` callback too.
	*/
	onFocusVisible: PropTypes.func,
	/**
	* @ignore
	*/
	onKeyDown: PropTypes.func,
	/**
	* @ignore
	*/
	onKeyUp: PropTypes.func,
	/**
	* @ignore
	*/
	onMouseDown: PropTypes.func,
	/**
	* @ignore
	*/
	onMouseLeave: PropTypes.func,
	/**
	* @ignore
	*/
	onMouseUp: PropTypes.func,
	/**
	* @ignore
	*/
	onTouchEnd: PropTypes.func,
	/**
	* @ignore
	*/
	onTouchMove: PropTypes.func,
	/**
	* @ignore
	*/
	onTouchStart: PropTypes.func,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* @default 0
	*/
	tabIndex: PropTypes.number,
	/**
	* Props applied to the `TouchRipple` element.
	*/
	TouchRippleProps: PropTypes.object,
	/**
	* A ref that points to the `TouchRipple` element.
	*/
	touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.shape({
		pulsate: PropTypes.func.isRequired,
		start: PropTypes.func.isRequired,
		stop: PropTypes.func.isRequired
	}) })]),
	/**
	* The HTML [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#type)
	* attribute applied to `button` and `a` elements.
	* Ignored when rendering non-native buttons.
	* @default 'button'
	*/
	type: PropTypes.string
});
//#endregion
//#region node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs
function getCircularProgressUtilityClass(slot) {
	return generateUtilityClass("MuiCircularProgress", slot);
}
generateUtilityClasses("MuiCircularProgress", [
	"root",
	"determinate",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"svg",
	"track",
	"circle",
	"circleDisableShrink"
]);
//#endregion
//#region node_modules/@mui/material/CircularProgress/CircularProgress.mjs
var SIZE = 44;
var warnedMinMaxWithoutVariant = false;
var warnedInvalidMinMaxValue = false;
var circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
var circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
var rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
var dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
var useUtilityClasses$14 = (ownerState) => {
	const { classes, variant, color, disableShrink } = ownerState;
	const slots = {
		root: [
			"root",
			variant,
			`color${capitalize_default(color)}`
		],
		svg: ["svg"],
		track: ["track"],
		circle: ["circle", disableShrink && "circleDisableShrink"]
	};
	return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
var CircularProgressRoot = styled("span", {
	name: "MuiCircularProgress",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			styles[ownerState.variant],
			styles[`color${capitalize_default(ownerState.color)}`]
		];
	}
})(memoTheme(({ theme }) => {
	const reducedMotionAnimationStyles = getReducedMotionStyles(theme, { animation: "none" });
	return {
		display: "inline-block",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ...getTransitionStyles(theme, "transform") }
			},
			{
				props: { variant: "indeterminate" },
				style: rotateAnimation || { animation: `${circularRotateKeyframe} 1.4s linear infinite` }
			},
			...reducedMotionAnimationStyles ? [{
				props: { variant: "indeterminate" },
				style: reducedMotionAnimationStyles
			}] : [],
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
				props: { color },
				style: { color: (theme.vars || theme).palette[color].main }
			}))
		]
	};
}));
var CircularProgressSVG = styled("svg", {
	name: "MuiCircularProgress",
	slot: "Svg"
})({ display: "block" });
var CircularProgressCircle = styled("circle", {
	name: "MuiCircularProgress",
	slot: "Circle",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.circle, ownerState.disableShrink && styles.circleDisableShrink];
	}
})(memoTheme(({ theme }) => {
	const reducedMotionAnimationStyles = getReducedMotionStyles(theme, { animation: "none" });
	return {
		stroke: "currentColor",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ...getTransitionStyles(theme, "stroke-dashoffset") }
			},
			{
				props: { variant: "indeterminate" },
				style: {
					strokeDasharray: "80px, 200px",
					strokeDashoffset: 0
				}
			},
			{
				props: ({ ownerState }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
				style: dashAnimation || { animation: `${circularDashKeyframe} 1.4s ease-in-out infinite` }
			},
			...reducedMotionAnimationStyles ? [{
				props: ({ ownerState }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
				style: reducedMotionAnimationStyles
			}] : []
		]
	};
}));
var CircularProgressTrack = styled("circle", {
	name: "MuiCircularProgress",
	slot: "Track"
})(memoTheme(({ theme }) => ({
	stroke: "currentColor",
	opacity: (theme.vars || theme).palette.action.activatedOpacity
})));
/**
* ## ARIA
*
* If the progress bar is describing the loading progress of a particular region of a page,
* you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
* attribute to `true` on that region until it has finished loading.
*/
var CircularProgress = /*#__PURE__*/ React$1.forwardRef(function CircularProgress(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiCircularProgress"
	});
	const { className, color = "primary", disableShrink = false, enableTrackSlot = false, min: minProp, max: maxProp, size = 40, style, thickness = 3.6, value = props.min ?? 0, variant = "indeterminate", ...other } = props;
	if (process.env.NODE_ENV !== "production") {
		if (!warnedMinMaxWithoutVariant && variant === "indeterminate" && (minProp !== void 0 || maxProp !== void 0)) {
			console.warn(`MUI: You have provided the \`min\` or \`max\` props with an 'indeterminate' variant. These props will have no effect.`);
			warnedMinMaxWithoutVariant = true;
		}
	}
	const min = minProp ?? 0;
	const max = maxProp ?? 100;
	const ownerState = {
		...props,
		color,
		disableShrink,
		size,
		thickness,
		value,
		variant,
		enableTrackSlot
	};
	const classes = useUtilityClasses$14(ownerState);
	const circleStyle = {};
	const rootStyle = {};
	const rootProps = {};
	if (variant === "determinate") {
		const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
		if (process.env.NODE_ENV !== "production") {
			if (!warnedInvalidMinMaxValue && (value < min || value > max || min >= max)) {
				console.error(`MUI: The min, max, and value props in CircularProgress should be numbers where min < max and min <= value <= max. Received min=${min}, max=${max}, value=${value}.`);
				warnedInvalidMinMaxValue = true;
			}
		}
		const range = max - min;
		circleStyle.strokeDasharray = circumference.toFixed(3);
		circleStyle.strokeDashoffset = range > 0 ? `${((max - value) / range * circumference).toFixed(3)}px` : `${circumference.toFixed(3)}px`;
		rootStyle.transform = "rotate(-90deg)";
		rootProps["aria-valuenow"] = value;
		rootProps["aria-valuemin"] = min;
		rootProps["aria-valuemax"] = max;
	}
	return /*#__PURE__*/ jsx(CircularProgressRoot, {
		className: clsx$1(classes.root, className),
		style: {
			width: size,
			height: size,
			...rootStyle,
			...style
		},
		ownerState,
		ref,
		role: "progressbar",
		...rootProps,
		...other,
		children: /*#__PURE__*/ jsxs(CircularProgressSVG, {
			className: classes.svg,
			ownerState,
			viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
			children: [enableTrackSlot ? /*#__PURE__*/ jsx(CircularProgressTrack, {
				className: classes.track,
				ownerState,
				cx: SIZE,
				cy: SIZE,
				r: (SIZE - thickness) / 2,
				fill: "none",
				strokeWidth: thickness,
				"aria-hidden": "true"
			}) : null, /*#__PURE__*/ jsx(CircularProgressCircle, {
				className: classes.circle,
				style: circleStyle,
				ownerState,
				cx: SIZE,
				cy: SIZE,
				r: (SIZE - thickness) / 2,
				fill: "none",
				strokeWidth: thickness
			})]
		})
	});
});
process.env.NODE_ENV !== "production" && (CircularProgress.propTypes = {
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	* @default 'primary'
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"inherit",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* If `true`, the shrink animation is disabled.
	* This only works if variant is `indeterminate`.
	* @default false
	*/
	disableShrink: chainPropTypes(PropTypes.bool, (props) => {
		if (props.disableShrink && props.variant && props.variant !== "indeterminate") return /* @__PURE__ */ new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
		return null;
	}),
	/**
	* If `true`, a track circle slot is mounted to show a subtle background for the progress.
	* The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
	* @default false
	*/
	enableTrackSlot: PropTypes.bool,
	/**
	* The maximum value for the progress indicator for the determinate variant.
	* @default 100
	*/
	max: PropTypes.number,
	/**
	* The minimum value for the progress indicator for the determinate variant.
	* @default 0
	*/
	min: PropTypes.number,
	/**
	* The size of the component.
	* If using a number, the pixel unit is assumed.
	* If using a string, you need to provide the CSS unit, for example '3rem'.
	* @default 40
	*/
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	* @ignore
	*/
	style: PropTypes.object,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* The thickness of the circle.
	* @default 3.6
	*/
	thickness: PropTypes.number,
	/**
	* The value of the progress indicator for the determinate variant.
	* Value between `min` and `max`.
	* @default props.min ?? 0
	*/
	value: PropTypes.number,
	/**
	* The variant to use.
	* Use indeterminate when there is no progress value.
	* @default 'indeterminate'
	*/
	variant: PropTypes.oneOf(["determinate", "indeterminate"])
});
//#endregion
//#region node_modules/@mui/material/IconButton/iconButtonClasses.mjs
function getIconButtonUtilityClass(slot) {
	return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", [
	"root",
	"disabled",
	"colorInherit",
	"colorPrimary",
	"colorSecondary",
	"colorError",
	"colorInfo",
	"colorSuccess",
	"colorWarning",
	"edgeStart",
	"edgeEnd",
	"sizeSmall",
	"sizeMedium",
	"sizeLarge",
	"loading",
	"loadingIndicator",
	"loadingWrapper"
]);
//#endregion
//#region node_modules/@mui/material/IconButton/IconButton.mjs
var useUtilityClasses$13 = (ownerState) => {
	const { classes, disabled, color, edge, size, loading } = ownerState;
	const slots = {
		root: [
			"root",
			loading && "loading",
			disabled && "disabled",
			color !== "default" && `color${capitalize_default(color)}`,
			edge && `edge${capitalize_default(edge)}`,
			`size${capitalize_default(size)}`
		],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	};
	return composeClasses(slots, getIconButtonUtilityClass, classes);
};
var IconButtonRoot = styled(ButtonBase, {
	name: "MuiIconButton",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			ownerState.loading && styles.loading,
			ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`],
			ownerState.edge && styles[`edge${capitalize_default(ownerState.edge)}`],
			styles[`size${capitalize_default(ownerState.size)}`]
		];
	}
})(memoTheme(({ theme }) => ({
	textAlign: "center",
	flex: "0 0 auto",
	fontSize: theme.typography.pxToRem(24),
	padding: 8,
	borderRadius: "50%",
	color: (theme.vars || theme).palette.action.active,
	...getTransitionStyles(theme, "background-color", { duration: theme.transitions.duration.shortest }),
	variants: [
		{
			props: (props) => !props.disableRipple,
			style: {
				"--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity),
				"&:hover": {
					backgroundColor: "var(--IconButton-hoverBg)",
					"@media (hover: none)": { backgroundColor: "transparent" }
				}
			}
		},
		{
			props: { edge: "start" },
			style: { marginLeft: -12 }
		},
		{
			props: {
				edge: "start",
				size: "small"
			},
			style: { marginLeft: -3 }
		},
		{
			props: { edge: "end" },
			style: { marginRight: -12 }
		},
		{
			props: {
				edge: "end",
				size: "small"
			},
			style: { marginRight: -3 }
		}
	]
})), memoTheme(({ theme }) => ({
	variants: [
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
			props: { color },
			style: {
				color: (theme.vars || theme).palette[color].main,
				"--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
			}
		})),
		{
			props: { size: "small" },
			style: {
				padding: 5,
				fontSize: theme.typography.pxToRem(18)
			}
		},
		{
			props: { size: "large" },
			style: {
				padding: 12,
				fontSize: theme.typography.pxToRem(28)
			}
		}
	],
	[`&.${iconButtonClasses.disabled}`]: {
		backgroundColor: "transparent",
		color: (theme.vars || theme).palette.action.disabled
	},
	[`&.${iconButtonClasses.loading}`]: { color: "transparent" }
})));
var IconButtonLoadingIndicator = styled("span", {
	name: "MuiIconButton",
	slot: "LoadingIndicator"
})(({ theme }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	color: (theme.vars || theme).palette.action.disabled,
	variants: [{
		props: { loading: true },
		style: { display: "flex" }
	}]
}));
/**
* Refer to the [Icons](/material-ui/icons/) section of the documentation
* regarding the available icon options.
*/
var IconButton = /*#__PURE__*/ React$1.forwardRef(function IconButton(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiIconButton"
	});
	const { edge = false, children, className, color = "default", disabled = false, disableFocusRipple = false, size = "medium", id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, ...other } = props;
	const loadingId = useId_default(idProp);
	const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/ jsx(CircularProgress, {
		"aria-labelledby": loadingId,
		color: "inherit",
		size: 16
	});
	const ownerState = {
		...props,
		edge,
		color,
		disabled,
		disableFocusRipple,
		loading,
		loadingIndicator,
		size
	};
	const classes = useUtilityClasses$13(ownerState);
	return /*#__PURE__*/ jsxs(IconButtonRoot, {
		id: loading ? loadingId : idProp,
		className: clsx$1(classes.root, className),
		centerRipple: true,
		internalNativeButton: true,
		focusRipple: !disableFocusRipple,
		disabled: disabled || loading,
		ref,
		...other,
		ownerState,
		children: [typeof loading === "boolean" && /*#__PURE__*/ jsx("span", {
			className: classes.loadingWrapper,
			style: { display: "contents" },
			children: /*#__PURE__*/ jsx(IconButtonLoadingIndicator, {
				className: classes.loadingIndicator,
				ownerState,
				children: loading && loadingIndicator
			})
		}), children]
	});
});
process.env.NODE_ENV !== "production" && (IconButton.propTypes = {
	/**
	* The icon to display.
	*/
	children: chainPropTypes(PropTypes.node, (props) => {
		if (React$1.Children.toArray(props.children).some((child) => /*#__PURE__*/ React$1.isValidElement(child) && child.props.onClick)) return new Error([
			"MUI: You are providing an onClick event listener to a child of a button element.",
			"Prefer applying it to the IconButton directly.",
			"This guarantees that the whole <button> will be responsive to click events."
		].join("\n"));
		return null;
	}),
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	* @default 'default'
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"inherit",
		"default",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* If `true`, the component is disabled.
	* @default false
	*/
	disabled: PropTypes.bool,
	/**
	* If `true`, the  keyboard focus ripple is disabled.
	* @default false
	*/
	disableFocusRipple: PropTypes.bool,
	/**
	* If `true`, the ripple effect is disabled.
	*
	* ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
	* to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
	* @default false
	*/
	disableRipple: PropTypes.bool,
	/**
	* If given, uses a negative margin to counteract the padding on one
	* side (this is often helpful for aligning the left or right
	* side of the icon with content above or below, without ruining the border
	* size and shape).
	* @default false
	*/
	edge: PropTypes.oneOf([
		"end",
		"start",
		false
	]),
	/**
	* @ignore
	*/
	id: PropTypes.string,
	/**
	* If `true`, the loading indicator is visible and the button is disabled.
	* If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
	* @default null
	*/
	loading: PropTypes.bool,
	/**
	* Element placed before the children if the button is in loading state.
	* The node should contain an element with `role="progressbar"` with an accessible name.
	* By default, it renders a `CircularProgress` that is labeled by the button itself.
	* @default <CircularProgress color="inherit" size={16} />
	*/
	loadingIndicator: PropTypes.node,
	/**
	* The size of the component.
	* `small` is equivalent to the dense button styling.
	* @default 'medium'
	*/
	size: PropTypes.oneOfType([PropTypes.oneOf([
		"small",
		"medium",
		"large"
	]), PropTypes.string]),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/SuccessOutlined.mjs
/**
* @ignore - internal component.
*/
var SuccessOutlined_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined");
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.mjs
/**
* @ignore - internal component.
*/
var ReportProblemOutlined_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined");
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/ErrorOutline.mjs
/**
* @ignore - internal component.
*/
var ErrorOutline_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline");
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/InfoOutlined.mjs
/**
* @ignore - internal component.
*/
var InfoOutlined_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined");
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/Close.mjs
/**
* @ignore - internal component.
*
* Alias to `Clear`.
*/
var Close_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
//#endregion
//#region node_modules/@mui/material/Alert/Alert.mjs
var useUtilityClasses$12 = (ownerState) => {
	const { variant, color, severity, classes } = ownerState;
	const slots = {
		root: [
			"root",
			`color${capitalize_default(color || severity)}`,
			`${variant}`
		],
		icon: ["icon"],
		message: ["message"],
		action: ["action"]
	};
	return composeClasses(slots, getAlertUtilityClass, classes);
};
var AlertRoot = styled(Paper, {
	name: "MuiAlert",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, styles[ownerState.variant]];
	}
})(memoTheme(({ theme }) => {
	const getColor = theme.palette.mode === "light" ? theme.darken : theme.lighten;
	const getBackgroundColor = theme.palette.mode === "light" ? theme.lighten : theme.darken;
	return {
		...theme.typography.body2,
		backgroundColor: "transparent",
		display: "flex",
		padding: "6px 16px",
		variants: [
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
				props: {
					colorSeverity: color,
					variant: "standard"
				},
				style: {
					color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, .6),
					backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, .9),
					[`& .${alertClasses.icon}`]: theme.vars ? { color: theme.vars.palette.Alert[`${color}IconColor`] } : { color: theme.palette[color].main }
				}
			})),
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
				props: {
					colorSeverity: color,
					variant: "outlined"
				},
				style: {
					color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, .6),
					border: `1px solid ${(theme.vars || theme).palette[color].light}`,
					[`& .${alertClasses.icon}`]: theme.vars ? { color: theme.vars.palette.Alert[`${color}IconColor`] } : { color: theme.palette[color].main }
				}
			})),
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
				props: {
					colorSeverity: color,
					variant: "filled"
				},
				style: {
					...theme.focusVisible && applyChildrenFocusVisible(`0 0 0 4px ${(theme.vars || theme).palette.background.default}`),
					fontWeight: theme.typography.fontWeightMedium,
					...theme.vars ? {
						color: theme.vars.palette.Alert[`${color}FilledColor`],
						backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
					} : {
						backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
						color: theme.palette.getContrastText(theme.palette[color].main)
					}
				}
			}))
		]
	};
}));
var AlertIcon = styled("div", {
	name: "MuiAlert",
	slot: "Icon"
})({
	marginRight: 12,
	padding: "7px 0",
	display: "flex",
	fontSize: 22,
	opacity: .9
});
var AlertMessage = styled("div", {
	name: "MuiAlert",
	slot: "Message"
})({
	padding: "8px 0",
	minWidth: 0,
	overflow: "auto"
});
var AlertAction = styled("div", {
	name: "MuiAlert",
	slot: "Action"
})({
	display: "flex",
	alignItems: "flex-start",
	padding: "4px 0 0 16px",
	marginLeft: "auto",
	marginRight: -8
});
var defaultIconMapping = {
	success: /*#__PURE__*/ jsx(SuccessOutlined_default, { fontSize: "inherit" }),
	warning: /*#__PURE__*/ jsx(ReportProblemOutlined_default, { fontSize: "inherit" }),
	error: /*#__PURE__*/ jsx(ErrorOutline_default, { fontSize: "inherit" }),
	info: /*#__PURE__*/ jsx(InfoOutlined_default, { fontSize: "inherit" })
};
var Alert = /*#__PURE__*/ React$1.forwardRef(function Alert(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiAlert"
	});
	const { action, children, className, closeText = "Close", color, icon, iconMapping = defaultIconMapping, onClose, role = "alert", severity = "success", slotProps = {}, slots = {}, variant = "standard", ...other } = props;
	const ownerState = {
		...props,
		color,
		severity,
		variant,
		colorSeverity: color || severity
	};
	const classes = useUtilityClasses$12(ownerState);
	const externalForwardedProps = {
		slots,
		slotProps
	};
	const [RootSlot, rootSlotProps] = useSlot("root", {
		ref,
		shouldForwardComponentProp: true,
		className: clsx$1(classes.root, className),
		elementType: AlertRoot,
		externalForwardedProps: {
			...externalForwardedProps,
			...other
		},
		ownerState,
		additionalProps: {
			role,
			elevation: 0
		}
	});
	const [IconSlot, iconSlotProps] = useSlot("icon", {
		className: classes.icon,
		elementType: AlertIcon,
		externalForwardedProps,
		ownerState
	});
	const [MessageSlot, messageSlotProps] = useSlot("message", {
		className: classes.message,
		elementType: AlertMessage,
		externalForwardedProps,
		ownerState
	});
	const [ActionSlot, actionSlotProps] = useSlot("action", {
		className: classes.action,
		elementType: AlertAction,
		externalForwardedProps,
		ownerState
	});
	const [CloseButtonSlot, closeButtonProps] = useSlot("closeButton", {
		elementType: IconButton,
		externalForwardedProps,
		ownerState
	});
	const [CloseIconSlot, closeIconProps] = useSlot("closeIcon", {
		elementType: Close_default,
		externalForwardedProps,
		ownerState
	});
	return /*#__PURE__*/ jsxs(RootSlot, {
		...rootSlotProps,
		children: [
			icon !== false ? /*#__PURE__*/ jsx(IconSlot, {
				...iconSlotProps,
				children: icon || iconMapping[severity] || defaultIconMapping[severity]
			}) : null,
			/*#__PURE__*/ jsx(MessageSlot, {
				...messageSlotProps,
				children
			}),
			action != null ? /*#__PURE__*/ jsx(ActionSlot, {
				...actionSlotProps,
				children: action
			}) : null,
			action == null && onClose ? /*#__PURE__*/ jsx(ActionSlot, {
				...actionSlotProps,
				children: /*#__PURE__*/ jsx(CloseButtonSlot, {
					size: "small",
					"aria-label": closeText,
					title: closeText,
					color: "inherit",
					onClick: onClose,
					...closeButtonProps,
					children: /*#__PURE__*/ jsx(CloseIconSlot, {
						fontSize: "small",
						...closeIconProps
					})
				})
			}) : null
		]
	});
});
process.env.NODE_ENV !== "production" && (Alert.propTypes = {
	/**
	* The action to display. It renders after the message, at the end of the alert.
	*/
	action: PropTypes.node,
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* Override the default label for the *close popup* icon button.
	*
	* For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
	* @default 'Close'
	*/
	closeText: PropTypes.string,
	/**
	* The color of the component. Unless provided, the value is taken from the `severity` prop.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* Override the icon displayed before the children.
	* Unless provided, the icon is mapped to the value of the `severity` prop.
	* Set to `false` to remove the `icon`.
	*/
	icon: PropTypes.node,
	/**
	* The component maps the `severity` prop to a range of different icons,
	* for instance success to `<SuccessOutlined>`.
	* If you wish to change this mapping, you can provide your own.
	* Alternatively, you can use the `icon` prop to override the icon displayed.
	*/
	iconMapping: PropTypes.shape({
		error: PropTypes.node,
		info: PropTypes.node,
		success: PropTypes.node,
		warning: PropTypes.node
	}),
	/**
	* Callback fired when the component requests to be closed.
	* When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
	* @param {React.SyntheticEvent} event The event source of the callback.
	*/
	onClose: PropTypes.func,
	/**
	* The ARIA role attribute of the element.
	* @default 'alert'
	*/
	role: PropTypes.string,
	/**
	* The severity of the alert. This defines the color and icon used.
	* @default 'success'
	*/
	severity: PropTypes.oneOfType([PropTypes.oneOf([
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* The props used for each slot inside.
	* @default {}
	*/
	slotProps: PropTypes.shape({
		action: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		closeButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		closeIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		message: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	}),
	/**
	* The components used for each slot inside.
	* @default {}
	*/
	slots: PropTypes.shape({
		action: PropTypes.elementType,
		closeButton: PropTypes.elementType,
		closeIcon: PropTypes.elementType,
		icon: PropTypes.elementType,
		message: PropTypes.elementType,
		root: PropTypes.elementType
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* The variant to use.
	* @default 'standard'
	*/
	variant: PropTypes.oneOfType([PropTypes.oneOf([
		"filled",
		"outlined",
		"standard"
	]), PropTypes.string])
});
//#endregion
//#region node_modules/@mui/material/styles/ThemeProviderNoVars.mjs
function ThemeProviderNoVars({ theme: themeInput, ...props }) {
	const scopedTheme = "$$material" in themeInput ? themeInput[identifier_default] : void 0;
	return /*#__PURE__*/ jsx(ThemeProvider, {
		...props,
		themeId: scopedTheme ? identifier_default : void 0,
		theme: scopedTheme || themeInput
	});
}
//#endregion
//#region node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.mjs
var defaultConfig = {
	attribute: "data-mui-color-scheme",
	colorSchemeStorageKey: "mui-color-scheme",
	defaultLightColorScheme: "light",
	defaultDarkColorScheme: "dark",
	modeStorageKey: "mui-mode"
};
/**
*
* Demos:
*
* - [InitColorSchemeScript](https://mui.com/material-ui/react-init-color-scheme-script/)
*
* API:
*
* - [InitColorSchemeScript API](https://mui.com/material-ui/api/init-color-scheme-script/)
*/
function InitColorSchemeScript(props) {
	const { defaultMode = "system", defaultLightColorScheme = defaultConfig.defaultLightColorScheme, defaultDarkColorScheme = defaultConfig.defaultDarkColorScheme, modeStorageKey = defaultConfig.modeStorageKey, colorSchemeStorageKey = defaultConfig.colorSchemeStorageKey, attribute: initialAttribute = defaultConfig.attribute, colorSchemeNode = "document.documentElement", nonce } = props;
	return /*#__PURE__*/ jsx(SystemInitColorSchemeScript, {
		defaultMode,
		defaultLightColorScheme,
		defaultDarkColorScheme,
		modeStorageKey,
		colorSchemeStorageKey,
		attribute: initialAttribute,
		colorSchemeNode,
		nonce
	});
}
process.env.NODE_ENV !== "production" && (InitColorSchemeScript.propTypes = {
	/**
	* DOM attribute for applying a color scheme.
	* @default 'data-mui-color-scheme'
	* @example '.mode-%s' // for class based color scheme
	* @example '[data-mode-%s]' // for data-attribute without '='
	*/
	attribute: PropTypes.string,
	/**
	* The node (provided as string) used to attach the color-scheme attribute.
	* @default 'document.documentElement'
	*/
	colorSchemeNode: PropTypes.string,
	/**
	* localStorage key used to store `colorScheme`.
	* @default 'mui-color-scheme'
	*/
	colorSchemeStorageKey: PropTypes.string,
	/**
	* The default color scheme to be used in dark mode.
	* @default 'dark'
	*/
	defaultDarkColorScheme: PropTypes.string,
	/**
	* The default color scheme to be used in light mode.
	* @default 'light'
	*/
	defaultLightColorScheme: PropTypes.string,
	/**
	* The default mode when the storage is empty (user's first visit).
	* @default 'system'
	*/
	defaultMode: PropTypes.oneOf([
		"dark",
		"light",
		"system"
	]),
	/**
	* localStorage key used to store `mode`.
	* @default 'mui-mode'
	*/
	modeStorageKey: PropTypes.string,
	/**
	* Nonce string to pass to the inline script for CSP headers.
	*/
	nonce: PropTypes.string
});
//#endregion
//#region node_modules/@mui/material/styles/ThemeProviderWithVars.mjs
var { CssVarsProvider: InternalCssVarsProvider, useColorScheme, getInitColorSchemeScript: deprecatedGetInitColorSchemeScript } = unstable_createCssVarsProvider({
	themeId: identifier_default,
	theme: () => createTheme({ cssVariables: true }),
	colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
	modeStorageKey: defaultConfig.modeStorageKey,
	defaultColorScheme: {
		light: defaultConfig.defaultLightColorScheme,
		dark: defaultConfig.defaultDarkColorScheme
	},
	resolveTheme: (theme) => {
		const newTheme = {
			...theme,
			typography: createTypography(theme.palette, theme.typography)
		};
		newTheme.unstable_sx = function sx(props) {
			return styleFunctionSx({
				sx: props,
				theme: this
			});
		};
		return newTheme;
	}
});
/**
* TODO: remove this export in v7
* @deprecated
* The `CssVarsProvider` component has been deprecated and ported into `ThemeProvider`.
*
* You should use `ThemeProvider` and `createTheme()` instead:
*
* ```diff
* - import { CssVarsProvider, extendTheme } from '@mui/material/styles';
* + import { ThemeProvider, createTheme } from '@mui/material/styles';
*
* - const theme = extendTheme();
* + const theme = createTheme({
* +   cssVariables: true,
* +   colorSchemes: { light: true, dark: true },
* + });
*
* - <CssVarsProvider theme={theme}>
* + <ThemeProvider theme={theme}>
* ```
*
* To see the full documentation, check out https://mui.com/material-ui/customization/css-theme-variables/usage/.
*/
var CssVarsProvider = InternalCssVarsProvider;
//#endregion
//#region node_modules/@mui/material/styles/ThemeProvider.mjs
function ThemeProvider$1({ theme, ...props }) {
	const noVarsTheme = React$1.useMemo(() => {
		if (typeof theme === "function") return theme;
		const muiTheme = "$$material" in theme ? theme[identifier_default] : theme;
		if (!("colorSchemes" in muiTheme)) {
			if (!("vars" in muiTheme)) return {
				...theme,
				vars: null
			};
			return theme;
		}
		return null;
	}, [theme]);
	if (noVarsTheme) return /*#__PURE__*/ jsx(ThemeProviderNoVars, {
		theme: noVarsTheme,
		...props
	});
	return /*#__PURE__*/ jsx(CssVarsProvider, {
		theme,
		...props
	});
}
//#endregion
//#region node_modules/@mui/material/Box/boxClasses.mjs
var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
//#endregion
//#region node_modules/@mui/material/Box/Box.mjs
var defaultTheme = createTheme();
var Box = createBox({
	themeId: identifier_default,
	defaultTheme,
	defaultClassName: boxClasses.root,
	generateClassName: unstable_ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" && (Box.propTypes = {
	/**
	* @ignore
	*/
	children: PropTypes.node,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/Button/buttonClasses.mjs
function getButtonUtilityClass(slot) {
	return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", [
	"root",
	"text",
	"outlined",
	"contained",
	"disableElevation",
	"focusVisible",
	"disabled",
	"colorInherit",
	"colorPrimary",
	"colorSecondary",
	"colorSuccess",
	"colorError",
	"colorInfo",
	"colorWarning",
	"sizeMedium",
	"sizeSmall",
	"sizeLarge",
	"fullWidth",
	"startIcon",
	"endIcon",
	"icon",
	"loading",
	"loadingWrapper",
	"loadingIconPlaceholder",
	"loadingIndicator",
	"loadingPositionCenter",
	"loadingPositionStart",
	"loadingPositionEnd"
]);
//#endregion
//#region node_modules/@mui/material/ButtonGroup/ButtonGroupContext.mjs
/**
* @ignore - internal component.
*/
var ButtonGroupContext = /*#__PURE__*/ React$1.createContext({});
if (process.env.NODE_ENV !== "production") ButtonGroupContext.displayName = "ButtonGroupContext";
//#endregion
//#region node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.mjs
/**
* @ignore - internal component.
*/
var ButtonGroupButtonContext = /*#__PURE__*/ React$1.createContext(void 0);
if (process.env.NODE_ENV !== "production") ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
//#endregion
//#region node_modules/@mui/material/Button/Button.mjs
var useUtilityClasses$11 = (ownerState) => {
	const { color, disableElevation, fullWidth, size, variant, loading, loadingPosition, classes } = ownerState;
	const slots = {
		root: [
			"root",
			loading && "loading",
			variant,
			`size${capitalize_default(size)}`,
			`color${capitalize_default(color)}`,
			disableElevation && "disableElevation",
			fullWidth && "fullWidth",
			loading && `loadingPosition${capitalize_default(loadingPosition)}`
		],
		startIcon: ["icon", "startIcon"],
		endIcon: ["icon", "endIcon"],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	};
	const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
	return {
		...classes,
		...composedClasses
	};
};
var commonIconStyles = [
	{
		props: { size: "small" },
		style: { "& > *:nth-of-type(1)": { fontSize: 18 } }
	},
	{
		props: { size: "medium" },
		style: { "& > *:nth-of-type(1)": { fontSize: 20 } }
	},
	{
		props: { size: "large" },
		style: { "& > *:nth-of-type(1)": { fontSize: 22 } }
	}
];
var ButtonRoot = styled(ButtonBase, {
	shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
	name: "MuiButton",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			styles[ownerState.variant],
			styles[`size${capitalize_default(ownerState.size)}`],
			ownerState.color === "inherit" && styles.colorInherit,
			ownerState.disableElevation && styles.disableElevation,
			ownerState.fullWidth && styles.fullWidth,
			ownerState.loading && styles.loading
		];
	}
})(memoTheme(({ theme }) => {
	const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
	const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
	return {
		...theme.typography.button,
		minWidth: 64,
		padding: "6px 16px",
		border: 0,
		borderRadius: (theme.vars || theme).shape.borderRadius,
		...getTransitionStyles(theme, [
			"background-color",
			"box-shadow",
			"border-color",
			"color"
		], { duration: theme.transitions.duration.short }),
		"&:hover": { textDecoration: "none" },
		[`&.${buttonClasses.disabled}`]: { color: (theme.vars || theme).palette.action.disabled },
		variants: [
			{
				props: { variant: "contained" },
				style: {
					color: `var(--variant-containedColor)`,
					backgroundColor: `var(--variant-containedBg)`,
					boxShadow: (theme.vars || theme).shadows[2],
					"&:hover": {
						boxShadow: (theme.vars || theme).shadows[4],
						"@media (hover: none)": { boxShadow: (theme.vars || theme).shadows[2] }
					},
					"&:active": { boxShadow: (theme.vars || theme).shadows[8] },
					[`&.${buttonClasses.focusVisible}`]: {
						...theme.focusVisible,
						boxShadow: theme.focusVisible?.boxShadow ? `${(theme.vars || theme).shadows[6]}, ${theme.focusVisible.boxShadow}` : (theme.vars || theme).shadows[6]
					},
					[`&.${buttonClasses.disabled}`]: {
						color: (theme.vars || theme).palette.action.disabled,
						boxShadow: (theme.vars || theme).shadows[0],
						backgroundColor: (theme.vars || theme).palette.action.disabledBackground
					}
				}
			},
			{
				props: { variant: "outlined" },
				style: {
					padding: "5px 15px",
					border: "1px solid currentColor",
					borderColor: `var(--variant-outlinedBorder, currentColor)`,
					backgroundColor: `var(--variant-outlinedBg)`,
					color: `var(--variant-outlinedColor)`,
					[`&.${buttonClasses.disabled}`]: { border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}` }
				}
			},
			{
				props: { variant: "text" },
				style: {
					padding: "6px 8px",
					color: `var(--variant-textColor)`,
					backgroundColor: `var(--variant-textBg)`
				}
			},
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
				props: { color },
				style: {
					"--variant-textColor": (theme.vars || theme).palette[color].main,
					"--variant-outlinedColor": (theme.vars || theme).palette[color].main,
					"--variant-outlinedBorder": theme.alpha((theme.vars || theme).palette[color].main, .5),
					"--variant-containedColor": (theme.vars || theme).palette[color].contrastText,
					"--variant-containedBg": (theme.vars || theme).palette[color].main,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": (theme.vars || theme).palette[color].dark,
						"--variant-textBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity),
						"--variant-outlinedBorder": (theme.vars || theme).palette[color].main,
						"--variant-outlinedBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
					} }
				}
			})),
			{
				props: { color: "inherit" },
				style: {
					color: "inherit",
					borderColor: "currentColor",
					"--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
						"--variant-textBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
						"--variant-outlinedBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity)
					} }
				}
			},
			{
				props: {
					size: "small",
					variant: "text"
				},
				style: {
					padding: "4px 5px",
					fontSize: theme.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "text"
				},
				style: {
					padding: "8px 11px",
					fontSize: theme.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					padding: "3px 9px",
					fontSize: theme.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "outlined"
				},
				style: {
					padding: "7px 21px",
					fontSize: theme.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "contained"
				},
				style: {
					padding: "4px 10px",
					fontSize: theme.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "contained"
				},
				style: {
					padding: "8px 22px",
					fontSize: theme.typography.pxToRem(15)
				}
			},
			{
				props: { disableElevation: true },
				style: {
					boxShadow: "none",
					"&:hover": { boxShadow: "none" },
					[`&.${buttonClasses.focusVisible}`]: { boxShadow: theme.focusVisible?.boxShadow ?? "none" },
					"&:active": { boxShadow: "none" },
					[`&.${buttonClasses.disabled}`]: { boxShadow: "none" }
				}
			},
			{
				props: { fullWidth: true },
				style: { width: "100%" }
			},
			{
				props: { loadingPosition: "center" },
				style: {
					...getTransitionStyles(theme, [
						"background-color",
						"box-shadow",
						"border-color"
					], { duration: theme.transitions.duration.short }),
					[`&.${buttonClasses.loading}`]: { color: "transparent" }
				}
			}
		]
	};
}));
var ButtonStartIcon = styled("span", {
	name: "MuiButton",
	slot: "StartIcon",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.startIcon, ownerState.loading && styles.startIconLoadingStart];
	}
})(({ theme }) => ({
	display: "inherit",
	alignItems: "center",
	marginRight: 8,
	marginLeft: -4,
	"&::before": {
		content: "\"\\200b\"",
		width: 0,
		overflow: "hidden"
	},
	variants: [
		{
			props: { size: "small" },
			style: { marginLeft: -2 }
		},
		{
			props: {
				loadingPosition: "start",
				loading: true
			},
			style: {
				...getTransitionStyles(theme, ["opacity"], { duration: theme.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "start",
				loading: true,
				fullWidth: true
			},
			style: { marginRight: -8 }
		},
		...commonIconStyles
	]
}));
var ButtonEndIcon = styled("span", {
	name: "MuiButton",
	slot: "EndIcon",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.endIcon, ownerState.loading && styles.endIconLoadingEnd];
	}
})(({ theme }) => ({
	display: "inherit",
	marginRight: -4,
	marginLeft: 8,
	variants: [
		{
			props: { size: "small" },
			style: { marginRight: -2 }
		},
		{
			props: {
				loadingPosition: "end",
				loading: true
			},
			style: {
				...getTransitionStyles(theme, ["opacity"], { duration: theme.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "end",
				loading: true,
				fullWidth: true
			},
			style: { marginLeft: -8 }
		},
		...commonIconStyles
	]
}));
var ButtonLoadingIndicator = styled("span", {
	name: "MuiButton",
	slot: "LoadingIndicator"
})(({ theme }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	variants: [
		{
			props: { loading: true },
			style: { display: "flex" }
		},
		{
			props: { loadingPosition: "start" },
			style: { left: 14 }
		},
		{
			props: {
				loadingPosition: "start",
				size: "small"
			},
			style: { left: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "start"
			},
			style: { left: 6 }
		},
		{
			props: { loadingPosition: "center" },
			style: {
				left: "50%",
				transform: "translate(-50%)",
				color: (theme.vars || theme).palette.action.disabled
			}
		},
		{
			props: { loadingPosition: "end" },
			style: { right: 14 }
		},
		{
			props: {
				loadingPosition: "end",
				size: "small"
			},
			style: { right: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "end"
			},
			style: { right: 6 }
		},
		{
			props: {
				loadingPosition: "start",
				fullWidth: true
			},
			style: {
				position: "relative",
				left: -10
			}
		},
		{
			props: {
				loadingPosition: "end",
				fullWidth: true
			},
			style: {
				position: "relative",
				right: -10
			}
		}
	]
}));
var ButtonLoadingIconPlaceholder = styled("span", {
	name: "MuiButton",
	slot: "LoadingIconPlaceholder"
})({
	display: "inline-block",
	width: "1em",
	height: "1em"
});
var Button = /*#__PURE__*/ React$1.forwardRef(function Button(inProps, ref) {
	const contextProps = React$1.useContext(ButtonGroupContext);
	const buttonGroupButtonContextPositionClassName = React$1.useContext(ButtonGroupButtonContext);
	const props = useDefaultProps$1({
		props: resolveProps(contextProps, inProps),
		name: "MuiButton"
	});
	const { children, color = "primary", component = "button", className, disabled = false, disableElevation = false, disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName, fullWidth = false, id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, loadingPosition = "center", size = "medium", startIcon: startIconProp, type, variant = "text", ...other } = props;
	const loadingId = useId_default(idProp);
	const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/ jsx(CircularProgress, {
		"aria-labelledby": loadingId,
		color: "inherit",
		size: 16
	});
	const ownerState = {
		...props,
		color,
		component,
		disabled,
		disableElevation,
		disableFocusRipple,
		fullWidth,
		loading,
		loadingIndicator,
		loadingPosition,
		size,
		type,
		variant
	};
	const classes = useUtilityClasses$11(ownerState);
	const startIcon = (startIconProp || loading && loadingPosition === "start") && /*#__PURE__*/ jsx(ButtonStartIcon, {
		className: classes.startIcon,
		ownerState,
		children: startIconProp || /*#__PURE__*/ jsx(ButtonLoadingIconPlaceholder, {
			className: classes.loadingIconPlaceholder,
			ownerState
		})
	});
	const endIcon = (endIconProp || loading && loadingPosition === "end") && /*#__PURE__*/ jsx(ButtonEndIcon, {
		className: classes.endIcon,
		ownerState,
		children: endIconProp || /*#__PURE__*/ jsx(ButtonLoadingIconPlaceholder, {
			className: classes.loadingIconPlaceholder,
			ownerState
		})
	});
	const positionClassName = buttonGroupButtonContextPositionClassName || "";
	const loader = typeof loading === "boolean" ? /*#__PURE__*/ jsx("span", {
		className: classes.loadingWrapper,
		style: { display: "contents" },
		children: loading && /*#__PURE__*/ jsx(ButtonLoadingIndicator, {
			className: classes.loadingIndicator,
			ownerState,
			children: loadingIndicator
		})
	}) : null;
	const { root, ...forwardedClasses } = classes;
	return /*#__PURE__*/ jsxs(ButtonRoot, {
		ownerState,
		className: clsx$1(contextProps.className, classes.root, className, positionClassName),
		component,
		disabled: disabled || loading,
		focusRipple: !disableFocusRipple,
		focusVisibleClassName: clsx$1(classes.focusVisible, focusVisibleClassName),
		ref,
		internalNativeButton: true,
		type,
		id: loading ? loadingId : idProp,
		...other,
		classes: forwardedClasses,
		children: [
			startIcon,
			loadingPosition !== "end" && loader,
			children,
			loadingPosition === "end" && loader,
			endIcon
		]
	});
});
process.env.NODE_ENV !== "production" && (Button.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	* @default 'primary'
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"inherit",
		"primary",
		"secondary",
		"success",
		"error",
		"info",
		"warning"
	]), PropTypes.string]),
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* If `true`, the component is disabled.
	* @default false
	*/
	disabled: PropTypes.bool,
	/**
	* If `true`, no elevation is used.
	* @default false
	*/
	disableElevation: PropTypes.bool,
	/**
	* If `true`, the  keyboard focus ripple is disabled.
	* @default false
	*/
	disableFocusRipple: PropTypes.bool,
	/**
	* If `true`, the ripple effect is disabled.
	*
	* ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
	* to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
	* @default false
	*/
	disableRipple: PropTypes.bool,
	/**
	* Element placed after the children.
	*/
	endIcon: PropTypes.node,
	/**
	* @ignore
	*/
	focusVisibleClassName: PropTypes.string,
	/**
	* If `true`, the button will take up the full width of its container.
	* @default false
	*/
	fullWidth: PropTypes.bool,
	/**
	* The URL to link to when the button is clicked.
	* If defined, an `a` element will be used as the root node.
	*/
	href: PropTypes.string,
	/**
	* @ignore
	*/
	id: PropTypes.string,
	/**
	* If `true`, the loading indicator is visible and the button is disabled.
	* If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
	* @default null
	*/
	loading: PropTypes.bool,
	/**
	* Element placed before the children if the button is in loading state.
	* The node should contain an element with `role="progressbar"` with an accessible name.
	* By default, it renders a `CircularProgress` that is labeled by the button itself.
	* @default <CircularProgress color="inherit" size={16} />
	*/
	loadingIndicator: PropTypes.node,
	/**
	* The loading indicator can be positioned on the start, end, or the center of the button.
	* @default 'center'
	*/
	loadingPosition: PropTypes.oneOf([
		"center",
		"end",
		"start"
	]),
	/**
	* The size of the component.
	* `small` is equivalent to the dense button styling.
	* @default 'medium'
	*/
	size: PropTypes.oneOfType([PropTypes.oneOf([
		"small",
		"medium",
		"large"
	]), PropTypes.string]),
	/**
	* Element placed before the children.
	*/
	startIcon: PropTypes.node,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* @ignore
	*/
	type: PropTypes.string,
	/**
	* The variant to use.
	* @default 'text'
	*/
	variant: PropTypes.oneOfType([PropTypes.oneOf([
		"contained",
		"outlined",
		"text"
	]), PropTypes.string])
});
//#endregion
//#region node_modules/@mui/material/Modal/ModalManager.mjs
function isOverflowing(container) {
	const doc = ownerDocument(container);
	if (container === doc.body || container === doc.documentElement) return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
	return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
	if (hide) element.setAttribute("aria-hidden", "true");
	else element.removeAttribute("aria-hidden");
}
function getPaddingRight(element) {
	return parseFloat(ownerWindow(element).getComputedStyle(element).paddingRight) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
	const isForbiddenTagName = [
		"TEMPLATE",
		"SCRIPT",
		"STYLE",
		"LINK",
		"MAP",
		"META",
		"NOSCRIPT",
		"PICTURE",
		"COL",
		"COLGROUP",
		"PARAM",
		"SLOT",
		"SOURCE",
		"TRACK"
	].includes(element.tagName);
	const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
	return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
	const blacklist = [
		mountElement,
		currentElement,
		...elementsToExclude
	];
	[].forEach.call(container.children, (element) => {
		const isNotExcludedElement = !blacklist.includes(element);
		const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
		if (isNotExcludedElement && isNotForbiddenElement) ariaHidden(element, hide);
	});
}
function handleContainer(containerInfo, props) {
	const restoreStyle = [];
	const container = containerInfo.container;
	if (!props.disableScrollLock) {
		let scrollContainer;
		if (container.parentNode instanceof DocumentFragment) scrollContainer = ownerDocument(container).body;
		else {
			const parent = container.parentElement;
			const containerWindow = ownerWindow(container);
			scrollContainer = parent?.nodeName === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
		}
		if (isOverflowing(scrollContainer)) {
			const scrollbarSize = getScrollbarSize(ownerWindow(scrollContainer));
			restoreStyle.push({
				value: scrollContainer.style.paddingRight,
				property: "padding-right",
				el: scrollContainer
			});
			scrollContainer.style.paddingRight = `${getPaddingRight(scrollContainer) + scrollbarSize}px`;
			const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
			[].forEach.call(fixedElements, (element) => {
				restoreStyle.push({
					value: element.style.paddingRight,
					property: "padding-right",
					el: element
				});
				element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
			});
		}
		restoreStyle.push({
			value: scrollContainer.style.overflow,
			property: "overflow",
			el: scrollContainer
		}, {
			value: scrollContainer.style.overflowX,
			property: "overflow-x",
			el: scrollContainer
		}, {
			value: scrollContainer.style.overflowY,
			property: "overflow-y",
			el: scrollContainer
		});
		scrollContainer.style.overflow = "hidden";
	}
	const restore = () => {
		restoreStyle.forEach(({ value, el, property }) => {
			if (value) el.style.setProperty(property, value);
			else el.style.removeProperty(property);
		});
	};
	return restore;
}
function getHiddenSiblings(container) {
	const hiddenSiblings = [];
	[].forEach.call(container.children, (element) => {
		if (element.getAttribute("aria-hidden") === "true") hiddenSiblings.push(element);
	});
	return hiddenSiblings;
}
/**
* @ignore - do not document.
*
* Proper state management for containers and the modals in those containers.
* Simplified, but inspired by react-overlay's ModalManager class.
* Used by the Modal to ensure proper styling of containers.
*/
var ModalManager = class {
	constructor() {
		this.modals = [];
		this.containers = [];
	}
	add(modal, container) {
		let modalIndex = this.modals.indexOf(modal);
		if (modalIndex !== -1) return modalIndex;
		modalIndex = this.modals.length;
		this.modals.push(modal);
		if (modal.modalRef) ariaHidden(modal.modalRef, false);
		const hiddenSiblings = getHiddenSiblings(container);
		ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
		const containerIndex = this.containers.findIndex((item) => item.container === container);
		if (containerIndex !== -1) {
			this.containers[containerIndex].modals.push(modal);
			return modalIndex;
		}
		this.containers.push({
			modals: [modal],
			container,
			restore: null,
			hiddenSiblings
		});
		return modalIndex;
	}
	mount(modal, props) {
		const containerIndex = this.containers.findIndex((item) => item.modals.includes(modal));
		const containerInfo = this.containers[containerIndex];
		if (!containerInfo.restore) containerInfo.restore = handleContainer(containerInfo, props);
	}
	remove(modal, ariaHiddenState = true) {
		const modalIndex = this.modals.indexOf(modal);
		if (modalIndex === -1) return modalIndex;
		const containerIndex = this.containers.findIndex((item) => item.modals.includes(modal));
		const containerInfo = this.containers[containerIndex];
		containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
		this.modals.splice(modalIndex, 1);
		if (containerInfo.modals.length === 0) {
			if (containerInfo.restore) containerInfo.restore();
			if (modal.modalRef) ariaHidden(modal.modalRef, ariaHiddenState);
			ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
			this.containers.splice(containerIndex, 1);
		} else {
			const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
			if (nextTop.modalRef) ariaHidden(nextTop.modalRef, false);
		}
		return modalIndex;
	}
	isTopModal(modal) {
		return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
	}
};
//#endregion
//#region node_modules/@mui/material/utils/contains.mjs
var contains_default = contains;
//#endregion
//#region node_modules/@mui/material/utils/focusable.mjs
var FOCUSABLE_ATTRIBUTE = "data-mui-focusable";
/**
* Returns the element marked as the initial focus target inside a focus trap.
* The root element takes precedence over marked descendants so components can
* opt into focusing their own root surface directly.
*/
function getFocusTarget(rootElement) {
	if (!rootElement) return null;
	return rootElement.hasAttribute("data-mui-focusable") ? rootElement : rootElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`);
}
//#endregion
//#region node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.mjs
var candidatesSelector = [
	"input",
	"select",
	"textarea",
	"a[href]",
	"button",
	"[tabindex]",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])"
].join(",");
function getTabIndex(node) {
	const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
	if (!Number.isNaN(tabindexAttr)) return tabindexAttr;
	if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) return 0;
	return node.tabIndex;
}
function isNonTabbableRadio(node) {
	if (node.tagName !== "INPUT" || node.type !== "radio") return false;
	if (!node.name) return false;
	const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
	let roving = getRadio(`[name="${node.name}"]:checked`);
	if (!roving) roving = getRadio(`[name="${node.name}"]`);
	return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
	if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) return false;
	return true;
}
function defaultGetTabbable(root) {
	const regularTabNodes = [];
	const orderedTabNodes = [];
	Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
		const nodeTabIndex = getTabIndex(node);
		if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) return;
		if (nodeTabIndex === 0) regularTabNodes.push(node);
		else orderedTabNodes.push({
			documentOrder: i,
			tabIndex: nodeTabIndex,
			node
		});
	});
	return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
	return true;
}
/**
* @ignore - internal component.
*/
function FocusTrap(props) {
	const { children, disableAutoFocus = false, disableEnforceFocus = false, disableRestoreFocus = false, getTabbable = defaultGetTabbable, isEnabled = defaultIsEnabled, open } = props;
	const ignoreNextEnforceFocus = React$1.useRef(false);
	const sentinelStart = React$1.useRef(null);
	const sentinelEnd = React$1.useRef(null);
	const nodeToRestore = React$1.useRef(null);
	const reactFocusEventTarget = React$1.useRef(null);
	const activated = React$1.useRef(false);
	const rootRef = React$1.useRef(null);
	const handleRef = useForkRef(getReactElementRef(children), rootRef);
	const lastKeydown = React$1.useRef(null);
	React$1.useEffect(() => {
		if (!open || !rootRef.current) return;
		activated.current = !disableAutoFocus;
	}, [disableAutoFocus, open]);
	React$1.useEffect(() => {
		ignoreNextEnforceFocus.current = false;
		if (!open || !rootRef.current) return;
		const activeElement = getActiveElement_default(ownerDocument(rootRef.current));
		const focusTarget = getFocusTarget(rootRef.current) ?? rootRef.current;
		if (!contains_default(rootRef.current, activeElement)) {
			if (!focusTarget.hasAttribute("tabIndex")) {
				if (process.env.NODE_ENV !== "production") console.error(["MUI: The modal content node does not accept focus.", "For the benefit of assistive technologies, the tabIndex of the node is being set to \"-1\"."].join("\n"));
				focusTarget.setAttribute("tabIndex", "-1");
			}
			if (activated.current) focusTarget.focus();
		}
		return () => {
			if (!disableRestoreFocus && nodeToRestore.current) {
				ignoreNextEnforceFocus.current = true;
				nodeToRestore.current.focus();
				nodeToRestore.current = null;
			}
		};
	}, [open]);
	React$1.useEffect(() => {
		if (!open || !rootRef.current) return;
		const doc = ownerDocument(rootRef.current);
		const loopFocus = (nativeEvent) => {
			lastKeydown.current = nativeEvent;
			if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") return;
			const rootElement = rootRef.current;
			const activeElement = getActiveElement_default(doc);
			if (rootElement === null) return;
			const focusTarget = getFocusTarget(rootElement);
			if (activeElement === rootElement || activeElement === focusTarget) {
				const tabbable = getTabbable(rootElement);
				if (tabbable.length === 0) return;
				nativeEvent.preventDefault();
				if (nativeEvent.shiftKey) tabbable[tabbable.length - 1].focus();
				else tabbable[0].focus();
				return;
			}
			if (contains_default(rootElement, activeElement)) {
				const tabbable = getTabbable(rootElement);
				const currentIndex = tabbable.indexOf(activeElement);
				if (currentIndex === -1) return;
				if (!tabbable.some((node) => getTabIndex(node) > 0)) return;
				nativeEvent.preventDefault();
				let nextIndex = 0;
				if (nativeEvent.shiftKey) nextIndex = currentIndex <= 0 ? tabbable.length - 1 : currentIndex - 1;
				else nextIndex = currentIndex === tabbable.length - 1 ? 0 : currentIndex + 1;
				tabbable[nextIndex].focus();
			}
		};
		const contain = () => {
			const rootElement = rootRef.current;
			if (rootElement === null) return;
			const activeEl = getActiveElement_default(doc);
			if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
				ignoreNextEnforceFocus.current = false;
				return;
			}
			if (contains_default(rootElement, activeEl)) return;
			if (disableEnforceFocus && activeEl !== sentinelStart.current && activeEl !== sentinelEnd.current) return;
			if (activeEl !== reactFocusEventTarget.current) reactFocusEventTarget.current = null;
			else if (reactFocusEventTarget.current !== null) return;
			if (!activated.current) return;
			let tabbable = [];
			if (activeEl === sentinelStart.current || activeEl === sentinelEnd.current) tabbable = getTabbable(rootRef.current);
			if (tabbable.length > 0) {
				const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === "Tab");
				const focusNext = tabbable[0];
				const focusPrevious = tabbable[tabbable.length - 1];
				if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
					if (isShiftTab) focusPrevious.focus();
					else focusNext.focus();
				}
			} else rootElement.focus();
		};
		doc.addEventListener("focusin", contain);
		doc.addEventListener("keydown", loopFocus, true);
		const interval = setInterval(() => {
			const activeEl = getActiveElement_default(doc);
			if (activeEl && activeEl.tagName === "BODY") contain();
		}, 50);
		return () => {
			clearInterval(interval);
			doc.removeEventListener("focusin", contain);
			doc.removeEventListener("keydown", loopFocus, true);
		};
	}, [
		disableAutoFocus,
		disableEnforceFocus,
		disableRestoreFocus,
		isEnabled,
		open,
		getTabbable
	]);
	const onFocus = (event) => {
		if (nodeToRestore.current === null) nodeToRestore.current = event.relatedTarget;
		activated.current = true;
		reactFocusEventTarget.current = event.target;
		const childrenPropsHandler = children.props.onFocus;
		if (childrenPropsHandler) childrenPropsHandler(event);
	};
	const handleFocusSentinel = (event) => {
		if (nodeToRestore.current === null) nodeToRestore.current = event.relatedTarget;
		activated.current = true;
	};
	return /*#__PURE__*/ jsxs(React$1.Fragment, { children: [
		/*#__PURE__*/ jsx("div", {
			tabIndex: open ? 0 : -1,
			onFocus: handleFocusSentinel,
			ref: sentinelStart,
			"data-testid": "sentinelStart"
		}),
		/*#__PURE__*/ React$1.cloneElement(children, {
			ref: handleRef,
			onFocus
		}),
		/*#__PURE__*/ jsx("div", {
			tabIndex: open ? 0 : -1,
			onFocus: handleFocusSentinel,
			ref: sentinelEnd,
			"data-testid": "sentinelEnd"
		})
	] });
}
process.env.NODE_ENV !== "production" && (FocusTrap.propTypes = {
	/**
	* A single child content element.
	*/
	children: elementAcceptingRef,
	/**
	* If `true`, the focus trap will not automatically shift focus to itself when it opens, and
	* replace it to the last focused element when it closes.
	* This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
	*
	* Generally this should never be set to `true` as it makes the focus trap less
	* accessible to assistive technologies, like screen readers.
	* @default false
	*/
	disableAutoFocus: PropTypes.bool,
	/**
	* If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
	*
	* Generally this should never be set to `true` as it makes the focus trap less
	* accessible to assistive technologies, like screen readers.
	* @default false
	*/
	disableEnforceFocus: PropTypes.bool,
	/**
	* If `true`, the focus trap will not restore focus to previously focused element once
	* focus trap is hidden or unmounted.
	* @default false
	*/
	disableRestoreFocus: PropTypes.bool,
	/**
	* Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
	* For instance, you can provide the "tabbable" npm dependency.
	* @param {HTMLElement} root
	*/
	getTabbable: PropTypes.func,
	/**
	* This prop extends the `open` prop.
	* It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
	* This prop should be memoized.
	* It can be used to support multiple focus trap mounted at the same time.
	* @default function defaultIsEnabled(): boolean {
	*   return true;
	* }
	*/
	isEnabled: PropTypes.func,
	/**
	* If `true`, focus is locked.
	*/
	open: PropTypes.bool.isRequired
});
if (process.env.NODE_ENV !== "production") FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
//#endregion
//#region node_modules/@mui/material/Portal/Portal.mjs
function getContainer$1(container) {
	return typeof container === "function" ? container() : container;
}
/**
* Portals provide a first-class way to render children into a DOM node
* that exists outside the DOM hierarchy of the parent component.
*
* Demos:
*
* - [Portal](https://mui.com/material-ui/react-portal/)
*
* API:
*
* - [Portal API](https://mui.com/material-ui/api/portal/)
*/
var Portal = /*#__PURE__*/ React$1.forwardRef(function Portal(props, forwardedRef) {
	const { children, container, disablePortal = false } = props;
	const [mountNode, setMountNode] = React$1.useState(null);
	const handleRef = useForkRef(/*#__PURE__*/ React$1.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
	useEnhancedEffect(() => {
		if (!disablePortal) setMountNode(getContainer$1(container) || document.body);
	}, [container, disablePortal]);
	useEnhancedEffect(() => {
		if (mountNode && !disablePortal) {
			setRef(forwardedRef, mountNode);
			return () => {
				setRef(forwardedRef, null);
			};
		}
	}, [
		forwardedRef,
		mountNode,
		disablePortal
	]);
	if (disablePortal) {
		if (/*#__PURE__*/ React$1.isValidElement(children)) {
			const newProps = { ref: handleRef };
			return /*#__PURE__*/ React$1.cloneElement(children, newProps);
		}
		return children;
	}
	return mountNode ? /*#__PURE__*/ ReactDOM.createPortal(children, mountNode) : mountNode;
});
process.env.NODE_ENV !== "production" && (Portal.propTypes = {
	/**
	* The children to render into the `container`.
	*/
	children: PropTypes.node,
	/**
	* An HTML element or function that returns one.
	* The `container` will have the portal children appended to it.
	*
	* You can also provide a callback, which is called in a React layout effect.
	* This lets you set the container from a ref, and also makes server-side rendering possible.
	*
	* By default, it uses the body of the top-level document object,
	* so it's simply `document.body` most of the time.
	*/
	container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
	/**
	* The `children` will be under the DOM hierarchy of the parent component.
	* @default false
	*/
	disablePortal: PropTypes.bool
});
if (process.env.NODE_ENV !== "production") Portal["propTypes"] = exactProp(Portal.propTypes);
//#endregion
//#region node_modules/@mui/material/internal/Transition.mjs
function resolveTimeouts(timeout) {
	if (timeout == null) return {
		appear: void 0,
		enter: void 0,
		exit: void 0
	};
	if (typeof timeout === "number") return {
		appear: timeout,
		enter: timeout,
		exit: timeout
	};
	const enter = timeout.enter;
	const exit = timeout.exit;
	return {
		appear: timeout.appear !== void 0 ? timeout.appear : enter,
		enter,
		exit
	};
}
/**
* Resolves the authored completion timeout for the current transition phase.
* Auto durations are read by the caller at scheduling time so Grow/Collapse
* can pass the latest measured value without storing it in React state.
*/
function getCompletionTimeout(params) {
	if (params.autoTimeout != null) return params.autoTimeout;
	const resolved = resolveTimeouts(params.timeout);
	if (params.currentStatus === "entering") return params.isAppearing ? resolved.appear ?? resolved.enter ?? null : resolved.enter ?? null;
	return resolved.exit ?? null;
}
function Transition(props) {
	const { in: inProp = false, appear = false, enter = true, exit = true, mountOnEnter = false, unmountOnExit = false, timeout, addEndListener, reduceMotion = false, getAutoTimeout, nodeRef, onEnter, onEntering, onEntered, onExit, onExiting, onExited, children, ...childProps } = props;
	const parentGroup = React$1.useContext(TransitionGroupContext);
	const shouldEnterOnMount = parentGroup && !parentGroup.isMounting ? enter : appear;
	const [status, setStatus] = React$1.useState(() => {
		if (inProp) return shouldEnterOnMount ? "exited" : "entered";
		if (mountOnEnter || unmountOnExit) return "unmounted";
		return "exited";
	});
	const statusRef = React$1.useRef(status);
	statusRef.current = status;
	if (inProp && status === "unmounted") {
		statusRef.current = "exited";
		setStatus("exited");
	}
	const shouldAppearOnMountRef = React$1.useRef(inProp && shouldEnterOnMount);
	const mountedRef = React$1.useRef(false);
	const nextCallbackRef = React$1.useRef(null);
	const lastFiredStatusRef = React$1.useRef(status);
	const isAppearingRef = React$1.useRef(false);
	const transitionReduceMotionRef = React$1.useRef(reduceMotion);
	const propsRef = useValueAsRef({
		timeout,
		addEndListener,
		reduceMotion,
		getAutoTimeout,
		onEnter,
		onEntering,
		onEntered,
		onExit,
		onExiting,
		onExited,
		enter,
		exit,
		mountOnEnter,
		unmountOnExit,
		nodeRef,
		parentGroup
	});
	const cancelPendingCallback = React$1.useCallback(() => {
		if (nextCallbackRef.current !== null) {
			nextCallbackRef.current.cancel();
			nextCallbackRef.current = null;
		}
	}, []);
	const makeCallback = React$1.useCallback((handler) => {
		let active = true;
		const wrapped = () => {
			if (active) {
				active = false;
				nextCallbackRef.current = null;
				handler();
			}
		};
		wrapped.cancel = () => {
			active = false;
		};
		nextCallbackRef.current = wrapped;
		return wrapped;
	}, []);
	const scheduleTransitionEnd = React$1.useCallback((nextStatus, currentStatus) => {
		let timeoutId;
		const clearTimer = () => {
			if (timeoutId !== void 0) {
				clearTimeout(timeoutId);
				timeoutId = void 0;
			}
		};
		const done = makeCallback(() => {
			clearTimer();
			statusRef.current = nextStatus;
			setStatus(nextStatus);
		});
		const cancelDone = done.cancel;
		done.cancel = () => {
			clearTimer();
			cancelDone();
		};
		const node = propsRef.current.nodeRef.current;
		const listener = propsRef.current.addEndListener;
		const hasAutoTimeout = propsRef.current.getAutoTimeout !== void 0;
		const autoTimeout = propsRef.current.getAutoTimeout?.();
		const authoredTimeout = getCompletionTimeout({
			currentStatus,
			isAppearing: isAppearingRef.current,
			timeout: propsRef.current.timeout,
			autoTimeout
		});
		const transitionReduceMotion = transitionReduceMotionRef.current;
		const fallbackTimeout = authoredTimeout ?? (transitionReduceMotion && hasAutoTimeout ? 0 : null);
		const scheduleTimer = (value) => {
			timeoutId = setTimeout(done, value);
		};
		if (!node) {
			if (process.env.NODE_ENV !== "production") console.warn([
				"MUI: The transition child does not expose a DOM element.",
				"Make sure the child accepts a ref and forwards it to the underlying DOM element.",
				"The transition animation cannot be observed without a DOM element and will be skipped."
			].join("\n"));
			scheduleTimer(0);
			return;
		}
		if (listener) {
			if (fallbackTimeout != null) scheduleTimer(transitionReduceMotion ? 0 : fallbackTimeout);
			if (listener.length >= 2) listener(node, done);
			else listener(done);
			return;
		}
		scheduleTimer(transitionReduceMotion ? 0 : authoredTimeout ?? 0);
	}, [makeCallback, propsRef]);
	const performEnter = React$1.useCallback((mounting) => {
		const current = propsRef.current;
		const isAppearing = current.parentGroup ? current.parentGroup.isMounting : mounting;
		isAppearingRef.current = isAppearing;
		if (!mounting && !current.enter) {
			statusRef.current = "entered";
			setStatus("entered");
			return;
		}
		transitionReduceMotionRef.current = current.reduceMotion;
		current.onEnter?.(isAppearing);
		statusRef.current = "entering";
		setStatus("entering");
	}, [propsRef]);
	const performExit = React$1.useCallback(() => {
		const current = propsRef.current;
		if (!current.exit) {
			statusRef.current = "exited";
			setStatus("exited");
			return;
		}
		transitionReduceMotionRef.current = current.reduceMotion;
		current.onExit?.();
		statusRef.current = "exiting";
		setStatus("exiting");
	}, [propsRef]);
	const updateStatus = React$1.useCallback((mounting, nextStatus) => {
		cancelPendingCallback();
		if (nextStatus === "entering") {
			const current = propsRef.current;
			if (current.mountOnEnter || current.unmountOnExit) {
				const node = current.nodeRef.current;
				if (node) reflow(node);
			}
			performEnter(mounting);
		} else performExit();
	}, [
		cancelPendingCallback,
		performEnter,
		performExit,
		propsRef
	]);
	useEnhancedEffect(() => {
		mountedRef.current = true;
		if (shouldAppearOnMountRef.current) {
			shouldAppearOnMountRef.current = false;
			updateStatus(true, "entering");
		}
		return () => {
			mountedRef.current = false;
			cancelPendingCallback();
		};
	}, [cancelPendingCallback, updateStatus]);
	useEnhancedEffect(() => {
		if (!mountedRef.current) return;
		const current = statusRef.current;
		if (inProp) {
			if (current !== "entering" && current !== "entered") updateStatus(false, "entering");
		} else if (current === "entering" || current === "entered") updateStatus(false, "exiting");
		else if (current === "exited" && unmountOnExit) {
			statusRef.current = "unmounted";
			setStatus("unmounted");
		}
	}, [
		inProp,
		status,
		unmountOnExit,
		updateStatus
	]);
	useEnhancedEffect(() => {
		if (status === "unmounted" || lastFiredStatusRef.current === "unmounted") {
			lastFiredStatusRef.current = status;
			return;
		}
		const statusChanged = lastFiredStatusRef.current !== status;
		if (statusChanged) lastFiredStatusRef.current = status;
		const current = propsRef.current;
		if (status === "entering") {
			if (statusChanged) current.onEntering?.(isAppearingRef.current);
			if (nextCallbackRef.current === null && statusRef.current === status) scheduleTransitionEnd("entered", "entering");
		} else if (status === "exiting") {
			if (statusChanged) current.onExiting?.();
			if (nextCallbackRef.current === null && statusRef.current === status) scheduleTransitionEnd("exited", "exiting");
		} else if (status === "entered" && statusChanged) current.onEntered?.(isAppearingRef.current);
		else if (status === "exited" && statusChanged) current.onExited?.();
	}, [
		propsRef,
		scheduleTransitionEnd,
		status
	]);
	if (status === "unmounted") return null;
	return /*#__PURE__*/ jsx(TransitionGroupContext.Provider, {
		value: null,
		children: children(status, childProps)
	});
}
process.env.NODE_ENV !== "production" && (Transition.propTypes = {
	/**
	* @ignore
	*/
	addEndListener: PropTypes.func,
	/**
	* @ignore
	*/
	appear: PropTypes.bool,
	/**
	* @ignore
	*/
	children: PropTypes.func.isRequired,
	/**
	* @ignore
	*/
	enter: PropTypes.bool,
	/**
	* @ignore
	*/
	exit: PropTypes.bool,
	/**
	* @ignore
	*/
	getAutoTimeout: PropTypes.func,
	/**
	* @ignore
	*/
	in: PropTypes.bool,
	/**
	* @ignore
	*/
	mountOnEnter: PropTypes.bool,
	/**
	* @ignore
	*/
	nodeRef: PropTypes.shape({ current: (props, propName) => {
		if (props[propName] == null) return null;
		if (typeof props[propName] !== "object" || props[propName].nodeType !== 1) return /* @__PURE__ */ new Error(`Expected prop '${propName}' to be of type Element`);
		return null;
	} }).isRequired,
	/**
	* @ignore
	*/
	onEnter: PropTypes.func,
	/**
	* @ignore
	*/
	onEntered: PropTypes.func,
	/**
	* @ignore
	*/
	onEntering: PropTypes.func,
	/**
	* @ignore
	*/
	onExit: PropTypes.func,
	/**
	* @ignore
	*/
	onExited: PropTypes.func,
	/**
	* @ignore
	*/
	onExiting: PropTypes.func,
	/**
	* @ignore
	*/
	reduceMotion: PropTypes.bool,
	/**
	* @ignore
	*/
	timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
		appear: PropTypes.number,
		enter: PropTypes.number,
		exit: PropTypes.number
	})]),
	/**
	* @ignore
	*/
	unmountOnExit: PropTypes.bool
});
//#endregion
//#region node_modules/@mui/material/Fade/Fade.mjs
var styles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
};
var hiddenStyles = {
	opacity: 0,
	visibility: "hidden"
};
/**
* The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
*/
var Fade = /*#__PURE__*/ React$1.forwardRef(function Fade(props, ref) {
	const theme = useTheme$1();
	const defaultTimeout = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen
	};
	const { addEndListener, appear = true, children, disablePrefersReducedMotion = false, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, style, timeout = defaultTimeout, ...other } = props;
	const reducedMotion = useReducedMotion(theme.motion.reducedMotion, disablePrefersReducedMotion);
	const nodeRef = React$1.useRef(null);
	const handleRef = useForkRef_default(nodeRef, getReactElementRef(children), ref);
	const handleEntering = normalizedTransitionCallback(nodeRef, onEntering);
	const handleEnter = normalizedTransitionCallback(nodeRef, (node, isAppearing) => {
		if (!reducedMotion.shouldReduceMotion) reflow(node);
		const transitionProps = getTransitionProps({
			style,
			timeout,
			easing
		}, { mode: "enter" });
		const transitionTiming = reducedMotion.getTransitionTiming({
			duration: transitionProps.duration,
			delay: transitionProps.delay
		});
		node.style.transition = theme.transitions.create("opacity", {
			duration: transitionTiming.duration,
			easing: transitionProps.easing,
			delay: transitionTiming.delay
		});
		if (onEnter) onEnter(node, isAppearing);
	});
	const handleEntered = normalizedTransitionCallback(nodeRef, onEntered);
	const handleExiting = normalizedTransitionCallback(nodeRef, onExiting);
	const handleExit = normalizedTransitionCallback(nodeRef, (node) => {
		const transitionProps = getTransitionProps({
			style,
			timeout,
			easing
		}, { mode: "exit" });
		const transitionTiming = reducedMotion.getTransitionTiming({
			duration: transitionProps.duration,
			delay: transitionProps.delay
		});
		node.style.transition = theme.transitions.create("opacity", {
			duration: transitionTiming.duration,
			easing: transitionProps.easing,
			delay: transitionTiming.delay
		});
		if (onExit) onExit(node);
	});
	const handleExited = normalizedTransitionCallback(nodeRef, (node) => {
		node.style.transition = "";
		if (onExited) onExited(node);
	});
	return /*#__PURE__*/ jsx(Transition, {
		appear,
		in: inProp,
		nodeRef,
		onEnter: handleEnter,
		onEntered: handleEntered,
		onEntering: handleEntering,
		onExit: handleExit,
		onExited: handleExited,
		onExiting: handleExiting,
		addEndListener: addEndListener ? (next) => {
			addEndListener(nodeRef.current, next);
		} : void 0,
		reduceMotion: reducedMotion.shouldReduceMotion,
		timeout,
		...other,
		children: (state, { ownerState, ...restChildProps }) => {
			const childStyle = getTransitionChildStyle(state, inProp, styles, hiddenStyles, style, children.props.style);
			return /*#__PURE__*/ React$1.cloneElement(children, {
				style: childStyle,
				ref: handleRef,
				...restChildProps
			});
		}
	});
});
process.env.NODE_ENV !== "production" && (Fade.propTypes = {
	/**
	* Add a custom transition end trigger.
	* Use it when you need custom logic to decide when the transition has ended.
	* Note: Timeouts are still used as a fallback if provided.
	*
	* @param {HTMLElement} node The transitioning DOM node.
	* @param {Function} done Call this when the transition has finished.
	*/
	addEndListener: PropTypes.func,
	/**
	* Perform the enter transition when it first mounts if `in` is also `true`.
	* Set this to `false` to disable this behavior.
	* @default true
	*/
	appear: PropTypes.bool,
	/**
	* A single child content element.
	*/
	children: elementAcceptingRef.isRequired,
	/**
	* If `true`, the transition ignores `theme.motion.reducedMotion` and keeps its normal timing.
	* @default false
	*/
	disablePrefersReducedMotion: PropTypes.bool,
	/**
	* The transition timing function.
	* You may specify a single easing or a object containing enter and exit values.
	*/
	easing: PropTypes.oneOfType([PropTypes.shape({
		enter: PropTypes.string,
		exit: PropTypes.string
	}), PropTypes.string]),
	/**
	* If `true`, the component will transition in.
	*/
	in: PropTypes.bool,
	/**
	* @ignore
	*/
	onEnter: PropTypes.func,
	/**
	* @ignore
	*/
	onEntered: PropTypes.func,
	/**
	* @ignore
	*/
	onEntering: PropTypes.func,
	/**
	* @ignore
	*/
	onExit: PropTypes.func,
	/**
	* @ignore
	*/
	onExited: PropTypes.func,
	/**
	* @ignore
	*/
	onExiting: PropTypes.func,
	/**
	* @ignore
	*/
	style: PropTypes.object,
	/**
	* The duration for the transition, in milliseconds.
	* You may specify a single timeout for all transitions, or individually with an object.
	* @default {
	*   enter: theme.transitions.duration.enteringScreen,
	*   exit: theme.transitions.duration.leavingScreen,
	* }
	*/
	timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
		appear: PropTypes.number,
		enter: PropTypes.number,
		exit: PropTypes.number
	})])
});
//#endregion
//#region node_modules/@mui/material/Backdrop/backdropClasses.mjs
function getBackdropUtilityClass(slot) {
	return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
//#endregion
//#region node_modules/@mui/material/Backdrop/Backdrop.mjs
var useUtilityClasses$10 = (ownerState) => {
	const { classes, invisible } = ownerState;
	return composeClasses({ root: ["root", invisible && "invisible"] }, getBackdropUtilityClass, classes);
};
var BackdropRoot = styled("div", {
	name: "MuiBackdrop",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, ownerState.invisible && styles.invisible];
	}
})({
	position: "fixed",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: 0,
	bottom: 0,
	top: 0,
	left: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	WebkitTapHighlightColor: "transparent",
	variants: [{
		props: { invisible: true },
		style: { backgroundColor: "transparent" }
	}]
});
var Backdrop = /*#__PURE__*/ React$1.forwardRef(function Backdrop(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiBackdrop"
	});
	const { children, className, component = "div", invisible = false, open, slotProps = {}, slots = {}, transitionDuration, ...other } = props;
	const ownerState = {
		...props,
		component,
		invisible
	};
	const classes = useUtilityClasses$10(ownerState);
	const externalForwardedProps = {
		component,
		slots,
		slotProps
	};
	const [RootSlot, rootProps] = useSlot("root", {
		elementType: BackdropRoot,
		externalForwardedProps,
		className: clsx$1(classes.root, className),
		ownerState
	});
	const [TransitionSlot, transitionProps] = useSlot("transition", {
		elementType: Fade,
		externalForwardedProps,
		ownerState
	});
	return /*#__PURE__*/ jsx(TransitionSlot, {
		in: open,
		timeout: transitionDuration,
		...other,
		...transitionProps,
		children: /*#__PURE__*/ jsx(RootSlot, {
			...rootProps,
			ref,
			children
		})
	});
});
process.env.NODE_ENV !== "production" && (Backdrop.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* If `true`, the backdrop is invisible.
	* It can be used when rendering a popover or a custom select component.
	* @default false
	*/
	invisible: PropTypes.bool,
	/**
	* If `true`, the component is shown.
	*/
	open: PropTypes.bool.isRequired,
	/**
	* The props used for each slot inside.
	* @default {}
	*/
	slotProps: PropTypes.shape({
		root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	}),
	/**
	* The components used for each slot inside.
	* @default {}
	*/
	slots: PropTypes.shape({
		root: PropTypes.elementType,
		transition: PropTypes.elementType
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* The duration for the transition, in milliseconds.
	* You may specify a single timeout for all transitions, or individually with an object.
	*/
	transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
		appear: PropTypes.number,
		enter: PropTypes.number,
		exit: PropTypes.number
	})])
});
//#endregion
//#region node_modules/@mui/material/Modal/useModal.mjs
function getContainer(container) {
	return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
	return children ? children.props.hasOwnProperty("in") : false;
}
var noop = () => {};
var manager = new ModalManager();
function useModal(parameters) {
	const { container, disableScrollLock = false, closeAfterTransition = false, onTransitionEnter, onTransitionExited, children, onClose, open, rootRef } = parameters;
	const modal = React$1.useRef({});
	const mountNodeRef = React$1.useRef(null);
	const lastMountNodeRef = React$1.useRef(null);
	const modalRef = React$1.useRef(null);
	const handleRef = useForkRef(modalRef, rootRef);
	const [exited, setExited] = React$1.useState(!open);
	const hasTransition = getHasTransition(children);
	let ariaHiddenProp = true;
	if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) ariaHiddenProp = false;
	const getDoc = () => ownerDocument(mountNodeRef.current);
	const getModal = () => {
		modal.current.modalRef = modalRef.current;
		modal.current.mount = mountNodeRef.current;
		return modal.current;
	};
	const handleMounted = () => {
		manager.mount(getModal(), { disableScrollLock });
		if (modalRef.current) modalRef.current.scrollTop = 0;
	};
	const handleOpen = useEventCallback(() => {
		const resolvedContainer = getContainer(container) || getDoc().body;
		manager.add(getModal(), resolvedContainer);
		if (modalRef.current) handleMounted();
	});
	const isTopModal = () => manager.isTopModal(getModal());
	const handlePortalRef = useEventCallback((node) => {
		mountNodeRef.current = node;
		if (!node) return;
		lastMountNodeRef.current = node;
		if (open && isTopModal()) handleMounted();
		else if (modalRef.current) ariaHidden(modalRef.current, ariaHiddenProp);
	});
	const handleClose = React$1.useCallback(() => {
		manager.remove(getModal(), ariaHiddenProp);
	}, [ariaHiddenProp]);
	React$1.useEffect(() => {
		return () => {
			handleClose();
		};
	}, [handleClose]);
	React$1.useEffect(() => {
		if (open) handleOpen();
		else if (!hasTransition || !closeAfterTransition) handleClose();
	}, [
		open,
		handleClose,
		hasTransition,
		closeAfterTransition,
		handleOpen
	]);
	const createHandleKeyDown = (otherHandlers) => (event) => {
		otherHandlers.onKeyDown?.(event);
		if (event.key !== "Escape" || event.which === 229 || !isTopModal()) return;
		event.stopPropagation();
		if (onClose) onClose(event, "escapeKeyDown");
	};
	const createHandleBackdropClick = (otherHandlers) => (event) => {
		otherHandlers.onClick?.(event);
		if (event.target !== event.currentTarget) return;
		if (onClose) onClose(event, "backdropClick");
	};
	const getRootProps = (otherHandlers = {}) => {
		const propsEventHandlers = extractEventHandlers(parameters);
		delete propsEventHandlers.onTransitionEnter;
		delete propsEventHandlers.onTransitionExited;
		const externalEventHandlers = {
			...propsEventHandlers,
			...otherHandlers
		};
		return {
			role: "presentation",
			...externalEventHandlers,
			onKeyDown: createHandleKeyDown(externalEventHandlers),
			ref: handleRef
		};
	};
	const getBackdropProps = (otherHandlers = {}) => {
		const externalEventHandlers = otherHandlers;
		return {
			"aria-hidden": true,
			...externalEventHandlers,
			onClick: createHandleBackdropClick(externalEventHandlers),
			open
		};
	};
	const getTransitionProps = () => {
		const handleEnter = () => {
			setExited(false);
			if (onTransitionEnter) onTransitionEnter();
		};
		const handleExited = () => {
			setExited(true);
			if (onTransitionExited) onTransitionExited();
			if (closeAfterTransition) handleClose();
		};
		return {
			onEnter: createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
			onExited: createChainedFunction(handleExited, children?.props.onExited ?? noop)
		};
	};
	return {
		getRootProps,
		getBackdropProps,
		getTransitionProps,
		rootRef: handleRef,
		portalRef: handlePortalRef,
		portalContainer: !open && hasTransition && !exited ? lastMountNodeRef.current ?? container : container,
		isTopModal,
		exited,
		hasTransition
	};
}
//#endregion
//#region node_modules/@mui/material/Modal/modalClasses.mjs
function getModalUtilityClass(slot) {
	return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", [
	"root",
	"hidden",
	"backdrop"
]);
//#endregion
//#region node_modules/@mui/material/Modal/Modal.mjs
var useUtilityClasses$9 = (ownerState) => {
	const { open, exited, classes } = ownerState;
	return composeClasses({
		root: ["root", !open && exited && "hidden"],
		backdrop: ["backdrop"]
	}, getModalUtilityClass, classes);
};
var ModalRoot = styled("div", {
	name: "MuiModal",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
	}
})(memoTheme(({ theme }) => ({
	position: "fixed",
	zIndex: (theme.vars || theme).zIndex.modal,
	right: 0,
	bottom: 0,
	top: 0,
	left: 0,
	variants: [{
		props: ({ ownerState }) => !ownerState.open && ownerState.exited,
		style: { visibility: "hidden" }
	}]
})));
var ModalBackdrop = styled(Backdrop, {
	name: "MuiModal",
	slot: "Backdrop"
})({ zIndex: -1 });
/**
* Modal is a lower-level construct that is leveraged by the following components:
*
* - [Dialog](/material-ui/api/dialog/)
* - [Drawer](/material-ui/api/drawer/)
* - [Menu](/material-ui/api/menu/)
* - [Popover](/material-ui/api/popover/)
*
* If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
* rather than directly using Modal.
*
* This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
*/
var Modal = /*#__PURE__*/ React$1.forwardRef(function Modal(inProps, ref) {
	const props = useDefaultProps$1({
		name: "MuiModal",
		props: inProps
	});
	const { classes: classesProp, className, closeAfterTransition = false, children, container, component, disableAutoFocus = false, disableEnforceFocus = false, disablePortal = false, disableRestoreFocus = false, disableScrollLock = false, hideBackdrop = false, keepMounted = false, onClose, onTransitionEnter, onTransitionExited, open, slotProps = {}, slots = {}, theme, ...other } = props;
	const propsWithDefaults = {
		...props,
		closeAfterTransition,
		disableAutoFocus,
		disableEnforceFocus,
		disablePortal,
		disableRestoreFocus,
		disableScrollLock,
		hideBackdrop,
		keepMounted
	};
	const { getRootProps, getBackdropProps, getTransitionProps, portalRef, portalContainer, isTopModal, exited, hasTransition } = useModal({
		...propsWithDefaults,
		rootRef: ref
	});
	const ownerState = {
		...propsWithDefaults,
		exited
	};
	const classes = useUtilityClasses$9(ownerState);
	const childProps = {};
	if (children.props.tabIndex === void 0) childProps.tabIndex = "-1";
	if (hasTransition) {
		const { onEnter, onExited } = getTransitionProps();
		childProps.onEnter = onEnter;
		childProps.onExited = onExited;
	}
	const externalForwardedProps = {
		slots,
		slotProps
	};
	const [RootSlot, rootProps] = useSlot("root", {
		ref,
		elementType: ModalRoot,
		externalForwardedProps: {
			...externalForwardedProps,
			...other,
			component
		},
		getSlotProps: getRootProps,
		ownerState,
		className: clsx$1(className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
	});
	const [BackdropSlot, backdropProps] = useSlot("backdrop", {
		elementType: ModalBackdrop,
		externalForwardedProps,
		shouldForwardComponentProp: true,
		getSlotProps: (otherHandlers) => {
			return getBackdropProps({
				...otherHandlers,
				onClick: (event) => {
					if (otherHandlers?.onClick) otherHandlers.onClick(event);
				}
			});
		},
		className: classes?.backdrop,
		ownerState
	});
	if (!keepMounted && !open && (!hasTransition || exited)) return null;
	return /*#__PURE__*/ jsx(Portal, {
		ref: portalRef,
		container: portalContainer,
		disablePortal,
		children: /*#__PURE__*/ jsxs(RootSlot, {
			...rootProps,
			children: [!hideBackdrop ? /*#__PURE__*/ jsx(BackdropSlot, { ...backdropProps }) : null, /*#__PURE__*/ jsx(FocusTrap, {
				disableEnforceFocus,
				disableAutoFocus,
				disableRestoreFocus,
				isEnabled: isTopModal,
				open,
				children: /*#__PURE__*/ React$1.cloneElement(children, childProps)
			})]
		})
	});
});
process.env.NODE_ENV !== "production" && (Modal.propTypes = {
	/**
	* A single child content element.
	*/
	children: elementAcceptingRef.isRequired,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* When set to true the Modal waits until a nested Transition is completed before closing.
	* @default false
	*/
	closeAfterTransition: PropTypes.bool,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* An HTML element or function that returns one.
	* The `container` will have the portal children appended to it.
	*
	* You can also provide a callback, which is called in a React layout effect.
	* This lets you set the container from a ref, and also makes server-side rendering possible.
	*
	* By default, it uses the body of the top-level document object,
	* so it's simply `document.body` most of the time.
	*/
	container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
	/**
	* If `true`, the modal will not automatically shift focus to itself when it opens, and
	* replace it to the last focused element when it closes.
	* This also works correctly with any modal children that have the `disableAutoFocus` prop.
	*
	* Generally this should never be set to `true` as it makes the modal less
	* accessible to assistive technologies, like screen readers.
	* @default false
	*/
	disableAutoFocus: PropTypes.bool,
	/**
	* If `true`, the modal will not prevent focus from leaving the modal while open.
	*
	* Generally this should never be set to `true` as it makes the modal less
	* accessible to assistive technologies, like screen readers.
	* @default false
	*/
	disableEnforceFocus: PropTypes.bool,
	/**
	* The `children` will be under the DOM hierarchy of the parent component.
	* @default false
	*/
	disablePortal: PropTypes.bool,
	/**
	* If `true`, the modal will not restore focus to previously focused element once
	* modal is hidden or unmounted.
	* @default false
	*/
	disableRestoreFocus: PropTypes.bool,
	/**
	* Disable the scroll lock behavior.
	* @default false
	*/
	disableScrollLock: PropTypes.bool,
	/**
	* If `true`, the backdrop is not rendered.
	* @default false
	*/
	hideBackdrop: PropTypes.bool,
	/**
	* Always keep the children in the DOM.
	* This prop can be useful in SEO situation or
	* when you want to maximize the responsiveness of the Modal.
	* @default false
	*/
	keepMounted: PropTypes.bool,
	/**
	* Callback fired when the component requests to be closed.
	* The `reason` parameter can optionally be used to control the response to `onClose`.
	*
	* @param {object} event The event source of the callback.
	* @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
	*/
	onClose: PropTypes.func,
	/**
	* A function called when a transition enters.
	*/
	onTransitionEnter: PropTypes.func,
	/**
	* A function called when a transition has exited.
	*/
	onTransitionExited: PropTypes.func,
	/**
	* If `true`, the component is shown.
	*/
	open: PropTypes.bool.isRequired,
	/**
	* The props used for each slot inside the Modal.
	* @default {}
	*/
	slotProps: PropTypes.shape({
		backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	}),
	/**
	* The components used for each slot inside the Modal.
	* Either a string to use a HTML element or a component.
	* @default {}
	*/
	slots: PropTypes.shape({
		backdrop: PropTypes.elementType,
		root: PropTypes.elementType
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/Dialog/dialogClasses.mjs
function getDialogUtilityClass(slot) {
	return generateUtilityClass("MuiDialog", slot);
}
generateUtilityClasses("MuiDialog", [
	"root",
	"backdrop",
	"scrollPaper",
	"scrollBody",
	"container",
	"paper",
	"paperWidthFalse",
	"paperWidthXs",
	"paperWidthSm",
	"paperWidthMd",
	"paperWidthLg",
	"paperWidthXl",
	"paperFullWidth",
	"paperFullScreen"
]);
//#endregion
//#region node_modules/@mui/material/Dialog/DialogContext.mjs
var DialogContext = /*#__PURE__*/ React$1.createContext({});
if (process.env.NODE_ENV !== "production") DialogContext.displayName = "DialogContext";
//#endregion
//#region node_modules/@mui/material/Dialog/Dialog.mjs
var DialogBackdrop = styled(Backdrop, {
	name: "MuiDialog",
	slot: "Backdrop"
})({ zIndex: -1 });
var useUtilityClasses$8 = (ownerState) => {
	const { classes, scroll, maxWidth, fullWidth, fullScreen } = ownerState;
	const slots = {
		root: ["root"],
		backdrop: ["backdrop"],
		container: ["container", `scroll${capitalize_default(scroll)}`],
		paper: [
			"paper",
			`paperWidth${capitalize_default(String(maxWidth))}`,
			fullWidth && "paperFullWidth",
			fullScreen && "paperFullScreen"
		]
	};
	return composeClasses(slots, getDialogUtilityClass, classes);
};
var DialogRoot = styled(Modal, {
	name: "MuiDialog",
	slot: "Root"
})({ "@media print": { position: "absolute !important" } });
var DialogContainer = styled("div", {
	name: "MuiDialog",
	slot: "Container",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.container, styles[`scroll${capitalize_default(ownerState.scroll)}`]];
	}
})({
	height: "100%",
	"@media print": { height: "auto" },
	outline: 0,
	variants: [{
		props: { scroll: "paper" },
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
	}, {
		props: { scroll: "body" },
		style: {
			overflowY: "auto",
			overflowX: "hidden",
			textAlign: "center",
			"&::after": {
				content: "\"\"",
				display: "inline-block",
				verticalAlign: "middle",
				height: "100%",
				width: "0"
			}
		}
	}]
});
var DialogPaper = styled(Paper, {
	name: "MuiDialog",
	slot: "Paper",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.paper,
			styles[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`],
			ownerState.fullWidth && styles.paperFullWidth,
			ownerState.fullScreen && styles.paperFullScreen
		];
	}
})(memoTheme(({ theme }) => ({
	margin: 32,
	position: "relative",
	overflowY: "auto",
	outline: 0,
	"@media print": {
		overflowY: "visible",
		boxShadow: "none"
	},
	variants: [
		{
			props: { scroll: "paper" },
			style: {
				display: "flex",
				flexDirection: "column",
				maxHeight: "calc(100% - 64px)"
			}
		},
		{
			props: { scroll: "body" },
			style: {
				display: "inline-block",
				verticalAlign: "middle",
				textAlign: "initial"
			}
		},
		{
			props: ({ ownerState }) => !ownerState.maxWidth,
			style: { maxWidth: "calc(100% - 64px)" }
		},
		{
			props: { maxWidth: "xs" },
			style: { maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)` }
		},
		{
			props: {
				maxWidth: "xs",
				scroll: "body"
			},
			style: { [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 64)]: { maxWidth: "calc(100% - 64px)" } }
		},
		...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
			props: { maxWidth },
			style: { maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}` }
		})),
		...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
			props: {
				maxWidth,
				scroll: "body"
			},
			style: { [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 64)]: { maxWidth: "calc(100% - 64px)" } }
		})),
		{
			props: ({ ownerState }) => ownerState.fullWidth,
			style: { width: "calc(100% - 64px)" }
		},
		{
			props: ({ ownerState }) => ownerState.fullScreen,
			style: {
				margin: 0,
				width: "100%",
				maxWidth: "100%",
				height: "100%",
				maxHeight: "none",
				borderRadius: 0
			}
		},
		{
			props: ({ ownerState }) => ownerState.fullScreen && ownerState.scroll === "body",
			style: {
				margin: 0,
				maxWidth: "100%"
			}
		}
	]
})));
/**
* Dialogs are overlaid modal paper based components with a backdrop.
*/
var Dialog = /*#__PURE__*/ React$1.forwardRef(function Dialog(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiDialog"
	});
	const theme = useTheme$1();
	const defaultTransitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen
	};
	const { "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledbyProp, "aria-modal": ariaModal = true, children, className, fullScreen = false, fullWidth = false, maxWidth = "sm", onClick, onClose, open, PaperComponent = Paper, role = "dialog", scroll = "paper", slots = {}, slotProps = {}, transitionDuration = defaultTransitionDuration, ...other } = props;
	const ownerState = {
		...props,
		fullScreen,
		fullWidth,
		maxWidth,
		scroll
	};
	const classes = useUtilityClasses$8(ownerState);
	const backdropClick = React$1.useRef();
	const handleMouseDown = (event) => {
		backdropClick.current = event.target === event.currentTarget;
	};
	const handleBackdropClick = (event) => {
		if (onClick) onClick(event);
		if (!backdropClick.current) return;
		backdropClick.current = null;
		if (onClose) onClose(event, "backdropClick");
	};
	const ariaLabelledby = useId(ariaLabelledbyProp);
	const dialogContextValue = React$1.useMemo(() => {
		return { titleId: ariaLabelledby };
	}, [ariaLabelledby]);
	const externalForwardedProps = {
		slots,
		slotProps
	};
	const [RootSlot, rootSlotProps] = useSlot("root", {
		elementType: DialogRoot,
		shouldForwardComponentProp: true,
		externalForwardedProps,
		ownerState,
		className: clsx$1(classes.root, className),
		ref
	});
	const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
		elementType: DialogBackdrop,
		shouldForwardComponentProp: true,
		externalForwardedProps,
		ownerState,
		className: classes.backdrop
	});
	const [PaperSlot, paperSlotProps] = useSlot("paper", {
		elementType: DialogPaper,
		shouldForwardComponentProp: true,
		externalForwardedProps,
		ownerState,
		className: classes.paper,
		additionalProps: {
			elevation: 24,
			role,
			"aria-describedby": ariaDescribedby,
			"aria-labelledby": ariaLabelledby,
			"aria-modal": ariaModal,
			tabIndex: -1,
			[FOCUSABLE_ATTRIBUTE]: ""
		}
	});
	const [ContainerSlot, containerSlotProps] = useSlot("container", {
		elementType: DialogContainer,
		externalForwardedProps,
		ownerState,
		className: classes.container
	});
	const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
		elementType: Fade,
		externalForwardedProps,
		ownerState,
		additionalProps: {
			appear: true,
			in: open,
			timeout: transitionDuration,
			role: "presentation"
		}
	});
	return /*#__PURE__*/ jsx(RootSlot, {
		closeAfterTransition: true,
		slots: { backdrop: BackdropSlot },
		slotProps: { backdrop: {
			transitionDuration,
			...backdropSlotProps
		} },
		onClose,
		open,
		onClick: handleBackdropClick,
		...rootSlotProps,
		...other,
		children: /*#__PURE__*/ jsx(TransitionSlot, {
			...transitionSlotProps,
			children: /*#__PURE__*/ jsx(ContainerSlot, {
				onMouseDown: handleMouseDown,
				...containerSlotProps,
				children: /*#__PURE__*/ jsx(PaperSlot, {
					as: PaperComponent,
					...paperSlotProps,
					children: /*#__PURE__*/ jsx(DialogContext.Provider, {
						value: dialogContextValue,
						children
					})
				})
			})
		})
	});
});
process.env.NODE_ENV !== "production" && (Dialog.propTypes = {
	/**
	* The id(s) of the element(s) that describe the dialog.
	*/
	"aria-describedby": PropTypes.string,
	/**
	* The id(s) of the element(s) that label the dialog.
	*/
	"aria-labelledby": PropTypes.string,
	/**
	* Informs assistive technologies that the element is modal.
	* It's added on the element with role="dialog".
	* @default true
	*/
	"aria-modal": PropTypes.oneOfType([PropTypes.oneOf(["false", "true"]), PropTypes.bool]),
	/**
	* Dialog children, usually the included sub-components.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* If `true`, the dialog is full-screen.
	* @default false
	*/
	fullScreen: PropTypes.bool,
	/**
	* If `true`, the dialog stretches to `maxWidth`.
	*
	* Notice that the dialog width grow is limited by the default margin.
	* @default false
	*/
	fullWidth: PropTypes.bool,
	/**
	* Determine the max-width of the dialog.
	* The dialog width grows with the size of the screen.
	* Set to `false` to disable `maxWidth`.
	* @default 'sm'
	*/
	maxWidth: PropTypes.oneOfType([PropTypes.oneOf([
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		false
	]), PropTypes.string]),
	/**
	* @ignore
	*/
	onClick: PropTypes.func,
	/**
	* Callback fired when the component requests to be closed.
	*
	* @param {object} event The event source of the callback.
	* @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
	*/
	onClose: PropTypes.func,
	/**
	* If `true`, the component is shown.
	*/
	open: PropTypes.bool.isRequired,
	/**
	* The component used to render the body of the dialog.
	* @default Paper
	*/
	PaperComponent: PropTypes.elementType,
	/**
	* The ARIA role for the dialog element.
	* The main dialog role is `dialog`, but `alertdialog` can be used if the content of the dialog requires immediate attention.
	* See https://www.w3.org/TR/wai-aria-1.2/#dialog and https://www.w3.org/TR/wai-aria-1.2/#alertdialog for more details.
	* @default 'dialog'
	*/
	role: PropTypes.oneOf(["alertdialog", "dialog"]),
	/**
	* Determine the container for scrolling the dialog.
	* @default 'paper'
	*/
	scroll: PropTypes.oneOf(["body", "paper"]),
	/**
	* The props used for each slot inside.
	* @default {}
	*/
	slotProps: PropTypes.shape({
		backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		paper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	}),
	/**
	* The components used for each slot inside.
	* @default {}
	*/
	slots: PropTypes.shape({
		backdrop: PropTypes.elementType,
		container: PropTypes.elementType,
		paper: PropTypes.elementType,
		root: PropTypes.elementType,
		transition: PropTypes.elementType
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* The duration for the transition, in milliseconds.
	* You may specify a single timeout for all transitions, or individually with an object.
	* @default {
	*   enter: theme.transitions.duration.enteringScreen,
	*   exit: theme.transitions.duration.leavingScreen,
	* }
	*/
	transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
		appear: PropTypes.number,
		enter: PropTypes.number,
		exit: PropTypes.number
	})])
});
//#endregion
//#region node_modules/@mui/material/DialogActions/dialogActionsClasses.mjs
function getDialogActionsUtilityClass(slot) {
	return generateUtilityClass("MuiDialogActions", slot);
}
generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);
//#endregion
//#region node_modules/@mui/material/DialogActions/DialogActions.mjs
var useUtilityClasses$7 = (ownerState) => {
	const { classes, disableSpacing } = ownerState;
	return composeClasses({ root: ["root", !disableSpacing && "spacing"] }, getDialogActionsUtilityClass, classes);
};
var DialogActionsRoot = styled("div", {
	name: "MuiDialogActions",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, !ownerState.disableSpacing && styles.spacing];
	}
})({
	display: "flex",
	alignItems: "center",
	padding: 8,
	justifyContent: "flex-end",
	flex: "0 0 auto",
	variants: [{
		props: ({ ownerState }) => !ownerState.disableSpacing,
		style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } }
	}]
});
var DialogActions = /*#__PURE__*/ React$1.forwardRef(function DialogActions(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiDialogActions"
	});
	const { className, disableSpacing = false, ...other } = props;
	const ownerState = {
		...props,
		disableSpacing
	};
	const classes = useUtilityClasses$7(ownerState);
	return /*#__PURE__*/ jsx(DialogActionsRoot, {
		className: clsx$1(classes.root, className),
		ownerState,
		ref,
		...other
	});
});
process.env.NODE_ENV !== "production" && (DialogActions.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* If `true`, the actions do not have additional margin.
	* @default false
	*/
	disableSpacing: PropTypes.bool,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/DialogContent/dialogContentClasses.mjs
function getDialogContentUtilityClass(slot) {
	return generateUtilityClass("MuiDialogContent", slot);
}
generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
//#endregion
//#region node_modules/@mui/material/DialogTitle/dialogTitleClasses.mjs
function getDialogTitleUtilityClass(slot) {
	return generateUtilityClass("MuiDialogTitle", slot);
}
var dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
//#endregion
//#region node_modules/@mui/material/DialogContent/DialogContent.mjs
var useUtilityClasses$6 = (ownerState) => {
	const { classes, dividers } = ownerState;
	return composeClasses({ root: ["root", dividers && "dividers"] }, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled("div", {
	name: "MuiDialogContent",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, ownerState.dividers && styles.dividers];
	}
})(memoTheme(({ theme }) => ({
	flex: "1 1 auto",
	WebkitOverflowScrolling: "touch",
	overflowY: "auto",
	padding: "20px 24px",
	variants: [{
		props: ({ ownerState }) => ownerState.dividers,
		style: {
			padding: "16px 24px",
			borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
			borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
		}
	}, {
		props: ({ ownerState }) => !ownerState.dividers,
		style: { [`.${dialogTitleClasses.root} + &`]: { paddingTop: 0 } }
	}]
})));
var DialogContent = /*#__PURE__*/ React$1.forwardRef(function DialogContent(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiDialogContent"
	});
	const { className, dividers = false, ...other } = props;
	const ownerState = {
		...props,
		dividers
	};
	const classes = useUtilityClasses$6(ownerState);
	return /*#__PURE__*/ jsx(DialogContentRoot, {
		className: clsx$1(classes.root, className),
		ownerState,
		ref,
		...other
	});
});
process.env.NODE_ENV !== "production" && (DialogContent.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* Display the top and bottom dividers.
	* @default false
	*/
	dividers: PropTypes.bool,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/Typography/typographyClasses.mjs
function getTypographyUtilityClass(slot) {
	return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", [
	"root",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"subtitle1",
	"subtitle2",
	"body1",
	"body2",
	"inherit",
	"button",
	"caption",
	"overline",
	"alignLeft",
	"alignRight",
	"alignCenter",
	"alignJustify",
	"noWrap",
	"gutterBottom"
]);
//#endregion
//#region node_modules/@mui/material/Typography/Typography.mjs
var useUtilityClasses$5 = (ownerState) => {
	const { align, gutterBottom, noWrap, variant, classes } = ownerState;
	const slots = { root: [
		"root",
		variant,
		ownerState.align !== "inherit" && `align${capitalize_default(align)}`,
		gutterBottom && "gutterBottom",
		noWrap && "noWrap"
	] };
	return composeClasses(slots, getTypographyUtilityClass, classes);
};
var TypographyRoot = styled("span", {
	name: "MuiTypography",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			ownerState.variant && styles[ownerState.variant],
			ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`],
			ownerState.noWrap && styles.noWrap,
			ownerState.gutterBottom && styles.gutterBottom
		];
	}
})(memoTheme(({ theme }) => ({
	margin: 0,
	variants: [
		{
			props: { variant: "inherit" },
			style: {
				font: "inherit",
				lineHeight: "inherit",
				letterSpacing: "inherit"
			}
		},
		...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
			props: { variant },
			style: value
		})),
		...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
			props: { color },
			style: { color: (theme.vars || theme).palette[color].main }
		})),
		...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === "string").map(([color]) => ({
			props: { color: `text${capitalize_default(color)}` },
			style: { color: (theme.vars || theme).palette.text[color] }
		})),
		{
			props: ({ ownerState }) => ownerState.align !== "inherit",
			style: { textAlign: "var(--Typography-textAlign)" }
		},
		{
			props: ({ ownerState }) => ownerState.noWrap,
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			}
		},
		{
			props: ({ ownerState }) => ownerState.gutterBottom,
			style: { marginBottom: "0.35em" }
		}
	]
})));
var defaultVariantMapping = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h6",
	subtitle2: "h6",
	body1: "p",
	body2: "p",
	inherit: "p"
};
var Typography = /*#__PURE__*/ React$1.forwardRef(function Typography(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiTypography"
	});
	const { color, align = "inherit", className, component, gutterBottom = false, noWrap = false, variant = "body1", variantMapping = defaultVariantMapping, ...other } = props;
	const ownerState = {
		...props,
		align,
		color,
		className,
		component,
		gutterBottom,
		noWrap,
		variant,
		variantMapping
	};
	const Component = component || variantMapping[variant] || defaultVariantMapping[variant] || "span";
	const classes = useUtilityClasses$5(ownerState);
	return /*#__PURE__*/ jsx(TypographyRoot, {
		as: Component,
		ref,
		className: clsx$1(classes.root, className),
		...other,
		ownerState,
		style: {
			...align !== "inherit" && { "--Typography-textAlign": align },
			...other.style
		}
	});
});
process.env.NODE_ENV !== "production" && (Typography.propTypes = {
	/**
	* Set the text-align on the component.
	* @default 'inherit'
	*/
	align: PropTypes.oneOf([
		"center",
		"inherit",
		"justify",
		"left",
		"right"
	]),
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"primary",
		"secondary",
		"success",
		"error",
		"info",
		"warning",
		"textPrimary",
		"textSecondary",
		"textDisabled"
	]), PropTypes.string]),
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* If `true`, the text will have a bottom margin.
	* @default false
	*/
	gutterBottom: PropTypes.bool,
	/**
	* If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
	*
	* Note that text overflow can only happen with block or inline-block level elements
	* (the element needs to have a width in order to overflow).
	* @default false
	*/
	noWrap: PropTypes.bool,
	/**
	* @ignore
	*/
	style: PropTypes.object,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* Applies the theme typography styles.
	* @default 'body1'
	*/
	variant: PropTypes.oneOfType([PropTypes.oneOf([
		"body1",
		"body2",
		"button",
		"caption",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"inherit",
		"overline",
		"subtitle1",
		"subtitle2"
	]), PropTypes.string]),
	/**
	* The component maps the variant prop to a range of different HTML element types.
	* For instance, subtitle1 to `<h6>`.
	* If you wish to change that mapping, you can provide your own.
	* Alternatively, you can use the `component` prop.
	* @default {
	*   h1: 'h1',
	*   h2: 'h2',
	*   h3: 'h3',
	*   h4: 'h4',
	*   h5: 'h5',
	*   h6: 'h6',
	*   subtitle1: 'h6',
	*   subtitle2: 'h6',
	*   body1: 'p',
	*   body2: 'p',
	*   inherit: 'p',
	* }
	*/
	variantMapping: PropTypes.object
});
//#endregion
//#region node_modules/@mui/material/DialogContentText/dialogContentTextClasses.mjs
function getDialogContentTextUtilityClass(slot) {
	return generateUtilityClass("MuiDialogContentText", slot);
}
generateUtilityClasses("MuiDialogContentText", ["root"]);
//#endregion
//#region node_modules/@mui/material/DialogContentText/DialogContentText.mjs
var useUtilityClasses$4 = (ownerState) => {
	const { classes } = ownerState;
	const composedClasses = composeClasses({ root: ["root"] }, getDialogContentTextUtilityClass, classes);
	return {
		...classes,
		...composedClasses
	};
};
var DialogContentTextRoot = styled(Typography, {
	shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
	name: "MuiDialogContentText",
	slot: "Root"
})({});
var DialogContentText = /*#__PURE__*/ React$1.forwardRef(function DialogContentText(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiDialogContentText"
	});
	const { children, className, ...ownerState } = props;
	const classes = useUtilityClasses$4(ownerState);
	return /*#__PURE__*/ jsx(DialogContentTextRoot, {
		component: "p",
		variant: "body1",
		color: "textSecondary",
		ref,
		ownerState,
		className: clsx$1(classes.root, className),
		...props,
		classes
	});
});
process.env.NODE_ENV !== "production" && (DialogContentText.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/DialogTitle/DialogTitle.mjs
var useUtilityClasses$3 = (ownerState) => {
	const { classes } = ownerState;
	return composeClasses({ root: ["root"] }, getDialogTitleUtilityClass, classes);
};
var DialogTitleRoot = styled(Typography, {
	name: "MuiDialogTitle",
	slot: "Root"
})({
	padding: "16px 24px",
	flex: "0 0 auto"
});
var DialogTitle = /*#__PURE__*/ React$1.forwardRef(function DialogTitle(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiDialogTitle"
	});
	const { className, id: idProp, ...other } = props;
	const ownerState = props;
	const classes = useUtilityClasses$3(ownerState);
	const { titleId = idProp } = React$1.useContext(DialogContext);
	return /*#__PURE__*/ jsx(DialogTitleRoot, {
		component: "h2",
		className: clsx$1(classes.root, className),
		ownerState,
		ref,
		variant: "h6",
		id: idProp ?? titleId,
		...other
	});
});
process.env.NODE_ENV !== "production" && (DialogTitle.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* @ignore
	*/
	id: PropTypes.string,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/Stack/Stack.mjs
var Stack = createStack({
	createStyledComponent: styled("div", {
		name: "MuiStack",
		slot: "Root"
	}),
	useThemeProps: (inProps) => useDefaultProps$1({
		props: inProps,
		name: "MuiStack"
	})
});
process.env.NODE_ENV !== "production" && (Stack.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* Defines the `flex-direction` style property.
	* It is applied for all screen sizes.
	* @default 'column'
	*/
	direction: PropTypes.oneOfType([
		PropTypes.oneOf([
			"column-reverse",
			"column",
			"row-reverse",
			"row"
		]),
		PropTypes.arrayOf(PropTypes.oneOf([
			"column-reverse",
			"column",
			"row-reverse",
			"row"
		])),
		PropTypes.object
	]),
	/**
	* Add an element between each child.
	*/
	divider: PropTypes.node,
	/**
	* Defines the space between immediate children.
	* @default 0
	*/
	spacing: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
		PropTypes.number,
		PropTypes.object,
		PropTypes.string
	]),
	/**
	* The system prop, which allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
	*
	* While CSS `gap` removes the known limitations,
	* it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
	*
	* To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
	* @default false
	*/
	useFlexGap: PropTypes.bool
});
//#endregion
//#region src/lib/api.ts
/**
* El navegador nunca guarda respuestas: solo pide cabeceras y analisis al
* servidor, que a su vez los lee de Google Sheets.
*/
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
async function readError(response, fallback) {
	const body = await response.json().catch(() => null);
	if (isRecord(body) && typeof body.error === "string" && body.error) return new Error(body.error);
	return new Error(fallback);
}
async function fetchInterview(id) {
	const response = await fetch(`/api/interviews/${encodeURIComponent(id)}`);
	if (!response.ok) throw await readError(response, "No se pudo cargar la entrevista de Google Sheets.");
	const body = await response.json();
	if (!isRecord(body) || !isRecord(body.interview)) throw new Error("La respuesta del servidor no es válida.");
	return {
		interview: body.interview,
		analysis: body.analysis ?? null
	};
}
/** Paso 2 (opt-in): pide el analisis usando solo el id. */
async function requestAnalysis(id) {
	const response = await fetch("/api/analyze", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ interviewId: id })
	});
	if (!response.ok) throw await readError(response, "No se pudo completar el análisis. La entrevista ya está guardada en Google Sheets.");
	const body = await response.json();
	if (!isRecord(body) || !isRecord(body.analysis)) throw new Error("El servidor no devolvió un análisis válido.");
	return body.analysis;
}
//#endregion
//#region src/lib/theme.ts
var palette = {
	background: "#f4f5fb",
	surface: "#ffffff",
	border: "#e3e6f0",
	text: "#131a2b",
	muted: "#6b7392",
	primary: "#4f46e5",
	primaryDark: "#3f37c9",
	accent: "#0d9488",
	success: "#059669",
	warning: "#d97706",
	error: "#dc2626"
};
var fontStack = [
	"'Inter'",
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"'Helvetica Neue'",
	"Arial",
	"sans-serif"
].join(", ");
var appTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: palette.primary,
			dark: palette.primaryDark
		},
		secondary: { main: palette.accent },
		success: { main: palette.success },
		warning: { main: palette.warning },
		error: { main: palette.error },
		background: {
			default: palette.background,
			paper: palette.surface
		},
		text: {
			primary: palette.text,
			secondary: palette.muted
		},
		divider: palette.border
	},
	shape: { borderRadius: 12 },
	typography: {
		fontFamily: fontStack,
		h1: {
			fontSize: "2.1rem",
			fontWeight: 800,
			letterSpacing: "-0.02em"
		},
		h2: {
			fontSize: "1.65rem",
			fontWeight: 700,
			letterSpacing: "-0.01em"
		},
		h3: {
			fontSize: "1.3rem",
			fontWeight: 700
		},
		h4: {
			fontSize: "1.1rem",
			fontWeight: 700
		},
		h5: {
			fontSize: "1rem",
			fontWeight: 700
		},
		h6: {
			fontSize: "0.95rem",
			fontWeight: 700
		},
		subtitle1: { fontWeight: 600 },
		subtitle2: {
			fontWeight: 600,
			fontSize: "0.82rem"
		},
		body1: {
			fontSize: "0.97rem",
			lineHeight: 1.6
		},
		body2: {
			fontSize: "0.88rem",
			lineHeight: 1.55
		},
		button: {
			textTransform: "none",
			fontWeight: 600
		}
	},
	components: {
		MuiButton: {
			defaultProps: { disableElevation: true },
			styleOverrides: {
				root: {
					borderRadius: 10,
					padding: "9px 18px",
					textTransform: "none",
					fontWeight: 600
				},
				sizeLarge: {
					padding: "12px 24px",
					fontSize: "0.98rem"
				}
			}
		},
		MuiPaper: { styleOverrides: { rounded: { borderRadius: 16 } } },
		MuiCard: {
			defaultProps: { variant: "outlined" },
			styleOverrides: { root: {
				borderColor: palette.border,
				boxShadow: "0 1px 2px rgba(19, 26, 43, 0.04)"
			} }
		},
		MuiOutlinedInput: { styleOverrides: { root: {
			borderRadius: 10,
			backgroundColor: "#fbfbfe",
			"& fieldset": { borderColor: palette.border },
			"&:hover fieldset": { borderColor: "#c9cee0" }
		} } },
		MuiChip: { styleOverrides: { root: {
			fontWeight: 600,
			borderRadius: 8
		} } },
		MuiLinearProgress: { styleOverrides: {
			root: {
				height: 6,
				borderRadius: 999,
				backgroundColor: "#e6e8f2"
			},
			bar: { borderRadius: 999 }
		} },
		MuiAlert: { styleOverrides: { root: { borderRadius: 12 } } }
	}
});
var cardSx = {
	p: {
		xs: 2,
		sm: 3
	},
	borderRadius: 3,
	border: `1px solid ${palette.border}`,
	boxShadow: "0 1px 2px rgba(19, 26, 43, 0.04)",
	backgroundColor: palette.surface
};
var pageSx = {
	width: "100%",
	maxWidth: 760,
	mx: "auto",
	py: {
		xs: 3,
		sm: 5
	}
};
//#endregion
//#region node_modules/@mui/material/Card/cardClasses.mjs
function getCardUtilityClass(slot) {
	return generateUtilityClass("MuiCard", slot);
}
generateUtilityClasses("MuiCard", ["root"]);
//#endregion
//#region node_modules/@mui/material/Card/Card.mjs
var useUtilityClasses$2 = (ownerState) => {
	const { classes } = ownerState;
	return composeClasses({ root: ["root"] }, getCardUtilityClass, classes);
};
var CardRoot = styled(Paper, {
	name: "MuiCard",
	slot: "Root"
})({ overflow: "hidden" });
var Card = /*#__PURE__*/ React$1.forwardRef(function Card(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiCard"
	});
	const { className, raised = false, ...other } = props;
	const ownerState = {
		...props,
		raised
	};
	const classes = useUtilityClasses$2(ownerState);
	return /*#__PURE__*/ jsx(CardRoot, {
		className: clsx$1(classes.root, className),
		elevation: raised ? 8 : void 0,
		ref,
		ownerState,
		...other
	});
});
process.env.NODE_ENV !== "production" && (Card.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* If `true`, the card will use raised styling.
	* @default false
	*/
	raised: chainPropTypes(PropTypes.bool, (props) => {
		if (props.raised && props.variant === "outlined") return /* @__PURE__ */ new Error("MUI: Combining `raised={true}` with `variant=\"outlined\"` has no effect.");
		return null;
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/CardContent/cardContentClasses.mjs
function getCardContentUtilityClass(slot) {
	return generateUtilityClass("MuiCardContent", slot);
}
generateUtilityClasses("MuiCardContent", ["root"]);
//#endregion
//#region node_modules/@mui/material/CardContent/CardContent.mjs
var useUtilityClasses$1 = (ownerState) => {
	const { classes } = ownerState;
	return composeClasses({ root: ["root"] }, getCardContentUtilityClass, classes);
};
var CardContentRoot = styled("div", {
	name: "MuiCardContent",
	slot: "Root"
})({
	padding: 16,
	"&:last-child": { paddingBottom: 24 }
});
var CardContent = /*#__PURE__*/ React$1.forwardRef(function CardContent(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiCardContent"
	});
	const { className, component = "div", ...other } = props;
	const ownerState = {
		...props,
		component
	};
	const classes = useUtilityClasses$1(ownerState);
	return /*#__PURE__*/ jsx(CardContentRoot, {
		as: component,
		className: clsx$1(classes.root, className),
		ownerState,
		ref,
		...other
	});
});
process.env.NODE_ENV !== "production" && (CardContent.propTypes = {
	/**
	* The content of the component.
	*/
	children: PropTypes.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	])
});
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/Cancel.mjs
/**
* @ignore - internal component.
*/
var Cancel_default = createSvgIcon(/*#__PURE__*/ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), "Cancel");
//#endregion
//#region node_modules/@mui/material/Chip/chipClasses.mjs
function getChipUtilityClass(slot) {
	return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", [
	"root",
	"sizeSmall",
	"sizeMedium",
	"colorDefault",
	"colorError",
	"colorInfo",
	"colorPrimary",
	"colorSecondary",
	"colorSuccess",
	"colorWarning",
	"disabled",
	"clickable",
	"deletable",
	"outlined",
	"filled",
	"avatar",
	"icon",
	"label",
	"deleteIcon",
	"focusVisible"
]);
//#endregion
//#region node_modules/@mui/material/Chip/Chip.mjs
var useUtilityClasses = (ownerState) => {
	const { classes, disabled, size, color, onDelete, clickable, variant } = ownerState;
	const slots = {
		root: [
			"root",
			variant,
			disabled && "disabled",
			`size${capitalize_default(size)}`,
			`color${capitalize_default(color)}`,
			clickable && "clickable",
			onDelete && "deletable"
		],
		label: ["label"],
		avatar: ["avatar"],
		icon: ["icon"],
		deleteIcon: ["deleteIcon"]
	};
	return composeClasses(slots, getChipUtilityClass, classes);
};
var ChipRoot = styled("div", {
	name: "MuiChip",
	slot: "Root",
	shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "focusableWhenDisabled" && prop !== "skipFocusWhenDisabled",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		const { color, clickable, onDelete, size, variant } = ownerState;
		return [
			{ [`& .${chipClasses.avatar}`]: styles.avatar },
			{ [`& .${chipClasses.icon}`]: styles.icon },
			{ [`& .${chipClasses.deleteIcon}`]: styles.deleteIcon },
			styles.root,
			styles[`size${capitalize_default(size)}`],
			styles[`color${capitalize_default(color)}`],
			clickable && styles.clickable,
			onDelete && styles.deletable,
			styles[variant]
		];
	}
})(memoTheme(({ theme }) => {
	const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
	return {
		maxWidth: "100%",
		fontFamily: theme.typography.fontFamily,
		fontSize: theme.typography.pxToRem(13),
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		height: 32,
		lineHeight: 1.5,
		color: (theme.vars || theme).palette.text.primary,
		backgroundColor: (theme.vars || theme).palette.action.selected,
		borderRadius: 16,
		whiteSpace: "nowrap",
		...getTransitionStyles(theme, ["background-color", "box-shadow"]),
		cursor: "unset",
		outline: 0,
		textDecoration: "none",
		border: 0,
		padding: 0,
		verticalAlign: "middle",
		boxSizing: "border-box",
		[`&.${chipClasses.disabled}`]: {
			opacity: (theme.vars || theme).palette.action.disabledOpacity,
			pointerEvents: "none"
		},
		[`& .${chipClasses.avatar}`]: {
			marginLeft: 5,
			marginRight: -6,
			width: 24,
			height: 24,
			color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
			fontSize: theme.typography.pxToRem(12)
		},
		[`& .${chipClasses.icon}`]: {
			marginLeft: 5,
			marginRight: -6
		},
		[`& .${chipClasses.deleteIcon}`]: {
			WebkitTapHighlightColor: "transparent",
			color: theme.alpha((theme.vars || theme).palette.text.primary, .26),
			fontSize: 22,
			cursor: "pointer",
			margin: "0 5px 0 -6px",
			"&:hover": { color: theme.alpha((theme.vars || theme).palette.text.primary, .4) }
		},
		variants: [
			{
				props: { color: "primary" },
				style: { [`& .${chipClasses.avatar}`]: {
					color: (theme.vars || theme).palette.primary.contrastText,
					backgroundColor: (theme.vars || theme).palette.primary.dark
				} }
			},
			{
				props: { color: "secondary" },
				style: { [`& .${chipClasses.avatar}`]: {
					color: (theme.vars || theme).palette.secondary.contrastText,
					backgroundColor: (theme.vars || theme).palette.secondary.dark
				} }
			},
			{
				props: { size: "small" },
				style: {
					height: 24,
					[`& .${chipClasses.avatar}`]: {
						marginLeft: 4,
						marginRight: -4,
						width: 18,
						height: 18,
						fontSize: theme.typography.pxToRem(10)
					},
					[`& .${chipClasses.icon}`]: {
						fontSize: 18,
						marginLeft: 4,
						marginRight: -4
					},
					[`& .${chipClasses.deleteIcon}`]: {
						fontSize: 16,
						marginRight: 4,
						marginLeft: -4
					}
				}
			},
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => {
				return {
					props: { color },
					style: {
						backgroundColor: (theme.vars || theme).palette[color].main,
						color: (theme.vars || theme).palette[color].contrastText,
						[`& .${chipClasses.deleteIcon}`]: {
							color: theme.alpha((theme.vars || theme).palette[color].contrastText, .7),
							"&:hover, &:active": { color: (theme.vars || theme).palette[color].contrastText }
						}
					}
				};
			}),
			{
				props: (props) => props.iconColor === props.color,
				style: { [`& .${chipClasses.icon}`]: { color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor } }
			},
			{
				props: (props) => props.iconColor === props.color && props.color !== "default",
				style: { [`& .${chipClasses.icon}`]: { color: "inherit" } }
			},
			{
				props: { onDelete: true },
				style: !theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`) } }
			},
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => {
				return {
					props: {
						color,
						onDelete: true
					},
					style: !theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { background: (theme.vars || theme).palette[color].dark } }
				};
			}),
			{
				props: { clickable: true },
				style: {
					userSelect: "none",
					WebkitTapHighlightColor: "transparent",
					cursor: "pointer",
					"&:hover": { backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`) },
					...!theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`) } },
					"&:active": { boxShadow: (theme.vars || theme).shadows[1] }
				}
			},
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
				props: {
					color,
					clickable: true
				},
				style: {
					"&:hover": { backgroundColor: (theme.vars || theme).palette[color].dark },
					...!theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { backgroundColor: (theme.vars || theme).palette[color].dark } }
				}
			})),
			{
				props: { variant: "outlined" },
				style: {
					backgroundColor: "transparent",
					border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
					[`&.${chipClasses.clickable}:hover`]: { backgroundColor: (theme.vars || theme).palette.action.hover },
					...!theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { backgroundColor: (theme.vars || theme).palette.action.focus } },
					[`& .${chipClasses.avatar}`]: { marginLeft: 4 },
					[`& .${chipClasses.icon}`]: { marginLeft: 4 },
					[`& .${chipClasses.deleteIcon}`]: { marginRight: 5 }
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					[`& .${chipClasses.avatar}`]: { marginLeft: 2 },
					[`& .${chipClasses.icon}`]: { marginLeft: 2 },
					[`& .${chipClasses.deleteIcon}`]: { marginRight: 3 }
				}
			},
			...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
				props: {
					variant: "outlined",
					color
				},
				style: {
					color: (theme.vars || theme).palette[color].main,
					border: `1px solid ${theme.alpha((theme.vars || theme).palette[color].main, .7)}`,
					[`&.${chipClasses.clickable}:hover`]: { backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity) },
					...!theme.focusVisible && { [`&.${chipClasses.focusVisible}`]: { backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.focusOpacity) } },
					[`& .${chipClasses.deleteIcon}`]: {
						color: theme.alpha((theme.vars || theme).palette[color].main, .7),
						"&:hover, &:active": { color: (theme.vars || theme).palette[color].main }
					}
				}
			}))
		]
	};
}));
var ChipLabel = styled("span", {
	name: "MuiChip",
	slot: "Label"
})({
	overflow: "hidden",
	textOverflow: "ellipsis",
	paddingLeft: 12,
	paddingRight: 12,
	whiteSpace: "nowrap",
	variants: [
		{
			props: { variant: "outlined" },
			style: {
				paddingLeft: 11,
				paddingRight: 11
			}
		},
		{
			props: { size: "small" },
			style: {
				paddingLeft: 8,
				paddingRight: 8
			}
		},
		{
			props: {
				size: "small",
				variant: "outlined"
			},
			style: {
				paddingLeft: 7,
				paddingRight: 7
			}
		}
	]
});
function isDeleteKeyboardEvent(keyboardEvent) {
	return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
/**
* Chips represent complex entities in small blocks, such as a contact.
*/
var Chip = /*#__PURE__*/ React$1.forwardRef(function Chip(inProps, ref) {
	const props = useDefaultProps$1({
		props: inProps,
		name: "MuiChip"
	});
	const { avatar: avatarProp, className, clickable: clickableProp, color = "default", component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size = "medium", variant = "filled", tabIndex, skipFocusWhenDisabled = false, slots = {}, slotProps = {}, ...other } = props;
	const { nativeButton, ...buttonBaseProps } = other;
	const handleRef = useForkRef_default(React$1.useRef(null), ref);
	const handleDeleteIconClick = (event) => {
		event.stopPropagation();
		onDelete(event);
	};
	const handleKeyDown = (event) => {
		if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) event.preventDefault();
		if (onKeyDown) onKeyDown(event);
	};
	const handleKeyUp = (event) => {
		if (event.currentTarget === event.target) {
			if (onDelete && isDeleteKeyboardEvent(event)) onDelete(event);
		}
		if (onKeyUp) onKeyUp(event);
	};
	const clickable = clickableProp !== false && onClick ? true : clickableProp;
	const component = clickable || onDelete ? ButtonBase : ComponentProp || "div";
	const ownerState = {
		...props,
		component,
		disabled,
		size,
		color,
		iconColor: /*#__PURE__*/ React$1.isValidElement(iconProp) ? iconProp.props.color || color : color,
		onDelete: !!onDelete,
		clickable,
		variant
	};
	const classes = useUtilityClasses(ownerState);
	const moreProps = component === ButtonBase ? {
		component: ComponentProp || "div",
		internalNativeButton: false,
		focusVisibleClassName: classes.focusVisible,
		...onDelete && { disableRipple: true },
		...nativeButton !== void 0 && { nativeButton }
	} : {};
	let deleteIcon = null;
	if (onDelete) deleteIcon = deleteIconProp && /*#__PURE__*/ React$1.isValidElement(deleteIconProp) ? /*#__PURE__*/ React$1.cloneElement(deleteIconProp, {
		className: clsx$1(deleteIconProp.props.className, classes.deleteIcon),
		onClick: handleDeleteIconClick
	}) : /*#__PURE__*/ jsx(Cancel_default, {
		className: classes.deleteIcon,
		onClick: handleDeleteIconClick
	});
	let avatar = null;
	if (avatarProp && /*#__PURE__*/ React$1.isValidElement(avatarProp)) avatar = /*#__PURE__*/ React$1.cloneElement(avatarProp, { className: clsx$1(classes.avatar, avatarProp.props.className) });
	let icon = null;
	if (iconProp && /*#__PURE__*/ React$1.isValidElement(iconProp)) icon = /*#__PURE__*/ React$1.cloneElement(iconProp, { className: clsx$1(classes.icon, iconProp.props.className) });
	if (process.env.NODE_ENV !== "production") {
		if (avatar && icon) console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
	}
	const externalForwardedProps = {
		slots,
		slotProps
	};
	const [RootSlot, rootProps] = useSlot("root", {
		elementType: ChipRoot,
		externalForwardedProps: {
			...externalForwardedProps,
			...buttonBaseProps
		},
		ownerState,
		shouldForwardComponentProp: true,
		ref: handleRef,
		className: clsx$1(classes.root, className),
		additionalProps: {
			disabled: clickable && disabled ? true : void 0,
			tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
			...moreProps
		},
		getSlotProps: (handlers) => ({
			...handlers,
			onClick: (event) => {
				handlers.onClick?.(event);
				onClick?.(event);
			},
			onKeyDown: (event) => {
				handlers.onKeyDown?.(event);
				handleKeyDown(event);
			},
			onKeyUp: (event) => {
				handlers.onKeyUp?.(event);
				handleKeyUp(event);
			}
		})
	});
	const [LabelSlot, labelProps] = useSlot("label", {
		elementType: ChipLabel,
		externalForwardedProps,
		ownerState,
		className: classes.label
	});
	return /*#__PURE__*/ jsxs(RootSlot, {
		as: component,
		...rootProps,
		children: [
			avatar || icon,
			/*#__PURE__*/ jsx(LabelSlot, {
				...labelProps,
				children: label
			}),
			deleteIcon
		]
	});
});
process.env.NODE_ENV !== "production" && (Chip.propTypes = {
	/**
	* The Avatar element to display.
	*/
	avatar: PropTypes.element,
	/**
	* This prop isn't supported.
	* Use the `component` prop if you need to change the children structure.
	*/
	children: unsupportedProp_default,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: PropTypes.object,
	/**
	* @ignore
	*/
	className: PropTypes.string,
	/**
	* If `true`, the chip will appear clickable, and will raise when pressed,
	* even if the onClick prop is not defined.
	* If `false`, the chip will not appear clickable, even if onClick prop is defined.
	* This can be used, for example,
	* along with the component prop to indicate an anchor Chip is clickable.
	* Note: this controls the UI and does not affect the onClick event.
	*/
	clickable: PropTypes.bool,
	/**
	* The color of the component.
	* It supports both default and custom theme colors, which can be added as shown in the
	* [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
	* @default 'default'
	*/
	color: PropTypes.oneOfType([PropTypes.oneOf([
		"default",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), PropTypes.string]),
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: PropTypes.elementType,
	/**
	* Override the default delete icon element. Shown only if `onDelete` is set.
	*/
	deleteIcon: PropTypes.element,
	/**
	* If `true`, the component is disabled.
	* @default false
	*/
	disabled: PropTypes.bool,
	/**
	* Icon element.
	*/
	icon: PropTypes.element,
	/**
	* The content of the component.
	*/
	label: PropTypes.node,
	/**
	* If `true`, the component is expected to resolve to a native `<button>` element.
	* When omitted, custom components inherit the default button semantics of the current wrapper.
	* Set to `true` when a custom component resolves to a native `<button>`, or `false`
	* when it resolves to a non-button host.
	*/
	nativeButton: PropTypes.bool,
	/**
	* @ignore
	*/
	onClick: PropTypes.func,
	/**
	* Callback fired when the delete icon is clicked.
	* If set, the delete icon will be shown.
	*/
	onDelete: PropTypes.func,
	/**
	* @ignore
	*/
	onKeyDown: PropTypes.func,
	/**
	* @ignore
	*/
	onKeyUp: PropTypes.func,
	/**
	* The size of the component.
	* @default 'medium'
	*/
	size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
	/**
	* If `true`, allows the disabled chip to escape focus.
	* If `false`, allows the disabled chip to receive focus.
	* @default false
	*/
	skipFocusWhenDisabled: PropTypes.bool,
	/**
	* The props used for each slot inside.
	* @default {}
	*/
	slotProps: PropTypes.shape({
		label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	}),
	/**
	* The components used for each slot inside.
	* @default {}
	*/
	slots: PropTypes.shape({
		label: PropTypes.elementType,
		root: PropTypes.elementType
	}),
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
			PropTypes.bool
		])),
		PropTypes.func,
		PropTypes.object
	]),
	/**
	* @ignore
	*/
	tabIndex: PropTypes.number,
	/**
	* The variant to use.
	* @default 'filled'
	*/
	variant: PropTypes.oneOfType([PropTypes.oneOf(["filled", "outlined"]), PropTypes.string])
});
//#endregion
//#region src/components/react/AnalysisResults.tsx
var CONFIDENCE_LABELS = {
	high: "Alta",
	medium: "Media",
	low: "Baja"
};
function ConfidenceChip({ confidence }) {
	return /* @__PURE__ */ jsx(Chip, {
		size: "small",
		label: `Confianza: ${CONFIDENCE_LABELS[confidence]}`
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 1,
		children: [/* @__PURE__ */ jsx(Typography, {
			variant: "h6",
			children: title
		}), children]
	});
}
/**
* Muestra la respuesta que respalda un hallazgo. Se pide al servidor al hacer
* clic, no se guarda y se descarta al cerrar: las respuestas nunca quedan en el
* navegador.
*/
function EvidenceSource({ interviewId, questionNumber }) {
	const [quote, setQuote] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [open, setOpen] = useState(false);
	const load = useCallback(async () => {
		setOpen(true);
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`/api/interviews/${encodeURIComponent(interviewId)}/answers`);
			const body = await response.json().catch(() => null);
			if (!response.ok) throw new Error(typeof body?.error === "string" ? body.error : "No se pudieron leer las respuestas.");
			const answers = body.answers ?? [];
			setQuote(answers.find((item) => item.questionNumber === questionNumber) ?? null);
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "No se pudieron leer las respuestas.");
		} finally {
			setLoading(false);
		}
	}, [interviewId, questionNumber]);
	if (!questionNumber) return null;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Button, {
		size: "small",
		variant: "text",
		onClick: () => void load(),
		sx: {
			alignSelf: "flex-start",
			px: 0
		},
		children: ["Ver respuesta ", questionNumber]
	}), /* @__PURE__ */ jsxs(Dialog, {
		open,
		onClose: () => setOpen(false),
		maxWidth: "sm",
		fullWidth: true,
		children: [
			/* @__PURE__ */ jsx(DialogTitle, { children: quote ? `Pregunta ${quote.questionNumber}` : `Pregunta ${questionNumber}` }),
			/* @__PURE__ */ jsx(DialogContent, { children: loading ? /* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				sx: {
					alignItems: "center",
					py: 3
				},
				children: [/* @__PURE__ */ jsx(CircularProgress, { size: 24 }), /* @__PURE__ */ jsx(Typography, {
					color: "text.secondary",
					children: "Consultando Google Sheets..."
				})]
			}) : error ? /* @__PURE__ */ jsx(Typography, {
				color: "error",
				children: error
			}) : quote ? /* @__PURE__ */ jsxs(Stack, {
				spacing: 1.5,
				children: [/* @__PURE__ */ jsx(Typography, {
					color: "text.secondary",
					children: quote.question
				}), /* @__PURE__ */ jsx(Typography, {
					sx: { whiteSpace: "pre-wrap" },
					children: quote.answer || "(sin respuesta)"
				})]
			}) : /* @__PURE__ */ jsx(Typography, {
				color: "text.secondary",
				children: "Esa pregunta no tiene respuesta guardada."
			}) }),
			/* @__PURE__ */ jsx(DialogActions, { children: /* @__PURE__ */ jsx(Button, {
				onClick: () => setOpen(false),
				children: "Cerrar"
			}) })
		]
	})] });
}
function EvidenceItem({ item, interviewId }) {
	return /* @__PURE__ */ jsx(Card, {
		variant: "outlined",
		children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Stack, {
			spacing: 1,
			children: [
				/* @__PURE__ */ jsx(Typography, {
					variant: "subtitle2",
					children: item.description
				}),
				/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					sx: {
						flexWrap: "wrap",
						gap: 1
					},
					children: [/* @__PURE__ */ jsx(ConfidenceChip, { confidence: item.confidence }), !item.mentioned && /* @__PURE__ */ jsx(Chip, {
						size: "small",
						label: "No mencionado explícitamente"
					})]
				}),
				item.evidence ? /* @__PURE__ */ jsxs(Typography, {
					variant: "body2",
					children: ["Evidencia: ", item.evidence]
				}) : null,
				/* @__PURE__ */ jsx(EvidenceSource, {
					interviewId,
					questionNumber: item.questionNumber
				})
			]
		}) })
	});
}
function ItemsSection({ title, items, interviewId }) {
	if (items.length === 0) return /* @__PURE__ */ jsx(Section, {
		title,
		children: /* @__PURE__ */ jsx(Typography, {
			color: "text.secondary",
			children: "No se encontró información en la entrevista."
		})
	});
	return /* @__PURE__ */ jsx(Section, {
		title,
		children: items.map((item, index) => /* @__PURE__ */ jsx(EvidenceItem, {
			item,
			interviewId
		}, `${title}-${index}`))
	});
}
function OpportunityCard({ opportunity, interviewId }) {
	return /* @__PURE__ */ jsx(Card, {
		variant: "outlined",
		children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Stack, {
			spacing: 1,
			children: [
				/* @__PURE__ */ jsx(Typography, {
					variant: "subtitle1",
					children: opportunity.name
				}),
				/* @__PURE__ */ jsxs(Typography, {
					variant: "body2",
					children: ["Problema que resuelve: ", opportunity.problem]
				}),
				opportunity.reason ? /* @__PURE__ */ jsxs(Typography, {
					variant: "body2",
					children: ["Por qué aparece: ", opportunity.reason]
				}) : null,
				opportunity.features.length > 0 && /* @__PURE__ */ jsxs(Stack, {
					spacing: .5,
					children: [/* @__PURE__ */ jsx(Typography, {
						variant: "body2",
						children: "Posibles funcionalidades:"
					}), opportunity.features.map((feature, index) => /* @__PURE__ */ jsxs(Typography, {
						variant: "body2",
						children: ["• ", feature]
					}, `feature-${opportunity.name}-${index}`))]
				}),
				opportunity.evidence ? /* @__PURE__ */ jsxs(Typography, {
					variant: "body2",
					children: ["Evidencia: ", opportunity.evidence]
				}) : null,
				/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					sx: {
						flexWrap: "wrap",
						gap: 1
					},
					children: [/* @__PURE__ */ jsx(ConfidenceChip, { confidence: opportunity.confidence }), !opportunity.mentioned && /* @__PURE__ */ jsx(Chip, {
						size: "small",
						label: "No mencionado explícitamente"
					})]
				}),
				/* @__PURE__ */ jsx(EvidenceSource, {
					interviewId,
					questionNumber: opportunity.questionNumber
				})
			]
		}) })
	});
}
var WTP_LABELS = {
	high: "Alta",
	medium: "Media",
	low: "Baja",
	unknown: "Desconocida"
};
function AnalysisResults({ analysis, interviewId }) {
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 4,
		sx: {
			width: "100%",
			maxWidth: 720
		},
		children: [
			/* @__PURE__ */ jsx(Section, {
				title: "Resumen del negocio",
				children: /* @__PURE__ */ jsx(Typography, { children: analysis.businessSummary })
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Principal problema detectado",
				children: /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [/* @__PURE__ */ jsx(Typography, { children: analysis.mainPainPoint }), /* @__PURE__ */ jsx(ConfidenceChip, { confidence: analysis.confidence })]
				})
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Problemas recurrentes",
				items: analysis.mainProblems,
				interviewId
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Tareas manuales",
				items: analysis.manualTasks,
				interviewId
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Herramientas actuales",
				items: analysis.currentTools,
				interviewId
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Barreras tecnológicas",
				items: analysis.techBarriers,
				interviewId
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Necesidades detectadas",
				items: analysis.detectedNeeds,
				interviewId
			}),
			/* @__PURE__ */ jsx(ItemsSection, {
				title: "Valor esperado",
				items: analysis.expectedValue,
				interviewId
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Disposición a pagar",
				children: analysis.willingnessToPay.mentioned ? /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [
						analysis.willingnessToPay.level && /* @__PURE__ */ jsxs(Typography, { children: [
							"Nivel:",
							" ",
							WTP_LABELS[analysis.willingnessToPay.level]
						] }),
						analysis.willingnessToPay.evidence ? /* @__PURE__ */ jsxs(Typography, {
							variant: "body2",
							children: ["Evidencia: ", analysis.willingnessToPay.evidence]
						}) : null,
						/* @__PURE__ */ jsx(EvidenceSource, {
							interviewId,
							questionNumber: analysis.willingnessToPay.questionNumber
						})
					]
				}) : /* @__PURE__ */ jsx(Typography, {
					color: "text.secondary",
					children: "No se mencionó la disposición a pagar en la entrevista."
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Modelo de pago preferido",
				children: analysis.preferredPaymentModel ? /* @__PURE__ */ jsx(Typography, { children: analysis.preferredPaymentModel }) : /* @__PURE__ */ jsx(Typography, {
					color: "text.secondary",
					children: "No se mencionó un modelo de pago preferido."
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Oportunidades de software",
				children: analysis.opportunities.length === 0 ? /* @__PURE__ */ jsx(Typography, {
					color: "text.secondary",
					children: "No se detectaron oportunidades claras en la entrevista."
				}) : analysis.opportunities.map((opportunity, index) => /* @__PURE__ */ jsx(OpportunityCard, {
					opportunity,
					interviewId
				}, `opportunity-${index}`))
			}),
			/* @__PURE__ */ jsx(Typography, {
				variant: "subtitle2",
				color: "text.secondary",
				children: "Estas oportunidades son hipótesis generadas a partir de la entrevista y deben validarse con más entrevistas."
			}),
			analysis.recommendations.length > 0 && /* @__PURE__ */ jsx(Section, {
				title: "Recomendaciones",
				children: analysis.recommendations.map((recommendation, index) => /* @__PURE__ */ jsxs(Typography, { children: ["• ", recommendation] }, `recommendation-${index}`))
			})
		]
	});
}
//#endregion
//#region src/components/react/ThemeWrapper.tsx
function ThemeWrapper({ children }) {
	return /* @__PURE__ */ jsx(ThemeProvider$1, {
		theme: appTheme,
		children
	});
}
//#endregion
//#region src/components/react/AnalysisResultsPage.tsx
function ResultsContent({ id }) {
	const [interview, setInterview] = useState(null);
	const [analysis, setAnalysis] = useState(null);
	const [loading, setLoading] = useState(true);
	const [loadError, setLoadError] = useState(null);
	const [analyzing, setAnalyzing] = useState(false);
	const [analyzeError, setAnalyzeError] = useState(null);
	const [dialog, setDialog] = useState(false);
	const load = useCallback(async () => {
		setLoading(true);
		setLoadError(null);
		try {
			const result = await fetchInterview(id);
			setInterview(result.interview);
			setAnalysis(result.analysis);
		} catch (cause) {
			setLoadError(cause instanceof Error ? cause.message : "No se pudo cargar la entrevista.");
		} finally {
			setLoading(false);
		}
	}, [id]);
	useEffect(() => {
		load();
	}, [load]);
	async function handleAnalyze() {
		setDialog(false);
		setAnalyzing(true);
		setAnalyzeError(null);
		try {
			setAnalysis(await requestAnalysis(id));
		} catch (cause) {
			setAnalyzeError(cause instanceof Error ? cause.message : "No se pudo completar el análisis.");
		} finally {
			setAnalyzing(false);
		}
	}
	if (loading) return /* @__PURE__ */ jsx(Box, {
		sx: pageSx,
		children: /* @__PURE__ */ jsxs(Stack, {
			spacing: 2,
			sx: {
				alignItems: "center",
				py: 6
			},
			children: [/* @__PURE__ */ jsx(CircularProgress, {}), /* @__PURE__ */ jsx(Typography, {
				color: "text.secondary",
				children: "Consultando Google Sheets..."
			})]
		})
	});
	if (loadError || !interview) return /* @__PURE__ */ jsx(Box, {
		sx: pageSx,
		children: /* @__PURE__ */ jsx(Box, {
			sx: cardSx,
			children: /* @__PURE__ */ jsxs(Stack, {
				spacing: 2,
				children: [
					/* @__PURE__ */ jsx(Typography, {
						variant: "h2",
						children: "No pudimos leer la entrevista"
					}),
					/* @__PURE__ */ jsx(Alert, {
						severity: "error",
						children: loadError
					}),
					/* @__PURE__ */ jsx(Typography, {
						color: "text.secondary",
						children: "Verificá la conexión con Google Sheets y que el despliegue de Apps Script esté accesible."
					}),
					/* @__PURE__ */ jsxs(Stack, {
						direction: "row",
						spacing: 1.5,
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "contained",
							onClick: () => void load(),
							children: "Reintentar"
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							component: "a",
							href: "/",
							children: "Volver al inicio"
						})]
					})
				]
			})
		})
	});
	if (analysis) return /* @__PURE__ */ jsxs(Box, {
		sx: pageSx,
		children: [/* @__PURE__ */ jsx(Stack, {
			spacing: 2,
			sx: { mb: 2 },
			children: /* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ jsx(Button, {
					size: "small",
					component: "a",
					href: "/",
					sx: { alignSelf: "flex-start" },
					children: "← Volver al inicio"
				}), /* @__PURE__ */ jsxs(Typography, {
					variant: "caption",
					color: "text.secondary",
					children: [
						interview.businessName,
						" · Entrevistado por",
						" ",
						interview.interviewer
					]
				})]
			})
		}), /* @__PURE__ */ jsx(AnalysisResults, {
			analysis,
			interviewId: id
		})]
	});
	return /* @__PURE__ */ jsxs(Box, {
		sx: pageSx,
		children: [/* @__PURE__ */ jsx(Box, {
			sx: cardSx,
			children: /* @__PURE__ */ jsxs(Stack, {
				spacing: 2,
				children: [
					/* @__PURE__ */ jsx(Typography, {
						variant: "h2",
						children: "Todavía no hay un análisis"
					}),
					/* @__PURE__ */ jsxs(Typography, {
						color: "text.secondary",
						children: [
							interview.businessName,
							" · ",
							interview.businessType,
							" · Entrevista de",
							" ",
							interview.interviewer,
							". Las respuestas están guardadas en Google Sheets y el análisis con IA es opcional."
						]
					}),
					analyzeError && /* @__PURE__ */ jsx(Alert, {
						severity: "warning",
						children: analyzeError
					}),
					/* @__PURE__ */ jsxs(Stack, {
						direction: "row",
						spacing: 1.5,
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "contained",
							size: "large",
							onClick: () => setDialog(true),
							disabled: analyzing,
							children: analyzing ? "Analizando..." : "Analizar con IA"
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							component: "a",
							href: "/",
							children: "Volver al inicio"
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsxs(Dialog, {
			open: dialog,
			onClose: () => setDialog(false),
			children: [
				/* @__PURE__ */ jsx(DialogTitle, { children: "Analizar con IA" }),
				/* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(DialogContentText, { children: "Se enviarán las respuestas guardadas en Google Sheets al modelo de IA. El análisis se guarda en la hoja AI_Analysis. Esta acción no se puede deshacer." }) }),
				/* @__PURE__ */ jsxs(DialogActions, { children: [/* @__PURE__ */ jsx(Button, {
					onClick: () => setDialog(false),
					children: "Cancelar"
				}), /* @__PURE__ */ jsx(Button, {
					variant: "contained",
					onClick: () => void handleAnalyze(),
					children: "Analizar"
				})] })
			]
		})]
	});
}
function AnalysisResultsPage({ id }) {
	return /* @__PURE__ */ jsx(ThemeWrapper, { children: /* @__PURE__ */ jsx(ResultsContent, { id }) });
}
//#endregion
//#region src/pages/results/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resultados · Plataforma de Entrevistas" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "showNav": false })}${maybeRenderHead($$result)}<main class="app-main">${renderComponent($$result, "AnalysisResultsPage", AnalysisResultsPage, {
		"id": id ?? "",
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/WIN_11/Documents/Axel/My_Interview/My_Interview/src/components/react/AnalysisResultsPage.tsx",
		"client:component-export": "default"
	})}</main>` })}`;
}, "C:/Users/WIN_11/Documents/Axel/My_Interview/My_Interview/src/pages/results/[id].astro", void 0);
var $$file = "C:/Users/WIN_11/Documents/Axel/My_Interview/My_Interview/src/pages/results/[id].astro";
var $$url = "/results/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/results/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
