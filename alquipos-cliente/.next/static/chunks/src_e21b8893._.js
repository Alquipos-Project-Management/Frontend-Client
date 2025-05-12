(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_e21b8893._.js", {

"[project]/src/components/molecules/Carousel/HeroCarousel.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "activeIndicator": "HeroCarousel-module__921Ggq__activeIndicator",
  "activeSlide": "HeroCarousel-module__921Ggq__activeSlide",
  "carouselContainer": "HeroCarousel-module__921Ggq__carouselContainer",
  "carouselControl": "HeroCarousel-module__921Ggq__carouselControl",
  "controlIcon": "HeroCarousel-module__921Ggq__controlIcon",
  "indicator": "HeroCarousel-module__921Ggq__indicator",
  "indicators": "HeroCarousel-module__921Ggq__indicators",
  "nextControl": "HeroCarousel-module__921Ggq__nextControl",
  "overlay": "HeroCarousel-module__921Ggq__overlay",
  "prevControl": "HeroCarousel-module__921Ggq__prevControl",
  "slide": "HeroCarousel-module__921Ggq__slide",
  "slideContent": "HeroCarousel-module__921Ggq__slideContent",
  "slideCta": "HeroCarousel-module__921Ggq__slideCta",
  "slideImage": "HeroCarousel-module__921Ggq__slideImage",
  "slideImageContainer": "HeroCarousel-module__921Ggq__slideImageContainer",
  "slideSubtitle": "HeroCarousel-module__921Ggq__slideSubtitle",
  "slideTextContent": "HeroCarousel-module__921Ggq__slideTextContent",
  "slideTitle": "HeroCarousel-module__921Ggq__slideTitle",
  "slidesContainer": "HeroCarousel-module__921Ggq__slidesContainer",
});
}}),
"[project]/src/components/molecules/Carousel/HeroCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/molecules/Carousel/HeroCarousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function HeroCarousel({ slides, autoPlayInterval = 5000 }) {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Función para pasar a la siguiente slide
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[nextSlide]": ()=>{
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentSlide({
                "HeroCarousel.useCallback[nextSlide]": (prev)=>prev === slides.length - 1 ? 0 : prev + 1
            }["HeroCarousel.useCallback[nextSlide]"]);
            // Esperar a que termine la transición
            setTimeout({
                "HeroCarousel.useCallback[nextSlide]": ()=>{
                    setIsTransitioning(false);
                }
            }["HeroCarousel.useCallback[nextSlide]"], 500);
        }
    }["HeroCarousel.useCallback[nextSlide]"], [
        isTransitioning,
        slides.length
    ]);
    // Función para ir a la slide anterior
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[prevSlide]": ()=>{
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentSlide({
                "HeroCarousel.useCallback[prevSlide]": (prev)=>prev === 0 ? slides.length - 1 : prev - 1
            }["HeroCarousel.useCallback[prevSlide]"]);
            setTimeout({
                "HeroCarousel.useCallback[prevSlide]": ()=>{
                    setIsTransitioning(false);
                }
            }["HeroCarousel.useCallback[prevSlide]"], 500);
        }
    }["HeroCarousel.useCallback[prevSlide]"], [
        isTransitioning,
        slides.length
    ]);
    // Función para navegar a una slide específica
    const goToSlide = (index)=>{
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(()=>{
            setIsTransitioning(false);
        }, 500);
    };
    // AutoPlay con useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            let interval;
            if (autoPlay) {
                interval = setInterval({
                    "HeroCarousel.useEffect": ()=>{
                        nextSlide();
                    }
                }["HeroCarousel.useEffect"], autoPlayInterval);
            }
            return ({
                "HeroCarousel.useEffect": ()=>{
                    if (interval) clearInterval(interval);
                }
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        autoPlay,
        autoPlayInterval,
        nextSlide
    ]);
    // Pausar autoplay al hover
    const pauseAutoPlay = ()=>setAutoPlay(false);
    const resumeAutoPlay = ()=>setAutoPlay(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselContainer,
        onMouseEnter: pauseAutoPlay,
        onMouseLeave: resumeAutoPlay,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slidesContainer,
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide} ${index === currentSlide ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeSlide : ''}`,
                        style: {
                            transform: `translateX(${(index - currentSlide) * 100}%)`,
                            opacity: index === currentSlide ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImageContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: slide.imageUrl,
                                        alt: slide.title,
                                        fill: true,
                                        sizes: "100vw",
                                        priority: index === currentSlide,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideTextContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideTitle,
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideSubtitle,
                                            children: slide.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: slide.ctaLink,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideCta,
                                            children: slide.ctaText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselControl} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prevControl}`,
                onClick: prevSlide,
                "aria-label": "Slide anterior",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 19.5L8.25 12l7.5-7.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselControl} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextControl}`,
                onClick: nextSlide,
                "aria-label": "Siguiente slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicators,
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicator} ${index === currentSlide ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeIndicator : ''}`,
                        onClick: ()=>goToSlide(index),
                        "aria-label": `Ir a slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                        lineNumber: 153,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/Carousel/HeroCarousel.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s(HeroCarousel, "eduHH+389xLBGYr75r+SJtuNoCE=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/molecules/BrandSlider/BrandSlider.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "brandItem": "BrandSlider-module__DryXZW__brandItem",
  "brandLogo": "BrandSlider-module__DryXZW__brandLogo",
  "brandPlaceholder": "BrandSlider-module__DryXZW__brandPlaceholder",
  "fadeIn": "BrandSlider-module__DryXZW__fadeIn",
  "slideAnimation": "BrandSlider-module__DryXZW__slideAnimation",
  "slider": "BrandSlider-module__DryXZW__slider",
  "sliderContainer": "BrandSlider-module__DryXZW__sliderContainer",
});
}}),
"[project]/src/app/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "animateSection": "page-module___8aEwW__animateSection",
  "benefitCard": "page-module___8aEwW__benefitCard",
  "benefitDescription": "page-module___8aEwW__benefitDescription",
  "benefitIcon": "page-module___8aEwW__benefitIcon",
  "benefitIconContainer": "page-module___8aEwW__benefitIconContainer",
  "benefitTitle": "page-module___8aEwW__benefitTitle",
  "benefitsGrid": "page-module___8aEwW__benefitsGrid",
  "benefitsSection": "page-module___8aEwW__benefitsSection",
  "brandLogo": "page-module___8aEwW__brandLogo",
  "brandsSection": "page-module___8aEwW__brandsSection",
  "carouselPlaceholder": "page-module___8aEwW__carouselPlaceholder",
  "categoriesGrid": "page-module___8aEwW__categoriesGrid",
  "categoriesSection": "page-module___8aEwW__categoriesSection",
  "categoryCard": "page-module___8aEwW__categoryCard",
  "categoryContent": "page-module___8aEwW__categoryContent",
  "categoryDescription": "page-module___8aEwW__categoryDescription",
  "categoryImage": "page-module___8aEwW__categoryImage",
  "categoryImageContainer": "page-module___8aEwW__categoryImageContainer",
  "categoryTitle": "page-module___8aEwW__categoryTitle",
  "ctaButtons": "page-module___8aEwW__ctaButtons",
  "ctaContainer": "page-module___8aEwW__ctaContainer",
  "ctaContent": "page-module___8aEwW__ctaContent",
  "ctaDescription": "page-module___8aEwW__ctaDescription",
  "ctaPrimaryButton": "page-module___8aEwW__ctaPrimaryButton",
  "ctaSecondaryButton": "page-module___8aEwW__ctaSecondaryButton",
  "ctaSection": "page-module___8aEwW__ctaSection",
  "ctaTitle": "page-module___8aEwW__ctaTitle",
  "ctas": "page-module___8aEwW__ctas",
  "fadeInItem": "page-module___8aEwW__fadeInItem",
  "fadeInUp": "page-module___8aEwW__fadeInUp",
  "footer": "page-module___8aEwW__footer",
  "heroSection": "page-module___8aEwW__heroSection",
  "iconoConstructivo": "page-module___8aEwW__iconoConstructivo",
  "imagePlaceholder": "page-module___8aEwW__imagePlaceholder",
  "loader": "page-module___8aEwW__loader",
  "main": "page-module___8aEwW__main",
  "page": "page-module___8aEwW__page",
  "placeholderContent": "page-module___8aEwW__placeholderContent",
  "primary": "page-module___8aEwW__primary",
  "secondary": "page-module___8aEwW__secondary",
  "sectionContainer": "page-module___8aEwW__sectionContainer",
  "sectionHeader": "page-module___8aEwW__sectionHeader",
  "sectionSubtitle": "page-module___8aEwW__sectionSubtitle",
  "sectionTitle": "page-module___8aEwW__sectionTitle",
  "sectionToAnimate": "page-module___8aEwW__sectionToAnimate",
  "specIcon": "page-module___8aEwW__specIcon",
  "specItem": "page-module___8aEwW__specItem",
  "specsList": "page-module___8aEwW__specsList",
  "spin": "page-module___8aEwW__spin",
});
}}),
"[project]/src/components/molecules/BrandSlider/BrandSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BrandSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/molecules/BrandSlider/BrandSlider.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BrandSlider({ brands }) {
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loadedImages, setLoadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [errorImages, setErrorImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Duplicar las marcas para crear el efecto infinito
    const duplicatedBrands = [
        ...brands,
        ...brands
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandSlider.useEffect": ()=>{
            if (!sliderRef.current) return;
            // Reiniciar la animación cuando llegue al final
            const handleAnimationEnd = {
                "BrandSlider.useEffect.handleAnimationEnd": ()=>{
                    if (!sliderRef.current) return;
                    sliderRef.current.style.animation = 'none';
                    void sliderRef.current.offsetWidth; // Truco para forzar un reflow
                    sliderRef.current.style.animation = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideAnimation} ${brands.length * 5}s linear infinite`;
                }
            }["BrandSlider.useEffect.handleAnimationEnd"];
            sliderRef.current.addEventListener('animationiteration', handleAnimationEnd);
            return ({
                "BrandSlider.useEffect": ()=>{
                    if (sliderRef.current) {
                        sliderRef.current.removeEventListener('animationiteration', handleAnimationEnd);
                    }
                }
            })["BrandSlider.useEffect"];
        }
    }["BrandSlider.useEffect"], [
        brands.length
    ]);
    const handleImageLoad = (brandId)=>{
        setLoadedImages((prev)=>{
            const newSet = new Set(prev);
            newSet.add(brandId.toString());
            return newSet;
        });
    };
    const handleImageError = (brandId)=>{
        setErrorImages((prev)=>{
            const newSet = new Set(prev);
            newSet.add(brandId.toString());
            return newSet;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider,
            ref: sliderRef,
            children: duplicatedBrands.map((brand, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandItem,
                    children: !errorImages.has(brand.id.toString()) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: brand.logoUrl,
                        alt: brand.name,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogo} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogo} ${loadedImages.has(brand.id.toString()) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn : ''}`,
                        width: 150,
                        height: 60,
                        priority: true,
                        onLoad: ()=>handleImageLoad(brand.id),
                        onError: ()=>handleImageError(brand.id)
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/BrandSlider/BrandSlider.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandPlaceholder,
                        children: brand.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/BrandSlider/BrandSlider.tsx",
                        lineNumber: 79,
                        columnNumber: 15
                    }, this)
                }, `${brand.id}-${index}`, false, {
                    fileName: "[project]/src/components/molecules/BrandSlider/BrandSlider.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/molecules/BrandSlider/BrandSlider.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/molecules/BrandSlider/BrandSlider.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(BrandSlider, "msopTocqRH2BtD0jl9FR7YyvlmQ=");
_c = BrandSlider;
var _c;
__turbopack_context__.k.register(_c, "BrandSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "default": (()=>__TURBOPACK__default__export__),
    "dynamicContentService": (()=>dynamicContentService),
    "equipmentService": (()=>equipmentService),
    "rentalService": (()=>rentalService),
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
// Get Supabase URL and Key from environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://ptzujbrflyzpagdximss.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0enVqYnJmbHl6cGFnZHhpbXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDc3NzYsImV4cCI6MjA1ODQyMzc3Nn0.VUP1b7jGjKxrSH3oxIg4LFfUJn2jzLTaLFk-HARGCh4");
// Validate environment variables
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
// Create a mock client for initialization
const mockClient = {
    rpc: ()=>Promise.reject(new Error('Supabase client not initialized')),
    from: ()=>({
            select: ()=>Promise.reject(new Error('Supabase client not initialized')),
            insert: ()=>Promise.reject(new Error('Supabase client not initialized')),
            update: ()=>Promise.reject(new Error('Supabase client not initialized')),
            delete: ()=>Promise.reject(new Error('Supabase client not initialized')),
            eq: ()=>Promise.reject(new Error('Supabase client not initialized')),
            single: ()=>Promise.reject(new Error('Supabase client not initialized'))
        }),
    auth: {
        signUp: ()=>Promise.reject(new Error('Supabase client not initialized')),
        signInWithPassword: ()=>Promise.reject(new Error('Supabase client not initialized')),
        signOut: ()=>Promise.reject(new Error('Supabase client not initialized')),
        getSession: ()=>Promise.reject(new Error('Supabase client not initialized')),
        getUser: ()=>Promise.reject(new Error('Supabase client not initialized'))
    }
};
// Initialize with mock client
let supabaseClient = mockClient;
let isInitialized = false;
let initializationPromise = null;
let initializationAttempts = 0;
const MAX_INITIALIZATION_ATTEMPTS = 3;
const initializeSupabase = async ()=>{
    if (isInitialized) return supabaseClient;
    if (initializationPromise) return initializationPromise;
    initializationPromise = (async ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true
                },
                global: {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            });
            // Test the connection with retry logic
            while(initializationAttempts < MAX_INITIALIZATION_ATTEMPTS){
                try {
                    await client.from('news').select('id').limit(1);
                    console.log('Supabase connection successful');
                    supabaseClient = client;
                    isInitialized = true;
                    return client;
                } catch (error) {
                    initializationAttempts++;
                    if (initializationAttempts === MAX_INITIALIZATION_ATTEMPTS) {
                        throw error;
                    }
                    // Wait before retrying (exponential backoff)
                    await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, initializationAttempts) * 1000));
                }
            }
            throw new Error('Failed to initialize Supabase client after maximum attempts');
        } catch (error) {
            console.error('Error initializing Supabase client:', error);
            // Reset initialization state on failure
            isInitialized = false;
            initializationPromise = null;
            throw error;
        }
    })();
    return initializationPromise;
};
// Create a wrapper that ensures initialization
const getSupabaseClient = async ()=>{
    try {
        if (!isInitialized) {
            await initializeSupabase();
        }
        return supabaseClient;
    } catch (error) {
        console.error('Failed to get Supabase client:', error);
        throw error;
    }
};
const supabase = {
    rpc: async (...args)=>{
        const client = await getSupabaseClient();
        return client.rpc(...args);
    },
    from: async (...args)=>{
        const client = await getSupabaseClient();
        return client.from(...args);
    },
    auth: {
        signUp: async (...args)=>{
            const client = await getSupabaseClient();
            return client.auth.signUp(...args);
        },
        signInWithPassword: async (...args)=>{
            const client = await getSupabaseClient();
            return client.auth.signInWithPassword(...args);
        },
        signOut: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.signOut();
        },
        getSession: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.getSession();
        },
        getUser: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.getUser();
        }
    }
};
const auth = {
    signUp: async (email, password)=>{
        try {
            return await supabase.auth.signUp({
                email,
                password
            });
        } catch (error) {
            console.error('Auth signUp error:', error);
            throw error;
        }
    },
    signIn: async (email, password)=>{
        try {
            return await supabase.auth.signInWithPassword({
                email,
                password
            });
        } catch (error) {
            console.error('Auth signIn error:', error);
            throw error;
        }
    },
    signOut: async ()=>{
        try {
            return await supabase.auth.signOut();
        } catch (error) {
            console.error('Auth signOut error:', error);
            throw error;
        }
    },
    getSession: async ()=>{
        try {
            return await supabase.auth.getSession();
        } catch (error) {
            console.error('Auth getSession error:', error);
            throw error;
        }
    },
    getUser: async ()=>{
        try {
            return await supabase.auth.getUser();
        } catch (error) {
            console.error('Auth getUser error:', error);
            throw error;
        }
    }
};
const equipmentService = {
    getAll: async ()=>{
        try {
            const query = await supabase.from('equipment');
            return query.select('*');
        } catch (error) {
            console.error('Equipment getAll error:', error);
            throw error;
        }
    },
    getById: async (id)=>{
        try {
            const query = await supabase.from('equipment');
            return query.select('*').eq('id', id).single();
        } catch (error) {
            console.error('Equipment getById error:', error);
            throw error;
        }
    }
};
const rentalService = {
    getAll: async ()=>{
        try {
            const query = await supabase.from('rentals');
            return query.select('*');
        } catch (error) {
            console.error('Rental getAll error:', error);
            throw error;
        }
    },
    getById: async (id)=>{
        try {
            const query = await supabase.from('rentals');
            return query.select('*').eq('id', id).single();
        } catch (error) {
            console.error('Rental getById error:', error);
            throw error;
        }
    },
    create: async (data)=>{
        try {
            const query = await supabase.from('rentals');
            return query.insert(data);
        } catch (error) {
            console.error('Rental create error:', error);
            throw error;
        }
    }
};
const dynamicContentService = {
    getPageContent: async (pageKey)=>{
        try {
            const client = await getSupabaseClient();
            const { data, error } = await client.rpc('rpc_dynamic_content_list', {
                p_page_key: pageKey
            });
            if (error) {
                console.error(`Error fetching dynamic page content for page key "${pageKey}":`, error);
                throw error;
            }
            if (!Array.isArray(data)) {
                console.error('Unexpected response format from rpc_dynamic_content_list. Expected an array.');
                throw new Error('Unexpected response format from RPC.');
            }
            return data;
        } catch (error) {
            console.error(`Error in dynamicContentService.getPageContent for pageKey ${pageKey}:`, error);
            throw error;
        }
    }
};
const __TURBOPACK__default__export__ = {
    auth,
    equipmentService,
    rentalService,
    dynamicContentService
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/Carousel/HeroCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/BrandSlider/BrandSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// --- SVG Icon Definitions & Mappings ---
const categoryIcons = {
    andamios: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconoConstructivo,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "9",
                x2: "21",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "15",
                x2: "21",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 94
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "3",
                x2: "9",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 133
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "3",
                x2: "15",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 170
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this),
    maquinaria: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconoConstructivo,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 11V4H17L22 9V11"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 4V9H21.5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "17",
                height: "8",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7.5",
                cy: "19",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "19",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 146
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this),
    herramientas: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconoConstructivo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this),
    default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconoConstructivo,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "8",
                x2: "16",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "8",
                x2: "8",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this)
};
const benefitIcons = {
    "Equipos certificados": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92771"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 171
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 7L22 7L22 10"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 223
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 252
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 108,
        columnNumber: 28
    }, this),
    "Entrega rápida": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 19L5 17V7L8 5L12 7L16 5L19 7V17L16 19L12 17L8 19Z"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 165
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7V17"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 230
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 5V19"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 251
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5V19"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 272
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 109,
        columnNumber: 22
    }, this),
    "Asesoría técnica": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 167
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8V12L14 14"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 200
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 227
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 110,
        columnNumber: 24
    }, this),
    "Precios competitivos": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2V5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 171
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19V22"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 191
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.93 4.93L7.05 7.05"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 213
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.95 16.95L19.07 19.07"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 246
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12H5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 283
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 12H22"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 303
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.93 19.07L7.05 16.95"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 325
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.95 7.05L19.07 4.93"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 360
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 395
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 111,
        columnNumber: 28
    }, this),
    default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 181
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "16",
                x2: "12",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 220
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this)
};
// Default images configuration
const DEFAULT_IMAGES = {
    hero: [
        '/assets/images/hero/hero-1.jpg',
        '/assets/images/hero/hero-2.jpg',
        '/assets/images/hero/hero-3.jpg'
    ],
    categories: {
        andamios: '/assets/images/categories/andamios-default.jpg',
        maquinaria: '/assets/images/categories/maquinaria-default.jpg',
        herramientas: '/assets/images/categories/herramientas-default.jpg',
        default: '/assets/images/categories/default.jpg'
    },
    brands: {
        default: '/assets/images/brands/default-brand.svg'
    },
    products: {
        default: '/assets/images/products/default-product.jpg'
    }
};
// Enhanced image validation
const isValidImageUrl = (url)=>{
    if (!url || url.trim() === '') return false;
    if (url.startsWith('blob:')) return false;
    if (url.startsWith('http://localhost')) return false;
    // Check for valid image extensions
    const validExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.webp',
        '.svg'
    ];
    return validExtensions.some((ext)=>url.toLowerCase().endsWith(ext)) || url.includes('supabase.co/storage');
};
// Get fallback image based on type and key
const getFallbackImage = (type, key)=>{
    if (type === 'hero') {
        return DEFAULT_IMAGES.hero[0]; // Default to first hero image
    }
    if (type === 'categories' && key) {
        return DEFAULT_IMAGES.categories[key] || DEFAULT_IMAGES.categories.default;
    }
    if (type === 'brands') {
        return DEFAULT_IMAGES.brands.default;
    }
    if (type === 'products') {
        return DEFAULT_IMAGES.products.default;
    }
    return '/assets/images/default.jpg'; // Ultimate fallback
};
const findApiSectionContent = (sections, sectionKey)=>{
    const section = sections.find((item)=>item.section_key === sectionKey && item.status === 'published');
    return section ? section.content : undefined;
};
function Home() {
    _s();
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // For carousel placeholder
    const [prevScrollPos, setPrevScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [navbarVisible, setNavbarVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // State for dynamic content
    const [dynamicHeroSlides, setDynamicHeroSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dynamicCategoriesData, setDynamicCategoriesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicBenefitsData, setDynamicBenefitsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicBrandsData, setDynamicBrandsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicFeaturedProductsData, setDynamicFeaturedProductsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add state for Testimonials header if you plan to use it
    // const [dynamicTestimonialsHeader, setDynamicTestimonialsHeader] = useState<any>(null);
    // Refs for animaciones al hacer scroll
    const categoriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const benefitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const brandsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const featuredProductsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Ref for new section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchData = {
                "Home.useEffect.fetchData": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicContentService"].getPageContent('home');
                        if (response && response.length > 0 && response[0].success && response[0].data && response[0].data.items) {
                            const sections = response[0].data.items;
                            // Process Hero Carousel
                            const heroContent = findApiSectionContent(sections, 'hero_carousel');
                            if (heroContent && heroContent.slides) {
                                setDynamicHeroSlides(heroContent.slides.map({
                                    "Home.useEffect.fetchData": (slide, index)=>{
                                        // Special handling for the second slide (maquinaria)
                                        if (index === 1) {
                                            return {
                                                id: Number(slide.id),
                                                title: slide.title || "Maquinaria pesada y equipos de construcción",
                                                ctaLink: slide.ctaLink || "/contact",
                                                ctaText: slide.ctaText || "Solicitar cotización",
                                                imageUrl: "/assets/images/hero/hero-2.jpg",
                                                subtitle: slide.subtitle || "Alquile la mejor maquinaria para su proyecto con servicio técnico incluido"
                                            };
                                        }
                                        return {
                                            id: Number(slide.id),
                                            title: slide.title || "Título por defecto",
                                            ctaLink: slide.ctaLink || "/",
                                            ctaText: slide.ctaText || "Ver más",
                                            imageUrl: isValidImageUrl(slide.imageUrl) ? slide.imageUrl : DEFAULT_IMAGES.hero[index % DEFAULT_IMAGES.hero.length],
                                            subtitle: slide.subtitle || "Subtítulo por defecto"
                                        };
                                    }
                                }["Home.useEffect.fetchData"]).filter({
                                    "Home.useEffect.fetchData": (slide)=>!isNaN(slide.id)
                                }["Home.useEffect.fetchData"]));
                            }
                            // Process Categories
                            const categoriesContent = findApiSectionContent(sections, 'categories');
                            if (categoriesContent && categoriesContent.items) {
                                setDynamicCategoriesData({
                                    title: categoriesContent.title || "Nuestros Equipos",
                                    subtitle: categoriesContent.subtitle || "Contamos con una amplia variedad de equipos para la construcción",
                                    items: categoriesContent.items.map({
                                        "Home.useEffect.fetchData": (cat)=>({
                                                id: cat.id,
                                                name: cat.name,
                                                description: cat.description,
                                                image: isValidImageUrl(cat.image) ? cat.image : getFallbackImage('categories', cat.id),
                                                specs: cat.specs.map({
                                                    "Home.useEffect.fetchData": (spec)=>({
                                                            text: spec.text
                                                        })
                                                }["Home.useEffect.fetchData"]),
                                                icon: categoryIcons[cat.id] || categoryIcons.default
                                            })
                                    }["Home.useEffect.fetchData"])
                                });
                            }
                            // Process Benefits
                            const benefitsContent = findApiSectionContent(sections, 'benefits');
                            if (benefitsContent && benefitsContent.items) {
                                setDynamicBenefitsData({
                                    title: benefitsContent.title || "¿Por qué elegirnos?",
                                    subtitle: "En Alquipos ofrecemos soluciones profesionales con equipos de alta calidad y servicio personalizado.",
                                    items: benefitsContent.items.map({
                                        "Home.useEffect.fetchData": (ben)=>({
                                                title: ben.title,
                                                description: ben.description,
                                                spec: ben.spec,
                                                icon: benefitIcons[ben.title] || benefitIcons.default
                                            })
                                    }["Home.useEffect.fetchData"])
                                });
                            }
                            // Process Brands
                            const brandsContent = findApiSectionContent(sections, 'brands');
                            if (brandsContent && brandsContent.items) {
                                setDynamicBrandsData({
                                    title: brandsContent.title || "Trabajamos con las Mejores Marcas",
                                    subtitle: "Ofrecemos equipos de las marcas más reconocidas y confiables del mercado",
                                    items: brandsContent.items.map({
                                        "Home.useEffect.fetchData": (brandAPI)=>({
                                                id: Number(brandAPI.id),
                                                name: brandAPI.name,
                                                logoUrl: isValidImageUrl(brandAPI.logoUrl) ? brandAPI.logoUrl : getFallbackImage('brands')
                                            })
                                    }["Home.useEffect.fetchData"]).filter({
                                        "Home.useEffect.fetchData": (brand)=>!isNaN(brand.id)
                                    }["Home.useEffect.fetchData"])
                                });
                            }
                            // Process Featured Products
                            const featuredProductsContent = findApiSectionContent(sections, 'featured_products');
                            if (featuredProductsContent && featuredProductsContent.items) {
                                setDynamicFeaturedProductsData({
                                    title: featuredProductsContent.title || "Productos Destacados",
                                    items: featuredProductsContent.items.map({
                                        "Home.useEffect.fetchData": (prod)=>({
                                                id: prod.id,
                                                name: prod.name,
                                                slug: prod.slug,
                                                image: isValidImageUrl(prod.image) ? prod.image : getFallbackImage('products'),
                                                price: prod.price,
                                                price_unit: prod.price_unit,
                                                short_description: prod.short_description,
                                                sale_price: prod.sale_price
                                            })
                                    }["Home.useEffect.fetchData"])
                                });
                            }
                            setImagesLoaded(true); // Indicate data is ready for hero carousel
                        } else {
                            console.error("Failed to fetch dynamic content or content is empty/invalid for 'home' page.");
                            setImagesLoaded(true); // Still show page, perhaps with placeholders or empty states
                        }
                    } catch (error) {
                        console.error("Error fetching dynamic page data for 'home':", error);
                        setImagesLoaded(true); // Allow UI to render even if data fetch fails
                    }
                }
            }["Home.useEffect.fetchData"];
            fetchData();
        }
    }["Home.useEffect"], []);
    // Control de visibilidad del navbar al hacer scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleScroll = {
                "Home.useEffect.handleScroll": ()=>{
                    const currentScrollPos = window.scrollY;
                    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
                    setPrevScrollPos(currentScrollPos);
                    setNavbarVisible(visible);
                    const navbar = document.querySelector('[class^="Navbar_navbar"]');
                    if (navbar) {
                        navbar.classList.toggle('Navbar_navBarHidden', !visible);
                    }
                    const sectionsToAnimate = [
                        {
                            ref: categoriesRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateSection
                        },
                        {
                            ref: benefitsRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateSection
                        },
                        {
                            ref: ctaRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateSection
                        },
                        {
                            ref: brandsRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateSection
                        },
                        {
                            ref: featuredProductsRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animateSection
                        } // Add new section to animation
                    ];
                    sectionsToAnimate.forEach({
                        "Home.useEffect.handleScroll": ({ ref, className })=>{
                            if (ref.current) {
                                const rect = ref.current.getBoundingClientRect();
                                const isVisible = rect.top < window.innerHeight * 0.75;
                                if (isVisible) {
                                    ref.current.classList.add(className);
                                }
                            }
                        }
                    }["Home.useEffect.handleScroll"]);
                }
            }["Home.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        prevScrollPos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
                children: imagesLoaded && dynamicHeroSlides.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    slides: dynamicHeroSlides
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 361,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselPlaceholder,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholderContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 365,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 364,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            dynamicCategoriesData && dynamicCategoriesData.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: categoriesRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoriesSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionToAnimate}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: dynamicCategoriesData.title || 'Nuestros Equipos'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                dynamicCategoriesData.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionSubtitle,
                                    children: dynamicCategoriesData.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoriesGrid,
                            children: dynamicCategoriesData.items.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/equipment?category=${category.id}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryImageContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryImage,
                                                children: [
                                                    category.icon,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryContent,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryTitle,
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryDescription,
                                                    children: category.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specsList,
                                                    children: category.specs.map((spec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specIcon,
                                                                    viewBox: "0 0 24 24",
                                                                    width: "12",
                                                                    height: "12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            fill: "none",
                                                                            stroke: "currentColor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 13l3 3 7-7",
                                                                            stroke: "currentColor",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 27
                                                                }, this),
                                                                spec.text
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, category.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this),
            dynamicBenefitsData && dynamicBenefitsData.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: benefitsRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionToAnimate}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: dynamicBenefitsData.title || '¿Por qué elegirnos?'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                dynamicBenefitsData.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionSubtitle,
                                    children: dynamicBenefitsData.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsGrid,
                            children: dynamicBenefitsData.items.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeInItem}`,
                                    style: {
                                        animationDelay: `${index * 0.15}s`
                                    },
                                    "data-spec": benefit.spec,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIconContainer,
                                            children: [
                                                benefit.icon,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                            children: benefit.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                            children: benefit.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 418,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: ctaRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionToAnimate}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaTitle,
                                children: "¿Listo para comenzar su proyecto?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaDescription,
                                children: "Contáctenos hoy mismo para obtener una cotización personalizada para su proyecto."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButtons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaPrimaryButton,
                                        children: "Solicitar cotización"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/equipment",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaSecondaryButton,
                                        children: "Ver equipos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            dynamicBrandsData && dynamicBrandsData.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: brandsRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandsSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionToAnimate}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: dynamicBrandsData.title || 'Trabajamos con las Mejores Marcas'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                dynamicBrandsData.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionSubtitle,
                                    children: dynamicBrandsData.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$BrandSlider$2f$BrandSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            brands: dynamicBrandsData.items
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 470,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 469,
                columnNumber: 9
            }, this),
            dynamicFeaturedProductsData && dynamicFeaturedProductsData.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: featuredProductsRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredProductsSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionToAnimate}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: dynamicFeaturedProductsData.title || 'Productos Destacados'
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 487,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 486,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsGrid,
                            children: [
                                " ",
                                dynamicFeaturedProductsData.items.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard,
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/product/${product.slug}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productLink,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImageContainer,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: isValidImageUrl(product.image) ? product.image : DEFAULT_IMAGES.products.default,
                                                            alt: product.name,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productShortDescription,
                                                                children: product.short_description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productPriceContainer,
                                                                children: [
                                                                    product.sale_price && product.sale_price < product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productSalePrice,
                                                                        children: [
                                                                            "$",
                                                                            product.sale_price.toLocaleString(),
                                                                            "/",
                                                                            product.price_unit
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: product.sale_price && product.sale_price < product.price ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productOriginalPrice : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productPrice,
                                                                        children: [
                                                                            "$",
                                                                            product.price.toLocaleString(),
                                                                            "/",
                                                                            product.price_unit
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 485,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 484,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_s(Home, "asoRP/ewjcuBktOMhB8vT/HuCP0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e21b8893._.js.map