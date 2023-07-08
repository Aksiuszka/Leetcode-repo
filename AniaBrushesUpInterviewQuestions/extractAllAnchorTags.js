// Given a HTML string, write a function to extract the anchor <a/> tag from it.

// extract(`
// <div>
//     <a>link1< / a><a href="https://bfe.dev">link1< / a>
//     <div<abbr>bfe</abbr>div>
//     <div>
// <abbr>bfe</abbr><a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  class="i">i</span>   nk2   </a>
//     </div>
// </div>
// `)

// [
//    '<a>link1< / a>',
//    '<a href="https://bfe.dev">link1< / a>',
//    '<a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  //class="i">i</span>   nk2   </a>'
//]

function extract(str) {
  const regex = /<a(\s[^>]*)?>.*?<\s*\/\s*a>/g;
  return str.match(regex) || [];
}
