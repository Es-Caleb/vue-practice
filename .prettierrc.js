module.exports = {
  printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: true, //在语句末尾添加分号，默认为true
  singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  // 行尾逗号,默认es5,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: "none",
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: false,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: "avoid"
};
{
}
