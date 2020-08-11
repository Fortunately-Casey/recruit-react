import {
    createGlobalStyle
} from 'styled-components';
import PingFang from './PingFang.ttf'

export const GlobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  html,body {
      width: 100%;
      height: 100%;
  }
  /*自定义字体*/
  @font-face {
    font-family: "pingfang";
    src: url(${PingFang}) format("trueType");
    font-weight: normal;
    font-size: normal;
  }
  #root {
    height: 100%;
    font-family: "pingfang", Avenir, Helvetica, Arial, sans-serif!important;
    font-size:14px;
  }
  .ant-spin-nested-loading {
    height: 100%!important;
  }
  .ant-spin-blur{
    height: 100%!important;
  }
  .ant-spin-container {
    height: 100%!important;
  }
  /*滚动条样式 */
  ::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 0;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #b8b8b8;
    -webkit-border-radius: 6px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
  }
  ::-webkit-scrollbar-thumb:hover {
    height: 50px;
    background-color: #878987;
    -webkit-border-radius: 6px;
  }
  `