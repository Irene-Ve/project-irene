import Padding from "./Padding";
import React, { useState } from "react";

const margin = [
  { id: 1, name: "m" },
  { id: 2, name: "ml" },
  { id: 3, name: "mr" },
  { id: 4, name: "mt" },
  { id: 5, name: "mb" },
  { id: 6, name: "mx" },
  { id: 7, name: "my" },
];

const padding = [
  { id: 1, name: "p" },
  { id: 2, name: "pl" },
  { id: 3, name: "pr" },
  { id: 4, name: "pt" },
  { id: 5, name: "pb" },
  { id: 6, name: "px" },
  { id: 7, name: "py" },
];

const spacing = [
  { id: 1, name: "space-x" } /* space-x-0 ,1,2,3,4,5,6,7,8,9,10,11,12,14,16,20,
    24,28,32,36,40,44,48,52,56,60,64,72,80,96, 0.5, 1.5, 2.5, 3.5 ,reverse,px */,
  { id: 2, name: "space-y" } /* come sopra */,
];

const flex = [
  { id: 1, name: "basis" } /* basis-0 ,1,2,3,4,5,6,7,8,9,10,11,12,14,16,20,
    24,28,32,36,40,44,48,52,56,60,64,72,80,96, auto, px, 0.5, 1.5, 2.5, 3.5,
    1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6,
    1/12, 2/12, 3/12, 4/12, 5/12, 6/12, 7/12, 8/12, 9/12, 10/12, 11/12, full */,
  { id: 2, name: "flex-row" } /* id: 2,3,4,5 si escludono a vicenda */,
  { id: 3, name: "flex-row-reverse" },
  { id: 4, name: "flex-col" },
  { id: 5, name: "flex-col-reverse" },
  { id: 6, name: "flex-wrap" } /* id: 6,7,8 si escludono a vicenda */,
  { id: 7, name: "flex-wrap-reverse" },
  { id: 8, name: "flex-nowrap" },
  { id: 9, name: "flex-1" } /* id: 9,10,11,12 si escludono a vicenda */,
  { id: 10, name: "flex-auto" },
  { id: 11, name: "flex-initial" },
  { id: 12, name: "flex-none" },
  { id: 13, name: "grow" } /* grow-0, grow(nulla 1) */,
  { id: 14, name: "shrink" } /* shrink-0, shrink(nulla) */,

  {
    id: 15,
    name: "order",
  } /* order-0 ,1,2,3,4,5,6,7,8,9,10,11,12,first,last,none*/,
  {
    id: 16,
    name: "gap",
  } /* x-numero(col gap), y-numero(row gap), gap-soloNumero */,
  {
    id: 17,
    name: "gap",
  } /* x-numero(col gap), y-numero(row gap), gap-soloNumero */,
  {
    id: 18,
    name: "justify",
  } /* start, end, center, between, around, evenly (RATIO BUTTON?) */,
  { id: 19, name: "self" } /* auto, start, end, center, stretch, baseline */,
];

const grid = [
  { id: 1, name: "grid-cols" } /* grid-cols-1,2,3,4,5,6,7,8,9,10,11,12, none */,
  { id: 2, name: "col-auto" } /* Grid Column Start/End */,
  { id: 3, name: "col-span", values: ["1","2","3"] }, /* col-span-1,2,3,4,5,6,7,8,9,10,11,12, full */,
  {
    id: 4,
    name: "col-start",
  } /* col-start-1,2,3,4,5,6,7,8,9,10,11,12,13, auto */,
  { id: 5, name: "col-end" } /* col-end-1,2,3,4,5,6,7,8,9,10,11,12,13, auto */,

  { id: 6, name: "grid-rows" } /* grid-rows-1,2,3,4,5,6 none */,
  { id: 7, name: "row-auto" } /* Grid Row Start/End */,
  { id: 8, name: "row-span" } /* row-span-1,2,3,4,5,6, full */,
  { id: 9, name: "row-start" } /* row-start-1,2,3,4,5,6,7, auto */,
  { id: 10, name: "row-end" } /* row-end-1,2,3,4,5,6,7, auto */,

  { id: 11, name: "grid-flow-row" },
  { id: 12, name: "grid-flow-col" },
  { id: 13, name: "grid-flow-row-dense" },
  { id: 14, name: "grid-flow-col-dense" },

  {
    id: 15,
    name: "order",
  } /* order-0 ,1,2,3,4,5,6,7,8,9,10,11,12,first,last,none*/,
  { id: 16, name: "auto-cols" } /* auto, min, max, fr */,
  { id: 17, name: "auto-rows" } /* auto, min, max, fr */,
  {
    id: 18,
    name: "gap",
  } /* x-numero(col gap), y-numero(row gap), gap-soloNumero */,
  {
    id: 19,
    name: "justify",
  } /* start, end, center, between, around, evenly (RATIO BUTTON?) */,
  { id: 20, name: "justify-items" } /* start, end, center, stretch */,
  { id: 21, name: "self" } /* auto, start, end, center, stretch, baseline */,
  {
    id: 22,
    name: "place-content",
  } /* center, start, end, between, around, evenly, stretch */,
  { id: 23, name: "place-items" } /* start, end, center, stretch */,
  { id: 24, name: "place-self" } /* auto, start, end, center, stretch */,
];

const layout = [
  /* Layout + Typography + Backgrounds + Borders */
  { id: 1, name: "aspect" } /* auto, square, video */,
  { id: 2, name: "columns" } /* 1,2,3,4,5,6,7,8,9,10,11,12,auto,
    3xs,2xs,xs,md,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl */,
  {
    id: 3,
    name: "break-after",
  } /* auto, avoid, all, avoid-page, page, left, right, column */,
  {
    id: 4,
    name: "break-before",
  } /* auto, avoid, all, avoid-page, page, left, right, column */,
  { id: 5, name: "break-inside" } /* auto, avoid, avoid-page, avoid-column */,
  { id: 6, name: "box-decoration" } /* clone, slice */,
  { id: 7, name: "box" } /* border, content */,
  {
    id: 8,
    name: "display",
  } /* block, inline-block, inline, flex, inline-flex, table,
     [ inline-table, table-caption, table-cell, table-column, table-column-group,
     table-footer-group, table-header-group, table-row-group, table-row], flow-root, grid,
     inline-grid, contents, list-item, none */,
  { id: 9, name: "float" } /* right, left, none */,
  { id: 10, name: "clear" } /* right, left, both, none */,
  { id: 11, name: "isolation" } /* (nulla), none */,
  { id: 12, name: "object" } /* contain, cover, fill, none, scale-down,
     bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top */,
  {
    id: 13,
    name: "overflow",
  } /* auto, hidden, clip, visible, scroll, x-auto, y-auto,
    x-hidden, y-hidden, x-clip, y-clip, x-visible, y-visible, x-scroll, y-scroll */,
  {
    id: 14,
    name: "overscroll",
  } /* auto, contain, none, auto, y-contain, y-none,
     x-contain, x-none */,
  {
    id: 15,
    name: "position",
  } /* (position) static, fixed, absolute, relative, sticky */,
  {
    id: 16,
    name: "inset",
  } /* inset-0, x-0, y-0 , px , x-px , y-px ,0.5,x-0.5,y-0.5, ...,
    (senza inset davanti) top-0,right-0,bottom-0,left-0,top-px,right-px,bottom-px,left-px
    (da 0 a 98 inolre) frazioni, auto, full ---> tipo padding */,
  { id: 17, name: "visible" } /* ratio : visible/invisible */,
  { id: 18, name: "z" } /* z-0, 10, 20, 30, 40, 50, auto */,
];

const typography = [
  /* Text / Font */
  { id: 1, name: "font" } /* (font family) sans, serif, mono */,
  { id: 2, name: "text" } /* (font size) xs,sm,base,lg,xl,2xl,...,9xl */,
  {
    id: 3,
    name: "antialiased",
  } /*(font smoothing) radio: antialiased/subpixel-antialiased */,
  { id: 4, name: "italic" } /* (font style) tadio: italic/non-italic */,
  {
    id: 5,
    name: "font-(weigth)",
  } /* (font weight) thin, extralight, light, normal, medium, semibold, bold, extrabold, black */,
  { id: 6, name: "numeric" } /* (font variant numeric) ... */,
  {
    id: 7,
    name: "tracking",
  } /* (letter spacing) tracking-tighter, tight, normal, wide, wider, widest */,
  {
    id: 8,
    name: "leading",
  } /* (line height) 3,4,5,6,7,8,9,10,none, tight, snug, normal, relaxed, loose */,
  {
    id: 9,
    name: "list",
  } /* (list style type) none,disc,decimal,  (list style position) inside,outside, */,
  {
    id: 10,
    name: "text(alignment)",
  } /* (text alignment) text-left, center, right, justify */,
  {
    id: 11,
    name: "text(color)",
  } /* (text color) text-inherit, current, transparent, black, white,
    slate-50/100/200/... , gray-50/100/200/.../900 per tutti i colori disponibili */,

  {
    id: 12,
    name: "decoration",
  } /* (text decoration) underline, overline, line-through, no-underline */,
  {
    id: 13,
    name: "decoration(color)",
  } /* (text decoration color) decoration-inherit, current, transparent, black, white,
    slate-50/100/200/... , gray-50/100/200/.../900 per tutti i colori disponibili */,
  {
    id: 14,
    name: "decoration(style)",
  } /* (text decoration style) decoration-solid, double, dotted, dashed, wavy */,
  {
    id: 15,
    name: "decoration(thickness)",
  } /* (text decoration thickness) decoration-auto, from-font, 0,1,2,4,8 */,

  {
    id: 16,
    name: "underline",
  } /* (text underline offset) underline-offset-auto, 0,1,2,4,8 */,
  {
    id: 17,
    name: "transform",
  } /* (text transform) uppercase, lowercase, capitalize, normal-case */,
  {
    id: 18,
    name: "overflow",
  } /* (text overflow) truncate, text-ellipsis, text-clip */,
  {
    id: 19,
    name: "indent",
  } /* (Text Indent) indent-0 , px , 0.5 , 1 , 1.5 ,... , 96 */,
  {
    id: 20,
    name: "align",
  } /* (Vertical Alignment) align-baseline, top, middle, bottom, text-top, text-bottom, sub, super */,
  {
    id: 21,
    name: "whitespace",
  } /* whitespace-normal, nowrap, pre, pre-line, pre-wrap */,
  { id: 22, name: "break" } /* (Word Break) break-normal, words, all */,
  { id: 23, name: "content" } /* content-none */,
];

const background = [
  { id: 1, name: "bg" } /* (background attachment) bg-fixed/local/scroll */,
  {
    id: 2,
    name: "bg-clip",
  } /* (Background Clip) bg-clip-border/padding/content/text */,
  { id: 3, name: "nome" } /*(Background Color) */,
  { id: 4, name: "nome" },
  { id: 5, name: "nome" },
  { id: 6, name: "nome" },
];

const sizing = [
  /* Width + Height */ { id: 1, name: "s1" },
  { id: 2, name: "s2" },
  { id: 3, name: "s3" },
];

const altro = [
  { id: 1, name: "qualcosa1" },
  { id: 2, name: "qualcosa2" },
  { id: 3, name: "qualcosa3" },
  { id: 4, name: "qualcosa4" },
];

export function ClassesHandler(classe) {
  const [details, setDetails] = useState([]);
  let newarrayvalues = [];
  {
    /* funzione che gestisce il passaggio dei dettagli
    usando la classe passata nei parametri --> switch sulla CLASSE */
  }
  switch (classe) {
    case "Padding":
      newarrayvalues = padding;
      break;
    case "Margin":
      newarrayvalues = margin;
      break;
    case "Flex":
      newarrayvalues = flex;
      break;
    case "Grid":
      newarrayvalues = grid;
      break;
    case "Layout":
      newarrayvalues = layout;
      break;
    case "Sizing":
      newarrayvalues = sizing;
      break;
    default:
      newarrayvalues = altro;
      break;
  }

  setDetails((details) => [...details, newarrayvalues]);

  return (
    <div>
      <div>
        {details.map((singoloDettaglio) => (
          <div>
            {/* Qui dovremmo prendere spunto da CheckBoxList */}
            {singoloDettaglio.name} -
          </div>
        ))}
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-gray-900">
          Seleziona e Personalizza i campi che ti interessano
        </legend>
        <div className="mt-4 pr-8 border-t border-b border-gray-200 divide-y divide-gray-200">
          {details.map((voce, voceIdx) => (
            <div key={voceIdx} className="relative flex items-center py-4">
              <div className="mr-3 flex  h-5">
                <input
                  id={voce.id}
                  name={voceIdx.id}
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={voce.id}
                  className="font-medium text-gray-700 select-none"
                >
                  {voce.name} -
                </label>
                <input
                  className="appearance-none w-1/6 ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="value-px"
                  type="text"
                  placeholder="24"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
