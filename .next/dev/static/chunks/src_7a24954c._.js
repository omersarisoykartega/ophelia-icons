(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Advert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Advert = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 25",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Advert.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Advert.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Advert.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Advert.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Advert.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Advert.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21.132 17.232H2.86803C2.54403 17.232 2.28003 16.968 2.28003 16.644V5.48401C2.28003 4.04401 3.45603 2.86801 4.89603 2.86801H19.104C20.544 2.86801 21.72 4.04401 21.72 5.48401V16.644C21.72 16.968 21.456 17.232 21.132 17.232ZM3.45603 16.068H20.556V5.48401C20.556 4.69201 19.908 4.04401 19.116 4.04401H4.89603C4.10403 4.04401 3.45603 4.69201 3.45603 5.48401V16.068ZM21.132 19.248H2.86803C2.54403 19.248 2.28003 18.984 2.28003 18.66C2.28003 18.336 2.54403 18.072 2.86803 18.072H21.132C21.456 18.072 21.72 18.336 21.72 18.66C21.72 18.984 21.456 19.248 21.132 19.248Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Advert.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 22.332C11.664 22.332 11.388 22.056 11.388 21.72V18.66C11.388 18.324 11.664 18.048 12 18.048C12.336 18.048 12.612 18.324 12.612 18.66V21.72C12.612 22.056 12.336 22.332 12 22.332ZM6.68403 12.42L8.32803 8.016C8.47203 7.596 8.76003 7.368 9.18003 7.356C9.57603 7.38 9.87603 7.596 10.068 8.016L11.652 12.42C11.676 12.564 11.688 12.672 11.724 12.744C11.7 13.068 11.508 13.224 11.148 13.224C10.824 13.224 10.632 13.092 10.548 12.84L10.32 12.084H8.08803L7.83603 12.84C7.72803 13.092 7.52403 13.224 7.23603 13.224C6.87603 13.224 6.68403 13.056 6.66003 12.72V12.48C6.67203 12.456 6.68403 12.432 6.68403 12.42ZM9.19203 8.616L8.43603 10.956H9.96003L9.19203 8.616ZM12.516 12.612V8.04C12.54 7.68 12.744 7.476 13.116 7.44H14.484C16.308 7.524 17.256 8.508 17.34 10.392C17.232 12.192 16.308 13.128 14.544 13.212H13.152C12.732 13.188 12.516 12.984 12.516 12.612ZM13.728 8.544V12.096H14.556C15.504 12.072 16.02 11.496 16.068 10.356C16.044 9.168 15.504 8.568 14.448 8.544H13.728Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Advert.tsx",
                        lineNumber: 140,
                        columnNumber: 601
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Advert.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Advert.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Advert;
const __TURBOPACK__default__export__ = Advert;
var _c;
__turbopack_context__.k.register(_c, "Advert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Eye.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Eye = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 21 15",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Eye.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Eye.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Eye.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Eye.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Eye.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Eye.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.09 7.42915C13.09 8.71894 12.0154 9.76451 10.69 9.76451C9.36448 9.76451 8.28997 8.71894 8.28997 7.42915C8.28997 6.13937 9.36448 5.0938 10.69 5.0938C12.0154 5.0938 13.09 6.13937 13.09 7.42915Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Eye.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Eye.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Eye.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Eye;
const __TURBOPACK__default__export__ = Eye;
var _c;
__turbopack_context__.k.register(_c, "Eye");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Profile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Profile = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Profile.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Profile.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Profile.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Profile.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Profile.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Profile.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.4351 15.1738C16.7735 15.1738 20.4347 15.8789 20.4351 18.5986C20.4351 21.3197 16.7497 22 12.4351 22C8.09755 22 4.43524 21.295 4.43506 18.5752C4.43506 15.8542 8.12045 15.1738 12.4351 15.1738ZM12.4351 2C15.3741 2 17.729 4.35401 17.729 7.29102C17.729 10.228 15.3742 12.583 12.4351 12.583C9.49696 12.583 7.14111 10.228 7.14111 7.29102C7.14114 4.35401 9.49697 2 12.4351 2Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Profile.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Profile.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Profile.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Profile;
const __TURBOPACK__default__export__ = Profile;
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ArrowDown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ArrowDown = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowDown.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowDown.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowDown.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowDown.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArrowDown.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowDown.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M18.6065 13.2L12.4351 19.2M12.4351 19.2L6.26367 13.2M12.4351 19.2L12.4351 4.8",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ArrowDown.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowDown.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArrowDown.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArrowDown;
const __TURBOPACK__default__export__ = ArrowDown;
var _c;
__turbopack_context__.k.register(_c, "ArrowDown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ArrowLeft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ArrowLeft = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowLeft.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowLeft.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowLeft.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowLeft.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArrowLeft.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowLeft.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11.2684 18L5.43506 12M5.43506 12L11.2684 6M5.43506 12H19.4351",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ArrowLeft.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowLeft.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArrowLeft.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArrowLeft;
const __TURBOPACK__default__export__ = ArrowLeft;
var _c;
__turbopack_context__.k.register(_c, "ArrowLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ArrowRight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ArrowRight = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowRight.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowRight.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowRight.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowRight.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArrowRight.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowRight.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13.6017 6L19.4351 12M19.4351 12L13.6017 18M19.4351 12L5.43506 12",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ArrowRight.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowRight.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArrowRight.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArrowRight;
const __TURBOPACK__default__export__ = ArrowRight;
var _c;
__turbopack_context__.k.register(_c, "ArrowRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ArrowUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ArrowUp = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowUp.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowUp.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowUp.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArrowUp.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArrowUp.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowUp.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6.26367 10.8L12.4351 4.8M12.4351 4.8L18.6065 10.8M12.4351 4.8V19.2",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ArrowUp.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ArrowUp.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArrowUp.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArrowUp;
const __TURBOPACK__default__export__ = ArrowUp;
var _c;
__turbopack_context__.k.register(_c, "ArrowUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Check.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Check = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 20 21",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Check.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Check.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Check.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Check.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Check.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Check.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.1632 7.02326L8.16325 17.0233C8.07615 17.1107 7.97266 17.18 7.8587 17.2273C7.74475 17.2746 7.62257 17.299 7.49918 17.299C7.3758 17.299 7.25362 17.2746 7.13967 17.2273C7.02571 17.18 6.92222 17.1107 6.83512 17.0233L2.46012 12.6483C2.37292 12.5611 2.30374 12.4575 2.25655 12.3436C2.20935 12.2296 2.18506 12.1075 2.18506 11.9842C2.18506 11.8609 2.20935 11.7387 2.25655 11.6248C2.30374 11.5109 2.37292 11.4073 2.46012 11.3201C2.54733 11.2329 2.65086 11.1638 2.7648 11.1166C2.87874 11.0694 3.00086 11.0451 3.12418 11.0451C3.24751 11.0451 3.36963 11.0694 3.48357 11.1166C3.59751 11.1638 3.70104 11.2329 3.78825 11.3201L7.49997 15.0319L16.8367 5.69669C17.0128 5.52057 17.2517 5.42163 17.5007 5.42163C17.7498 5.42163 17.9887 5.52057 18.1648 5.69669C18.3409 5.87281 18.4399 6.11169 18.4399 6.36076C18.4399 6.60983 18.3409 6.8487 18.1648 7.02482L18.1632 7.02326Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Check.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Check.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Check.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Check;
const __TURBOPACK__default__export__ = Check;
var _c;
__turbopack_context__.k.register(_c, "Check");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChevronDown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ChevronDown = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronDown.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronDown.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronDown.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronDown.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChevronDown.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronDown.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M16.8 9.59999L12 14.4L7.20005 9.59999",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChevronDown.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronDown.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChevronDown.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChevronDown;
const __TURBOPACK__default__export__ = ChevronDown;
var _c;
__turbopack_context__.k.register(_c, "ChevronDown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChevronLeft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ChevronLeft = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronLeft.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronLeft.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronLeft.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronLeft.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChevronLeft.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronLeft.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M14.4 16.8L9.59998 12L14.4 7.2",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChevronLeft.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronLeft.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChevronLeft.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChevronLeft;
const __TURBOPACK__default__export__ = ChevronLeft;
var _c;
__turbopack_context__.k.register(_c, "ChevronLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChevronRight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ChevronRight = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronRight.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronRight.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronRight.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronRight.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChevronRight.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronRight.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9.60002 7.2L14.4 12L9.60002 16.8",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChevronRight.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronRight.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChevronRight.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChevronRight;
const __TURBOPACK__default__export__ = ChevronRight;
var _c;
__turbopack_context__.k.register(_c, "ChevronRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChevronUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ChevronUp = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronUp.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronUp.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronUp.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChevronUp.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChevronUp.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronUp.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7.19995 14.4L12 9.6L16.8 14.4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChevronUp.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChevronUp.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChevronUp.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChevronUp;
const __TURBOPACK__default__export__ = ChevronUp;
var _c;
__turbopack_context__.k.register(_c, "ChevronUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Menu = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 20 17",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Menu.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Menu.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Menu.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M1 1H10",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M1 8.20001L19 8.20001",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 140,
                        columnNumber: 189
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M10 15.4H19",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 140,
                        columnNumber: 383
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Menu.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Png.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Png = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 49 48",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Png.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Png.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Png.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Png.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Png.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Png.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.05 27H9.05005C8.65222 27 8.27069 27.158 7.98939 27.4393C7.70808 27.7206 7.55005 28.1022 7.55005 28.5V39C7.55005 39.3978 7.70808 39.7794 7.98939 40.0607C8.27069 40.342 8.65222 40.5 9.05005 40.5C9.44787 40.5 9.8294 40.342 10.1107 40.0607C10.392 39.7794 10.55 39.3978 10.55 39V37.5H12.05C13.4424 37.5 14.7778 36.9469 15.7624 35.9623C16.7469 34.9777 17.3 33.6424 17.3 32.25C17.3 30.8576 16.7469 29.5223 15.7624 28.5377C14.7778 27.5531 13.4424 27 12.05 27ZM12.05 34.5H10.55V30H12.05C12.6468 30 13.2191 30.2371 13.641 30.659C14.063 31.081 14.3 31.6533 14.3 32.25C14.3 32.8467 14.063 33.419 13.641 33.841C13.2191 34.2629 12.6468 34.5 12.05 34.5ZM42.8 37.6631C42.8 38.0495 42.6509 38.4209 42.3838 38.7C41.8615 39.2622 41.2299 39.7119 40.5277 40.0214C39.8255 40.3309 39.0674 40.4938 38.3 40.5C34.9907 40.5 32.3 37.4719 32.3 33.75C32.3 30.0281 34.9907 27 38.3 27C39.4026 27.0037 40.4788 27.3374 41.39 27.9581C41.72 28.1819 41.9475 28.5276 42.0226 28.9191C42.0977 29.3107 42.0141 29.716 41.7904 30.0459C41.5666 30.3759 41.2209 30.6034 40.8294 30.6785C40.4378 30.7536 40.0325 30.67 39.7025 30.4463C39.2911 30.1588 38.802 30.0032 38.3 30C36.6463 30 35.3 31.6875 35.3 33.75C35.3 35.8125 36.6463 37.5 38.3 37.5C38.8416 37.494 39.3671 37.3153 39.8 36.99V36C39.4022 36 39.0207 35.842 38.7394 35.5607C38.4581 35.2794 38.3 34.8978 38.3 34.5C38.3 34.1022 38.4581 33.7206 38.7394 33.4393C39.0207 33.158 39.4022 33 39.8 33H41.3C41.6979 33 42.0794 33.158 42.3607 33.4393C42.642 33.7206 42.8 34.1022 42.8 34.5V37.6631ZM30.05 28.5V39C30.0501 39.3179 29.9491 39.6276 29.7618 39.8844C29.5744 40.1412 29.3103 40.3318 29.0075 40.4287C28.8597 40.4763 28.7053 40.5003 28.55 40.5C28.3113 40.5 28.076 40.443 27.8637 40.3338C27.6514 40.2245 27.4682 40.0662 27.3294 39.8719L22.55 33.1875V39C22.55 39.3978 22.392 39.7794 22.1107 40.0607C21.8294 40.342 21.4479 40.5 21.05 40.5C20.6522 40.5 20.2707 40.342 19.9894 40.0607C19.7081 39.7794 19.55 39.3978 19.55 39V28.5C19.55 28.1822 19.651 27.8726 19.8383 27.6158C20.0256 27.3591 20.2896 27.1685 20.5923 27.0715C20.8949 26.9745 21.2206 26.9762 21.5222 27.0762C21.8239 27.1762 22.086 27.3695 22.2707 27.6281L27.05 34.3125V28.5C27.05 28.1022 27.2081 27.7206 27.4894 27.4393C27.7707 27.158 28.1522 27 28.55 27C28.9479 27 29.3294 27.158 29.6107 27.4393C29.892 27.7206 30.05 28.1022 30.05 28.5ZM9.80005 22.5C10.1979 22.5 10.5794 22.342 10.8607 22.0607C11.142 21.7794 11.3 21.3978 11.3 21V7.5H27.8V16.5C27.8 16.8978 27.9581 17.2794 28.2394 17.5607C28.5207 17.842 28.9022 18 29.3 18H38.3V21C38.3 21.3978 38.4581 21.7794 38.7394 22.0607C39.0207 22.342 39.4022 22.5 39.8 22.5C40.1979 22.5 40.5794 22.342 40.8607 22.0607C41.142 21.7794 41.3 21.3978 41.3 21V16.5C41.3002 16.303 41.2615 16.1078 41.1863 15.9257C41.111 15.7436 41.0005 15.5782 40.8613 15.4388L30.3613 4.93875C30.2219 4.7995 30.0564 4.68908 29.8743 4.6138C29.6922 4.53851 29.4971 4.49985 29.3 4.5H11.3C10.5044 4.5 9.74134 4.81607 9.17873 5.37868C8.61612 5.94129 8.30005 6.70435 8.30005 7.5V21C8.30005 21.3978 8.45808 21.7794 8.73939 22.0607C9.02069 22.342 9.40222 22.5 9.80005 22.5ZM30.8 9.62063L36.1794 15H30.8V9.62063Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Png.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Png.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Png.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Png;
const __TURBOPACK__default__export__ = Png;
var _c;
__turbopack_context__.k.register(_c, "Png");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Revenue.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Revenue = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Revenue.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Revenue.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Revenue.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Revenue.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Revenue.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.63506 16.5C8.03288 16.5 8.41441 16.342 8.69572 16.0607C8.97702 15.7794 9.13506 15.3978 9.13506 15C9.13506 14.6022 8.97702 14.2206 8.69572 13.9393C8.41441 13.658 8.03288 13.5 7.63506 13.5C7.23723 13.5 6.8557 13.658 6.5744 13.9393C6.29309 14.2206 6.13506 14.6022 6.13506 15C6.13506 15.3978 6.29309 15.7794 6.5744 16.0607C6.8557 16.342 7.23723 16.5 7.63506 16.5ZM21.7546 5.25L6.83556 3C6.18306 3 5.43456 3.672 5.43456 4.5V6.75H3.33456C2.56206 6.75 1.93506 7.422 1.93506 8.25V21C1.93506 21.828 2.56206 22.5 3.33456 22.5H21.5356C22.3081 22.5 22.9351 21.828 22.9351 21V6.75C22.9351 5.922 22.4056 5.25 21.7546 5.25ZM3.33456 21H21.5356V8.25H3.33456V21ZM6.83556 6.75V4.5L21.5356 6.75H6.83556Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Revenue.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Revenue.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Revenue.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Revenue;
const __TURBOPACK__default__export__ = Revenue;
var _c;
__turbopack_context__.k.register(_c, "Revenue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Search = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Search.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Search.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Search.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Search.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Search.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Search.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.4 20.4L16.0551 16.0552M3.59998 10.8414C3.59998 6.84208 6.84205 3.60001 10.8414 3.60001C14.8407 3.60001 18.0827 6.84208 18.0827 10.8414C18.0827 14.8407 14.8407 18.0828 10.8414 18.0828C6.84205 18.0828 3.59998 14.8407 3.59998 10.8414Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Search.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Search.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Search.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SignUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const SignUp = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 25 17",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SignUp.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/SignUp.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUp.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUp.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignUp.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SignUp.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        clipPath: "url(#clip0_231_1239)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.72177 6.49018H5.33872V2.859H3.94152V6.49018H0.747559V8.05679H3.94152V11.688H5.33872V8.05679H8.7175V6.49018H8.72177ZM19.3355 7.66235C19.7411 7.63422 20.1371 7.52605 20.5007 7.34411C20.8643 7.16216 21.1883 6.91003 21.454 6.60226C21.8219 6.22998 22.1055 5.78301 22.2856 5.29161C22.4657 4.8002 22.5381 4.27583 22.4979 3.754C22.4578 3.23218 22.306 2.72507 22.0528 2.26701C21.7996 1.80895 21.451 1.41063 21.0305 1.09903C20.4596 0.767685 19.8273 0.555935 19.172 0.476654C18.5167 0.397373 17.8522 0.452219 17.2188 0.637855C17.7306 1.03176 18.131 1.55227 18.3803 2.14807C18.6297 2.74387 18.7195 3.39438 18.6408 4.03545C18.6567 4.69721 18.508 5.35257 18.2079 5.94262C17.9079 6.53267 17.466 7.03894 16.9219 7.41594C17.6918 7.70437 18.5228 7.79068 19.3355 7.66663V7.66235ZM14.0599 7.66235C14.8989 7.66173 15.7117 7.37024 16.36 6.83753C17.0082 6.30483 17.4516 5.56387 17.6148 4.74088C17.778 3.91788 17.6508 3.06377 17.2549 2.32403C16.859 1.5843 16.2189 1.0047 15.4436 0.683989C14.6683 0.363273 13.8058 0.321274 13.003 0.565147C12.2002 0.80902 11.5068 1.32368 11.0409 2.02145C10.575 2.71922 10.3654 3.55694 10.4478 4.39189C10.5303 5.22685 10.8997 6.00739 11.4931 6.60055C11.8298 6.93801 12.2299 7.20554 12.6704 7.38777C13.111 7.57 13.5832 7.66331 14.0599 7.66235ZM20.0294 10.8803C21.3188 11.6734 22.5192 12.2817 22.5192 13.7115V16.1337H24.7566V13.7132C24.7566 11.8514 21.8801 10.1196 20.0311 10.882L20.0294 10.8803ZM14.059 10.0786C11.6377 10.0786 6.79667 11.291 6.79667 13.7115V16.1337H21.3231V13.714C21.3231 11.2927 16.4795 10.0829 14.0599 10.0829L14.059 10.0786Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUp.tsx",
                            lineNumber: 140,
                            columnNumber: 44
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignUp.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "SignUp-clip0_231_1239",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                transform: "translate(0.747559 0.399994)",
                                d: "M0 0H24V15.7337H0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SignUp.tsx",
                                lineNumber: 140,
                                columnNumber: 1676
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUp.tsx",
                            lineNumber: 140,
                            columnNumber: 1639
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignUp.tsx",
                        lineNumber: 140,
                        columnNumber: 1633
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignUp.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SignUp.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SignUp;
const __TURBOPACK__default__export__ = SignUp;
var _c;
__turbopack_context__.k.register(_c, "SignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/X.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const X = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 20 21",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/X.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/X.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/X.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/X.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/X.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/X.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.2882 15.6967C16.4644 15.8728 16.5633 16.1117 16.5633 16.3608C16.5633 16.6099 16.4644 16.8487 16.2882 17.0248C16.1121 17.201 15.8733 17.2999 15.6242 17.2999C15.3751 17.2999 15.1362 17.201 14.9601 17.0248L9.99997 12.0631L5.03825 17.0233C4.86213 17.1994 4.62326 17.2983 4.37418 17.2983C4.12511 17.2983 3.88624 17.1994 3.71012 17.0233C3.534 16.8472 3.43506 16.6083 3.43506 16.3592C3.43506 16.1101 3.534 15.8713 3.71012 15.6952L8.67184 10.735L3.71168 5.77328C3.53556 5.59716 3.43662 5.35829 3.43662 5.10922C3.43662 4.86015 3.53556 4.62128 3.71168 4.44516C3.8878 4.26904 4.12668 4.17009 4.37575 4.17009C4.62482 4.17009 4.86369 4.26904 5.03981 4.44516L9.99997 9.40687L14.9617 4.44438C15.1378 4.26825 15.3767 4.16931 15.6257 4.16931C15.8748 4.16931 16.1137 4.26825 16.2898 4.44438C16.4659 4.6205 16.5649 4.85937 16.5649 5.10844C16.5649 5.35751 16.4659 5.59638 16.2898 5.7725L11.3281 10.735L16.2882 15.6967Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/X.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/X.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/X.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = X;
const __TURBOPACK__default__export__ = X;
var _c;
__turbopack_context__.k.register(_c, "X");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CombinedShape.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const CombinedShape = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 3 15",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/CombinedShape.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/CombinedShape.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/CombinedShape.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/CombinedShape.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CombinedShape.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CombinedShape.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.5",
                    d: "M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5ZM3 7.16699C2.99982 7.99527 2.32832 8.66699 1.5 8.66699C0.671681 8.66699 0.000175953 7.99527 0 7.16699C0 6.33856 0.671573 5.66699 1.5 5.66699C2.32843 5.66699 3 6.33856 3 7.16699ZM3 12.833C3 13.6614 2.32843 14.333 1.5 14.333C0.671573 14.333 0 13.6614 0 12.833C0.000175714 12.0047 0.671681 11.333 1.5 11.333C2.32832 11.333 2.99982 12.0047 3 12.833Z",
                    fill: "currentColor",
                    fillOpacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/CombinedShape.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CombinedShape.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CombinedShape.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CombinedShape;
const __TURBOPACK__default__export__ = CombinedShape;
var _c;
__turbopack_context__.k.register(_c, "CombinedShape");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Flag1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Flag1 = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Flag1.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Flag1.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Flag1.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Flag1.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Flag1.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Flag1.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.75 13.0373V5.24325L16.839 5.25075L14.0182 9.14025L16.8397 13.0313L6.75 13.0373ZM18.477 12.7343L15.8715 9.14025L18.477 5.54625C18.7627 5.15175 18.8175 4.71075 18.6262 4.33725C18.4357 3.96375 18.0465 3.75 17.5582 3.75H6.7515C6.35452 3.7494 5.97351 3.90627 5.69203 4.1862C5.41055 4.46614 5.25159 4.84628 5.25 5.24325V20.25C5.25 20.4489 5.32902 20.6397 5.46967 20.7803C5.61032 20.921 5.80109 21 6 21C6.19891 21 6.38968 20.921 6.53033 20.7803C6.67098 20.6397 6.75 20.4489 6.75 20.25V14.5313H17.5582C18.0495 14.5313 18.441 14.3175 18.6307 13.9448C18.8205 13.5728 18.765 13.131 18.477 12.7343Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/Flag1.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Flag1.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Flag1.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Flag1;
const __TURBOPACK__default__export__ = Flag1;
var _c;
__turbopack_context__.k.register(_c, "Flag1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Like.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Like = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 16 16",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Like.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Like.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Like.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Like.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Like.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Like.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.12109 0C9.6597 0 10.1022 0.426572 10.1211 0.964844L10.2598 4.92285H13.5703C14.6748 4.92285 15.5702 5.81839 15.5703 6.92285C15.5703 7.0518 15.558 7.18107 15.5332 7.30762L14.1484 14.3838C13.9647 15.3224 13.142 16 12.1855 16H5C4.40248 16 3.86648 15.7377 3.5 15.3223C3.13434 15.7377 2.59757 16 2 16C0.89543 16 0 15.1046 0 14V7C0 5.89543 0.89543 5 2 5C2.57935 5 3.10154 5.246 3.4668 5.63965C3.83285 5.20172 4.38387 4.92285 5 4.92285H5.79297L7.47559 0.634766C7.62582 0.251917 7.99498 2.68589e-05 8.40625 0H9.12109ZM2 6C1.48716 6 1.0646 6.38645 1.00684 6.88379L1 7V14C1 14.5523 1.44772 15 2 15C2.51284 15 2.9354 14.6135 2.99316 14.1162L3 14V7C3 6.44772 2.55228 6 2 6ZM6.72363 5.28809C6.58844 5.63266 6.27603 5.87173 5.91504 5.91602L5.79297 5.92285H5C4.48716 5.92285 4.0646 6.3093 4.00684 6.80664L4 6.92285V14C4 14.5128 4.38645 14.9354 4.88379 14.9932L5 15H12.1855C12.6239 15 13.0063 14.7156 13.1377 14.3066L13.167 14.1924L14.5518 7.11523C14.5641 7.05196 14.5703 6.98733 14.5703 6.92285C14.5702 6.4102 14.1846 5.98756 13.6875 5.92969L13.5703 5.92285H10.2598C9.7597 5.92277 9.34262 5.55476 9.27051 5.07129L9.26074 4.95801L9.12109 1H8.40625L6.72363 5.28809Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Like.tsx",
                        lineNumber: 140,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Like.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Like.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Like.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Like;
const __TURBOPACK__default__export__ = Like;
var _c;
__turbopack_context__.k.register(_c, "Like");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Spinner = ({ // Boyut
size = 24, width, height, // Renk ve stil
color, secondaryColor, variant = 'filled', // Stroke ayarları
strokeWidth = 1.5, strokeLinecap = 'round', strokeLinejoin = 'round', // Transformasyon
rotate = 0, mirrored = false, flipped = false, // Animasyon
spin = false, pulse = false, bounce = false, // Erişilebilirlik
title, description, // Görünürlük
visible = true, opacity, className = "", style, ...rest })=>{
    const w = width ?? size;
    const h = height ?? size;
    // Transform hesaplama
    const transforms = [];
    if (rotate) transforms.push(`rotate(${rotate}deg)`);
    if (mirrored) transforms.push('scaleX(-1)');
    if (flipped) transforms.push('scaleY(-1)');
    // Animasyon sınıfları
    const animationClasses = [];
    if (spin) animationClasses.push('animate-spin');
    if (pulse) animationClasses.push('animate-pulse');
    if (bounce) animationClasses.push('animate-bounce');
    const styles = {
        color,
        opacity: visible ? opacity : 0,
        transform: transforms.length ? transforms.join(' ') : undefined,
        ...style
    };
    // Variant'a göre fill/stroke ayarları
    const isOutlined = variant === 'outlined';
    const isDuotone = variant === 'duotone';
    const isLinear = variant === 'linear';
    const fillValue = isOutlined || isLinear ? 'none' : 'currentColor';
    const strokeValue = isOutlined || isLinear ? 'currentColor' : 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: fillValue,
        stroke: strokeValue,
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        xmlns: "http://www.w3.org/2000/svg",
        className: [
            ...animationClasses,
            className
        ].filter(Boolean).join(" "),
        style: styles,
        "aria-hidden": title ? undefined : true,
        role: title ? "img" : "presentation",
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Spinner.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/Spinner.tsx",
                lineNumber: 130,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            isDuotone && secondaryColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "duotone-${compName}",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color || 'currentColor'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Spinner.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: secondaryColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/Spinner.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Spinner.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Spinner.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: isDuotone ? `url(#duotone-${compName})` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        strokeWidth: "4",
                        stroke: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Spinner.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Spinner.tsx",
                        lineNumber: 140,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Spinner.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Spinner.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Spinner;
const __TURBOPACK__default__export__ = Spinner;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Advert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Advert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Eye$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Eye.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Profile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Check$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Check.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Png$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Png.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Revenue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Revenue.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$X$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/X.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CombinedShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CombinedShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flag1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Flag1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Like$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Like.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Spinner.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Advert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Advert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ArrowDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ArrowUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Check$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ChevronUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "CombinedShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CombinedShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Eye$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Flag1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flag1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Like",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Like$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Png",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Png$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Profile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Revenue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Revenue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "SignUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Spinner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$X$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Advert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Advert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Eye$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Eye.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Profile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArrowUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArrowUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Check$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Check.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChevronUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChevronUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Png$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Png.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Revenue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Revenue.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$X$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/X.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CombinedShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CombinedShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flag1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Flag1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Like$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Like.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Spinner.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/icons-preview/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IconsPreviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const allIcons = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__).filter(([, value])=>typeof value === "function");
function IconsPreviewPage() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(32);
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#262626");
    const [secondaryColor, setSecondaryColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#F62829");
    const [variant, setVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("filled");
    const [strokeWidth, setStrokeWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.5);
    const [rotate, setRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mirrored, setMirrored] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flipped, setFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spin, setSpin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pulse, setPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bounce, setBounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showCode, setShowCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedIcon, setCopiedIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IconsPreviewPage.useMemo[filtered]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return allIcons;
            return allIcons.filter({
                "IconsPreviewPage.useMemo[filtered]": ([name])=>name.toLowerCase().includes(q)
            }["IconsPreviewPage.useMemo[filtered]"]);
        }
    }["IconsPreviewPage.useMemo[filtered]"], [
        query
    ]);
    const copyToClipboard = async (iconName)=>{
        const iconCode = `import { ${iconName} } from "./src/components";

<${iconName}
  size={${size}}
  color="${color}"
  variant="${variant}"
  strokeWidth={${strokeWidth}}
  rotate={${rotate}}
  mirrored={${mirrored}}
  flipped={${flipped}}
  spin={${spin}}
  pulse={${pulse}}
  bounce={${bounce}}
  opacity={${opacity}}
  ${secondaryColor ? `secondaryColor="${secondaryColor}"` : ''}
  title="${iconName} icon"
/>`;
        try {
            await navigator.clipboard.writeText(iconCode);
            setCopiedIcon(iconName);
            setTimeout(()=>setCopiedIcon(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white dark:bg-black text-black dark:text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "🎨 Ophelia Icons Library"
                        }, void 0, false, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: showCode,
                                            onChange: (e)=>setShowCode(e.target.checked),
                                            className: "rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "Show Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: [
                                        filtered.length,
                                        " icons"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/icons-preview/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Search Icons"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    placeholder: "Search by name...",
                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Size: ",
                                        size,
                                        "px"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 12,
                                    max: 128,
                                    value: size,
                                    onChange: (e)=>setSize(parseInt(e.target.value, 10)),
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Variant"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: variant,
                                    onChange: (e)=>setVariant(e.target.value),
                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "filled",
                                            children: "Filled"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "outlined",
                                            children: "Outlined"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "duotone",
                                            children: "Duotone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "linear",
                                            children: "Linear"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Primary Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: color,
                                            onChange: (e)=>setColor(e.target.value),
                                            className: "w-12 h-10 rounded border border-gray-300 dark:border-zinc-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: color,
                                            onChange: (e)=>setColor(e.target.value),
                                            className: "flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        variant === 'duotone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Secondary Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: secondaryColor,
                                            onChange: (e)=>setSecondaryColor(e.target.value),
                                            className: "w-12 h-10 rounded border border-gray-300 dark:border-zinc-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: secondaryColor,
                                            onChange: (e)=>setSecondaryColor(e.target.value),
                                            className: "flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        (variant === 'outlined' || variant === 'linear') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Stroke Width: ",
                                        strokeWidth
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0.5,
                                    max: 4,
                                    step: 0.1,
                                    value: strokeWidth,
                                    onChange: (e)=>setStrokeWidth(parseFloat(e.target.value)),
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Transform"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Rotate",
                                            value: rotate,
                                            onChange: (e)=>setRotate(parseInt(e.target.value || "0", 10)),
                                            className: "px-2 py-1 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMirrored(!mirrored),
                                                    className: `px-2 py-1 rounded text-xs ${mirrored ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-zinc-700'}`,
                                                    children: "↔️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFlipped(!flipped),
                                                    className: `px-2 py-1 rounded text-xs ${flipped ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-zinc-700'}`,
                                                    children: "↕️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: "Animations"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: spin,
                                                    onChange: (e)=>setSpin(e.target.checked),
                                                    className: "rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "Spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: pulse,
                                                    onChange: (e)=>setPulse(e.target.checked),
                                                    className: "rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "Pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: bounce,
                                                    onChange: (e)=>setBounce(e.target.checked),
                                                    className: "rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "Bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/icons-preview/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Opacity: ",
                                        opacity
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: 0.1,
                                    value: opacity,
                                    onChange: (e)=>setOpacity(parseFloat(e.target.value)),
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/icons-preview/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",
                    children: filtered.map(([name, Comp])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group border border-gray-200 dark:border-zinc-800 rounded-lg p-4 flex flex-col items-center gap-3 bg-white dark:bg-zinc-900 hover:shadow-lg transition-all duration-200 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
                                        size: size,
                                        color: color,
                                        secondaryColor: variant === 'duotone' ? secondaryColor : undefined,
                                        variant: variant,
                                        strokeWidth: strokeWidth,
                                        rotate: rotate,
                                        mirrored: mirrored,
                                        flipped: flipped,
                                        spin: spin,
                                        pulse: pulse,
                                        bounce: bounce,
                                        opacity: opacity,
                                        className: "transition-colors group-hover:text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/icons-preview/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-center break-words leading-tight opacity-80 font-mono",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>copyToClipboard(name),
                                    className: "absolute top-2 right-2 p-1 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors opacity-0 group-hover:opacity-100",
                                    title: "Copy code",
                                    children: copiedIcon === name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500 text-xs",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/icons-preview/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-xs",
                                        children: "📋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/icons-preview/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                showCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 bg-black text-white text-xs p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity max-h-32 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "whitespace-pre-wrap",
                                        children: `<${name}
  size={${size}}
  color="${color}"
  variant="${variant}"${variant === 'duotone' ? `\n  secondaryColor="${secondaryColor}"` : ''}${variant === 'outlined' || variant === 'linear' ? `\n  strokeWidth={${strokeWidth}}` : ''}
  rotate={${rotate}}
  mirrored={${mirrored}}
  flipped={${flipped}}
  spin={${spin}}
  pulse={${pulse}}
  bounce={${bounce}}
  opacity={${opacity}}
/>`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/icons-preview/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/icons-preview/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, name, true, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/icons-preview/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center opacity-70 py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xl font-medium mb-2",
                            children: "No icons found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500",
                            children: "Try a different search term"
                        }, void 0, false, {
                            fileName: "[project]/src/app/icons-preview/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/icons-preview/page.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/icons-preview/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/icons-preview/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(IconsPreviewPage, "FIYyV6gQ+4Xq0xAFzuPVzMfJAeo=");
_c = IconsPreviewPage;
var _c;
__turbopack_context__.k.register(_c, "IconsPreviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7a24954c._.js.map