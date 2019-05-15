import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  list = [
    {
      name: 'anaglyph',
      code: `text-shadow: -0.06em 0 red, 0.06em 0 cyan;
      `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: 'brick-sign',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/brick-sign.png);
      color: #600;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'canvas-print',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/canvas-print.png);
      color: #776d63;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'crackle',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/crackle.png);
      color: #963;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'decaying',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/decaying.png);
      color: #958e75;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'destruction',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/destruction.png);
      color: #000;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'distressed',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distress-light.png);
      color: #306;
      `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'distressed-wood',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distressed-wood.png);
      color: #4d2e0d;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'emboss',
      code: `text-shadow: 0px 1px 1px #fff, 0 -1px 1px #000;
      color: #ddd;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'fire',
      code: `text-shadow: 0 -0.05em 0.2em #FFF,
        0.01em -0.02em 0.15em #FE0, 0.01em -0.05em 0.15em #FC0,
      0.02em -0.15em 0.2em #F90,
      0.04em -0.2em 0.3em #F70,
      0.05em -0.25em 0.4em #F70,
      0.06em -0.2em 0.9em #F50,
      0.1em -0.1em 1em #F40;
      color: #ffe;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'fragile',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/fragile.png);
      color: #663;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'grass',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/grass.png);
      color: #390;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'ice',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/ice.png);
      color: #0cf;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'mitosis',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/mitosis.png);
      color: #600;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'neon',
      code: `text-shadow: 0 0 0.1em #fff, 0 0 0.2em #fff, 0 0 0.3em #fff, 0 0 0.4em #f7f, 0 0 0.6em #f0f, 0 0 0.8em #f0f, 0 0 1em #f0f, 0 0 1.2em #f0f;
      color: #fff;
        `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: 'outline',
      code: `text-shadow: 0 1px 1px #000, 0 -1px 1px #000, 1px 0 1px #000, -1px 0 1px #000;
      color: #fff;
        `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: 'putting-green',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'scuffed-steel',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'shadow-multiple',
      code: `text-shadow: 0.04em 0.04em 0 #fff, 0.08em 0.08em 0 #aaa;
      -webkit-text-shadow: .04em .04em 0 #fff, .08em .08em 0 #aaa;
        `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: 'splintered',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'static',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'stonewash',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: '3d',
      title: 'Three Dimensional',
      background: '#ebebeb',
      code: `text-shadow: 0px 1px 0px #c7c8ca, 0px 2px 0px #b1b3b6, 0px 3px 0px #9d9fa2, 0px 4px 0px #8a8c8e, 0px 5px 0px #77787b, 0px 6px 0px #636466, 0px 7px 0px #4d4d4f, 0px 8px 7px #001135;
      color: #fff;
        `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: '3d-float',
      title: 'Three Dimensional Float',
      background: '#ebebeb',
      code: `text-shadow: 0 0.032em 0 #b0b0b0, 0px 0.15em 0.11em rgba(0,0,0,0.15), 0px 0.25em 0.021em rgba(0,0,0,0.1), 0px 0.32em 0.32em rgba(0,0,0,0.1);
      color: #fff;
        `,
      type: 'text-shadow',
      source: 'google fonts',
      tags: ['google-fonts', 'text-shadow']
    },
    {
      name: 'vintage',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distress-medium.png);
      color: #db8;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    },
    {
      name: 'wallpaper',
      code: `-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);
        color: #9c7;
        `,
      type: 'mask-image',
      source: 'google fonts',
      tags: ['google-fonts', 'mask-image']
    }
  ];

  constructor() { }

}
